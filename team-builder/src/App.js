import React, {useState} from 'react';
import MemberList from './components/MemberList';
import Form from './components/Form';
import data from './data';

import './App.css';

function App() {

  const [team, setTeam]=useState(data);
  const addNewMember = member => {
    setTeam([...team,member])
  }

  return (
    <div>

      <h1>Team Builder</h1>
      <MemberList memberList = {team}/>
      <Form addNewMember={addNewMember}/>


     
    </div>
  );
}

export default App;
