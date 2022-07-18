import React from 'react';

type Props = {
    person: People;
  };

  export const UserRow: React.FC<Props> = ({ person }) => (
    <>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.username}</td>
        <td>{person.id}</td>
    </>
  );
