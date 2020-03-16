import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TableView from "../components/table/Table";
import actions from "../actions/actions";
import Data from "../components/data/data";
import {Container} from "@material-ui/core";
import Search from "../components/search/search";


class App extends Component {
  getFilteredData(datum = this.props.thirdData.data) {
    const search = this.props.firstData.data;
    const data = datum;
    if (!search) {
      return data;
    }
    let result = data.filter(item => {
      return (
        item["name"].toLowerCase().includes(search.toLowerCase()) ||
        item["date"]
          .toLocaleString("en", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) ||
        item["country"].toLowerCase().includes(search.toLowerCase()) ||
        item["city"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase()) ||
        item["job"].toLowerCase().includes(search.toLowerCase()) ||
        item["address"].toLowerCase().includes(search.toLowerCase())
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.props.thirdData.data;
    }
    return result;
  }

  render() {
    if (!this.props.thirdData.data.length) {
      this.props.setData(this.getFilteredData(Data));
    }
    return (
      <Container className="App">
        <h1 className="title">Datagrid</h1>
        <Search />
        <TableView info={this.getFilteredData()} />
      </Container>
    );
  }
}

App.propTypes = {
  firstData: PropTypes.object.isRequired,
  secondData: PropTypes.object.isRequired,
  thirdData: PropTypes.object.isRequired,
  fourthData: PropTypes.object.isRequired,
  fifthData: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    firstData: state.firstData,
    secondData: state.secondData,
    thirdData: state.thirdData,
    fourthData: state.fourthData,
    fifthData: state.fifthData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: data => dispatch(actions.setData(data)),
    changeSearchData: searchData =>
      dispatch(actions.changeSearchData(searchData)),
    changeSort: sort => dispatch(actions.changeSort(sort)),
    setSortTitle: sortField => dispatch(actions.setSortTitle(sortField)),
    changeArrow: arrow => dispatch(actions.changeArrow(arrow))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
