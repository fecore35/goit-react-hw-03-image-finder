import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.item}>
        <img src="" alt="" className={s.image} />
      </li>
    );
  }
}

export default ImageGalleryItem;
