import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name,setName]=useState('');
  const [list,setList]=useState([]);
  const [isEditing,setIsEditing]=useState(false);
  const [editID,seteditID]=useState(null);
  const [alert,setAlert]=useState({
    show:false,
    msg:"",
    type:""
  })


 function onFormSubmit(event){
    event.preventDefault();
    //console.log("button clicked");
     if(!name){
       setAlert({ show:true, msg:"Add Some Work To List", type:"failure"})
     }
     else if(name && isEditing){
        setList(
          list.map((work)=>{
            if(work.id===editID){
              return {...work,title:name}
            }
            return work
          })
        )
        setName('');
        seteditID(null)
        setIsEditing(false)
        setAlert({ show:true, msg:"Work Edited Successfully",type:"success"})
     }
     else {
        setAlert({ show:true, msg:"Work Added To List",type:"success"})

         const newItem=
         {
           id:new Date().getTime().toString(),
           title:name
         }
         setList([newItem,...list])
         setName('')
     }
  }


 function changeAlert(){
      setAlert({show:false, msg:"",type:""})
 }


 function clearList(){
   setAlert({show:true, msg:"Cleared Full List",type:"success"}) 
   setList([])
 }


 function removework(id){
  setAlert({show:true, msg:"Work Removed",type:"failure"}) 
  setList(list.filter((work)=>{
      return work.id!==id
  }))
 }

 function editwork(id){
     const work=list.find((i)=>i.id === id)
     setIsEditing(true)
     seteditID(id)
     setName(work.title)

 }


  return <div className="section-center">
      <form className="todolist-form" onSubmit={onFormSubmit}> 

              {alert.show && <Alert dic={alert} removeAlert={changeAlert}
                list={list}
              />}

              <h3>to do list</h3>

              <div className="form-control">
                  <input type="text" className="todolist" value={name} 
                    onChange={(prop)=>{setName(prop.target.value)}}/>

                  <button type="submit" className="submit-btn">
                      {isEditing?'Edit':'Enter'}
                    </button>  
              </div>
      </form>
  
      {list.length >0 && 
      <div className="todolist-container">
           <List items={list} removework={removework} editwork={editwork}/>
           <button className="clear-btn" onClick={clearList}>Clear Full List</button>
      </div>
      }
  </div>
}

export default App
