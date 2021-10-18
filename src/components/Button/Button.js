import { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button className={s.button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button;
