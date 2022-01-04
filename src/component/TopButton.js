import React, { useState, useEffect } from 'react'

const TopButton = ({container}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const homer = container.current
    if (!homer) return
    homer.addEventListener("scroll", () => {
      if (homer.scrollTop > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [container]);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    if (!container) return
    container.current.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} 
          className="fixed bottom-10 right-10 bg-red-400 rounded-full w-16 h-16 z-10
            border-2 border-gray-700 dark:border-white
            hover:opacity-20 transition-all">
          Top
        </button>
      )}
    </>
  )
}

export default TopButton
