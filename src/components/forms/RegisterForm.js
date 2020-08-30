

import React from 'react';
import { useForm } from 'react-hook-form';
import { sameAs } from 'helpers/validators';
import FormError from "./FormError";


// eslint-disable-next-line
const EMAIL_PATTERN =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

const RegisterForm = ({onSubmit}) => {

    const { register, handleSubmit, errors, getValues} = useForm();
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    ref={
                        register({required: "Username is required"})} 
                    name="username"
                    type="text"
                    className="form-control"
                    id="username" />
                  <FormError errors={errors} name="username">
                    {(message) => <p>{message}</p>}
                  </FormError>
            </div>
    
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    ref={
                        register({
                            required: "email is required", 
                            pattern: {value: EMAIL_PATTERN, message: "Not valid email format!"}})} 
                    name="email"
                    type="email"
                    className="form-control"
                    id="email" />
                    <FormError errors={errors} name="email">
                    {(message) => <p>{message}</p>}
                    </FormError> 
            </div>
    
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    ref={
                        register({
                            required: "password is required", minLength: {value: 8, message: "Minimum length of password is 8 characters!"}})}
                    name="password" 
                    type="password"
                    className="form-control"
                    id="password" />
                    <FormError errors={errors} name="password">
                    {(message) => <p>{message}</p>}
                    </FormError>  
            </div>
    
            <div className="form-group">
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input 
                    ref={register({required: true, minLength: 8, validate: {sameAs: sameAs('password', getValues)}})}
                    name="passwordConfirmation"
                    type="password"
                    className="form-control"
                    id="passwordConfirmation" />
                   { errors.passwordConfirmation &&
                     <div className="alert alert-danger">
                        { errors.passwordConfirmation.type === 'required' &&
                            <span>password confirmation is required</span> 
                        }
                        { errors.passwordConfirmation.type === 'minLength' &&
                           <span>Minimum length of password confirmation is 8 characters!</span>
                        }
                        { errors.passwordConfirmation.type === 'sameAs' &&
                           <span>Password confirmation has to be the same as password!</span>
                        }
                     </div>
                  } 
            </div>
            <button 
                type="submit" 
                className="btn btn-bwm-main">Submit</button>
         </form>
    ) 

}

export default RegisterForm;