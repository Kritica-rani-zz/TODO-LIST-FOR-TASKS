import React from 'react';
import TaskList from './TaskList';
import './App.css';



class App extends React.Component {
  constructor(){
      super();
      this.state={
        tasks:[],
        presentItems:{
          inputText:'',
          key:'',
        }
      }
  }
  handleChange = (e) =>{
   this.setState({
    presentItems:{
      inputText:e.target.value,
      key:Date.now(), 
    }
   })
  //  console.log('inputText',inputText);
  }

  handleAdd =(e)=>{
    e.preventDefault();
    const{tasks} =this.state;
     const newItem =  this.state.presentItems;
    console.log('newItem',newItem)
    if(newItem !==''){
     const items = [...tasks,newItem];
   
    console.log('items',items)
     this.setState({
      tasks:items,
      presentItems:{
        inputText:'',
        key:'',
      }

     })
    }
  }


  handleDelete =(key)=>{
    console.log('deleted')
    const{tasks} = this.state;
    const filteredItems= tasks.filter(task =>
      task.key!==key);
    console.log('filteredItems',filteredItems);
    this.setState({
      tasks:filteredItems
    });

  }



  handleSave=(getText,key)=>{
    console.log('saved your task');
    const{tasks} =this.state;

    tasks[key] = getText;

    

    this.setState({
      tasks:tasks
    })
  }

  render() {


    const{tasks }= this.state; 
    const{inputText,key}= this.state.presentItems;
    console.log('tasks',tasks);
 
    return (
      <div className="App">
     <header>
     <form className="form-area">
          <input 
          placeholder="Please enter text here"
           className="input-field" 
           onChange={this.handleChange}
           value={inputText}
           />

          <button className="add-btn" onClick={this.handleAdd}>Add</button>
        </form>

     {tasks.map((task,index)=>
            <TaskList 
            task={task} 
            key={index} 
            handleDelete={this.handleDelete} 
            handleSave={this.handleSave}
            />)}

             
     </header>
  

        
      </div>
    );
  }
}

export default App;
