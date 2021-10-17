import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    return this.props.images.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <li key={id} className={s.item}>
          <img
            src={webformatURL}
            data-modal={largeImageURL}
            alt=""
            className={s.image}
          />
        </li>
      );
    });
  }
}

export default ImageGalleryItem;
