
import React from 'react';

 const Filter = ({ filter, onFilterChange }) => {
    return (
      <>
        <button onClick={() => onFilterChange('all')}>All</button>
        <button onClick={() => onFilterChange('completed')}>Completed</button>
        <button onClick={() => onFilterChange('pending')}>Pending</button>
      </>
    );
  };

  export default Filter;
