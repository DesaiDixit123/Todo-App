/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const GlobleProvider = createContext();

export default function GlobleContext({ children }) {
  const [inputValue, setInputValue] = useState({
    heading: "",
    time: "",
    date: "",
    textArea: "",
  });

  const [getData, setGetData] = useState([]);
  const [searchTodo, setSearchTodo] = useState([]);
  const [searchQur, setSearchqur] = useState("");
  const [theme, setTheme] = useState("dark");
  const [activeTodo,setActiveTodo]=useState(false)
  const [popupMsg,setPopupMsg]=useState("")

  useEffect(() => {
    const storadeTheme = localStorage.getItem("theme")
    if (storadeTheme !== null) {
      setTheme(storadeTheme)
    }


    const storeGetData = JSON.parse(localStorage.getItem("todoData")) || [];
    setGetData(storeGetData);
  }, []);

  const inputData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value, id: new Date().getTime() });
  };
  console.log(inputValue);

  // const submissionFormHandler = (e) => {
  //   e.preventDefault();

  //   if (inputValue.heading.trim() === '') {
  //     setMessage('Write heading');
  //     return;
  //   } else if (inputValue.textArea.trim() === '') {
  //     setMessage('Write description');
  //     return;
  //   } else {
  //     setMessage('Added Todo');
  //   }
  //   const updatedData = [...getData, inputValue];
  //   setGetData(updatedData);

  //   localStorage.setItem("todoData", JSON.stringify(updatedData));

  //   setInputValue({ heading: "", time: "", date: "", textArea: "" });
  
  // };

  const removeTodo = (id) => {
    const filterData = getData.filter((item) => item.id !== id);
    setGetData(filterData);
    localStorage.setItem("todoData", JSON.stringify(filterData));
    setSearchqur("");


    setPopupMsg("Remove Todo")
    setActiveTodo(true)
    setTimeout(()=>{setActiveTodo(false),setPopupMsg("")},1000)
  };

  const searchHandler = () => {
    const searchValue = searchQur;
    const filterData = getData.filter((item) =>
      item.heading.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchTodo(filterData);
  };
  useEffect(() => {
    searchHandler();
  }, [searchQur, getData]);

  const themeButton = () => {
    const themeValue = theme == "dark" ? "light" : "dark"
    setTheme(themeValue)
    localStorage.setItem("theme", themeValue)
  }

const addTodoBtn = () => {
  if (inputValue.heading.trim() === "") {
    setPopupMsg("Write Heading");
    setActiveTodo(true);
    setTimeout(() => {
      setActiveTodo(false);
      setPopupMsg("");
    }, 1000);
  } else if (inputValue.time.trim() === "") {
    setPopupMsg("Select Time");
    setActiveTodo(true);
    setTimeout(() => {
      setActiveTodo(false);
      setPopupMsg("");
    }, 1000);
  } else if (inputValue.date.trim() === "") {
    setPopupMsg("Select Date");
    setActiveTodo(true);
    setTimeout(() => {
      setActiveTodo(false);
      setPopupMsg("");
    }, 1000);
  } else if (inputValue.textArea.trim() === "") {
    setPopupMsg("Write Description");
    setActiveTodo(true);
    setTimeout(() => {
      setActiveTodo(false);
      setPopupMsg("");
    }, 1000);
  } else {
    const updatedData = [...getData, inputValue];
    setGetData(updatedData);

    localStorage.setItem("todoData", JSON.stringify(updatedData));

    setInputValue({ heading: "", time: "", date: "", textArea: "" });

    setPopupMsg("New Todo Added");
    setActiveTodo(true);
    setTimeout(() => {
      setActiveTodo(false);
      setPopupMsg("");
    }, 1500);
  }
};
  return (
    <GlobleProvider.Provider
      value={{
        inputData,
        getData,
        inputValue,
        removeTodo,
        searchHandler,
        setSearchqur,
        searchTodo,
        searchQur,
        themeButton,
        theme,
        addTodoBtn,

        popupMsg,
        setPopupMsg,
        activeTodo
      }}
    >
      {children}
    </GlobleProvider.Provider>
  );
}
