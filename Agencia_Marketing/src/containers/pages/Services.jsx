//import BlogList from "components/Services/BlogList"
//import CTA from "components/Services/CTA"
//import Features from "components/Services/Features"
//import Header from "components/Services/Header"
//import Incentives from "components/Services/Incentives"
//import LogoCloud from "components/Services/LogoCloud"
//import UseCases from "components/Services/UseCases"
//import Footer from "components/navigation/Footer"
//import Navbar from "components/navigation/Navbar"
//import Scroll from "components/SmoothScrollbar"
//import Layout from "hocs/layouts/Layout"
//import { useEffect } from "react"


// function Services(){
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
// export default Services


import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Services() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Services
            </div>
            <Footer />
        </Layout>
    )
}

export default Services
