import React from 'react'
import './Header.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
function Header() {
  return (
    <div>
      <div className="navbar m-3 ">
      <div className="wrapper">
        <h2 className='text-dark'> <img src="https://freepngimg.com/download/phoenix/8-2-phoenix-png.png" width={'50px'} alt="" /> PhoeniX</h2>
        <div className="search">
          <input type="text m-5 " placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <FullscreenExitOutlinedIcon/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon/>
          </div>
          <div className="item">
            <img src="https://th.bing.com/th/id/OIP.7IEe5sia-ECk5bd_MeAM_wAAAA?rs=1&pid=ImgDetMain"alt=""className="avatar"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header