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
        <div className="fixed top-0 w-[259px]  ">
          <span className="hidden max-[1000px]:block max-[1000px]:justify-center">
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
          <div className=" bg-[--mainBg] px-[15px] py-[10px] h-[70px]">
            <div className="flex justify-between xl:w-[220px] lg:w-[180px]">
              <img
                src={todo}
                alt=""
                className="xl:w-[50px] lg:w-[50px] md:w-[40px]  md:h-[40px] xl:pt-0 md:pt-[10px]"
              />
              <div>
                {aside ? (
                  <h1 className="text-[20px] font-bold pt-[5px] text-[--white] md:hidden">
                    My Todo
                  </h1>
                ) : (
                  <h1 className="text-[20px] font-bold pt-[5px] text-[--white] md:block xl:px-0 lg:px-0 md:px-11">
                    My Todo
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className=" xl:h-[90.8vh] lg:h-[90.8vh] md:h-[90.8vh] relative ">
              <NavLink to={"/"}>
                {aside ? (
                  <div className="flex gap-3 xl:pl-[30px] lg:pl-[30px] md:pl-[17px] pt-[30px] hover:text-light-400">
                    <FaPencilAlt className="text-[25px] relative top-1 text-[--white] max-[940px]:text-2xl" />
                    <h1 className="font-semibold text-[25px] xl:block lg:block md:hidden text-[--white]">
                      Create Todo
                    </h1>
                  </div>
                ) : (
                  <div className="flex gap-3 xl:pl-[30px] lg:pl-[30px] md:pl-[17px] pt-[30px] hover:text-light-400">
                    <FaPencilAlt className="text-[25px] relative top-1 text-[--white] max-[940px]:text-2xl" />
                    <h1 className="font-semibold text-[25px] xl:block lg:block md:block text-[--white]">
                      Create Todo
                    </h1>
                  </div>
                )}
              </NavLink>

              <NavLink to={"Todolist"}>
                {aside ? (
                  <div
                    className="flex gap-2 pt-[30px] xl:px-[40px] lg:px-[40px] md
            px-0 md:pl-[12px]"
                  >
                    <LuListTodo className="text-[25px]  relative top-1 text-[--white] max-[940px]:text-2xl" />

                    <h1 className="text-[22px] font-medium xl:block lg:block md:hidden text-[--white]">
                      Todo List
                    </h1>
                    <span className="text-red-500 text-[30px] relative bottom-6 -left-3 xl:block lg:block md:hidden ">
                      {getData.length}
                    </span>
                  </div>
                ) : (
                  <div
                    className="flex gap-2 pt-[30px] xl:px-[40px] lg:px-[40px] md
            px-0 md:pl-[12px]"
                  >
                    <LuListTodo className="text-[25px]  relative top-1 text-[--white] max-[940px]:text-2xl" />

                    <h1 className="text-[22px] font-medium xl:block lg:block md:block text-[--white]">
                      Todo List
                    </h1>
                    <span className="text-red-500 text-[30px] relative bottom-6 -left-3 xl:block lg:block md:hidden ">
                      {getData.length}
                    </span>
                  </div>
                )}
              </NavLink>

              <div>
                <div className=" absolute bottom-0 ">
                  {aside ? (
                    <div className="xl:flex xl:gap-16 xl:pl-[45px] lg:flex lg:gap-16 lg:pl-[45px] md:pl-[15px] pb-5 fixed bottom-0">
                      <button onClick={themeButton}>
                        {theme == "light" ? (
                          <FaMoon className="text-[30px]  xl:relative xl:bottom-0 lg:relative lg:bottom-0 md:relative md:bottom-7 text-[--white] max-[1015px]:text-2xl max-[940px]:text-2xl" />
                        ) : (
                          <FaSun className="text-[30px]  xl:relative xl:bottom-0 lg:relative lg:bottom-0 md:relative md:bottom-7 text-[--white] max-[1015px]:text-2xl max-[940px]:text2xl" />
                        )}
                      </button>
                      <Link
                        to={"https://github.com/DesaiDixit123"}
                        target="_blank"
                      >
                        <FaGithub className="text-[30px]  text-[--white] max-[940px]:text2xl" />
                      </Link>
                    </div>
                  ) : (
                    <div className="xl:flex xl:gap-16 xl:pl-[45px] lg:flex lg:gap-16 lg:pl-[45px] md:flex md:gap-16 md:pl-[25px] pb-5 fixed bottom-0">
                      <button onClick={themeButton}>
                        {theme == "light" ? (
                          <FaMoon className="text-[30px]  xl:relative xl:bottom-0 lg:relative lg:bottom-0 md:relative md:bottom-0 text-[--white] max-[1015px]:text-2xl max-[940px]:text-2xl" />
                        ) : (
                          <FaSun className="text-[30px]  xl:relative xl:bottom-0 lg:relative lg:bottom-0 md:relative md:bottom-7 text-[--white] max-[1015px]:text-2xl max-[940px]:text2xl" />
                        )}
                      </button>
                      <Link
                        to={"https://github.com/DesaiDixit123"}
                        target="_blank"
                      >
                        <FaGithub className="text-[30px]  text-[--white] max-[940px]:text2xl" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
