import './flight.css'
export default function get_flight(props){
    return(
        <div >
         
      <div class="container">
     
     <div class="text-container">
          <p className="caption">{props.city_d}{props.country_d}</p>
          </div>
          <img alt='city' className='size_img_l' src={props.img_url_d}/>
        </div>
        </div>
    )
}