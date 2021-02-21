import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getQuery } from "../../store/actions/productActions";

const SearchForm = (props) => {
  const history = useHistory();
  const { getProductSearchQuery } = props;
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getQuery(query);
  };
  return (
    <Form inline onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        value={query}
        className="navbar-search"
        style={{ width: "30rem" }}
        onChange={handleChange}
      />
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuery: (query) => dispatch(getQuery(query)),
  };
};

export default connect(mapDispatchToProps)(SearchForm);
