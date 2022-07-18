import React, { useCallback, useEffect, useState } from 'react';
import { usersInfo } from '../api/usersInfo';
import { UserTable } from './UserTable';

export const UserPage: React.FC = () => {
  const [people, setPeople] = useState<People[]>([]);

  const loadPage = useCallback(
    async () => {
      const loadedPage = await usersInfo();

      setPeople(loadedPage);
    },
    [],
  );

  useEffect(
    () => {
      loadPage();
    },
    [],
  );

  return (
    <>
      <p className="title has-title-centered">Users Page</p>
      <UserTable people={people} />    </>
  );
};