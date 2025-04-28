import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchPhotos } from "./apiService/fetchCardData";
import { Image, SelectImg } from "./App.types";

import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState<{ currentPage: number; totalPages: number }>(
    {
      currentPage: 1,
      totalPages: 0,
    }
  );
  const [photos, setPhotos] = useState<Image[]>([]);
  const [param, setParam] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectImg, setSelectImg] = useState<SelectImg>({
    urls: { regular: "" },
    alt_description: null,
    likes: 0,
  });

  const onSubmit = (query: string): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPhotos([]);
    setPage({ currentPage: 1, totalPages: 0 });
    setParam(query);
  };

  const onLoadMore = () => {
    setPage((prevPage) => ({
      ...prevPage,
      currentPage: prevPage.currentPage + 1,
    }));
  };

  const modalOpen = (imgData: SelectImg): void => {
    const { urls, alt_description, likes } = imgData;
    setModalIsOpen(true);
    setSelectImg({
      urls,
      alt_description,
      likes,
    });
  };

  const modalClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!param) return;
    setLoader(true);

    async function getSearchData() {
      try {
        const data = await fetchPhotos(param, page.currentPage);
        setPage((prevPage) => ({
          ...prevPage,
          totalPages: data.total_pages,
        }));

        setPhotos((prevPhotos) =>
          page.currentPage === 1
            ? data.results
            : [...prevPhotos, ...data.results]
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    }
    getSearchData();
  }, [param, page.currentPage]);

  useEffect(() => {
    if (page.currentPage > 1 && photos.length > 0) {
      const scrollValue = window.innerHeight / 1.5;
      const scrollTimeout = setTimeout(() => {
        window.scrollBy({
          top: scrollValue,
          behavior: "smooth",
        });
      }, 100);
      return () => clearTimeout(scrollTimeout);
    }
  }, [photos, page.currentPage]);

  return (
    <>
      <a
        className="signature"
        href="https://github.com/Mrmantikor"
        target="_blank"
      >
        Bohdan Vasylovych
      </a>
      <SearchBar onSubmit={onSubmit} />
      {error !== null ? (
        <ErrorMessage error={error} />
      ) : (
        <ImageGallery data={photos} isOpen={modalOpen} />
      )}
      {loader && <Loader />}
      {page.totalPages > page.currentPage && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
      <ImageModal
        modal={modalIsOpen}
        modalClose={modalClose}
        selectedImage={selectImg}
      />
    </>
  );
}

export default App;
