// @ts-nocheck
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getItems } from "../../actions/getItems";
import axios from "axios";
import {Paper} from '@material-ui/core';
import {List} from '@material-ui/core';
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor()
  {
    super();
    this.state = 
    {
      apps: [],
      apps2: []
    }
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    const input = 
    {
      attributes: "ADMIN"
    }
  
    axios
      .post("/api/apps/links", input).then(res => {
        this.setState({apps: res.data})
      })
      .catch(error => {
        console.log(error.response)
    });

    
    if (user.attributes !== "ADMIN")
    {
      let temp = 
      {
        attributes: "ADMIN,"+ user.attributes
      }
      axios
      .post("/api/apps/links", temp).then(res => {
        this.setState({apps2: res.data})
      })
      .catch(error => {
        console.log(error.response)
    });
    }

    const items = this.state.apps.map(item => <li>{item}</li> );

return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hello,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to the admin portal!
              </p>
            </h4>
            <Paper>
            <ul>
              {this.state.apps.map(app => {
                return <Link><List key={`${app.id} and ${app.name}`}>{app.name}</List></Link>
              })}
              {this.state.apps2.map(app => {
                return <Link><List key={`${app.id} and ${app.name}`}>{app.name}</List></Link>
              })}
            </ul>
            </Paper>

            <Paper>

            </Paper>


            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);