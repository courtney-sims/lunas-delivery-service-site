import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Aurora from "./images/aurorasitalianbistro.png"
import BallPit from "./images/ballpit.jpg"
import Ribbon from "./images/ribbon.png"

export default function App(){
    return (
        <div>
            <Header />
            <Hero />
            <MainContent />
            <div className='cards'>
                <Card 
                    img={Aurora}
                    rating="5.0"
                    numReviews="6"
                    location="USA"
                    name="World's Best Meatball from Aurora's Italian Bistro"
                    price="136"
                    currency="Jewels" 
                    alt="Chef Aurora of Aurora's Italian Bistro"
                />
                <Card 
                    img={BallPit}
                    rating="5.0"
                    numReviews="10"
                    location="USA"
                    name="Penny the Puppy's Ball Pit Experience"
                    price="1"
                    currency="Kong Ball"
                    alt="Image from dogpools.shop"
                />
                <Card 
                    img={Ribbon}
                    rating="5.0"
                    numReviews="5000"
                    name="Very Long Ribbons R Us"
                    price="1"
                    currency="Floor scoop"
                    alt="Image from Ylanite Koppens @ Pexels"/>
            </div>
            <Footer />
        </div>
    )
}