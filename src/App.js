import Searchbar from "./components/Searchbar";
import { Component } from "react";

class App extends Component {
  state = {
    querySearch: null,
  };

  handlerQuerySearch = (querySearch) => {
    this.setState({ querySearch });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerQuerySearch} />
      </div>
    );
  }
}

export default App;
