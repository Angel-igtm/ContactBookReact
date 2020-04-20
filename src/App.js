import React, { Component } from 'react';
import axios from 'axios';
import AddContact from './components/AddContact/AddContact';
import List from './components/List/List';
import Edit from './components/Edit/Edit';


class App extends Component {

  state = {
    data: [],
    editId: null,
    isEdit: false
  }


  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts = async () => {
    const { data } = await axios.get('http://localhost:8000/conctacs');
    // console.log({ data });
    this.setState({ data })
  }


  handleEditId = (editId) => {
    this.setState({ editId })
    this.setState({ isEdit: !this.state.isEdit})
    console.log(editId)
    console.log(!this.state.isEdit)
  }
 


  handleTodoList = async (newContact) => {
    await axios.post('http://localhost:8000/conctacs', newContact)
    this.fetchContacts(); 
  }
  // handleTodoList = (newContact) =>{
  // // this.setState({ newContact })
  //   const data = [...this.state.data]
  //   data.push(newContact)
  //   this.setState({ data })
  // }

  handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/conctacs/${id}`);
    this.fetchContacts();
    // this.setState({ data })
  }
  // handleDelete = (index) => {
  //   const data =[...this.state.data]
  //   data.splice(index,1)
  //   // console.log(data)
  //   this.setState({ data })
  // }

  handleChange = (data) => {
    this.setState({ data })
  }
  


  render() {
    return (
      <div>
        <AddContact
        onChange={this.handleTodoList}
        data={this.state.data}
        />
      
        <List
        data={this.state.data}
        onDelete ={this.handleDelete}
        handleEditId={this.handleEditId}
        />
        <Edit 
        data={this.state.data}
        editId={this.state.editId}
        isEdit={this.state.isEdit}
        handleEditId={this.handleEditId}
        onChange={this.handleChange}
        />
        
        
      </div>
    );
  }
}

export default App;