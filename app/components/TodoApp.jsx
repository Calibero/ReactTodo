var React = require('react');
var moment = require('moment');
var {Grid, Row, Col} = require('react-bootstrap');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');
var uuid = require('node-uuid');
var DeleteTodos = require('DeleteTodos');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleDeleteTodos: function () {
    this.setState({todos: []});
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map(function (todo) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({todos: updatedTodos})
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <Grid>
          <Row>
            <h1 className="text-center">Todo App</h1>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} id="todo-app-wrapper">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <AddTodo onAddTodo={this.handleAddTodo} />
              <DeleteTodos onDeleteTodos={this.handleDeleteTodos} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

module.exports = TodoApp;
