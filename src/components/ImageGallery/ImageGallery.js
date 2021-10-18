import { Component } from "react";
import Loader from "react-loader-spinner";
import pixabayAPI from "../../services/pixabay-api";
import ImageGalleryItem from "components/ImageGalleryItem";
import ButtonLoadMore from "components/Button";
import s from "./ImageGallery.module.css";

const API = new pixabayAPI();
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
    const prevSearchTerms = prevProps.searchQuery;
    const nextSearchTerms = this.props.searchQuery;

    if (prevSearchTerms !== nextSearchTerms) {
      this.setState({ status: Status.PENDING });

      try {
        API.searchQuery = nextSearchTerms;
        const images = await API.querySearch();

        this.setState({
          images,
          status: images.length > 0 ? Status.RESOLVED : Status.EMPTY,
        });
      } catch (error) {
        this.setState({
          error,
          status: Status.REJECTED,
        });
      }
    }
  }

  onLoadMore() {
    console.log("load more");
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
      return (
        <>
          <Loader
            className={s.center}
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
          />
        </>
      );
    }

    if (status === "resolved") {
      return (
        <>
          <ul className={s.gallery}>
            <ImageGalleryItem images={images} />
          </ul>

          {API.totalImages > 12 && <ButtonLoadMore onClick={this.onLoadMore} />}
        </>
      );
    }

    if (status === "rejected") {
      return <p>{error.message}</p>;
    }
  }
}

export default ImageGallery;
