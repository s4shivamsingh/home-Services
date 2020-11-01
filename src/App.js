import React,{Component} from 'react';
import './App.css';
import SignupForm from './container/signup'
//import LoginForm from './component/login'


class App extends Component{
  
  render(){
    return(
      <div className='App'>
      
        <SignupForm></SignupForm>
      </div>
    )
  }
}

export default App;
