import React from "react"

function BlogList(props) {

    return (
       <div className="blog-snippet">
           <h1>{props.title} </h1>
           <h2>{props.subTitle}</h2>
           <p>Posted by <strong>{props.author}</strong> on {props.date}</p>
       </div>
    )
}

export default BlogList