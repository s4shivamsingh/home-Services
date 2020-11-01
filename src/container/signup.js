import React , {Component} from 'react';
import '../css/signup.css';


class SignupForm extends React.Component {

    constructor(props){
        super(props);

        this.state={
            isDisable:true
        }
    }

    ValidateEmail(email){
        const pattern =/[a-zA-Z0-9]+[/.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if(result===true){
            this.setState({
                emailErorr:false,
                email:email
            })
        }
        else{
            this.setState({
                emailErorr:true
            })
        }
    }
    
    handleChange(e){
  const target = e.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
  if(e.target.name==='name'){
    if(e.target.value==='' || e.target.value===null ){
      this.setState({
        nameError:true
      })
    } else {
      this.setState({
        nameError:false,     
        name:e.target.value
      })
    }
  }
  
  if(e.target.name==='email'){
   this.validateEmail(e.target.value);
  }
  if(e.target.name==='password'){
    if(e.target.value==='' || e.target.value===null){
      this.setState({
        passwordError:true
      })
    } if(e.target.value.length<8){
        this.setState({
            passwordError:true
        })
        } else{
      this.setState({
        passwordError:false,
        password:e.target.value
      })
    }
 }
 if(e.target.name==='password2'){
     if(e.target.value==="" || e.target.value===null || e.target.value!=='password'){
         this.setState({
             password2Error:true
         })
     }else{
         this.setState({
             password2Error:false,
             passwoed2:e.target.value
         })
     }
 }
 if(this.state.nameError===false  && this.state.emailError===false &&
  this.state.passwordError===false && this.state.password2Error===false){
    this.setState({
      isDisabled:false
    })
 }
}
submitForm(e){
  e.preventDefault();
  const data = {
   name: this.state.name,
   
   email: this.state.email,
   password: this.state.password,
   password2: this.state.passwoed2
  }
//   sendFormData(data).then(res=>{
//     if(res.status===200){
//       alert(res.data);
//       this.props.history.push('/');
//     }else{

//     } 
//   });
 }

 showPassword() {
     var x=document.getElementById('password');
     if(x.type==="password"){
         x.type='text';
     }
     else{
         x.type="password";
     }
 }
  render(){
  return (
    <div className="loginForm">
             <div id="container"> 
          <div>
            <header>
                <a className="signup" href="login.html">
                    Login
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
                        <p>HomeServices is a platform which connects you to your important household needs i.e providing you with labours of every field-work be it an electrician, a plumber, a carpenter etc and also maids for your daily cleanliness purposes.HomeServices also provides you the facility to book for yourself a cook who will daily cook dishes for your family when you will be working.</p>
                    </div>
                    <span className="border"></span>
                    <form className="contact100-form" >
                        <span className="contact100-form-title">
                           Sign Up
                        </span>
    
                        <div className="wrap-input100">
                            <input className="input100" 
                            type="text" name="name" 
                            required placeholder="Name"
                            onChange={(e)=>{this.handleChange(e)}}/>
                            {this.state.nameError ? <span style={{color:"red"}}>Please Enter the name</span> : ""}
                            
                            <span className="focus-input100" ></span>
                            <span className="symbol-input100">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </div>
    
                        <div className="wrap-input100">
                            <input class="input100"
                             type="email" 
                             name="Email" 
                             required placeholder="Email"
                             onChange={(e)=>{this.handleChange(e)}}/>
                            {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
                             
                             <span class="focus-input100" ></span>
                            <span class="symbol-input100">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
                      
                       <div class="wrap-input100">
                            <input class="input100"
                             id="password"
                             type="password"
                             name="password"
                             required placeholder="Password"
                             onChange={(e)=>{this.handleChange(e)}}/>
                            {this.state.passwordError ? <span style={{color: "red"}}>Please enter the password</span> : ''}
                             <input type='checkbox' onclick={this.showPassword()}/>Show Password
                            <span class="focus-input100" ></span>
                            <span class="symbol-input100">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <span>
                                <i class="fa fa-eye" id="view_pass" aria-hidden="true" 
                                    onclick="toggle1()">
                                </i>
                            </span>
                        </div>

                        <div className="wrap-input100">
                            <input className="input100"
                             id="password2"
                             type="password" 
                             name="password2" required 
                             placeholder="Confirm Password"
                             onChange={(e)=>{this.handleChange(e)}}/>
                             {this.state.password2Error ? <span style={{color: "red"}}>Password not matched</span> : ''}
                            <span className="focus-input100" ></span>
                            <span className="symbol-input100">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </span>

                            <span>
                                <i class="fa fa-check" id="check_pass" aria-hidden="true">
                                </i>
                            </span>

                            
                        </div>
                       
                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn" disabled={this.state.isDisabled} onClick={this.submitForm}>
                                Sign Up
                            </button>
                        </div>
                      <p style= {{align:'center'}}>Already having an Account? <a href="#"> Login Now!</a></p>
                    </form>
                </div>
              <div class="colorlibcopy-agile">
			<p>© 2020 HomeServices SignUp Form All Rights Reserved </p>
		</div>
            </div>
        </div>
    
    </div>

   
    </div>
  );
}
}

export default SignupForm;
