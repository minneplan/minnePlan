import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
// import swal from 'sweetalert';
import InstructorScheduleRow from './InstructorScheduleRow';

// const moment = require('moment');

class InstructorSchedule extends Component {
  componentDidMount() {
    window.history.replaceState(null, null, ' ');
    this.props.dispatch({ type: 'GET_INSTRUCTOR_SCHEDULE' });
    this.props.dispatch({ type: 'GET_CLASS_COUNT' });
  }

  logout = () => {
    this.props.dispatch({ type: 'LOGOUT' });
    this.props.history.push('/instructor_login');
  }

  render() {
    return (
      <div>
        <h1>{this.props.reduxState.classCount.map(count => count.instructor_name)}</h1>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <Table size="large">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Classes</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.reduxState.instructorSchedule
              .map(schedule => (
                <InstructorScheduleRow schedule={schedule} checkedClass={this.checkedClass} />
              ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>
                Total Classes:
                {this.props.reduxState.classCount.map(count => count.count)}
              </Table.HeaderCell>
              <Table.HeaderCell>
              </Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Button
          type="button"
          onClick={this.logout}
        >
          Logout
        </Button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(InstructorSchedule));
