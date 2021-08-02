import React, { Component } from 'react';
import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import { connect } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';

class ContactsPage extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h1>Phone Book</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>download...</h1>}
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
