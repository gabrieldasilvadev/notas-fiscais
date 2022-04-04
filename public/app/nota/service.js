import { handleStatus } from '../utils/promise-helpers';

const API = 'http://localhost:3000/notas';

export const notasService = {
  listAll() {
    return fetch(API)
      .then(handleStatus)
      .catch((err) => {
        console.log(err);
        return Promise.reject('Dont possible get notas fiscais');
      });
  },
};
