import Flight from '../Flight/Flight'
import './FlightTime.css'
import Location from '../Location/Location'
export default function get_flight_time(props){
    console.log(props)
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric' };
    const origin={
        country:' USD',
        city:' San Francisco ,',
        img_url:'San_Francisco.jpg'
     }
     const destination={
        country:' UK ',
        city:'London ,',
        time:new Date(2023,2,12,12,50),
        img_url:'London.jpeg'
     }
    return (
        <div className='warper'>
        
        <div className='container'>
        <div className="element1">
        <Location  country_o={origin.country} city_o={origin.city} img_url_o={origin.img_url}/>
        <p className="caption"> {(props.time).toLocaleDateString("en-US", options)} {props.extra_days > 0 ? `(+${props.extra_days})` : ''}</p>
        </div>
        
        <div >
         <img className='element2' alt='arrow' src="right-arrow.png"></img>
        <div className="element3">
        <Flight country_d={destination.country} city_d={destination.city} img_url_d={destination.img_url}/>
        <p className="caption"> {(destination.time).toLocaleDateString("en-US", options)} {props.extra_days > 0 ? `(+${props.extra_days})` : ''}</p>
        </div>
        
      
        </div>
        
        </div>
        </div>
    )
}