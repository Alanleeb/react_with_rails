import React from 'react';

class TodoForm extends React.Component {
    state = { name: ""}

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.name);
        this.state({name: ""})
    }

    render(){
        return(
            
        )
    }
}