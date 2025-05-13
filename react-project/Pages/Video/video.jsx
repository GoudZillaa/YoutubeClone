import React,{useState} from 'react'
import './video.css'
import user from '../../src/assets/user.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import {Link} from 'react-router-dom'

const video = () => {
  const [message,setMessage]=useState('')
  const handleOnChange=(event,name)=>{
    setMessage(event.target.value)
  }
  return (
    <div className='video'>
      <div className="videoPostSection">
        <div className="youtubeVideo">
            <video width='400' controls autoPlay className='videoPlayer'>
                <source src={'https://res.cloudinary.com/mashhuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4'} types='video/mp4'/>
                <source src={'https://res.cloudinary.com/mashhuudanny/video/upload/v1720350210/xo81mxhcvjckkw1tdp62.mp4'} types='video/webm'/>
                Your Browser does not support the video tag.
            </video>
        </div>

        <div className="videoDetails">
          <div className="videoTitle">{'JavaScript for Beginners'}</div>

          <div className="youtube_video_ProfileBlock">
            <div className="youtube_video_ProfileBlock_left">

              <Link to='/user/1' className="youtube_video_ProfileBlock_left_img">
                <img src={user} alt="" className="youtube_video_ProfileBlock_left_image" />
              </Link>

              <div className="youtube_video_subsView">
                <div className="youtubePostProfileName">{'Mashhuu Danny'}</div>
                <div className="youtubePostProfileDate">{'2024-12-12'}</div>
              </div>

              <div className="subscribeBtn">{'Subscribe'}</div>

            </div>

            <div className="youtube_likeBlock">
              <div className="youtube_likeBlock_like">
                <ThumbUpOffAltIcon sx={{color:'white'}} />
                <div className="numberOfLike">{23}</div>
              </div>

              <div className="likeDivider"></div>

              <div className="youtube_likeBlock_like">
                <ThumbDownOffAltIcon sx={{color:'white'}} />
              </div>

            </div>
          </div>

          <div className="videoAbout">
            <div>2024-12-12</div>
            <div>This video is sponsored by Gfuel</div>
          </div>

          <div className="youtube_commentSection">
            <div className="youtube_commentSection_title">2 Comments</div>

            <div className="youtubeSelfComment">
              <img src={user} alt="" className="youtubeSelfCommentImg" />
              <div className="addComment">
                <input type="text" value={message} onChange={(e)=>handleOnChange(e)} placeholder='Add a comment' className="addAcommentInput" />
                <div className="submitBtns">
                  <div className="cancelComment">Cancel</div>
                  <div className="cancelComment">Comment</div>
                </div>
              </div>
            </div>

            <div className="youtubeOthersComments">
              
              <div className="youtubeSelfComment">
                <img src={user} alt="" className="youtubeSelfCommentImg" />
                <div className="others_commentsection">
                  <div className="others_commentsectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentDate">2024-12-12</div>
                  </div>

                  <div className="actualComment">ye toh meri pasand ka code hai</div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img src={user} alt="" className="youtubeSelfCommentImg" />
                <div className="others_commentsection">
                  <div className="others_commentsectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentDate">2024-12-12</div>
                  </div>

                  <div className="actualComment">ye toh meri pasand ka code hai</div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img src={user} alt="" className="youtubeSelfCommentImg" />
                <div className="others_commentsection">
                  <div className="others_commentsectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentDate">2024-12-12</div>
                  </div>

                  <div className="actualComment">ye toh meri pasand ka code hai</div>
                </div>
              </div>

              <div className="youtubeSelfComment">
                <img src={user} alt="" className="youtubeSelfCommentImg" />
                <div className="others_commentsection">
                  <div className="others_commentsectionHeader">
                    <div className="channelName_comment">UserName</div>
                    <div className="commentDate">2024-12-12</div>
                  </div>

                  <div className="actualComment">ye toh meri pasand ka code hai</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="videoSuggestions">

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

        <div className="videoSuggestionsBlock">
          <div className="videoSuggestionThumbnail">
            <img src="https://i.ytimg.com/vi/9Zj4Y4K5Z9s/maxresdefault.jpg" alt="" className="videoThumbnail" />
          </div>
          <div className="videoSuggestionsAbout">
            <div className="suggestionsTitle">Learn to code with the greatest programer!</div>
            <div className="suggestionsChannelName non-focus">best coder</div>
            <div className="suggestionsViewsUploadTime non-focus">1.5k views . 1 day ago</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default video
