import React from 'react';

const Pagination = ({ handleNext, handlePrev, pageNo }) => {
  return (
    <div className="bg-blue-400 mt-5 p-2 flex justify-center">
      <div onClick={handlePrev} className="cursor-pointer">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="mx-4 font-bold">{pageNo}</div>
      <div onClick={handleNext} className="cursor-pointer">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
