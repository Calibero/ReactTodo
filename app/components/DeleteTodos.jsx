var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var {Button, Row, Col} = require('react-bootstrap');

export var DeleteTodos = React.createClass({
  handleDelete: function () {
    var {dispatch} = this.props;
    dispatch(actions.deleteTodos());

  },
  render: function () {
    return (
      <Row className="delete-todo-wrapper">
        <Col xs={12}>
          <Button bsStyle="danger" block onClick={this.handleDelete}>Delete All Todos</Button>
        </Col>
      </Row>
    )
  }
});

export default connect()(DeleteTodos);
