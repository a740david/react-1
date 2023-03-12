
import './Location.css';
export default function get_location(props){
    
   return(
      <div >
       
      <div class="container">
     
      <div class="text-container">
         <p className="caption">{props.city_o}{props.country_o}</p>
         
       </div>
         <img className='size_img_s' alt='city' src={props.img_url_o}/>
      </div>
      
     </div>
   )
}