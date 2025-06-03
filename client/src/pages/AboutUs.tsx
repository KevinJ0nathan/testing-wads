import HeaderBar from '../components/HeaderBar'
import Jumbotron from '../components/Jumbotron'
import FooterContent from '../components/FooterContent'

function AboutUs() {
    return (
        <>
            <header>
                <HeaderBar />
                <Jumbotron img={"src/assets/aboutus-jumbotron.png"} text="ABOUT US"/>
            </header>
            <main>

            </main>
            <footer>
                <FooterContent />
            </footer>
        </>
    )
}

export default AboutUs