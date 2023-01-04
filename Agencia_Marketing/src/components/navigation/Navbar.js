import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import loading_dots from 'assets/img/loading-dots.gif'
import logo_boomslag from 'assets/img/boomslag-black.png'
import loading_fork from 'assets/img/loading-fork.gif'

function Navbar() {
    return (
        <nav className='w-full py-3 shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img src={logo_boomslag} width={180} height={90} className=""/>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/casos' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Casos</Link>
                        <Link to='/servicios' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Servicios</Link>
                        <Link to='/nosotros' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Nosotros</Link>
                        <Link to='/carreras' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Carreras</Link>
                        <Link to='/blog' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Blog</Link>
                        <Link to='/contactos' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Contactos</Link>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-yellow-button px-6 py-2 text-l font-bold text-white shadow-sm hover:transition hover:duration-700 hover:ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-yellow-button focus:ring-offset-2"
                        >
                            Join us!
                            <img src={loading_fork} className="w-14 h-4 mt-1 ml-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = states => ({

})

export default connect(mapStateToProps, {

})(Navbar)