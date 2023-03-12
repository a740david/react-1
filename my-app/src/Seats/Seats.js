import './Seats.css'
export default function Seats(props){
     console.log(props)
     
     let Left_seats=props.seats
     let textStyle = {
         color: 'black', 
     }
 
     if (Left_seats !== 0) {
        Left_seats > 20 
        ? 
        textStyle.color = 'green' 
        :
        Left_seats < 20 && Left_seats >= 8 
        ?
         textStyle.color = 'orange' 
        :
         8 > Left_seats > 0 
        ?
         textStyle.color = 'red' 
        :
         textStyle.color = 'black'
     } else {
        Left_seats = "Sold Out"
     }
  
    return(
        <div className='center'> 
        
        <img className="size_seat" alt="seat_icon" src={props.seat_icon}></img> 
        
        
        <p className='middle' style={textStyle}>Seats Left: {Left_seats}</p>
        
         
       
        </div>
    )
}