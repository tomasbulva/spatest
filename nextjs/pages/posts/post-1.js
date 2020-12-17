import PostHeader from '../components/postHeader';
import Image from 'next/image';
import Head from 'next/head';

function FirstPost({users}) {
  if (!users) return <p>Loading...</p>;
  return (
    <>
      <link rel="prefetch" as="font" type="font/woff2" href="/jetBrains.woff" crossorigin />
      <PostHeader />
      <h1>First Post</h1>
      <img src="/5946792251_ce596c3ee0_k.jpg" alt="" width="400" rel="prefetch" />
      <div className="users">
        {users.map(user => (
          <article key={user.id}>
            <h3>{user.first_name} {user.last_name}</h3>
          </article>
        ))}
      </div>
      <style jsx global>{`
        @font-face {
          font-family: 'JetBrains';
          src: local('JetBrains Mono Regular') format('woff');
        }
      `}</style>
      <style jsx>{`
        .users {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps(context) {
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

export default FirstPost;
