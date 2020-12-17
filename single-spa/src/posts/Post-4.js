import React from "react";
import PostHeader from '../components/postHeader';
import image from '../../public/50669551202_851a6101de_k.jpg';

export default function FourthPost() {
  return (
    <>
      <div className="container">
        <PostHeader />
        <h1>Fourth Post</h1>
        <img src={image} alt="" rel="prefetch" />
      </div>
    </>
  );
}
