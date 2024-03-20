import { Navbar } from "../components/Navbar";
import { HomepageHero } from "../components/HomepageHero";
import { HomepageFeatured } from "../components/HomepageFeatured";
import { HomepagePublicity } from '../components/HomepagePublicity';
import Footer  from "../components/Footer";

const Homepage = ()=>{
    return (
        <>
            <Navbar/>
            <HomepageHero/>
            <HomepageFeatured/>
            <HomepagePublicity/>
            <Footer/>
        </>
    )
}

export default Homepage;