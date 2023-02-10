import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"
//import { LockClosedIcon } from '@heroicons/react/20/solid'
//import { useEffect, useState } from "react";
//import { check_authenticated, load_user, login, refresh } from "redux/actions/auth/auth";
//import { Link, Navigate } from "react-router-dom";

function Blog({
    get_author_blog_list,
    get_author_blog_list_page,
    posts,
    count,
    next,
    previous,
    get_categories,
    categories
}){

    useEffect(()=>{
        get_author_blog_list()
        get_categories()
    },[])


    return(
        <Layout>
            Blog
        </Layout>
    )
}

const mapStateToProps=state=>({
    posts: state.blog.author_blog_list,
    categories: state.categories.categories,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})

export default connect(mapStateToProps,{
    get_author_blog_list,
    get_author_blog_list_page,
    get_categories
}) (Blog)
