import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoForm from "./components/pages/TodoForm";
import Aside from "./components/configs/Aside";
import TodoList from "./components/pages/TodoList";
import { useContext } from "react";
import { GlobleProvider } from "./components/Context/GlobleContext";
import Popup from "./components/pages/Popup";

function App() {

  const { theme ,popupMsg} = useContext(GlobleProvider)
  return (
    <>
    <section className={`${theme}`}>
      <BrowserRouter>
        <div className="grid xl:grid-cols-5 lg:grid-cols-5  md:grid-cols-18 sm:grid-cols-18 xl:gap-1 lg:gap-0 md:gap-0 sm:gap-0">
          <div className="xlcol-span-1 md:col-span-1 ">
            <Aside className/>
          </div>

          <div className="bg-[--mainBg] xl:col-span-4 lg:col-span-4 md:col-span-17 sm:col-span-17 h-[full]">
            <Popup props={{message:popupMsg}}/>
            <Routes>
              <Route path="/" element={<TodoForm />} />
              <Route path="Todolist" element={<TodoList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      </section>
    </>
  );
}

export default App;
