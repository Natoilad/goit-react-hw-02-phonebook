import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
// model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  addcontact = (namecontact, number) => {
    this.setState(prevstate => {
      const arr = [...prevstate.contacts];
      arr.push({ id: nanoid(), name: namecontact, number: number });
      return { contacts: arr };
    });
  };
  filterContact = e => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div
        style={{
          padding: 50,
          height: '100vh',
          display: 'flex',
          // justifyContent: 'center',
          flexDirection: 'column',
          // alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <form
          onSubmit={e => {
            const { name, number } = this.state;
            e.preventDefault();
            this.addcontact(name, number);
            this.reset();
          }}
        >
          <label>
            Name
            <br />
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <br />
          </label>
          <br />
          <label>
            Number <br />
            <input
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit">add contact</button>
        </form>
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <ContactList listContact={this.filterContact()} />
      </div>
    );
  }
}
