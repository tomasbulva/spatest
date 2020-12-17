import React, { useEffect, useState } from "react";
import PostHeader from '../components/postHeader';
import image from '../../public/5946792251_ce596c3ee0_k.jpg';

function FirstPost() {
  const [users, setUsers] = useState(null);
  const [notFound, setNotFound] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3001/api/items`);
      const data = await res.json();


      console.log('data',data);
      if (!data) {
        setNotFound(true);
      }

      setNotFound(false);
      setUsers(data);
    }

    fetchData();
  },[]);

  if (notFound) return <p>Loading...</p>;
  return (
    <>
      <PostHeader />
      <h1>First Post</h1>
      <img src={image} alt="" width="400" rel="preload" />
      <div className="users">
        {!notFound && users && users.map(user => (
          <article key={user.id}>
            <h3>{user.first_name} {user.last_name}</h3>
          </article>
        ))}
      </div>
    </>
  );
}

export default FirstPost;
