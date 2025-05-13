import React, { useRef } from 'react'
import './signUp.css'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {Link} from 'react-router-dom'
import user from '../../src/assets/user.png'
import { useState } from 'react'
import axios from 'axios'

const signUp = () => {
    const [userPic,setUserPic]=useState(user);
    const [signUpField,setSignUpField] = useState({'channelName':'','userName':'','password':'','aboutChannel':'','profilePic':userPic})
    
    const handleOnChange=(event,name)=>{
        setSignUpField({...signUpField,[name]:event.target.value})
    }
    
    const uploadImage= async(e)=>{
        const files=e.target.files;
        const data = new FormData();
        data.append('file',files[0])
        data.append('upload_preset','youtube_clone')
        try{
            const response=await axios.post('https://api.cloudinary.com/v1_1/duacs6knw/image/upload',data)
            const globalPic=response.data.url
            setUserPic(globalPic)
            setSignUpField({...signUpField,'profilePic':globalPic})

        }catch(err){
            console.log(err)
        }
    }
    console.log(signUpField)
    return (
        <div className='signUp'>
        <div className="signUpCard">
            <div className="signUpTitle">
            <YouTubeIcon sx={{fontSize:'54px' , color: 'red'}} />
            SignUp
            </div>
            <div className="signUpForm">
            <input type="text" placeholder='Channel Name' value={signUpField.channelName} onChange={(e)=>handleOnChange(e,'channelName')} className="signUpFormInput" />
            <input type="text" placeholder='User Name' value={signUpField.userName} onChange={(e)=>handleOnChange(e,'userName')} className="signUpFormInput" />
            <input type="Password" placeholder='Password' value={signUpField.password} onChange={(e)=>handleOnChange(e,'password')} className="signUpFormInput" />
            <input type="text" placeholder='About Your Channel' value={signUpField.aboutChannel} onChange={(e)=>handleOnChange(e,'aboutChannel')} className="signUpFormInput" />

            <div className="imageDiv">
                <div>Profile Photo<input type="file" accept='image/*' onChange={(e)=>uploadImage(e)}/></div>
                <div className="signUpPhoto">
                    <img src={userPic}  alt="Profile Photo" className='signUpImage' />
                </div>
            </div>
            </div>
            <div className="signUpBtns">
                <div className="signUpBtn-form">SignUp</div>
                <Link to='/'className="signUpBtn-form">Home</Link>
            </div>
        </div>
        </div>
    )
}

export default signUp
