import React,{useState} from 'react'
import './videoUpload.css'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const videoUpload = () => {
  const [inputField,setInputField]=useState({'title':'','description':'','category':'','thumbnail':'','video':''})
  const [loader,setLoader]=useState(false);
  const handleOnChange=(event,name)=>{
    setInputField({...loginField,[name]:event.target.value})
  }

  const uploadImage= async(e,type)=>{
    setLoader(true);
    const files=e.target.files;
    const data = new FormData();
    data.append('file',files[0])
    data.append('upload_preset','youtube_clone')
    try{
        const response=await axios.post(`https://api.cloudinary.com/v1_1/duacs6knw/${type}/upload`,data)
        const globalPic=response.data.url
        setLoader(false)
        let val=type==='image'?'thumbnail':'video'
        setInputField({...inputField,[val]:globalPic})
        
      }catch(err){
        setLoader(false)
        console.log(err)
      }
    }
    console.log(inputField)
  return (
    <div className='videoUpload'>
      <div className="uploadBox">
        <div className="uploadVideoTitle">
          <YouTubeIcon sx={{fontSize:'54px' , color: 'red'}} />
          Upload Video
        </div>
        <div className="uploadForm">
          <input type="text" value={inputField.title} placeholder='Title of the Video' onChange={(e)=>handleOnChange(e,'title')} className="uploadFormInput" />
          <input type="text" value={inputField.description} placeholder='Description' onChange={(e)=>handleOnChange(e,'description')} className="uploadFormInput" />
          <input type="text" value={inputField.category} placeholder='Category' onChange={(e)=>handleOnChange(e,'category')} className="uploadFormInput" />
          <div>Thumbnail<input type="file" accept='image/*' onChange={(e)=>uploadImage(e,'image')}/></div>
          <div>Video<input type="file" accept='video/mp4,video/webm, video/*' onChange={(e)=>uploadImage(e,'video')} /></div>
          {
            loader && 
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
          }
        </div>
        
        <div className="uploadBtns">
          <div className="uploadBtn-form">Upload</div>
          <Link to='/'className="uploadBtn-form">Home</Link>
        </div>
      </div>
    </div>
  )
}

export default videoUpload
