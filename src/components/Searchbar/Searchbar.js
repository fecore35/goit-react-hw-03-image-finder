import { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  render() {
    return (
      <header className={s.header}>
        <form className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
