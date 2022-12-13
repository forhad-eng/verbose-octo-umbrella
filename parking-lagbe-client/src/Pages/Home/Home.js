
import Featured from "../../AllParking/Featured/Featured"
import PropertyList from "../../AllParking/PropertyList/PropertyList"
import Footer from "../../Footer/Footer"
import Header from "../../ParkingSlot/ParkingHeader/Header"
import About from "../About"
import Contact from "../Contact"
import "./home.css"
import Reviews from "./ReviewSection/Reviews"



const Home = () => {
  return (
    <div>
   
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
      </div>
      
        <About></About>
     <Reviews></Reviews>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Home;