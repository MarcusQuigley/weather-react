import React from 'react';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {lat:null, error:null};
    }

    season = ()=>  new Date().getMonth();
 

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({error:err.message})
        );
    }
   
    // render() {
    //     return (
    //         <div>
    //             <SeasonDisplay lat={this.state.lat} error={this.state.error}/>
    //         </div>
    //     )
    // }

    componentDidUpdate(){
    //     if(this.state.error && !this.state.lat){
    //         return<div>Error: {this.state.error}</div>
    //     }
    //     else if(this.state.lat && !this.state.error){
    //        return<div>Latitude: {this.state.lat}</div>
    //    }
    }
    render( ) {
        if(this.state.error && !this.state.lat){
            return<div>Error: {this.state.error}</div>
        }
        if(this.state.lat && !this.state.error){
            return <SeasonDisplay lat={this.state.lat}/>
           //return<div>Latitude: {this.state.lat}</div>
       }
       return <div>Loading..</div>
   }
}

export default App;
