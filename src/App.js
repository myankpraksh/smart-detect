import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from "./components/Rank/Rank";
import Background from "./components/Background/Background";




class App extends Component {

  constructor(){
    super();
    this.state = {
      link : ""
    }
  }

  onLinkChange = (event)=>{
    this.setState({link : event.target.value});
  };

  linkButtonPressed = (event) =>{
    // apps.models.predict("ah63h29f2ddfhbh9b367e318f69e528b",this.state.link).then(
    //   function(response){

    //   },
    //   function(error){

    //   }
    // );
  } ;
  render() {
    return (
      <div>
        <Background />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onLinkChange={this.onLinkChange} linkButtonPressed={this.linkButtonPressed}/>
      </div>
    );
  }
}

export default App;
