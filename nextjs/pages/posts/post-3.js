import PostHeader from '../components/postHeader';
import Image from 'next/image'

export default function ThirdPost() {
  return (
    <>
      <PostHeader />
      <h1>Third Post</h1>
      <Image src="/50667432081_e918e2539d_h.jpg" alt="" width="300" height="300" />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}
