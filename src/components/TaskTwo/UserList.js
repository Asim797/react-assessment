import React,{Fragment} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../redux/slices/userSlice';
import {Link, useNavigate} from 'react-router-dom';

function UserList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <Fragment>
            <Link style={{marginTop: 30}} to={"/"}>Back</Link>
            <h2>Users</h2>
            <Link style={{marginTop: 30, marginLeft: 20}} to={"/users/new"}>Add</Link>
            <ul>
                {users?.map(user => (
                    <li key={user.id} style={{marginTop:10}}>
                        {user.name} - {user.email}
                        <button style={{marginLeft: 20}} onClick={() => navigate(`/users/edit/${user.id}`, { state: { user } })}>Edit</button>
                        <button style={{marginLeft: 20}} onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default UserList;
