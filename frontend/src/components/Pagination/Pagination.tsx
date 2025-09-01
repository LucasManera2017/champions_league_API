import React from 'react';

// The component now accepts a single `props` object and destructures it
export default function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }: { totalPosts: number; postsPerPage: number; setCurrentPage: (page: number) => void; currentPage: number }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='mb-8'>
      {pages.map((page, index) => (
        <button
          type='button'
          key={index}
          className={`
            mx-1 px-3 py-1 border-2 rounded-lg 
            shadow-md transition-all duration-300
            
            ${page === currentPage ? 
              'bg-fuchsia-500 text-black border-fuchsia-500 neon-button-glow' : 
              'bg-black/80 border-[1px] text-lime-400 border-lime-400 hover:bg-black/60 hover:text-lime-200 cursor-pointer' 
            }
          `}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}