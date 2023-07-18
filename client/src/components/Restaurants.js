import '../styles/Restaurants.css'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { restaurantMenuActions } from '../store/restaurantmenu-slice';

const Restaurants = (props) => {
   const { restaurant } = props;
  let dispatch = useDispatch();
   function handleRestaurantData(){
    dispatch(restaurantMenuActions.getRestaurantMenu(restaurant));
    localStorage.setItem('res-menu', JSON.stringify(restaurant));
   }

    return (
        <div className='Restaurants'>
          <Link to='/restaurant'onClick={handleRestaurantData} state={{data : restaurant}} style={{ textDecoration: 'none' }}> <div className='res_card'>
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