import React from 'react'
import { FaRecycle,FaQuidditch } from 'react-icons/fa'
function List({items,removework,editwork}){
  return <div className="todolist-list">

      {items.map((item)=>{
        const id=item.id
        const title=item.title
          return <div key={id} className="todolist-item">
              <p className="title">{title}</p>
              <div className="btn-container">
                   <button type="button" className="edit-btn"
                   onClick={()=>editwork(id)}>
                     <FaRecycle/>
                   </button>
                   <button type="button" className="delete-btn"
                     onClick={()=>removework(id)} >
                     <FaQuidditch/>
                   </button>
              </div>
          </div>

      })}
  </div>

}

export default List


// FaEdit, FaTrash