import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobleProvider } from "../Context/GlobleContext";
import TodoCart from "./TodoCard";
import { FaPencilAlt } from "react-icons/fa";
export default function TodoList() {
  const { getData, searchTodo, setSearchqur, searchQur } =
    useContext(GlobleProvider);

  return (
    <>
      {getData.length !== 0 ? (
        <div className="px-[40px] py-[20px]">
          <input
            type="text"
            placeholder="Search Your Todo..."
            className="border-4 border-[--white] bg-[--black] p-[7px] w-[300px] rounded-[15px] outline-none focus:bg-[--white] focus:text-[--black] list2:w-[250px] list4:w-[170px]"
            value={searchQur}
            onChange={(e) => setSearchqur(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
      {getData.length === 0 ? (
        <div className="">
          <div className="flex justify-center pt-[40px]">
            <div className="w-[400px] bg-[--black] p-[40px] border-dashed border-4 border-red-500">
              <div>
                <h1 className="text-center text-[30px] font-semibold text-[--white]">
                  Todo List Is Blank!
                </h1>
              </div>

              <div className="flex justify-center pt-[20px] gap-6 blank1:flex blank1:flex-col blank1:pl-[40px]">
                <p className="text-[20px] text-[--white]">Go to add todo:</p>
                <Link
                  to={"/"}
                  className="flex text-[20px] gap-2 relative text-createTodo-600 hover:text-red-700"
                >
                  <span>
                    <FaPencilAlt className="relative top-1 " />
                  </span>
                  <span>Createtodo</span>
                  {/* <hr className="w-[132px] border-createTodo-600 absolute top-[30px] " /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : !searchQur == "" ? (
        <div>
          {searchTodo.map((val, index) => {
            return (
              <TodoCart
                key={index}
                TodoItem={{
                  heading: val.heading,
                  textArea: val.textArea,
                  time: val.time,
                  date: val.date,
                  createdDate: `${new Date(val.id).getDate()}/${new Date(
                    val.id
                  ).getMonth()}/${new Date().getFullYear()}`,
                  createdTime: `${new Date(val.id).getHours()} : ${new Date(
                    val.id
                  ).getMinutes()} ${
                    new Date(val.id).getHours() >= 12 ? "pm" : "am"
                  }`,
                  id: val.id,
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className="overflow-auto h-screen">
          {getData.map((val, index) => {
            return (
              <TodoCart
                key={index}
                TodoItem={{
                  heading: val.heading,
                  textArea: val.textArea,
                  time: val.time,
                  date: val.date,
                  createdDate: `${new Date(val.id).getDate()}/${new Date(
                    val.id
                  ).getMonth()}/${new Date().getFullYear()}`,
                  createdTime: `${new Date(val.id).getHours()} : ${new Date(
                    val.id
                  ).getMinutes()} ${
                    new Date(val.id).getHours() >= 12 ? "pm" : "am"
                  }`,
                  id: val.id,
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
