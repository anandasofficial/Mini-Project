import React from 'react'
import './HomeCard.css';
import Card from './Card';
function HomeCard() {
    return (
        <div className="home_card">
<div className="homecard_title">
    <h3>Anand</h3>
    <Card
          id="1"
          src="https://st2.depositphotos.com/1010613/6332/i/950/depositphotos_63322175-stock-photo-repairer-repairing-air-conditioner.jpg"
          title="AC Services"
          description="Unique activities we can do together, led by a world of hosts."
          price="£350/night"
        />
    </div>            
        </div>
    )
}

export default HomeCard
