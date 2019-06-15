import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import LoadingDisplay from './LoadingDisplay';
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {lat:null, error:null};
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({error:err.message})
        );
    }
  
    render( ) {
        if(this.state.error && !this.state.lat){
            return<div>Error: {this.state.error}</div>
        }
        if(this.state.lat && !this.state.error){
            return <SeasonDisplay lat={this.state.lat}/>        }
       return <LoadingDisplay display="Retrieving Geolocation"/>
   }
}

export default App;
