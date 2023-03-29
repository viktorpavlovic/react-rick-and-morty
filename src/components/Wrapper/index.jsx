import React, { Component } from "react";
import Card from "../Card";
import Button from "../Button";
import "./wrapper.scss";

export default class Wrapper extends Component {
  render() {
    // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <>
        <div className="div-wrapper">
          <div className="div-cards">
            {this.props.characters.map((character) => (
              <Card
                char={character}
                clicked={this.props.clicked}
              />
            ))}
          </div>
          <Button
            nextPage={this.props.nextPage}
            nextNext = {this.props.nextNext}
            prevPage={this.props.prevPage}
            prevPrev={this.props.prevPrev}
            curPage = {this.props.curPage}
            maxPages = {this.props.maxPages}
          />
        </div>
      </>
    );
  }
}
