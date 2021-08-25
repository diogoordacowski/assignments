import React, { Component } from "react"
import CommentWidget from "./CommentWidget"

class UglyWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            editOn: false,
            commentOn: false,
            thingTitle: this.props.title,
            thingImgUrl: this.props.imgUrl,
            thingDescription: this.props.description,
            username: "",
            comment: "",
            comments: []

        }

        this.booleanToggle = this.booleanToggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveClick = this.saveClick.bind(this)
    }


    booleanToggle = (e) => {
        const { name } = e.target
        this.setState(prevState => {
            return {
                [name]: !prevState[name]
            }
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    //Question for TA: is it possible to simply run the this.props.saveThings down below in the Save button onclick? Currently, this saveClick handles the immediate save button click and then within this saveClick method we run the context's saveThing method. I'm essentially asking if there is a more efficient way to handle this as this current approach seems redundant. 
    saveClick = (e) => {
        e.preventDefault()
        console.log("save was clicked")

        this.props.saveThing(
            this.state.id,
            this.state.thingTitle,
            this.state.thingImgUrl,
            this.state.thingDescription)

        this.setState(prevState => {
            return {
                editOn: !prevState.editOn
            }
        })

    }

    commentClick = (e) => {

        this.booleanToggle(e)

        console.log('end')

       

        this.props.commentThing()
    }

    render() {
        if (this.state.editOn) {
            return (
                <div>
                    <form name="thingsForm" >

                        <input name="thingTitle" type="text" placeholder={this.props.title} onChange={this.handleChange} />

                        <input name="thingImgUrl" type="text" placeholder={this.props.imgUrl} onChange={this.handleChange} />

                        <input name="thingDescription" type="text" placeholder={this.props.description} onChange={this.handleChange} />

                        <button name="editOn" onClick={this.booleanToggle}>Cancel</button>

                        <button name="save" onClick={this.saveClick}>Save</button>

                    </form>

                    

                </div>

            )
        } else {
            return (
                <div>
                    <img src={this.props.imgUrl} alt="" />
                    <h1><u>Title:</u> {this.props.title}</h1>
                    <h2><u>Description:</u> {this.props.description}</h2>
                    <h4>{this.props.id}</h4>
                    <button name="editOn" onClick={this.booleanToggle}>Edit</button>
                    <button name="commentOn" onClick={this.commentClick}>Comment</button>
                    <button name="delete" onClick={this.props.deleteThing} id={this.props.id}>Delete</button>
                    <CommentWidget 
                        commentOn={this.state.commentOn} 
                        
                        booleanToggle={this.booleanToggle}
                        
                        handleChange={this.handleChange}/>
                    
                    {/* How to store comments:
                        1) Each comment is an object that holds a username: and comment: property

                        How to add a comment:
                        1)Comment button holds an onClick event handler
                        2)it runs a handleComment() method provided by the UglyWidget component
                        3)this eventhandler needs to toggle the commentOn state to true in this UglyWidget component
                        4) This will allow a conditional rendering for a comment form to display on the Ugly widget that has a:
                            - input (username) <- onChange will update the username state in this UglyWidget component
                            - input (comment) <- onChange will update the comment state in this UglyWidget component
                            - button (cancel) <- when clicked, toggles the commentOn state to true in this UglyWidget component
                            - button (submit) <- the form will submit to (no Axios since this info can't be store in database):
                                1) pass in a new comment object into the comments array in state (which will need ...prevState spread in as well)
                                2) toggle the commentOn state to false in this UglyWidget Component
                        

                    
                    
                        To display the comments:
                        1) we will map through the comments array that comes from this ugly widget's state. 
                        2) each comment being mapped will create a Comment component
                        3) each Comment component will be assigned props of (this.state.username, this.state.comment, key, and id (through the iterator i), and a deleteComment() method) 
                        4) assign this array to a variable allComments
                        5) render all comments with {allComments} directly below the lowest jsx element within the ugly widget

                         what if there are no comments, what do we display?

                            1) a conditional rendering will first evaluate for if (this.state.comments.length === 0) {display a version of the comment box that says "no comments"}
                            2) else {run the above array map logic}
                        
                        To delete the comments
                        1) create a deleteComment() method
                        2) preventDefault
                        3) destructor the id from the event target
                        4) findIndex within the comments array in state, and evaluate for comment.id === id <- assing this to a variable
                        5) splice the comments array in state specifically for the variable, for 1 index
                        6) set the comments state to this now modified spliced array
                    */}

                </div>
            )
        }

    }

}

export default UglyWidget