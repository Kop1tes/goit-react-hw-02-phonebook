import React from "react";
import PropTypes from "prop-types";
import { Button, ContactItem } from "./Contact.styled";

export const Contact = ({contact: {id, name, number}, deleteContact}) => {
    return (
        <ContactItem>
            <p>{ name }</p>
            <p>{ number }</p>
            <Button type="button" name="delete" onClick={() => deleteContact(id)}>Delete</Button>
        </ContactItem>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    deleteContact: PropTypes.func.isRequired,
};