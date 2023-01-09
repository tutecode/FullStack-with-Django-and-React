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
            <Navbar />
            <div className="pt-28">
                Careers
            </div>
            <Footer />
        </Layout>
    )
}

export default Careers