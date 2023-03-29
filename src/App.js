import React from "react";
import HomePage from "./Pages/Home";
import CharacterPage from "./Pages/Character";
import "./app.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeIsClicked = this.changeIsClicked.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.nextNextPage = this.nextNextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.prevPrevPage = this.prevPrevPage.bind(this);
    this.showClickedCharacter = this.showClickedCharacter.bind(this);
    this.showInput = this.showInput.bind(this);
    this.MAXPAGES = 1;
    this.state = {
      // !!!!!!
      characters: [],
      isClicked: false,
      ime: "Victor",
      page: 1,
      selectedCharacter: null,
      inputValue: "",
    };
  }
  changeIsClicked() {
    this.setState({ isClicked: !this.state.isClicked });
  }
  fetchData() {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.page}&name=${this.state.inputValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.MAXPAGES = data.info.pages;
        this.setState({ characters: data.results });
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.inputValue !== this.state.inputValue
    ) {
      this.fetchData();
    }
  }
  nextPage() {
    let trenutnaStrana = this.state.page;
    let sledeca = trenutnaStrana + 1;
    if (sledeca > this.MAXPAGES) sledeca = this.MAXPAGES;

    this.setState({ page: sledeca });
  }
  nextNextPage() {
    let trenutnaStrana = this.state.page;
    let sledeca = trenutnaStrana + 2;
    if (sledeca > this.MAXPAGES) sledeca = this.MAXPAGES;

    this.setState({ page: sledeca });
  }

  prevPage() {
    let proslaStrana = this.state.page;
    let prosla = proslaStrana - 1;
    if (prosla < 1) prosla = 1;
    this.setState({ page: prosla });
  }
  prevPrevPage() {
    let trenutnaStrana = this.state.page;
    let sledeca = trenutnaStrana - 2;
    if (sledeca > this.MAXPAGES) sledeca = this.MAXPAGES;

    this.setState({ page: sledeca });
  }
  showClickedCharacter(showedCharacter) {
    this.setState({ selectedCharacter: showedCharacter });
  }
  showInput(newInput) {
    this.setState({ inputValue: newInput,page:1 });
  }
  goToPage() {}

  render() {
    return (
      <div className="app-div">
        {!this.state.selectedCharacter ? (
          <HomePage
            nextPage={this.nextPage}
            nextNext={this.nextNextPage}
            prevPage={this.prevPage}
            prevPrev={this.prevPrevPage}
            togglePages={this.changeIsClicked}
            characters={this.state.characters}
            clicked={this.showClickedCharacter}
            input={this.showInput}
            curPage={this.state.page}
            maxPages = {this.MAXPAGES}
          />
        ) : (
          <CharacterPage char={this.state.selectedCharacter} />
        )}
      </div>
    );
  }
}

// export default App;
