import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content:""
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({content:''})
    }
    handleChange = e =>{
        const content = e.target.value
        this.setState({ content })
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add new toDo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}

export default AddTodo