import Header from './component/header/index';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero from './component/hero';
import Brands from './component/brands';
import Swipers from './component/swiper';
import Accordian from './component/accordian';
import Contact from './component/contact';


const App = () => {
    return(
        <>
            <Header />
            <Hero />
            <Brands />
            <Swipers />
            <Accordian />
            <Contact />
        </>
    )
}

export default App;