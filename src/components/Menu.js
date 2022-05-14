import "./catalog.css";

function Menu(props) {
  return (
    <>
    <div className="filterMenu">
        {props.filters.map((filter) =>{
            return <span className="filter">{filter}</span>
        })}
    </div>
    </>
  );
}

export default Menu;