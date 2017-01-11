var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var {Row, Col} = require('react-bootstrap');

export var TodoSearch = React.createClass({
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;


    return (
      <Row className="search-todo-wrapper">
        <Col xs={12}>
          <input type="text" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }} className="col-xs-12" />
        </Col>
        <Col xs={12}>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }} />
            Show completed todos
          </label>
        </Col>
      </Row>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
