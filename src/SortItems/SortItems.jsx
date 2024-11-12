import "./SortItems.css";

export function SortItems({
  handleClickChange , 
  sortButton
}) {

  


  return (
    <div className="Sort-buttons">
      <button
        className={`sort-btn ${sortButton === "default" ? "" : "active"}`}
        onClick={handleClickChange}
      >
        Sort
      </button>
    </div>
  );
}
