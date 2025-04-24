import React,{useState} from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import userImg from '../../src/assets/user.png';


const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
  const [userPic,setUserPic]=useState(userImg);
  const [navbarModel,setNavbarModel]=useState(false);
  const handClickModel=()=>{
    setNavbarModel(!navbarModel);
  }
  const sideNavbarFunc=()=>{
    setSideNavbarFunc(!sideNavbar)
  }
  return (
    <div className='navbar'>

      <div className='navbar-left'>
        <div className='navbarhamburger' onClick={sideNavbarFunc}>
          <MenuIcon sx={{color:'white'}}/>
        </div>
        <div className='navbar_youtubeImg'>
          <YouTubeIcon sx={{fontSize:'34px'}} className='navbar_youtubeImage'/>
          <div className='navbar_utubeTitle'>youtube</div>
        </div>
      </div>

      <div className='navbar-middle'>
        <div className="navbar_searchBox">
          <input type="text" placeholder='Search' className='navbar_searchBoxInput'/>
          <div className="navbar_searchIcon"><SearchIcon sx={{color:'white' , fontSize:'28px'}}/></div>
        </div>
        <div className="navbar_mic">
            <KeyboardVoiceIcon sx={{color:'white' , fontSize:'28px'}}/>
        </div>        
      </div>

      <div className="navbar-right">
        <VideoCallIcon sx={{color:'white',fontSize:'30px',cursor:'pointer'}}/>
        <NotificationsIcon sx={{color:'white',fontSize:'30px',cursor:'pointer'}}/>
        <img onClick={handClickModel} src={userPic} alt="user" className='navbar_userPic'/>

        {navbarModel && 
          <div className="navbar-model">
            <div className="navbar-model-option">Profile</div>
            <div className="navbar-model-option">Logout</div>
            <div className="navbar-model-option">Login</div>
          </div>  }      
      </div>
    </div>
  )
}

export default Navbar
