import React from 'react'

class Description extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleHidden.bind(this)}>
                show description
                </button>
    {!this.state.isHidden && <p>{this.props.description}</p>}
            </div>
        )
    }
}






export default Description