import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import UseCases from "components/home/UseCases"
import Layout from "hocs/layouts/Layout"
import CTA from "components/home/CTA"
import LogoCloud from "components/home/LogoCloud"
import BlogList from "components/home/BlogList"
import { useEffect } from "react"

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Incentives />
                <UseCases />
                <CTA />
                <LogoCloud />
                <BlogList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home