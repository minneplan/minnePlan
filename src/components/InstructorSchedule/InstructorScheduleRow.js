import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import swal from 'sweetalert';

const moment = require('moment');

class InstructorScheduleRow extends Component {
  state = {
    classStatus: '',
    checked: false,
    classBackground: '',
  };

  checkedClass =() => {
    this.setState({
      classStatus: 'Approved',
      checked: true,
      classBackground: 'green',
    });
  }

  declinedClass = () => {
    swal('Please tell us why you cannot instruct this class:', {
      content: 'input',
    })
      .then((value) => {
        swal(`Your reason is: ${value}`);
        this.props.dispatch({ type: 'DECLINE_CLASS', payload: value });
        this.setState({
          classStatus: 'Denied',
          checked: true,
          classBackground: 'red',
        });
      });
  }

  render() {
    return (
      <Table.Row bgcolor={this.state.classBackground}>
        <Table.Cell>
          {this.props.schedule.class_name}
          <br />
                    Start Date:
          {moment(this.props.schedule.start_date).subtract(10, 'days').calendar()}
          <br />
                    End Date:
          {moment(this.props.schedule.end_date).subtract(10, 'days').calendar()}
        </Table.Cell>
        <Table.Cell>
          {this.props.schedule.day_of_week}
          <br />
                    Start Time:
          {this.props.schedule.start_time}
          <br />
                    End Time:
          {this.props.schedule.end_time}
        </Table.Cell>
        <Table.Cell>
                    Pay: $
          {this.props.schedule.instructor_pay}
                    /hr
          <br />
                    Class Room:
          {this.props.schedule.classroom_number}
          <br />
                    Building:
          {this.props.schedule.building}
        </Table.Cell>
        {this.state.checked
          ? (
            <Table.Cell>
              {this.state.classStatus}
            </Table.Cell>
          )
          : (
            <Table.Cell>
              <Button size="large" icon={{ color: 'green', name: 'checkmark' }} onClick={this.checkedClass} />
              <Button size="large" icon={{ color: 'red', name: 'close' }} onClick={this.declinedClass} />
            </Table.Cell>
          )
        }
      </Table.Row>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(InstructorScheduleRow));
