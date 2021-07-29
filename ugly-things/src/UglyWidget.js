import React, { Component } from "react"

class UglyWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:this.props.id,
            editOn: false,
            commentOn: false,
            thingTitle: this.props.title,
            thingImgUrl: this.props.imgUrl,
            thingDescription: this.props.description,
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

    render() {
        if (this.state.editOn) {
            return (
                <form name="thingsForm" >
                    <input name="thingTitle" type="text" placeholder={this.props.title} onChange={this.handleChange}/>
                    <input name="thingImgUrl" type="text" placeholder={this.props.imgUrl} onChange={this.handleChange}/>
                    <input name="thingDescription" type="text" placeholder={this.props.description} onChange={this.handleChange}/>
                    <button name="editOn" onClick={this.booleanToggle}>Cancel</button>
                    <button name="save" onClick={this.saveClick}>Save</button>
                </form>
            )
        } else {
            return (
                <div>
                    <img src={this.props.imgUrl} alt="" />
                    <h1><u>Title:</u> {this.props.title}</h1>
                    <h2><u>Description:</u> {this.props.description}</h2>
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