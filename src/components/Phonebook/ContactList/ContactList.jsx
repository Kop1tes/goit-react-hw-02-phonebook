import React from "react";
import { Contact } from "../Contact/Contact";
import PropTypes from "prop-types";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (<Contact key={contact.id} contact={contact} deleteContact={deleteContact} />))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};