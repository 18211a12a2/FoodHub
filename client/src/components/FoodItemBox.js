import { useEffect } from 'react';

function FoodItemBox({item}){

    useEffect(()=>{
        console.log(item)
    })

    function changeQuantity(){
        // dispatch(cartActions.changeQuantity({
        //     "quantity":e.target.value,
        //     "itemIdx":idx
        // }))
    }
    return (
        <div className='foodItem'>
            <div className='box_container'>
                <h2>{item.itemName}</h2>
                <img src={item.image} alt='food item'></img>
                <p className='box_description'>{item.description}</p>
                <p>{item.price}</p>
                <div className='incDecQuantity'>
                    <button onClick={()=>changeQuantity(0)}>-</button> 1 
                    <button onClick={()=>changeQuantity(1)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default FoodItemBox;