import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
    
    render() {
        return (
            <React.Fragment>
                    <form onSubmit={this.handleSubmit}>
                        {/* <label htmlFor = 'content'>Add new todo</label>
                        <input type ='text' value={this.state.content} onChange={this.handleChange}/> */}
                        <div className="row">
                            <div className="col col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">textsms</i>
                                    <input type="text" id="autocomplete-input" className="autocomplete"value={this.state.content} onChange={this.handleChange}/>
                                    <label htmlFor="autocomplete-input">Add new todo</label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </form>    
            </React.Fragment>
            
        )
    }
}

export default AddTodo
