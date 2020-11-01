import React from 'react';
import '../component/css/login.css';

class LoginForm extends React.Component {
  render(){
  return (
            <div id="container"> 
                <div>
                    <header>
                        <a href="sign.html" class="signup">
                            Sign up
                        </a>
                        <h1>HomeServices</h1>
                    </header>
                         <hr></hr>
                    <p>
                        <div className="vertical"></div>
                    </p>
                </div>
                <div className="bg-contact100">
                    <div className="container-contact100">
                        <div className="wrap-contact100">
                            <div className="contact100-pic">
                                <h1>Welcome</h1>
                                <h3>to Home Services</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                            </div>
                            <span className="border"></span>
                            <form className="contact100-form">
                                <span className="contact100-form-title">
                                    Login
                                </span>
            
                                <div className="wrap-input100">
                                    <input className="input100" type="email" name="email"placeholder="Email"
                                             onChange={this.hanleChange} value={this.state.email}></input>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
            
                                <div className="wrap-input100 ">
                                    <input className="input100" id="password" type="password" name="password" placeholder="Password"
                                                value={this.state.password}></input>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-key " aria-hidden="true"></i>  
                                    </span>
                                    <span>
                                        <i className="fa fa-eye" id="view_pass" aria-hidden="true" 
                                        onmousemove="toggle()"></i>
                                    </span>
                                </div>
                                
                                <div className="container-contact100-form-btn">
                                    <button className="contact100-form-btn">Login</button>
                                </div>
                                <div className="forget_pass">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  

            

    )
  }
}

export default LoginForm ;
