import React from 'react';

const MemberList = props => {
    return (

        <div>
            {props.memberList.map(member => {
                return (
                    <div className='card' key = {member.id}>
                         
                        <h2>{member.name}</h2>
                        <p>{member.email}</p>
                        <h4>{member.role}</h4>
                        
                        
                    </div>
                )
            })}
        </div>
    )
}

export default MemberList;