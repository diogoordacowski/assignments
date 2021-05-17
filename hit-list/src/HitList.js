import React, {Component} from "react"
import HitItem from "./HitItem"
import axios from "axios"

class HitList extends Component {
    constructor() {
        super()
        this.state= {
            listOfHits: []
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then((response) => {
                this.setState({
                    listOfHits: response.data
                })
            })
    }

    render() {

        let alltargets = this.state.listOfHits.map((target, id) => <HitItem key={id} target={target} />)

        {console.log (this.state.listOfHits)}
        return (                
            <div className="hit-list-container">   
                <h2>Don Corleone's Hit List</h2>            
                <div className="hit-list">
                    {alltargets}
                </div>
            </div>

        )
    }
}


export default HitList