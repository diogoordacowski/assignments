import React, {Component} from "react" 

class CommentWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            comments: [],

        }
    }


    render() {
        
        const commentOn = this.props.commentOn

        if (commentOn) {
    
            return (
                <div>
                    <input type="text" placeholder="username" name="username" onChange={this.props.handleChange} />

                    <input type="text" placeholder="insert your comments" name="comment" onChange={this.props.handleChange} />

                    <button name="commentOn" onClick={this.props.booleanToggle} >Cancel</button>

                    <button>Submit Comment</button>
                </div>
    
            )
    
        } else {
            return (
                <div>
                    <p><em>There are no comments yet</em></p>
                </div>
            )
        }

    }

    /* 
    this will receive props for the username, comment, id, and deleteComment() method

    the button element will have an id = props.id attribute for easy identification when deleting

    the button element will have an onClick for running the deleteComment() method


   
    */

}

export default CommentWidget