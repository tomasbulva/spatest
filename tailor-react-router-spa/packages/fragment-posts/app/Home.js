import React from 'react'
import { Link } from "react-router-dom";
import './style.scss';

export default function App() {
  return (
    <div className="container">
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto" as="font"/>
      <main>
        <div className="grid">
            <div className="card"><Link to="/posts/post-1" rel="prefetch">this page 1</Link></div>
            <div className="card"><Link to="/posts/post-2" rel="prefetch">this page 2</Link></div>
            <div className="card"><Link to="/posts/post-3" rel="prefetch">this page 3</Link></div>
            <div className="card"><Link to="/posts/post-4" rel="prefetch">this page 4</Link></div>
        </div>
      </main>

      <div className="loading__indicator" role="progressbar"><div></div></div>

      <footer>
          Powered by{' '}
          <img src="/discovery.svg" alt="Vercel Logo" className="logo" width="20"/>
      </footer>
    </div>
  )
}
