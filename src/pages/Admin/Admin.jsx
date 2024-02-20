import React from 'react'
import Grilla from '../../components/Grilla/Grilla'

const Admin = ({setUser}) => {
    return (
      <div className="container">
        <Grilla setUser={setUser}/>
      </div>
    );
  }

export default Admin