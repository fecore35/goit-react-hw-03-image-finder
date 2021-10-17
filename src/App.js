import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

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

        <ImageGallery querySearch={this.state.querySearch} />
      </div>
    );
  }
}

export default App;
