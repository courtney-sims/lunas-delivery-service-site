import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';
import Card from './Components/Card';
import Footer from './Components/Footer';

export default function App(){
    return (
        <div>
            <Header />
            <Hero />
            <MainContent />
            <Card />
            <Footer />
        </div>
    )
}