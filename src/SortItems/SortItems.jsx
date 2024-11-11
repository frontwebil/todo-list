import './SortItems.css';

export function SortItems({sortByPriorityDescending , sortByPriorityAscending , setDefault}) {
  return (
    <div className="Sort-buttons">
      <button className="sort-btn active" onClick={sortByPriorityDescending}>Sort by priority in descending</button>
      <button className="sort-btn active" onClick={sortByPriorityAscending}>Sort by priority in ascending</button>
      <button className='sort-btn active' onClick={setDefault}>Default</button>
    </div>
  )
}
