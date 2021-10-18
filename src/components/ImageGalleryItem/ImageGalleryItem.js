import { Component } from "react";
import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    return this.props.images.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <li key={id} id={id} className={s.item}>
          <a href={largeImageURL} onClick={this.props.onOpenModal}>
            <img
              src={webformatURL}
              data-modal={largeImageURL}
              alt=""
              className={s.image}
            />
          </a>
        </li>
      );
    });
  }
}

export default ImageGalleryItem;
