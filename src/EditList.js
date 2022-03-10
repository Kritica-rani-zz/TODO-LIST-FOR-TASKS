// @flow 
import * as React from 'react';
import './TaskList.css';

function EditList(props)  {
    const{toggleVal,handleSave,key} = props;
    const[getText,setText] = React.useState('')

  function  handleOnChange(e){
      setText([e.target.value])
   }

  function handleClick (){
       handleSave(getText,key);

       toggleVal(false);
   }

    return (
        <div className="list">
            <p><input onChange={handleOnChange}  /></p>
            <img src ="https://www.flaticon.com/premium-icon/icons/svg/3475/3475954.svg" 
            alt="save-icon"
            // handleSave={()=>{handleSave(setEdit)}}
            onClick={handleClick}
            
            />
        </div>
    );
};
export default EditList;