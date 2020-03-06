import React, {useState} from 'react';
import './App.css';
import MoreForm from "./components/MoreForm";

const App = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    confirmPassword:"",
  })

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      validated:false
    })
  }

  return (
    <div className="App">
      <div>
        {formState.firstName.length < 2 ?  "First Name must be 2 characters long" : ""}<br/>
        {formState.lastName.length < 2 ?  "Last Name must be 2 characers long" : ""}<br/>
        {formState.email.length < 2 ?  "email is invalid" : ""}<br/>
        {formState.password.length < 8 ?  "Password must be 8 characters long" : ""}<br/>
        {formState.confirmPassword != formState.password ? "passwords dont match" : ""}
      </div>
      
      <MoreForm
      onChangeHandler = {onChangeHandler}
      onSubmitHandler = {onSubmitHandler}
      />
      <p>your From Data</p>
  <p>First Name: {formState.firstName}</p>
  <p>Last Name: {formState.lastName}</p>
  <p>Email: {formState.email}</p>
  <p>Password: {formState.password}</p>
  <p>Confirm Password: {formState.confirmPassword}</p>
    </div>
  )
}

export default App;
