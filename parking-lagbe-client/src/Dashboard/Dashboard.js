import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../Context/Context'

const Dashboard = () => {
    const [state]= useContext(UserContext) 
     
    return (
        <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          <h2 className="my-3 text-3xl text-center font-bold text-purple-500">My Dashboard</h2>
          <Outlet/>
        </div>
        <div className="drawer-side">
          <label for="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {state.isUser.isAdmin !==true ?(   <>
            <li>
              <Link to="/dashboard/bookings">My Bookings</Link>
            </li>
            <li>
              <Link to="/review">My Review</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
            </>
            ):(
             <>
              <li>
              <Link to="/newParkingSpace">New Parking Space</Link>
            </li>
            <li>
              <Link to="/user">All User</Link>
            </li>
              <li>
              <Link to="/AllParking">ALL Parking </Link>
            </li>
              <li>  
              <Link to="/AllParkingSlot">All ParkingSlot</Link>
            </li>
            <li>  
              <Link to="/makeAdmin">Make Admin</Link>
            </li>
            </>
            )}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;