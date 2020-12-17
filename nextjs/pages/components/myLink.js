import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyLink({ href, children, prefetch }) {
  const router = useRouter();

  useEffect(() => {
    console.log(href+ " prefetch is: "+ prefetch);
    if (prefetch) router.prefetch(href);
  });

  const handleClick = e => {
    e.preventDefault();
    console.log("Having fun with Next.js.");
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      rel="prefetch"
      >
      {children}
    </a>
  );
}
