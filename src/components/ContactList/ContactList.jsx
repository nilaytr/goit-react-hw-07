import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = ({ onDelete }) => {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.value);
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <ul className={css.contactUl}>
                {filteredContacts.length > 0 ? (
                    filteredContacts.map((contact) => (
                        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
                    ))
                ) : (<p>No contacts found.</p>)}
            </ul>
        </div>
    );
}

export default ContactList