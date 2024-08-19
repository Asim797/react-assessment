import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from '../components/TaskOne/ItemList';
import UserList from '../components/TaskTwo/UserList';
import UserForm from '../components/TaskTwo/UserForm';
import Conditional from "../components/TaskThree/Conditional";
import StepForm from "../components/TaskFour/StepForm";
import NotFound from "../components/NotFound";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ItemList />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/new" element={<UserForm />} />
                <Route path="/users/edit/:id" element={<UserForm />} />
                <Route path="/conditional-rendering" element={<Conditional condition={false} />} />
                <Route path="/step-form" element={<StepForm />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}

export default Routing;