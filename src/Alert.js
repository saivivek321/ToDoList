import React, { useEffect } from 'react'

function Alert({dic ,removeAlert,list}){

  useEffect(()=>{
     const timeout= setTimeout(() => {
      removeAlert()
     }, 2000)
    return ()=>clearTimeout(timeout)
  },[list])

  const type_=dic.type;
  const msg=dic.msg;
  const alertclass='alert-'+type_;
  return <p className={'alert '+alertclass}>{msg}</p>
}

export default Alert
