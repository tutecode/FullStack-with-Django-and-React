import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"
//import { LockClosedIcon } from '@heroicons/react/20/solid'
//import { useEffect, useState } from "react";
//import { check_authenticated, load_user, login, refresh } from "redux/actions/auth/auth";
//import { Link, Navigate } from "react-router-dom";

function Blog() {
    return(
        <Layout>
            Blog
        </Layout>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps,{

}) (Blog)
