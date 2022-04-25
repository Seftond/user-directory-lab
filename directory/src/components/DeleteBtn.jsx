import React from 'react'

function DeleteBtn({current, setCurrent, setMyData, myData}) {

    function deleteFn(){
        setMyData(myData.splice(current, 1));
        setCurrent(current)
    }
  return (
    <div>
        <button onClick={() => deleteFn()} >Delete Card</button>
    </div>
  )
}

export default DeleteBtn