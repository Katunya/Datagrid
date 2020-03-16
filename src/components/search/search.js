import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import actions from "../../actions/actions"
import PropTypes from "prop-types";
import {Container} from "@material-ui/core";

class Search extends Component {
  render() {
    let searchInput = "";
    return (
      <Container>
        <TextField
          id="filled-full-width"
          placeholder="Search everywhere"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          onChange={event => {
            searchInput = `${event.target.value}`;
          }}
        />
        <Button
          variant="outlined"
          onClick={() => this.props.changeSearchData(searchInput)}
        >
          Search
        </Button>
      </Container>
    );
  }
}

Search.propTypes = {
  changeSearchData: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    changeSearchData: searchData =>
      dispatch(actions.changeSearchData(searchData))
  };
};

export default connect(null, mapDispatchToProps)(Search);
