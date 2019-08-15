import React, {useState} from 'react';

const Form = props => {
    const [team, setTeam] = useState({name:'',email:'',role:''});
    const changeHandle = event => {
        setTeam({...team,[event.target.name]: event.target.value});
    };
    const submitForm = event => {
    event.preventDefault();
    const newMember = {
        ...team,
        id: Date.now(),
        value: ''
    };   
    props.addNewMember(newMember);
   
    };

    return (

        <form onSubmit = {submitForm}>
            <h1>Fill-in member info to add on the team:</h1>
            
            <label htmlFor = 'name'> Name: {' '} </label>
            <input type='text' name='name' onChange={changeHandle} value={team.name}/>
            <br/><br/>

            <label htmlFor = 'email'>Email: {' '}</label>
            <input type='text' name='email' onChange={changeHandle} value={team.email}/>
            <br/><br/>

            <label htmlFor = 'role'>Role: {' '}</label>
            <input type='text' name='role' onChange={changeHandle} value={team.role}/>
            <br/><br/>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;