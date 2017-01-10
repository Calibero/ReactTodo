var React = require('react');
var {Row, Col} = require('react-bootstrap');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <Row className="search-todo-wrapper">
        <Col xs={12}>
          <input type="text" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} className="col-xs-12" />
        </Col>
        <Col xs={12}>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </Col>
      </Row>
    )
  }
});

module.exports = TodoSearch;
