import React from 'react';

const PageSelect = ({ pages, onSelect }) => {
  return (
    <div>
      <label>Select a Page: </label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select a Page</option>
        {pages.map(page => (
          <option key={page.id} value={page.id}>{page.name}</option>
        ))}
      </select>
    </div>
  );
};

export default PageSelect;
