import '../styles/Home.css';
import restaurantsData from '../utils/restaurants'
import React, { useState } from 'react';
import Restaurants from './Restaurants';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Home(){
    const [selectedCuisine, setSelectedCuisine] = useState(null);
    const [restaurantList, setRestaurantList] = useState(restaurantsData);
    const cuisines = [
        "Indian", "American", "Mexican", "Chinese"
    ]
    const handleCuisineChange = (event) => {
        setSelectedCuisine(event);
        setRestaurantList(restaurantsData.filter(res=>{
            return res.cuisine === event.value;
        }))
    };

    function handleReset(){
        setSelectedCuisine(null);
        setRestaurantList(restaurantsData);
    }

    return (
        <div className='home'>
            <div className='home_banner'>
                <div className='home_banner_text'>
                    <h2>Good Food, Good Life</h2> 
                </div>
                <div className='home_banner_img'><img alt='food' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header"></img></div>
            </div>
            <div className='home_filter'>
                <div className='home_dropdown'>
                <p>Filter by cuisine</p>
                <div className='filter_reset'>
                <Dropdown options={cuisines} onChange={(e)=>handleCuisineChange(e)} value={selectedCuisine} placeholder="Select cuisine"/>
                <div className='home_filter' onClick={()=>handleReset()}><RestartAltIcon/></div>
                </div>
                </div>
            </div>
            <div className='home_restaurants'>
                {
                    restaurantList.map((resData,i)=>(
                        <Restaurants key={i} restaurant={resData}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;