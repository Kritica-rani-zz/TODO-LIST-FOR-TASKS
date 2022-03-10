import React, { useState } from 'react';
import './TaskList.css';
import EditList from './EditList';

 function TaskList  (props) {
   const{task,handleDelete}=props;
   const{inputText,key} = props.task;
   const[getEdit,setEdit]=useState(false);
   console.log(' tasks inside tasklist',task)
     console.log('inputText ',inputText);
     console.log('key',setEdit,getEdit);
     

    return (
        <div >
          {
            getEdit?<EditList handleSave={props.handleSave} key={key}toggleVal={setEdit}/>:<div className="list" >
            <p>{task.inputText}</p>
            <img src ="https://www.flaticon.com/svg/static/icons/svg/2689/2689808.svg" 
            alt="edit-icon" onClick={()=>{setEdit(!getEdit)}}/>
            <img 
            src="https://www.flaticon.com/premium-icon/icons/svg/3476/3476210.svg" 
            alt="delete-btn" onClick={()=>handleDelete(key)}/>

          </div> 
          }
         
          
         
        </div>
    );
};
export default TaskList;