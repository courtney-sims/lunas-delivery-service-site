import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Aurora from "./images/aurorasitalianbistro.png"

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
                />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}