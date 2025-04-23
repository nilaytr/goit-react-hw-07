import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div>
            <li className={css.contactList}>
                <span>{contact.name}</span>
                <FaUser className={css.userIcon} size={22} />
                <span>{contact.number}</span>
                <FaPhone className={css.phoneIcon} size={22} />
                <button className={css.contactBtn} onClick={handleDelete}>Delete</button>
            </li>
        </div>
    );
}

export default Contact