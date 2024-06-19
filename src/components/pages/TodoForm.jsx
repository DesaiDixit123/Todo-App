import { useContext } from "react";
import { GlobleProvider } from "../Context/GlobleContext";

export default function TodoForm() {
  const { submissionFormHandler,inputData ,inputValue} = useContext(GlobleProvider);
  return (
    <>
      <div>
        <form onSubmit={submissionFormHandler}>
          <div className="flex justify-center pt-[80px]  xl:bg-light-400">
            <div className="xl:w-[80%] lg:w-[65%] border-2 border-black h-[366px]  shadow-2xl shadow-white rounded-[10px]">
              <div>
                <h1 className="bg-black text-white text-center xl:text-[25px] lg:text-[22px] rounded-t-lg py-2 font-semibold">
                  Create Todo
                </h1>
              </div>
              <div className="bg-white h-[310px] rounded-b-lg">
                <div className="flex justify-between pt-5 px-[30px]">
                  <h2 className="xl:text-[23px] lg:text-[20px] font-medium">Heading:</h2>
                  <input
                    type="text"
                    placeholder="Write Here..."
                    onChange={inputData}
                    value={inputValue.heading}
                    name="heading"
                    className="border-2 border-black outline-none xl:p-[7px] rounded-[10px] lg:p-[4px]"
                  />
                </div>
                <div className="flex justify-evenly pt-[20px]">
                  <div className="flex gap-3">
                    <h2 className="xl:text-[23px] lg:text-[20px] font-medium">Time : </h2>
                    <input
                      type="time"
                      name="time"
                      onChange={inputData}
                      value={inputValue.time}
                      id=""
                      className="border-2 border-black xl:p-[7px] lg:p-[4px] rounded-[10px] px-[10px]"
                    />
                  </div>

                  <div className="flex gap-3">
                    <h2 className="xl:text-[23px] lg:text-[20px] font-medium">Date : </h2>
                    <input
                      type="date"
                      name="date"
                      onChange={inputData}
                      value={inputValue.date}
                      id=""
                      className="border-2 border-black xl:p-[7px] lg:p-[4px] rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between px-[30px] pt-[20px]">
                  <h2 className="xl:text-[23px] lg:text-[20px] font-medium">Description:</h2>
                  <textarea
                    name="textArea"
                    onChange={inputData}
                    value={inputValue.textArea}
                    id=""
                    placeholder="Write Here..."
                    className="border-2 border-black outline-none xl:w-[300px] lg:w-[250px] rounded-[10px] xl:p-[7px] lg:p-[4px]"
                  ></textarea>
                </div>
                <div className="pt-[25px] px-[30px]">
                  <button className="border-4 border-black bg-AddBtn-600 xl:p-[10px] lg:p-[6px] rounded-[10px] xl:w-[150px] lg:w-[110px] text-white font-medium xl:text-[20px] lg:text-[18px]">
                    Add Todo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
