
import "./search-results.css";
import {useNavigate} from 'react-router-dom'
const SearchResultsRow = ({ house }) => {
  const navigate = useNavigate();

  const setActive = () => {
   navigate(`/house/${house.id}`,{ replace: true });
  };

  return (
    <tr onClick={setActive}>
      <td >{house.address}</td>
      <td >{house.price}</td>
      <td >{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
