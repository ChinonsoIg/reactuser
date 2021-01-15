import React from 'react'

const pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  return (
    <div>
      {
        pages.map(num => (
          <button 
            key={num}
            onClick={() => handleClick(num)}
            >{num}
          </button>
        ))
      }
    </div>
  )
}

export default pagination;
