import React, {Component} from "react"

class DataFetcher extends Component {
    state = {
        loading: false,
        data: null,
        error:false
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({ data: data, loading: false }))
            .catch(error => this.setState({error:true}))
    }

    render() {
        const {data, loading, error} = this.state
        return (
                 this.props.render(data, loading, error)
        )
    }

}

export default DataFetcher