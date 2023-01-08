// connect with redux
import { connect } from "react-redux"
//import {motion} from 'framer-motion'

function Layout({children}){
    return(
        <div>
            {children}
        </div>
    )
}

// function call to redux variables
const mapStateToProps = state => ({

})

// necessary export redux functions
export default connect(mapStateToProps,{

}) (Layout)