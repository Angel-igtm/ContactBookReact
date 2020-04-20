import React, { Component } from 'react';

class AddContact extends Component {

    state = {
        name: '',
        lastName: '',
        age: ''
    }
    
    // setState не знает что обновить если вы сами не укажете
    handleChangeName = (e) => {
        const name = e.target.value
        // console.log(name)
        this.setState({ name })
    }
    handleChangeLastName= (e) => {
        const lastName = e.target.value
        this.setState({ lastName })
    }
    handleChangeAge = (e) => {
        const age = +e.target.value 
        this.setState({ age })
    }

    handleClick = (e) => {
        e.stopPropagation()
        // const newData = [...this.props.data]
        // console.log(newData)
        // const name = this.state.name
        // const lastName = this.state.lastName
        // const age = this.state.age
        const {
            name,
            lastName,
            age
        } = this.state
            

       if(!name || !lastName || !age) return
        

        this.props.onChange(this.state)
        console.log(this.props)
        this.setState({
            name: '',
            lastName: '',
            age: ''
        })
        // console.log(newData)
        // console.log(name)
        // console.log(lastName)
        // console.log(age)


    }
    
    render() {
        return (
            <div className="add-contact">   
                <label>Name: </label>
                <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                <label>Lastname: </label>
                <input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
                <label>Age: </label>
                <input type="number" value={this.state.age} onChange={this.handleChangeAge} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddContact;