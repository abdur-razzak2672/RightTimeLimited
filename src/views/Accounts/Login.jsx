import React from 'react'
import './login.css'
function Login() {
  return (
    <div style={{backgroundColor:"#b6b8bb"}}>
        <div class=" flex-r container pt-5">
    <div class="flex-r login-wrapper">
      <div class="login-text">
        <div class="logo d-flex justify-content-center">
        <a href="/">
              <img
                src="/assets/images/images-removebg-preview.png"
                width="70"
                height="62"
                alt="Cretech"
              />
            </a>        
            <h4 className='mt-3 mx-2 text-light'>Right Time User Login</h4>

        </div>
        <p className='text-light'>Task Forces, SIGs & Boards.</p>

        <form class="flex-c">
          <div class="input-box">
            <span class="label">E-mail</span>
            <div class=" flex-r input">
              <input type="text" placeholder="name@abc.com"/>
              <i class="fas fa-user"></i>
            </div>
          </div>

          <div class="input-box">
            <span class="label">Password</span>
            <div class="flex-r input">
              <input type="password" placeholder="8+ (a, A, 1, #)"/>
              <i class="fas fa-lock"></i>
            </div>
          </div>
          <button style={{backgroundColor:"orange"}} className='btn  text-light w-100'>Login</button>
           <span class="extra-line">
            <span>Forgot your password?</span>
           </span>
           <div className='d-flex px-5 mx-5 justify-content-center'>
           <select className='p-2 rounded' style={{width:"120px"}}>
            <option value="1">Empoyee</option>
            <option value="2">Staff</option>
          </select>
        

           </div>
          



          <span class="extra-line">
            <span>Are you an employee?</span>
            <a href="#">Login Here</a>
          </span>
        </form>

      </div>
    </div>
  </div><br/> <br/> <br/><br/><br/><br/><br/>
    </div>
  )
}

export default Login