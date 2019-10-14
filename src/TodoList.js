import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <div>
                        <li key={item.id}>{item.text}</li>
                        <button value={item.id} onClick={item.click}> Delete </button></div>
                ))}
            </ul>
        );
    }
   
}

export default TodoList;