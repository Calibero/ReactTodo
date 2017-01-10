var React = require('react');
var {Button, Row, Col} = require('react-bootstrap');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <Row className="add-todo-wrapper">
        <form onSubmit={this.handleSubmit}>
          <Col xs={12}>
            <input type="text" ref="todoText" placeholder="what do you need to do" className="col-xs-12" />
          </Col>
          <Col xs={12}>
            <Button bsStyle="primary" type="submit" block>Add Todo</Button>
          </Col>
        </form>
      </Row>
    )
  }
});

module.exports = AddTodo;
