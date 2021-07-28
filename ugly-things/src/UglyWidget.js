import React, { Component } from "react"

class UglyWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editOn: false,
            commentOn: false,
            comments: []

        }

        this.booleanToggle = this.booleanToggle.bind(this)
    }
    

    booleanToggle = (e) => {
        const { name } = e.target
        this.setState(prevState => {
            return {
                [name]: !prevState[name]
            }
        })
    }

    render() {
        if (this.state.editOn) {
            return (
                <form name="thingsForm" >
                    <input name="title" type="text" placeholder={this.props.title} />
                    <input name="imgUrl" type="text" placeholder={this.props.imgUrl} />
                    <input name="description" type="text" placeholder={this.props.description} />
                    <button name="editOn" onClick={this.booleanToggle}>Cancel</button>
                    <button name="save" onClick={this.props.saveThing}>Save</button>
                </form>
            )
        } else {
            return (
                <div>
                    <img src={this.props.imgUrl} alt="" />
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.description}</h2>
                    <h4>{this.props.id}</h4>
                    <button name="editOn" onClick={this.booleanToggle}>Edit</button>
                    <button name="commentOn" onClick={this.booleanToggle}>Comment</button>
                    <button name="delete" onClick={this.props.deleteThing} id={this.props.id}>Delete</button>
                </div>
            )
        }

    }

}

export default UglyWidget