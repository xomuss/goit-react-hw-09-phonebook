import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import styles from './Form.module.css';
import shortid from 'shortid';

// const mapDispatchToProps = dispatch => ({
//   onSubmit: cont => dispatch(operations.addContact(cont)),
// });

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // state = {
  //   name: '',
  //   number: '',
  // };

  // nameInputId = shortid.generate();
  // telInputId = shortid.generate();

  const handleChange = e => {
    const { value } = e.target;

    setName(value);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const foundName = this.props.contacts.find(({ name }) =>
  //     name.includes(this.state.name),
  //   );
  //   if (!foundName) {
  //     this.props.onSubmit(this.state);
  //     this.reset();
  //     return;
  //   }
  //   alert('this name already exist');

  //   // this.props.onSubmit(this.state);
  //   // : alert('This name already exist');

  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  return (
    <form className={styles.form} onSubmit={this.handleSubmit}>
      <label htmlFor={this.nameInputId}>
        Name
        <input
          className={styles.input}
          id={this.nameInputId}
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={this.telInputId}>
        Telephone
        <input
          className={styles.input}
          id={this.telInputId}
          onChange={this.handleChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
