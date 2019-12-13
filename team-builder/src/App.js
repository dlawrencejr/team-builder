import React, {useState} from 'react';
import Form from './components/Form'
import teamData from './MemberData'
import MembersList from './components/MembersList'
import './App.css';

function App() {

  const [team, setTeam]=useState(teamData);
  const addNewMember = member => {
    setTeam([...team,member])
  }

  return (
    <div>

      <h1>Team-Builder</h1>

      <MembersList memberList = {team}/>
      <Form addNewMember = {addNewMember}/>
  
    </div>
  );
}

export default App;
