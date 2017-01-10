var React = require('react');
var Todo = require('Todo');
var {Row} = require('react-bootstrap');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="message text-center">Nothing To Do.</p>
        )
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        );
      });
    };

    return (
      <Row className="todo-list">
        {renderTodos()}
      </Row>
    )
  }
});

module.exports = TodoList;
