import PostHeader from '../components/postHeader';
import Image from 'next/image'

export default function FourthPost() {
  return (
    <>
      <div className="container">
        <PostHeader />
        <h1>Fourth Post</h1>
      </div>
      <Image src="/50669551202_851a6101de_k.jpg" alt="" layout="fill" />

      <style jsx>{`
        .container {
          position: absolute;
          z-index: 1;
        }
      `}</style>
    </>
  );
}
