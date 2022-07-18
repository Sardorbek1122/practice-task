// eslint-disable-next-line max-len
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const usersInfo = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
