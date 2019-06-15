import './SeasonDisplay.css';
import React from 'react';

const seasonConfig={
    summer:{text:'Lets hit the beach', iconName:'sun'},
    winter:{text:'Burr, its chilly', iconName:'snowflake'}
}

const getSeason = (lat, month)=>
{
   
    if (month > 2 && month < 9){
        return (lat>0) ? 'summer' : 'winter';
    } else{
        return (lat>0) ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
 
    return (
       
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{ text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
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
