import React from 'react';

const Categories = ({filterItems , categories}) => {
  return (
    <div className="btn-container">
      {/* Categories = [all , lunch , breakfast , dinner ,etc...] */}
      {
        categories.map((category , index)=>{
          return <button type='button' className='filter-btn' key={index} onClick={()=> filterItems(category)}>
            {category}
          </button>
        })
      }
    </div>
  );
};

export default Categories;
