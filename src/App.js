import React, { Component } from 'react';
import './App.css';

let defaultPadding = '10px';

class AppHeader extends Component{  
  render(){
    let headerStyle= {padding:defaultPadding, display:'flex', direction:'column', background:'#e3e3e3'};
    return (
      <div style={headerStyle}>
        <h3>Workout Bounty</h3>
      </div>
    );
  }
}

class SideBar extends Component{
  render(){
    let sideBarStyle = { display:'flex', direction:'row',background:'#e3e3e3',width:'20%',height:'100vh'}
    return(
      <div style={sideBarStyle}>
        <ul className="sideBar" style={{'list-style':'none'}}>
          <li className="active"><a href="#home">Home</a></li>
          <li><a href="#home">News</a></li>
          <li><a href="#home">Wallet</a></li>
          <li><a href="#home">Account</a></li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <SideBar/>
      </div>
    );
  }
}

export default App;
