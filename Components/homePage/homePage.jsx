import React from "react";
import "./homePage.css";

const HomePage = ({sideNavbar}) => {
  const options = [
    "All",
    "Gaming",
    "Camping",
    "Comedy",
    "Bike ride",
    "Motovlogs",
    "gta",
    "Bike ride",
    "tech",
    "Gym",
    "Gaming",
    "pc builds",
    "Day in the life",
    "Music",
    "Gaming",
    "Motovlogs",
    "gta",
    "Bike ride",
    "tech",
    "Gym",
    "Gaming",
    "pc builds",
  ];

  return (
    <div className={sideNavbar?"homePage":"fullHomePage"}>

      <div className='homePage_options'>
        {options.map((item, index) => {
          return <div key={index} className="homepage_option"> {item}</div>;
        })}
      </div>

      <div className={sideNavbar?"home_mainPage":"home_mainPageFull"}>
        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/NnP-i0XA0pc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnENtpYTMCRMl9W39brNYsAldESQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_thumbnailTiming">28:25</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/_WgSxpjqDssIZ7AZHGD2RQJDGTjyyxDkDo1Qhw_eljNvqu_Ylxt3O6lvoUILJAStp3CePKzN5Q=s68-c-k-c0x00ffffff-no-rj" alt="Profile" className="youtubeTitleBoxProfileImg" />
            </div>

            <div className="youtubeTitleBoxInfo">
              <div className="youtubeTitleBoxTitle">4K PUBG Gameplay iPhone 11</div>
              <div className="youtubeTitleBoxChannel">Ozzy</div>
              <div className="youtubeTitleBoxViews">1.2M views</div>
            </div>
          </div>
        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/NnP-i0XA0pc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnENtpYTMCRMl9W39brNYsAldESQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_thumbnailTiming">28:25</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/_WgSxpjqDssIZ7AZHGD2RQJDGTjyyxDkDo1Qhw_eljNvqu_Ylxt3O6lvoUILJAStp3CePKzN5Q=s68-c-k-c0x00ffffff-no-rj" alt="Profile" className="youtubeTitleBoxProfileImg" />
            </div>

            <div className="youtubeTitleBoxInfo">
              <div className="youtubeTitleBoxTitle">4K PUBG Gameplay iPhone 11</div>
              <div className="youtubeTitleBoxChannel">Ozzy</div>
              <div className="youtubeTitleBoxViews">1.2M views</div>
            </div>
          </div>
        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/NnP-i0XA0pc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnENtpYTMCRMl9W39brNYsAldESQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_thumbnailTiming">28:25</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/_WgSxpjqDssIZ7AZHGD2RQJDGTjyyxDkDo1Qhw_eljNvqu_Ylxt3O6lvoUILJAStp3CePKzN5Q=s68-c-k-c0x00ffffff-no-rj" alt="Profile" className="youtubeTitleBoxProfileImg" />
            </div>

            <div className="youtubeTitleBoxInfo">
              <div className="youtubeTitleBoxTitle">4K PUBG Gameplay iPhone 11</div>
              <div className="youtubeTitleBoxChannel">Ozzy</div>
              <div className="youtubeTitleBoxViews">1.2M views</div>
            </div>
          </div>
        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/NnP-i0XA0pc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnENtpYTMCRMl9W39brNYsAldESQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_thumbnailTiming">28:25</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/_WgSxpjqDssIZ7AZHGD2RQJDGTjyyxDkDo1Qhw_eljNvqu_Ylxt3O6lvoUILJAStp3CePKzN5Q=s68-c-k-c0x00ffffff-no-rj" alt="Profile" className="youtubeTitleBoxProfileImg" />
            </div>

            <div className="youtubeTitleBoxInfo">
              <div className="youtubeTitleBoxTitle">4K PUBG Gameplay iPhone 11</div>
              <div className="youtubeTitleBoxChannel">Ozzy</div>
              <div className="youtubeTitleBoxViews">1.2M views</div>
            </div>
          </div>
        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/NnP-i0XA0pc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnENtpYTMCRMl9W39brNYsAldESQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_thumbnailTiming">28:25</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/_WgSxpjqDssIZ7AZHGD2RQJDGTjyyxDkDo1Qhw_eljNvqu_Ylxt3O6lvoUILJAStp3CePKzN5Q=s68-c-k-c0x00ffffff-no-rj" alt="Profile" className="youtubeTitleBoxProfileImg" />
            </div>

            <div className="youtubeTitleBoxInfo">
              <div className="youtubeTitleBoxTitle">4K PUBG Gameplay iPhone 11</div>
              <div className="youtubeTitleBoxChannel">Ozzy</div>
              <div className="youtubeTitleBoxViews">1.2M views</div>
            </div>
          </div>
        </div>

        <div className="youtube_video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/NnP-i0XA0pc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnENtpYTMCRMl9W39brNYsAldESQ" alt="Thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_thumbnailTiming">28:25</div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/_WgSxpjqDssIZ7AZHGD2RQJDGTjyyxDkDo1Qhw_eljNvqu_Ylxt3O6lvoUILJAStp3CePKzN5Q=s68-c-k-c0x00ffffff-no-rj" alt="Profile" className="youtubeTitleBoxProfileImg" />
            </div>

            <div className="youtubeTitleBoxInfo">
              <div className="youtubeTitleBoxTitle">4K PUBG Gameplay iPhone 11</div>
              <div className="youtubeTitleBoxChannel">Ozzy</div>
              <div className="youtubeTitleBoxViews">1.2M views</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
