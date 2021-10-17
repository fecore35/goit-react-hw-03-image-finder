import { Component } from "react";
import pixabayAPI from "../../services/pixabay-api";
import ImageGalleryItem from "components/ImageGalleryItem";
import s from "./ImageGallery.module.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
  EMPTY: "empty",
};

class ImageGallery extends Component {
  state = {
    images: [],
    status: Status.IDLE,
    error: null,
  };

  async componentDidUpdate(prevProps) {
    const prevSearchTerms = prevProps.querySearch;
    const nextSearchTerms = this.props.querySearch;

    if (prevSearchTerms !== nextSearchTerms) {
      this.setState({ status: Status.PENDING });

      try {
        const data = await pixabayAPI(nextSearchTerms);

        this.setState({
          images: data.hits,
          status: data.total > 0 ? Status.RESOLVED : Status.EMPTY,
        });
      } catch (error) {
        this.setState({
          error,
          status: Status.REJECTED,
        });
      }
    }
  }

  render() {
    const { images, status, error } = this.state;

    if (status === "idle") {
      return <></>;
    }

    if (status === "empty") {
      return (
        <p>
          Sorry, but nothing matched your search terms. Please try again with
          some different keywords.
        </p>
      );
    }

    if (status === "pending") {
      return <p>loading...</p>;
    }

    if (status === "resolved") {
      return (
        <ul className={s.gallery}>
          <ImageGalleryItem images={images} />
        </ul>
      );
    }

    if (status === "rejected") {
      return <p>{error.message}</p>;
    }
  }
}

export default ImageGallery;
