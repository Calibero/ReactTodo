var React = require('react');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');
var {connect} = require('react-redux');
var {Row} = require('react-bootstrap');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="message text-center">Nothing To Do.</p>
        )
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
