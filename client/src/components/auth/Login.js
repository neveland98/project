import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {Paper} from '@material-ui/core';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      errors: {}
    };
  }

componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      name: this.state.name,
      password: this.state.password,
      attributes: ""
    };
this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
render() {
    const { errors } = this.state;
return (
      <div className="container-fluid" style = {{backgroundColor:'#eeeeee', width: "100vw", height: "100vh", overflow: "auto"}}>
            <Paper style={{width:"40%", margin: "auto"}}>
                <div style={{ marginTop: "4rem"}} className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ textAlign: "center"}}>
                        <h4>
                            <b>Admin Portal Login</b>
                        </h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="email"
                            className={classnames("", {
                                invalid: errors.name || errors.namenotfound
                            })}
                            />
                            <label htmlFor="name">Username</label>
                            <span className="red-text">
                            {errors.name}
                            {errors.namenotfound}
                            </span>
                        </div>
                        <div className="input-field col s12">
                            <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                            />
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                            </span>
                        </div>
                        <div className="col s12" style={{ textAlign: "center" }}>
                            <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem",
                                marginBottom: "1rem",
                            }}
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                            Login
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </Paper>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);