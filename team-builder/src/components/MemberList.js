import React from 'react';

const MemberList = props => {
    return (

        <div>
            {props.memberList.map(member => {
                return (
                    <div className='card' key = {member.id}>
                         
                        <h2>{member.name}</h2>
                        <h4>{member.role}</h4>
                        <p>{member.email}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default MemberList;