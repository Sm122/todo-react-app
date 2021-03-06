import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Addtodo extends Component {

    state={
        title: ''
    }
    
    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);   
        this.setState({title : ''});
    }

    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display: 'flex', margin: '30px, 0px'}}>
               <input type="text" 
               name = "title"   
               style={{flex : '10', padding: '10px'}} 
               placeholder = "Add Todo..."
               value = {this.state.title}
               onChange = {this.onChange}/>
               <input type="submit" value="Submit" className="btn" style={{flex:1}}/>       
           </form>
        )
    }
}

Addtodo.propTypes={
    addTodo: PropTypes.func.isRequired,
   
}

export default Addtodo
