import '../styles/Restaurants.css'
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'

const Restaurants = (props) => {
   const { restaurant } = props;

    return (
        <div className='Restaurants'>
          <Link to='/restaurant' state={{data : restaurant}} style={{ textDecoration: 'none' }}> <div className='res_card'>
              <div className='res_img'>
                <img src={restaurant.image} alt='Restaurant'></img>
              </div>
              <p className='res_name'>{restaurant.name}</p>
              <div className='res_details'>
                <p className='res_distance'>{restaurant.distance}</p>
                <p className='res_deliveryTime'>{restaurant.deliveryTime}</p>
                <p className='res_deliveryFee'>0$ delivery fee, first order</p>
              </div>
              <div className='res_footer'>
                <p className='res_type'>{restaurant.type}</p>
                <p className='res_rating'>{restaurant.rating }<StarIcon/></p>
              </div>
           </div>
           </Link>
        </div>
    );
    
}

export default Restaurants;