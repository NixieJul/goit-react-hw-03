import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.container}>
    <label>
      Find contacts by name:
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  </div>
);

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
