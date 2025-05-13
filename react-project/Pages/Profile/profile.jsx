import React from 'react'
import './profile.css'
import SideNavbar from '../../Components/sideNavbar/sideNavbar'
import user from '../../src/assets/user.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {Link} from 'react-router-dom'

const profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
        <SideNavbar sideNavbar={sideNavbar}/>
        <div className={sideNavbar?"profilePage":"fullProfilePage"}>

            <div className="topSection">

                <div className="profileSection">
                    <img src={user} alt="" className="profileImage" />
                </div>
                <div className="aboutSection">
                  <div className="profileUsername">
                    CarryMinati
                  </div>
                  <div className="profileInfo">
                    @user1 . 4 Videos
                  </div>
                  <div className="profileInfo">
                    About section of channel
                  </div>
                </div>

            </div>

            <div className="profileVideos">

              <div className="profileVideosTitle">
                Videos &nbsp; <ArrowRightIcon/>
              </div>

              <div className="profile_videos">
                <Link to="/watch/1"className="profileVideo_block">
                  <div className="profileVideo_block_thumbnail">
                    <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="thumbnailProfile" />
                  </div>

                  <div className="profileVideo_block_details">
                    <div className="profileVideo_block_details_name">video title</div>
                    <div className="profileVideo_block_details_info">create at 2025-12-12</div>
                  </div>

                </Link>

                <Link to="/watch/1"className="profileVideo_block">
                  <div className="profileVideo_block_thumbnail">
                    <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="thumbnailProfile" />
                  </div>

                  <div className="profileVideo_block_details">
                    <div className="profileVideo_block_details_name">video title</div>
                    <div className="profileVideo_block_details_info">create at 2025-12-12</div>
                  </div>

                </Link>

                <Link to="/watch/1"className="profileVideo_block">
                  <div className="profileVideo_block_thumbnail">
                    <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="thumbnailProfile" />
                  </div>

                  <div className="profileVideo_block_details">
                    <div className="profileVideo_block_details_name">video title</div>
                    <div className="profileVideo_block_details_info">create at 2025-12-12</div>
                  </div>

                </Link>

              </div>

            </div>
        </div>
    </div>
  )
}

export default profile
