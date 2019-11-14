import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';


function UserForm({ values, errors, touched, status }) {
    const [users, setUsers] = useState([]);


    return (
        <Form>
            <Field type="text" name="name" placeholder="Enter Name" />
            <Field type="text" name="email" placeholder="Enter Email" />
            <Field type="password" name="name" placeholder="Enter Password" />
            <Field type="checkbox" name="tos" checked={values.tos} />
            <button type="submit" >Submit</button>
        </Form>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    }
})(UserForm)

export default FormikUserForm;