import React, { Component } from "react";
import "./search-input.scss";

export default class SearchInput extends Component {
  render() {
    return (
      <input
        type="text"
        name="serach-input"
        id="div-search-input"
        placeholder="Search for Rick & Morty"
        onChange={(e) => this.props.input(e.target.value)}
      />
    );
  }
}
