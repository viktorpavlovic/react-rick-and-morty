import React from "react";
import "./header.scss";
import SearchInput from "../SearchInput";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>Rick And Morty</h2>
        <SearchInput input={this.props.input} />
      </div>
    );
  }
}

export default Header;
