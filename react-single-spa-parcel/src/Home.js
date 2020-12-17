import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import './style.css';

export default function App() {
  const badgeLargeLeftIconRef = useRef(null);

  useEffect(() => {
    const onClick = () => {
      alert('clicked');
    };

    badgeLargeLeftIconRef.current.onClick = onClick;
  }, []);

  return (
    <div className="container micro-ui-namespace">
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto" as="font" />
      <main>
        <div className="grid">
          <div className="card"><Link to="/posts/post-1" rel="prefetch">this page 1</Link></div>
          <div className="card"><Link to="/posts/post-2" rel="prefetch">this page 2</Link></div>
          <div className="card"><Link to="/posts/post-3" rel="prefetch">this page 3</Link></div>
          <div className="card"><Link to="/posts/post-4" rel="prefetch">this page 4</Link></div>
        </div>
      </main>

      <els-badge ref={badgeLargeLeftIconRef} label="Click me" icon-name="delete" clickable large />
      <div className="loading__indicator" role="progressbar"><div></div></div>

      <footer>
        Powered by{' '}
        <img src="/discovery.svg" alt="Vercel Logo" className="logo" width="20" />
      </footer>
    </div>
  )
}
