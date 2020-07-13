import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing'

const Blog = ()=>{
    return(
        <div>
            <h1>This is test page</h1>
            <p>Testing wether Modal is working or not</p>
            <Link to="/">Close Modal</Link>
        </div>
    )
}

export default Blog;