import React from 'react';
import HeaderBar from '../components/HeaderBar'
import Jumbotron from '../components/Jumbotron'
import FooterContent from '../components/FooterContent'
import servicesJumbotron from "../assets/services-jumbotron.png";

function Services() {
    return (
        <>
            <header>
                <HeaderBar />
                <Jumbotron img={servicesJumbotron} text="SERVICES"/>
            </header>
            <main>

            </main>
            <footer>
                <FooterContent />
            </footer>
        </>
    )
}

export default Services