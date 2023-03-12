import Seats from '../Seats/Seats';
import './VirginAtlantic.css';
import FlightTime from '../FlightTime/FlightTime'
export default function one_flight(){
    
    const flight_num='VS20'
    const origin={
      
       time:new Date(2023,2,11,18,35),
       
    }

    return ( 
    <div className='frame'>
    <h1 className='center'>Flight {flight_num}</h1>
      <FlightTime time={origin.time}  extra_days={1}/>
      <Seats  seat_icon='seat.png'  seats={85}/>
   </div>
    )
 
}