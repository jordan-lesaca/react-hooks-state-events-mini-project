import React from "react";

function CategoryFilter({ categories, selectCategory, onSelectCategory }) {
  const categoryButton = categories.map((category) => {
    const className = category === selectCategory ? "selected" : null
    
    function handleOnSelectCategory(){
      onSelectCategory(category)
    }
    
  return (
    <button 
      key={category} 
      className={className} 
      onClick={handleOnSelectCategory}> 
      {category} 
    </button>
  )
  })

  return(
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButton}
    </div>
  );
}

export default CategoryFilter;
