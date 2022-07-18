import React from 'react';
import { UserRow } from './UserRow';

type Props = {
  people: People[];
};

export const UserTable: React.FC<Props> = ({ people }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>username</th>
        <th>id</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <tr key={person.id}>
          <UserRow person={person} />
        </tr>
      ))}
    </tbody>
  </table>
);