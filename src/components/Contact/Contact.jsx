import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.item}>
    <p>
      <span>
        <FaUser />
        {name}
      </span>
      <span>
        <FaPhone />
        {number}
      </span>
    </p>
    <button onClick={() => onDelete(id)} className={styles.button}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
