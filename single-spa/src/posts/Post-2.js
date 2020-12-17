import React, { useEffect, useState } from "react";
import PostHeader from '../components/postHeader';
import image from '../../public/15180879465_a6c8719b15_h.jpg';

export default function SecondPost() {
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
      <h1>Second Post</h1>
      <img src={image} alt="" width="300" rel="prefetch" />
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

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3001/api/items`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { users: data }, // will be passed to the page component as props
  }
}
