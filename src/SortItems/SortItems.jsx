import './SortItems.css';

export function SortItems({sortByPriority}) {
  return (
    <div className="Sort-buttons">
      <button className="sort-btn" onClick={sortByPriority}>Sort by Priority</button>
    </div>
  )
}
