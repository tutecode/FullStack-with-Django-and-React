import { connect } from "react-redux"
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
//import loading_dots from 'assets/img/loading-dots.gif'
import logo_boomslag from 'assets/img/boomslag-black.png'
//import loading_fork from 'assets/img/loading-fork.gif'
import { DotLoader } from "react-spinners"
//import PacmanLoader from "react-spinners/PacmanLoader"

function Navbar() {

    // Loading icon
    const [loading, setLoading] = useState(true)

    return (
        <nav className='w-full py-3 shadow-md fixed'>
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img src={logo_boomslag} width={180} height={90} className="" />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Casos</NavLink>
                        <NavLink to='/servicios' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Servicios</NavLink>
                        <NavLink to='/nosotros' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Nosotros</NavLink>
                        <NavLink to='/carreras' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Carreras</NavLink>
                        <NavLink to='/blog' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Blog</NavLink>
                        <NavLink to='/contactos' className="text-lg font-medium leading-6 text-gray-900 hover:underline hover:underline-offset-4 mx-4">Contactos</NavLink>

                        <button
                            to="/contacto"
                            className="ml-12 inline-flex items-center rounded-md border border-transparent bg-yellow-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-button focus:ring-offset-2"
                        >
                            Join us!
                            <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color='#ffffff' />
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