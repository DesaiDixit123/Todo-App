import todo from "../../assets/todo.png";
import { Link, NavLink } from "react-router-dom";
import { FaPencilAlt, FaGithub, FaMoon } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { useContext } from "react";
import { GlobleProvider } from "../Context/GlobleContext";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Aside() {
  const { getData } = useContext(GlobleProvider);
  return (
    <>
      <div className="">
          <span className="xl:hidden lg:hidden md:text-[40px] sm:text-[40px] lg:flex md:flex sm:flex lg:justify-center md:justify-center sm:justify-center"><GiHamburgerMenu /></span>
        <div className=" bg-light-400 px-[15px] py-[10px] h-[70px]">
          <div className="flex justify-between">
            <img src={todo} alt="" className="xl:w-[50px] lg:w-[50px] md:w-[40px]  md:h-[40px] xl:pt-0 md:pt-[10px]" />

            <h1 className="text-[20px] font-bold pt-[5px] xl:block lg:block md:hidden">My Todo</h1>
          </div>
        </div>
        <div className=" xl:h-[90.8vh] lg:h-[90.8vh] md:h-[90.8vh]  lg:bg-white relative">
          <NavLink to={"/"}>
            <div className="flex gap-3 xl:pl-[30px] lg:pl-[30px] md:pl-[17px] pt-[30px]">
              <FaPencilAlt className="xl:text-[25px] lg:text-[25px] md:text-[35px] relative top-1" />
              <h1 className="font-semibold text-[25px] xl:block lg:block md:hidden ">Create Todo</h1>
            </div>
          </NavLink>

          <NavLink to={"Todolist"}>
            <div className="flex gap-2 pt-[30px] xl:px-[40px] lg:px-[40px] md
            px-0 md:pl-[12px]">
              <LuListTodo className="xl:text-[25px] lg:text-[25px] md:text-[40px] relative top-1" />
              
              <h1 className="text-[22px] font-medium xl:block lg:block md:hidden">Todo List</h1>
              <span className="text-red-500 text-[30px] relative bottom-6 -left-3 xl:block lg:block md:hidden ">
                {getData.length}
              </span>
            
            </div>
          </NavLink>

          <div>
            <div className=" absolute bottom-0 ">
              <div className="xl:flex xl:gap-10 xl:pl-[45px] lg:flex lg:gap-10 lg:pl-[45px] md:pl-[15px] pb-5 fixed bottom-0">
                <Link>
                  <FaMoon className="xl:text-[40px] lg:text-[40px] md:text-[30px] xl:relative xl:bottom-0 lg:relative lg:bottom-0 md:relative md:bottom-7" />
                </Link>
                <Link>
                  <FaGithub className="xl:text-[40px] lg:text-[40px] md:text-[30px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
