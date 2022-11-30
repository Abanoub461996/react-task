import "./Filter.css"
const Filter = () => {
  return (
    <>
    <div className="header_elem">
      <div className="gym-filter">
          <form className="filter">
            <div className="filter__container">
              <input type="text" placeholder="Search by gym name, facilities" className="filter_input" />
              <div className="filter_action-btns">
                <button type="button" className="filter_change-btn" >Filter</button>
                <button type="button" className="filter_search-btn">FIND GYMS</button>
              </div>
            </div>
          </form>
      </div>
      
      <button className="view_wicth-btn">SWITCH TO MAP VIEW</button>
    </div>  
    </>
  );
};
export default Filter;