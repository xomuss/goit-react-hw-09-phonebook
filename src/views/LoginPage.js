import { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { login } from '../redux/auth/auth-operations';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  loginPassword = shortid.generate();
  loginEmail = shortid.generate();

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label>
          Email
          <input
            className={styles.input}
            onChange={this.handleChange}
            type="email"
            value={this.state.mail}
            name="email"
            id={this.loginEmail}
          />
        </label>
        <label>
          Password
          <input
            className={styles.input}
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            id={this.loginPassword}
          />
        </label>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};
// альтернативная запись
// const mapDispatchToProps = dispatch => ({
//   handleSubmit: data => dispatch(register(data)),
// });

export default connect(null, mapDispatchToProps)(LoginPage);
