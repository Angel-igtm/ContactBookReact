import React, { Component } from 'react';
import './Edit.css'

class Edit extends Component {

state = {
    currentVal: {
        name: '',
        lastName: '',
        age: ''
    },
    isEdit: false
}


shouldComponentUpdate(nextProps, nextState){
    if(nextProps.editId !== this.props.editId){
        this.changeState(nextProps.data, nextProps.editId)
    }
    // console.log(this.props.editId)
    // console.log(nextProps.editId)
    // console.log(nextProps.data)
    return true
}


changeState = (data,id) => {
    let name = data[id].name
    let lastName = data[id].lastName
    let age = data[id].age
    // console.log(name, lastName, age)
    // console.log(id)
    this.setState({ currentVal: {...this.state.currentVal, name, lastName, age}})
}


handleInput = (e, key) => {
    // console.log(key)
    // console.log(value)
    let value = e.target.value
    const currentVal = {
        ...this.state.currentVal
    }
    currentVal[key] = value
    // console.log(name)
    this.setState({ currentVal })
    // console.log(this.currentVal)
}
// handleInputLastName = (e) => {
//     let lastName = e.target.value
//     // console.log(lastName)
//     this.setState({ currentVal: {...this.state.currentVal, lastName }})
// }
// handleInputAge = (e) => {
//     let age = e.target.value
//     // console.log(age)
//     this.setState({currentVal: {...this.state.currentVal, age }})
// }
handleSave = () => {
    
    const id = this.props.editId;
    const data = [...this.props.data];
    let name = this.state.currentVal.name;
    let lastName = this.state.currentVal.lastName;
    let age = this.state.currentVal.age;
    const obj = {
        name,
        lastName,
        age
    }
// console.log(obj)
    data.splice(id, 1, obj)
    // // console.log(this.state.currentVal)

    this.props.onChange(data)
    console.log(data)
    this.props.handleEditId(id) 
    
}


render() {
    const currentVal = this.state.currentVal
    // console.log(currentVal)
        return (
            <>
            {this.props.isEdit ? (
                <div className="modal-window">
                    <div className="modal-body">
                        <input onChange={(e) => this.handleInput(e, 'name')} 
                        value={currentVal.name}
                        className="input" />
                        <input onChange={(e) =>this.handleInput(e, 'lastName')} 
                        value={currentVal.lastName}
                        className="input" />
                        <input onChange={(e) => this.handleInput(e, 'age')} 
                        value={currentVal.age}
                        className="input" />
                        <button onClick={this.handleSave} >Save</button>
                    </div>
                </div>
            ): false}
            </>
        );
    }
}

export default Edit;


















    // state = {
    //     currentVal: {
    //         name: '',
    //         lastName: '',
    //         age: ''
    //     },
    //     isEdit: false
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.editId !== this.props.editId){
    //         this.changeState(nextProps.data, nextProps.editId)
    //     }
    //     return true
    // }

    // changeState = (data,id) => {
    //     let name = data[id].name
    //     let lastName = data[id].lastName
    //     let age = data[id].age
    //     this.setState({ currentVal: {...this.state.currentVal, name , lastName, age}})
    //     console.log(name, lastName, age) 
    //     // console.log(value)
        

    //     // this.setState({  })
    // }

    // handleInput = (e, key) => {
    //     // console.log(key) -------------it's (name, lastName, age)
    //     let value = e.target.value
        
    //     const currentVal = {
    //         ...this.state.currentVal
    //     }
    //     // console.log(currentVal[key]=value) //-------наглядный пример, того, как мы изменяет наш объект
    //     // console.log(currentVal)
    //     currentVal[key] = value
    //     this.setState({ currentVal })
    //     // console.log(currentVal[key]) //-------------- it's 'name', 'lastName', 'age'
    //     // console.log(value)
    // }

    // handleSave = () => {
    //     const id = this.props.editId
    //     // console.log(id) ----------- грубо говоря индекс элемента
    //     // console.log(this.props) //-------------- наши атрибуты (data, editId, isEdit, handleEditId)
        
    //     const data = [...this.props.data]
    //     // let name = this.state.currentVal.value;
    //     // let lastName = this.state.currentVal.value;
    //     // let age = this.state.currentVal.value;
        
            
    //     // console.log(data)
    //     data.splice(id, 1, this.state.currentVal)
    //     // console.log(data) //-------------- измененный массив с редактированным объектом
    //     this.setState({ currentVal: 
    //         {
    //             name: '',
    //             lastName: '',
    //             age: ''
    //         }
    //     })
    //     this.props.onChange(data);
    //     console.log(data)

    //     this.props.handleEditId(id) //-----------закрывает модалку переворачивая, делая false
    // }