import CTA from "components/cases/ecommerce/CTA"
import Header from "components/cases/ecommerce/Header"
import ImgGrid from "components/cases/ecommerce/ImgGrid"
import ProblemDefinition from "components/cases/ecommerce/ProblemDefinition"
import Solution from "components/cases/ecommerce/Solution"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

export default function Ecommerce() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-1700">
                        {/* Content goes here */}
                        <Header />
                        <ProblemDefinition />
                        <Solution />
                        <ImgGrid />
                        <CTA />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}