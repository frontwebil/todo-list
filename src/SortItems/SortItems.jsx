import { useState } from 'react';
import './SortItems.css';

export function SortItems({sortByPriorityDescending , sortByPriorityAscending , setDefault}) {

  const [activeButton , setActiveButton] = useState('default')

  function handleSortDescending(){
    setActiveButton('descending')
    sortByPriorityDescending()
  }
  function handleSortAscending(){
    setActiveButton('ascending')
    sortByPriorityAscending()
  }
  function handleSortDefault(){
    setActiveButton('default')
    setDefault()
  }

  return (
    <div className="Sort-buttons">
      <button className={`sort-btn ${activeButton === 'descending' ? 'active' : ''}`}  onClick={handleSortDescending}>Sort by priority in descending</button>
      <button className={`sort-btn ${activeButton === 'ascending' ? 'active' : ''}`}  onClick={handleSortAscending}>Sort by priority in ascending</button>
      <button className={`sort-btn ${activeButton === 'default' ? 'active' : ''}`}  onClick={handleSortAscending}>Default</button>
    </div>
  )
}
