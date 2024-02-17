import React from 'react'
import Grilla from '../../components/Grilla/Grilla'

const Admin = ({setUser}) => {
    return (
      <div className="container">
        <h1>BIENVENIDOS AL PANEL DE ADMINISTRACION</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">USER</th>
              <th scope="col">MAIL</th>
              <th scope="col">ROLE</th>
              <th scope="col">UPGRADE</th>
            </tr>
          </thead>
          <tbody id="tableBody">
          </tbody>
        </table>
      </div>
    );
  }

export default Admin