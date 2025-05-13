import React,{useState} from 'react'
import './login.css'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {Link} from 'react-router-dom'


const login = ({closeModel}) => {
  const [loginField,setLoginField] = useState({'userName':'','password':''})
  const handleOnChange=(event,name)=>{
    setLoginField({...loginField,[name]:event.target.value})
  }
  return (
    <div className='login'>
      <div className="login_card">
        <div className="login_title">
          <YouTubeIcon sx={{fontSize:'54px' , color: 'red'}} />Login
        </div>
        <div className="login_credentials">
            <input type="email" placeholder='Email' value={loginField.userName} onChange={(e)=>handleOnChange(e,'userName')} className="loginFormInput" />
            <input type="password" placeholder='Password' value={loginField.password} onChange={(e)=>handleOnChange(e,'password')} className="loginFormInput" />
        </div>
        <div className="loginBtns">
          <div className="loginBtn-form">Login</div>
          <Link to='/signup' className="loginBtn-form" onClick={()=>closeModel()}>SignUp</Link>
          <div className="loginBtn-form" onClick={()=>closeModel()}>Cancel</div>
        </div>
      </div>
    </div>
  )
}
export default login
