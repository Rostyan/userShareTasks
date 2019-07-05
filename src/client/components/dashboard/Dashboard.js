import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { inputTask } from "../../actions/authActions";


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      field: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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

    const newTask = {
      name: this.props.auth.user.name,
      field: this.state.field,
    };

    this.props.inputTask(newTask, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 ">
            <form  onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.field}
                  error={errors.field}
                  id="field"
                  type="text"
                  className={classnames("", {
                    invalid: errors.field
                  })}
                />
                <label htmlFor="field">Task</label>
                <span className="red-text">{errors.field}</span>
              </div>
             
              <div className="col s12" >
                <button
                  type="submit"
                  className="btn btn-large "
                >
                  Add task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  inputTask: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps, { inputTask })(Dashboard);
