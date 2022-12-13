


import { Route, Routes } from "react-router-dom"

import Register from './Pages/Auth/Register.js'
import Navbar from './Shared/Navbar'

import ChangePassword from './Pages/Auth/ChangePassword'
import ForgetPassword from './Pages/Auth/ForgotPassword'

import Contact from './Pages/Contact'

import AllUsers from "../src/AllParking/AllUsers/AllUsers"
import Login from "../src/Pages/Login/Login"
import List from "../src/ParkingSlot/ParkingList/List"
import NewHotel from "./AllParking/newParking/NewParking"
import NewRoom from "./AllParking/NewRoom/NewRoom"
import Parking from './AllParking/Parking/Parking'
import Home from './Pages/Home/Home'

import AllParkingSpace from "./AllParking/AllParkingSpace/AllParkingSpace"

import AllParkingSlot from "./AllParking/AllParkingSlot/AllParkingSlot"
import MakeAdmin from "./AllParking/MakeAdmin/MakeAdmin"
import StripePayment from "./AllParking/Pay/StripePayment "
import CustomerReview from "./CustomerReview/CustomerReview"
import Booking from "./Dashboard/Booking.js"
import Dashboard from "./Dashboard/Dashboard.js"
import About from "./Pages/About"
import Services from "./Pages/Services"


function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/addParking" element={<NewHotel/>}/>
            
            <Route path="/Parking" element={<List/>}/>
            <Route path="/Parking/:id" element={<Parking/>}/>
            <Route path="/pay" element={<StripePayment/>}/>
            {/*  <Route path="/map" element={<Map/>}/> */}
            <Route path="/review" element={<CustomerReview/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
              <Route index element={<Booking/>}/>
              <Route path="bookings" element={<Booking/>}/>
            </Route>
            <Route path="/newParkingSpace" element={<NewRoom/>}/>
            <Route path="/user" element={<AllUsers/>}/>
            <Route path="/review" element={<CustomerReview/>}/>
            <Route path="/AllParking" element={<AllParkingSpace/>}/>
            <Route path="/AllParkingSlot" element={<AllParkingSlot/>}/>
            <Route path="/makeAdmin" element={<MakeAdmin/>}/>
            <Route path="/reset-password" element={<ForgetPassword/>}/>
            <Route path="/user/reset/:id/:token" element={<ChangePassword />} />    
      </Routes>           
    </div>
  );
}

export default App;
