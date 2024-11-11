import './SortItems.css';

export function SortItems({sortByPriority , isAscending}) {
  return (
    <div className="Sort-buttons">
      <button className="sort-btn active" onClick={sortByPriority}>Sort by Priority</button>
      {isAscending ? "Sorted Descending" : "Sorted Ascending "}
    </div>
  )
}
