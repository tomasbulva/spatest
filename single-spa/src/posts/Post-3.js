import React from "react";
import PostHeader from '../components/postHeader';
import image from '../../public/50667432081_e918e2539d_h.jpg';

export default function ThirdPost() {
  return (
    <>
      <PostHeader />
      <h1>Third Post</h1>
      <img src={image} alt="" width="300" height="300"  rel="prefetch" />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}
