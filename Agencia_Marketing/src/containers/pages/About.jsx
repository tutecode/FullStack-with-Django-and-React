import CallToAction from "components/about/CallToAction"
import Clients from "components/about/Clients"
import Features from "components/about/Features"
import Header from "components/about/Header"
import Helmet_About from "components/about/Helmet"
//import Helmet from "components/about/Helmet"
import Images from "components/about/Images"
import Team from "components/about/Team"
import TestStats from "components/about/TestStats"
import LogoCloud from "components/home/LogoCloud"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Helmet_About/>
            <Navbar />
            <div className="pt-28">
                <Header />
                <TestStats />
                <Images />
                <Clients />
                <LogoCloud />
                <Features />
                <Team />
                <CallToAction />
            </div>
            <Footer />
        </Layout>
    )
}

export default About
