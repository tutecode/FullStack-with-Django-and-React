import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Cases() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header/>
                <CasesList/>
            </div>
            <Footer />
        </Layout>
    )
}

export default Cases

//import BlogList from "components/Cases/BlogList"
//import CTA from "components/Cases/CTA"
//import Features from "components/Cases/Features"
//import Header from "components/Cases/Header"
//import Incentives from "components/Cases/Incentives"
//import LogoCloud from "components/Cases/LogoCloud"
//import UseCases from "components/Cases/UseCases"
//import Footer from "components/navigation/Footer"
//import Navbar from "components/navigation/Navbar"
//import Scroll from "components/SmoothScrollbar"
//import Layout from "hocs/layouts/Layout"
//import { useEffect } from "react"


// function Cases(){
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
// export default Cases
