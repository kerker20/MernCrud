import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FoodCard = (props) => {
    const food = props.food;

    return (
        <div className="card-container">
            <img src="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=" width="250" height="180" alt="" />
            <div className="desc">
                <h2><strong>FoodName: </strong>
                    <Link className="text-success" to={`/show-food/${food._id}`}>
                        {food.name}
                    </Link>
                </h2>
                <p className="text-dark"><strong>Type: </strong>{food.type}</p>
                <italic><strong>Description: </strong> {food.description}</italic>
            </div>
        </div>
    )
};

export default FoodCard;