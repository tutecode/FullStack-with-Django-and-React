import CasesList from "components/cases/CasesList"
import Header from "components/cases/Header"
import Helmet_Cases from "components/cases/Helmet"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Cases() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Helmet_Cases/>
            <Navbar />
            <div className="pt-28">
                <Header />
                <CasesList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Cases