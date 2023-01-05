//import BlogList from "components/About/BlogList"
//import CTA from "components/About/CTA"
//import Features from "components/About/Features"
//import Header from "components/About/Header"
//import Incentives from "components/About/Incentives"
//import LogoCloud from "components/About/LogoCloud"
//import UseCases from "components/About/UseCases"
//import Footer from "components/navigation/Footer"
//import Navbar from "components/navigation/Navbar"
//import Scroll from "components/SmoothScrollbar"
//import Layout from "hocs/layouts/Layout"
//import { useEffect } from "react"


// function About(){
//     useEffect(()=>{
//         window.scrollTo(0,0)
//     },[])
//     return(
//         <Layout>
//             <Navbar/>
//             <div data-scroll-section className="pt-28">
//                 <Header/>
//                 <Incentives/>
//                 <UseCases/>
//                 <Features/>
//                 <CTA/>
//                 <LogoCloud/>
//                 <BlogList/>
//             </div>
//                 <Footer/>
//         </Layout>
//     )
// }
// export default About


import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function About() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                About
            </div>
            <Footer />
        </Layout>
    )
}

export default About
