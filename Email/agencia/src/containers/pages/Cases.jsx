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
            <Helmet_Cases />
            <Navbar />
            <div className="pt-28">
                <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-1700">{/* Content goes here */}
                        <Header />
                        <CasesList />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default Cases