import React from 'react'
import './Sidebar.css'
import Dashbord from '../components/Dashbord'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Baselayout from './Baselayout';

function Sidebar() {
  return (
    <div className='row'>
      {/* sidebar */}
      <div className='col-2'>
      <div className="sidebar">
      <div className="top">
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">HOME</p>
          <li>
            <DashboardIcon/>
            <span>Dashboard</span>
            
          </li>
          <p className="title">ADMIN</p>
            <li>
              <PersonOutlineIcon />
              <span>Add product</span>
            </li>
            <li>
              <StoreIcon />
              <span>Products</span>
            </li>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon />
            <span>Profile</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
      </div>
    </div>
      </div>
{/* dashbord */}
      <div className='col-4'>
        <Dashbord/>
      </div>
      {/* dashbord2 */}
      <div className='col-4' >
       <Baselayout/>
        </div>
    </div>
  )
}

export default Sidebar