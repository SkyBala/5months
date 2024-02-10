import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeInput, deleteAllUsers } from "../../store/usersSlice";



function UsersPage() {
    const dispatch = useDispatch()

    const { inputValue, users } = useSelector(state => state.usersReducer)
   console.log(inputValue)
    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    const clearField = ()=>{
        dispatch(changeInput(''))

    }
    const deleteAll = ()=>{
        dispatch(deleteAllUsers())
    }


    return (
        <div>
            <input type="text" value={inputValue} onChange={changeInputFunc} />
            <button onClick={() => clearField()}>clear</button>
            <button onClick={() => deleteAll()}>delete all</button>
            <button onClick={addUserFunc}>add user</button>

            {users.map(user => <h3>{user}</h3>)}

        </div>
    )
}

export default UsersPage