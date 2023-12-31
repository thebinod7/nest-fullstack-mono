import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api';

export default function List() {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCurrentDate(data.dt);
      if (data) setUsers(data.data);
    }

    fetchData();
  }, []);

  console.log(users);

  return (
    <div>
      <ul>
        {users.length
          ? users.map((u) => {
              return (
                <li key={u.id}>
                  {u.email} -{' '}
                  <b>
                    {' '}
                    {u.firstName} {u.lastName} (Magical Date: {currentDate})
                  </b>
                </li>
              );
            })
          : 'No users!'}
      </ul>
    </div>
  );
}
