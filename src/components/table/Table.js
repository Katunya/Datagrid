import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../actions/actions";
import PropTypes from "prop-types";
import sort from "../sort/sort";
import "./table.css";
import Table from "@material-ui/core/Table";
import {TableCell, TableHead} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";


const TitleColumn = (data) => {
  return (
    <div className='title_elem'>
      <h3 className="table_title-text" onClick={sort.bind(null, `${data.title.toLowerCase()}`, data.props)}>
        {data.title}
      </h3>{data.props.fourthData.data === `${data.title.toLowerCase()}` ? (
      <p>{data.props.fifthData.data}</p>
    ) : null}
    </div>
  );
};

class TableView extends Component {
  render() {
    const data = this.props.info;
    return (
      <Table>
        <TableHead className='table_title'>
          <TableCell><TitleColumn props={this.props} title="Id"/></TableCell>
          <TableCell><TitleColumn props={this.props} title="Name"/></TableCell>
          <TableCell><TitleColumn props={this.props} title="Date"/></TableCell>
          <TableCell><TitleColumn props={this.props} title="City"/></TableCell>
          <TableCell><TitleColumn props={this.props} title="Country"/></TableCell>
          <TableCell><TitleColumn props={this.props} title="Email"/></TableCell>
          <TableCell><TitleColumn props={this.props} title="Latitude" /> </TableCell>
          <TableCell><TitleColumn props={this.props} title="Longitude" /></TableCell>
        </TableHead>
        {data.map((elem, index) => (
        <TableBody>
          <TableRow className="table_row">
            <TableCell>{elem.id}</TableCell>
          <TableCell component="th" scope="row">{elem.name}</TableCell>
          <TableCell align='right'>
          {`${elem.date.toLocaleString("en", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}`}
          </TableCell>
          <TableCell align='right'>{elem.city}</TableCell>
          <TableCell align='right'>{elem.country}</TableCell>
          <TableCell align='right'>{elem.email}</TableCell>
          <TableCell align='right'>{elem.latitude}</TableCell>
          <TableCell align='right'>{elem.longitude}</TableCell>
        </TableRow>
        </TableBody>
      ))}
      </Table>
    );
  }
}

TableView.propTypes = {
  fourthData: PropTypes.object.isRequired,
  fifthData: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  return {
    firstData: store.firstData,
    secondData: store.secondData,
    thirdData: store.thirdData,
    fourthData: store.fourthData,
    fifthData: store.fifthData
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

export default connect(mapStateToProps, mapDispatchToProps)(TableView);
