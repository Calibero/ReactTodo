var React = require('react');
var {Button, Row, Col} = require('react-bootstrap');

var DeleteTodos = React.createClass({
  handleDelete: function () {
    this.props.onDeleteTodos(true);
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

module.exports = DeleteTodos;
