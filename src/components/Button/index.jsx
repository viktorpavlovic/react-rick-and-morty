import React, { Component } from "react";
import "./button.scss";

export default class Button extends Component {
  newNum = this.props.curPage;
  render() {
    return (
      <>
        <div className="pag-btns">
          <button onClick={this.props.prevPage}>Prev</button>
          <button
            onClick={this.props.prevPrev}
            disabled={parseInt(this.props.curPage) <= 2}
          >
            {parseInt(this.props.curPage) <= 2 ? null : this.props.curPage - 2}
          </button>
          <button onClick={this.props.prevPage}>
            {parseInt(this.props.curPage) <= 1 ? null : this.props.curPage - 1}
          </button>
          <button className="selected">{parseInt(this.props.curPage)}</button>
          <button onClick={this.props.nextPage}>
            {parseInt(this.props.curPage) > (parseInt(this.props.maxPages) - 1)
              ? null
              : this.props.curPage + 1}
          </button>
          <button onClick={this.props.nextNext}>
            {parseInt(this.props.curPage) > (parseInt(this.props.maxPages) - 2)
              ? null
              : this.props.curPage + 2}
          </button>
          <button onClick={this.props.nextPage}>Next</button>
        </div>
      </>
    );
  }
}
// onClick={this.props.victor}
