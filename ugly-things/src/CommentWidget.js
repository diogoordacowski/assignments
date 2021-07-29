import React from "react"

function CommentWidget(props) {
    return (
        <div>
            <p>User: Diogo</p>
            <p>Comment: This is a sample comment</p>
            <button>delete comment</button>
        </div>

        /* 
        this will receive props for the username, comment, id, and deleteComment() method

        the button element will have an id = props.id attribute for easy identification when deleting

        the button element will have an onClick for running the deleteComment() method


       
        */
    )
}

export default CommentWidget