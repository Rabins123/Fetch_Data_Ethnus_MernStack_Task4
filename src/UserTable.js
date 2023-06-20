import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((response) => {
        console.log(response.data.users);
        setUsers(response.data.users)
    })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Maiden Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Birthdate</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img src={user.image} alt="User" style={{ width: '50px' }} />
                </td>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.maidenName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>{user.bloodGroup}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.eyeColor}</td>
                <td>{user.hair.color},{user.hair.type}</td>
                <td>{user.address.address},{user.address.city}, {user.address.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
