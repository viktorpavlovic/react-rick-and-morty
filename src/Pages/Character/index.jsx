import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./contact.scss";

class CharacterPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main-content">
          <div className="single-card">
            <h3>{this.props.char.name}</h3>
            <img src={this.props.char.image} alt="" />
            <p className={this.props.char.status === "Dead" ? "dead" : "alive"}>
              {this.props.char.status}
            </p>
            <p>{this.props.char.species}</p>
            <p>{this.props.char.location.name}</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default CharacterPage;
