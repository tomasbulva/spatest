import PostHeader from '../components/postHeader';
import Image from 'next/image'

export default function SecondPost({users}) {
  if (!users) return <p>Loading...</p>;
  return (
    <>
      <PostHeader />
      <h1>Second Post</h1>
      <img src="/15180879465_a6c8719b15_h.jpg" alt="" width="300" />
      <div className="users">
        {users.map(user => (
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
