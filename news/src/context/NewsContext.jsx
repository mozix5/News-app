import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();
const LoadingContext = createContext();
const ModalContext = createContext();
const SearchContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};
export const useLoading = () => {
  return useContext(LoadingContext);
};
export const useModal = () => {
  return useContext(ModalContext);
};
export const useSearchQuery = () => {
  return useContext(SearchContext);
};

export const NewsContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [query, setQuery] = useState("");

  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://newsdata.io/api/1/news", {
        params: {
          apikey: "pub_20018d3a2caa7e2ecc50ace9557a2a820c07d",
          q: query === "" ? "top" : query,
          country: "us",
        },
      })
      .then((res) => {
        setData(res.data.results);
        // console.log(data);
        setIsLoading(false);
      });
      axios.get('https://pixabay.com/api/', {
      params: {
        key: '38965543-d1b30d42f779a8cd8c0bd4480',
        q: query,
        image_type: 'photo',
        min_width:"320px"
      }
    }).then(response => {
      setImages(response.data.hits);
      // setIsLoading(false);
    // console.log(images[4].webformatURL);

    }).catch(error => {
      console.error(error);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log(data);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <DataContext.Provider value={{ data,images }}>
        <ModalContext.Provider value={{ modalContent, setModalContent }}>
          <SearchContext.Provider value={{ query, handleChange,handleSubmit }}>
            {children}
          </SearchContext.Provider>
        </ModalContext.Provider>
      </DataContext.Provider>
    </LoadingContext.Provider>
  );
};
