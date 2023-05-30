import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };

    // функція запису отриманих даних до масиву contacts
    formSubmit = data => {
        if (
            this.state.contacts.findIndex(
                contact => contact.name === data.name
            ) === -1
        ) {
            this.state.contacts.push(data);
        } else {
            alert(`${data.name} is already in contacts.`);
        }
        this.setState({ contacts: this.state.contacts });
    };

    // функція отримання даних з поля filter
    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    // функція видалення контакту зі списку
    deleteContact = Id => {
        const idxContact = this.state.contacts.findIndex(
            contact => contact.id === Id
        );

        this.setState({ contact: this.state.contacts.splice(idxContact, 1) });
    };

    render() {
        const { contacts, filter } = this.state;

        // умова пошуку контактів у списку за значенням веденних даних у поле filter
        const visibleContact = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );

        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm receiveData={this.formSubmit} />

                <h2>Contacts:</h2>
                <Filter value={filter} changeFilter={this.changeFilter} />
                {contacts.length !== 0 && (
                    <ContactsList
                        contacts={visibleContact}
                        deleteContact={this.deleteContact}
                    />
                )}
            </Container>
        );
    }
}
