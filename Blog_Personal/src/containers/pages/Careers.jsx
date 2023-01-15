import Features from "components/careers/Features"
import Header from "components/careers/Header"
import Helmet_Careers from "components/careers/Helmet"
import LogoCloud from "components/careers/LogoCloud"
import PositionsList from "components/careers/PositionsList"
import Testimonial from "components/careers/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Helmet_Careers />
            <Navbar />
            <div className="pt-28">
                <Header />
                <Testimonial />
                <LogoCloud />
                <Features />
                <Features />
                <PositionsList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Careers