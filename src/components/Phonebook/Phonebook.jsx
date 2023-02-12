import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { data } from "components/Data/Data";
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class Phonebook extends Component {
    state = {
        contacts: data,
        filter: '',
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(({ id }) => id !== contactId),
        }));
    };

    addContact = data => {
        const searchSameName = this.state.contacts.map((cont) => cont.name).includes(data.name);

        if (searchSameName) {
            alert(`${data.name} is already in contacts`);
            return true;       // To handle reset method not to delete user name and phone number 
        } else if (data.name.length === 0) {
            return alert("Fields must be filled!")
        }

        const newContact = {
            ...data,
            id: nanoid(),
        };

        this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
        }));
    };

    changeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value });
    };

    render() {
        const { filter } = this.state;
        const normalizedFilter = this.state.filter.toLowerCase();
        const visibleContacts = this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );

        return (
            <div>
                <Section title="Phonebook">
                    <ContactForm addUser={this.addContact} />
                </Section>
                <Section title="Contacts">
                    <Filter value={filter} onChange={this.changeFilter} />
                    {visibleContacts.length > 0 && (
                        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
                    )}
                </Section>
            </div>
        );
    };
};