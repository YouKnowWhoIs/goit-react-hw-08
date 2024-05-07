import { useDispatch, useSelector } from "react-redux";
import { changeFilterName } from "../../redux/filters/filtersSlice.js";
import { changeFilterNumber } from "../../redux/filters/filtersSlice.js";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const selectFilterName = useSelector((state) => state.filters.name);
  const selectFilterNumber = useSelector((state) => state.filters.name);

  const handleInputChangeName = (event) => {
    dispatch(changeFilterName(event.target.value));
  };

  const handleInputChangeNumber = (event) => {
    dispatch(changeFilterNumber(event.target.value));
  };

  return (
    <div className="search-box-conteiner">
      <p>Find contacts by name</p>
      <input
        onChange={handleInputChangeName}
        value={selectFilterName}
        type="text"
        placeholder="Search..."
        className="search-box-input"
      />

      <p>Find contacts by number</p>
      <input
        onChange={handleInputChangeNumber}
        value={selectFilterNumber}
        type="text"
        placeholder="Search..."
        className="search-box-input"
      />
    </div>
  );
};
