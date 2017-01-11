var React = require('react');
var moment = require('moment');
var {Grid, Row, Col} = require('react-bootstrap');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var uuid = require('node-uuid');
var DeleteTodos = require('DeleteTodos');

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <Grid>
          <Row>
            <h1 className="text-center">Todo App</h1>
          </Row>
          <Row>
            <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} id="todo-app-wrapper">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
              <DeleteTodos onDeleteTodos={this.handleDeleteTodos} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

module.exports = TodoApp;
