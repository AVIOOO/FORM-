import React from 'react'
import { useFormik } from 'formik';
import "./styles.css"
function Form() {


    const formik = useFormik({
        initialValues: {

            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('form submit', values)
        },
        validate: (values) => {
            let errors = {};
         
            if (!values.email) {
                errors.email = "Email Rquired"
            }
            if (!values.password) {
                errors.password = "Password Rquired"
            }
            return errors;
        }
    })
    //console.log('form values', formik.values)
    return (
        <div class="Rectangle">
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <h3 className='sign-in '>  Sign in </h3>
                <p className='tag'>Enter your account details below</p>




                <input className='name' type="email" placeholder="Email address" name="email" id="email"
                    value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
                <br />

                <input className='name' type="password" placeholder="Password   " name="password" id="password"
                    value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}
                <br />




                <button className='button' type="submit">Get started</button>
                <p>Don't have an account ?<a href='./index.html' className='name2'> <p className='name2'>create for free</p></a></p>

            </form>
        </div>
    )


}

export default Form