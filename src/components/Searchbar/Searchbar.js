import { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    querySearch: "",
  };

  handlerQuerySearch = (event) => {
    this.setState({
      querySearch: event.currentTarget.value,
    });
  };

  handlerSubmit = (event) => {
    event.preventDefault();

    if (this.state.querySearch.trim() === "") {
      return alert("Enter query search");
    }

    this.props.onSubmit(this.state.querySearch);
    this.setState({ querySearch: "" });
  };

  render() {
    const { querySearch } = this.state;

    return (
      <header className={s.header}>
        <form className={s.form} onSubmit={this.handlerSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={querySearch}
            onChange={this.handlerQuerySearch}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
