import Contact from "../Contact/Contact";
import styles from "./ContactList.module.scss";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles["contacts-grid"]}>
      {contacts.map(({ id, number, name }) => (
        <Contact
          key={id}
          id={id}
          number={number}
          name={name}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
