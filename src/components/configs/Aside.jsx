import todo from "../../assets/todo.png";
import { Link, NavLink } from "react-router-dom";
import { MdCancel } from "react-icons/md";

import { FaPencilAlt, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { useContext } from "react";
import { GlobleProvider } from "../Context/GlobleContext";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Aside() {
  const { aside, showAside, getData, themeButton, theme } =
    useContext(GlobleProvider);
  return (
    <>
      <div className="">
        <div
          className={
            aside
              ? "bg-[--aside] text-[--white] w-fit h-screen relative flex flex-col items-center small:shadow-[0_0_12px_1px_var(--aside)] z-50 tablet:w-fit duration-100"
              : "bg-[--aside] text-[--white] w-fit h-screen relative flex flex-col items-center small:shadow-[0_0_12px_1px_var(--aside)] z-50 tablet:w-48 duration-300"
          }
        >
          <span className="lg:hidden text-4xl lMobile:text-2xl mx-2 flex items-center py-3 h-14">
            <button
              onClick={showAside}
              className={aside ? "" : "absolute left-0 px-3"}
            >
              {aside ? (
                <GiHamburgerMenu className="md:text-2xl " />
              ) : (
                <MdCancel className="md:text-[40px] " />
              )}
            </button>
          </span>

          <section
            className={`flex w-full items-center justify-center bg-[--mainBg] text-[--white] ${theme}`}
          >
            <div className="m-2">
              <img src={todo} alt="TodoIcon" className="w-10 lMobile:w-7" />
            </div>
            <div className={aside ? "tablet:hidden" : "block"}>
              <h2 className={`text-lg mx-6 font-bold`}>My-Todo</h2>
            </div>
          </section>

          <section className="my-3">
            <div className="flex items-center justify-center py-3">
              <NavLink to={"/"}>
                {aside ? (
                  <div className="lg:text-xl text-3xl lMobile:text-2xl flex items-center">
                    <div className="mx-2">
                      <FaPencilAlt />
                    </div>
                    <div className="tablet:hidden">Create Todo</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <div className="text-2xl px-2">
                      <FaPencilAlt />
                    </div>
                    <div className="text-center w-full">Create Todo</div>
                  </div>
                )}
              </NavLink>
            </div>
            <div className="relative flex items-center justify-center py-3">
              <NavLink to={"TodoList"}>
                {aside ? (
                  <div className="lg:text-xl text-3xl lMobile:text-2xl flex items-center">
                    <div className="absolute right-1 top-0 text-[--aside] lg:text-xl text-sm font-bold bg-[--red] w-4 h-4 rounded-full flex justify-center items-center">
                      <div className="text-red-400">{getData.length}</div>
                    </div>
                    <div className="mx-2 z-10">
                      <LuListTodo />
                    </div>
                    <div className="tablet:hidden">Todo List</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <div className="absolute right-0 top-1 text-[--aside] text-sm font-bold bg-[--red] w-4 h-4 rounded-full flex justify-center items-center">
                      <div>{getData.length}</div>
                    </div>
                    <div className="text-2xl px-2">
                      <LuListTodo />
                    </div>
                    <div className="text-center w-full z-10">Todo List</div>
                  </div>
                )}
              </NavLink>
            </div>
          </section>

          <section
            className={
              aside ? "refAndTheme tablet:flex-col" : "refAndTheme flex-row"
            }
          >
            <div
              onClick={themeButton}
              className="text-3xl lMobile:text-2xl cursor-pointer tablet:py-3"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>
            <div className="tablet:py-3">
              <Link
                to={
                  "https://github.com/DesaiDixit123"
                }
                target="_blank"
                className="text-3xl lMobile:text-2xl"
              >
                <FaGithub />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
