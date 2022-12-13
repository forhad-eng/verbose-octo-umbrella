import axios from 'axios'
import { format } from "date-fns"
import { useEffect, useState } from "react"
import { DateRange } from "react-date-range"
import { useLocation } from "react-router-dom"
import Header from "../ParkingHeader/Header"
import SearchItem from "../searchItem.js"
import "./list.css"


const List = () => {
  const location = useLocation();
  const [destination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [matchedAreas, setMatchedAreas] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    const getRelevantSearchArea = async () => {
      setDataLoading(true)
        const {data} = await axios.get(`http://localhost:9000/api/parking/AllParkings/${destination}?min=${min}&&max=${max}`)
        if(data.length){
          setMatchedAreas(data)
          setDataLoading(false)
        }else{
          setMatchedAreas([])
          setDataLoading(false)
        }
  }
  getRelevantSearchArea()
  },[destination, min, max])

  return (
    <div>
   
    <Header type="list" />
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder={destination} type="text" />
          </div>
            <div className="lsItem">
            <label>Check-in Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(
              dates[0].startDate,
              "MM/dd/yyyy"
            )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && (
              <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />
            )}
          </div>  
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input
                  type="number"
                  onChange={(e) => setMax(e.target.value)}
                  className="lsOptionInput"
                />
              </div>
            
             
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          {/* <button onClick={handleClick}>Search</button> */}
        </div>
        <div className="listResult">
          {dataLoading ? (
            'Loading...'
          ) : (
            <>
              {matchedAreas.length > 0 ? matchedAreas.map((item) => (
                <SearchItem item={item} key={item._id} />
              )) : <h3 className="mt-12 text-2xl text-center text-red-600 font-semibold">No Parking Area Found!</h3>}
            </>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default List;