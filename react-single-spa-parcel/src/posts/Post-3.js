import React from "react";
import PostHeader from '../components/postHeader';

export default function ThirdPost() {
  return (
    <>
      <PostHeader />
      <h1>Third Post</h1>
      <img src="/50667432081_e918e2539d_h.jpg" alt="" width="300" height="300"  rel="prefetch" />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  }
}
