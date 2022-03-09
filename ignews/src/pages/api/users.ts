import { NextApiRequest, NextApiResponse } from 'next';

export default function (request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: 'Eric' },
    { id: 2, name: 'Emilli' },
    { id: 3, name: 'Manu' },
  ];

  return response.json(users);
}