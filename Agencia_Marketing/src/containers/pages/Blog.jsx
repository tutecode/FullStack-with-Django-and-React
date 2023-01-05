//import BlogList from "components/Blog/BlogList"
//import CTA from "components/Blog/CTA"
//import Features from "components/Blog/Features"
//import Header from "components/Blog/Header"
//import Incentives from "components/Blog/Incentives"
//import LogoCloud from "components/Blog/LogoCloud"
//import UseCases from "components/Blog/UseCases"
//import Footer from "components/navigation/Footer"
//import Navbar from "components/navigation/Navbar"
//import Scroll from "components/SmoothScrollbar"
//import Layout from "hocs/layouts/Layout"
//import { useEffect } from "react"


// function Blog(){
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
// export default Blog


import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Blog() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Blog
            </div>
            <Footer />
        </Layout>
    )
}

export default Blog
