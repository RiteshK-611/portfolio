import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
}

const ScrollLink = ({ href, children } : ScrollLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    router.push(href);
  };

  return (
    <a href={href}>
      {children}
    </a>
  );
};

export default ScrollLink;
