import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";

import "./home.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="div-home">
          <Header input = {this.props.input} />
          <Wrapper
            characters={this.props.characters}
            nextPage={this.props.nextPage}
            nextNext = {this.props.nextNext}
            prevPage={this.props.prevPage}
            prevPrev={this.props.prevPrev}
            clicked={this.props.clicked}
            curPage = {this.props.curPage}
            maxPages = {this.props.maxPages}

          />
          <Footer />
        </div>
      </>
    );
  }
}

export default HomePage;
