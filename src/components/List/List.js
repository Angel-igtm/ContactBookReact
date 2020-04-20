import React, { Component } from 'react';
import './List.css'
class List extends Component {
    
    
    render() {
        // console.log(this.props)
        const data = this.props.data
        return (
            <div className="list">
                {data.map((user,index) => (
                    <li className="contact" key={user.id, index}>
                        <strong>Name: </strong> {user.name} <br>
                        </br>
                        <strong>Lastname: </strong> {user.lastName} <br></br>
                        <strong>age: </strong>{user.age}
                        <button onClick={() => this.props.onDelete(user.id)} className="btn-delete">Delete</button>
                        <button onClick={() => this.props.handleEditId(index)} className="btn-edit">Edit</button>
                    </li>
                ))}
            </div>
        );
    }
}

export default List;