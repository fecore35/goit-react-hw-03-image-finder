import { Component } from "react";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  render() {
    return <ul className={s.gallery}></ul>;
  }
}

export default ImageGallery;
