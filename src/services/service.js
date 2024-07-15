/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

export default async (code) => {
  try {
    const data = await axios({ method: 'GET', url: `https://viacep.com.br/ws/${code}/json` });
    return data;
  } catch (error) {
    return error;
  }
};
