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

  useEffect(() => {
    const storeGetData = JSON.parse(localStorage.getItem("todoData")) || [];
    setGetData(storeGetData);
  }, []);

  const inputData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value,id:new Date().getTime() });
  };
  console.log(inputValue);

  const submissionFormHandler = (e) => {
    e.preventDefault();

    const updatedData = [...getData, inputValue];
    setGetData(updatedData);

    localStorage.setItem("todoData", JSON.stringify(updatedData));

    setInputValue({heading:"",time:"",date:"",textArea:""})
    console.log(getData);
  };


  const removeTodo=(id)=>{
    const filterData=getData.filter(item=>item.id !== id)
    setGetData(filterData);
    localStorage.setItem("todoData",JSON.stringify(filterData))

  }
  return (
    <GlobleProvider.Provider
      value={{ submissionFormHandler, inputData, getData,inputValue ,removeTodo}}
    >
      {children}
    </GlobleProvider.Provider>
  );
}
