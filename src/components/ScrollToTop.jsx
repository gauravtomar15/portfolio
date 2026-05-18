import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-200 shadow-glow transition-all duration-300 ${visible ? 'visible scale-100 opacity-100' : 'invisible scale-75 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="h-4 w-4" />
    </button>
  );
}
