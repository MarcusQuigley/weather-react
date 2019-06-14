import React from 'react';

const getSeason = (lat, month)=>
{
   
    if (month > 2 && month < 9){
        return (lat>0) ? 'summer' : 'winter';
    } else{
        return (lat>0) ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth())
    const message = season === 'winter' ?'Burr, its chilly': 'Lets hit the beach';
    return (
       
        <div>
            <h1>{ message}</h1>
        </div>
    );
};

// class SeasonDisplay extends React.Component{

//     // constructor (props){
//     //     super(props);
//     //     //this.setState("lat" = 33)
//     // }

//     render(props) {
        
//            return<div>Latitude: {props.latss}</div>
        
//     }
// }

export default SeasonDisplay;
