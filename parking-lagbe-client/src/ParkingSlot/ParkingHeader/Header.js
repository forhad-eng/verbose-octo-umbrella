import {
  faBed,
  faCalendarDays,
  faCar,
  faParking,
  faPerson, faTaxi
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { format } from "date-fns"
import { useContext, useState } from "react"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/Context"
import { SearchContext } from "../../Context/SearchContext.js"
import useFetch from "../../hooks/useFetch"
import "./Header.css"
  

  
  const Header = ({ type }) => {
    const { data: allParkingAreas } = useFetch("http://localhost:9000/api/parking/allParkings");
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      sloots: 1,
    });
  
    const navigate = useNavigate();
    const [state,setState]= useContext(UserContext)
    const [matchedAreas, setMatchedAreas] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [selectedAreaName, setSelectedAreaName] = useState('')

    const handleAreaSearch = (srcText) => {
        setSearchText(srcText)
        if(srcText){
          const matchedAreas = allParkingAreas.filter(area => area.name.toLowerCase().includes(srcText.toLowerCase()))
          if(matchedAreas.length){
            setMatchedAreas(matchedAreas)
            setIsModalOpen(true)
          }else{
            setMatchedAreas([])
          }
        }else{
          setMatchedAreas([])
          setIsModalOpen(false)
        }
    }
  
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const { dispatch } = useContext(SearchContext);
  
    const handleSearch = () => {
      dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
      navigate("/Parking", { state: { destination, dates, options } });
    };

  
    return (
        <div className="header">
          <div className={`search-result-container ${isModalOpen && 'modal-open'}`}>
              <div onClick={() => {
                setDestination(searchText)
                setIsModalOpen(false)
              }} className="modal-content">
                {
                  matchedAreas.length > 0 ? matchedAreas.map(area => 
                  <div onClick={() => setSelectedAreaName(area.name)} className="single-searched-area">
                    <img src={area.photos[0]} alt="" />
                    <p>{area.name}</p>
                  </div>) :
                  <h3 className="mt-12 text-2xl text-center text-red-600 font-semibold">No Parking Area Found!</h3>
                }
              </div>
          </div>
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
           <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPerson} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div> 
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
             {/*  {!state && <button className="headerBtn">Sign in / Register</button>} */}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCar} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you parking?"
                    className="headerSearchInput"
                    onChange={e => {
                      handleAreaSearch(e.target.value)
                      setSelectedAreaName(e.target.value)
                    }}
                    value={selectedAreaName}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => isModalOpen || setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faParking} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{` ${options.sloots} sloots`}</span>
                  {openOptions && (
                    <div className="options">
                      
                      
                      <div className="optionItem">
                        <span className="optionText">Parking Slot</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("sloots", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.sloots}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("sloots", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;