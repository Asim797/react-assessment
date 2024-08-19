import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../redux/slices/userSlice';
import {useNavigate, useLocation, Link} from "react-router-dom";

function UserForm() {
    const location = useLocation();
    const existingUser = location.state?.user;
    const navigate = useNavigate();
    const [user, setUser] = useState(existingUser || { name: '', email: '' });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = () => {
        if (user.name.trim() === ""){
            alert("Enter Name")
            return;
        }
        if (user.email.trim() === ""){
            alert("Enter Email")
            return;
        }

        if (existingUser) {
            dispatch(updateUser({ id: existingUser.id, updatedFields: user }));
        } else {
            dispatch(addUser({ id: Date.now(), ...user }));
        }
        setUser({ name: '', email: '' });
        navigate('/users');
    };

    return (
        <Fragment>
            <Link style={{marginTop: 30}} to={"/users"}>Back</Link>
            <form style={{marginTop: 40}} onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <input name="name" value={user.name} onChange={handleChange} style={{marginRight:10}} placeholder="Name"/>
                <input name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                <button type="submit">Save</button>
            </form>
        </Fragment>
    );
}

export default UserForm;
