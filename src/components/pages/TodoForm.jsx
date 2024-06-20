import { useContext } from "react";
import { GlobleProvider } from "../Context/GlobleContext";

export default function TodoForm() {
  const {submissionFormHandler, inputData ,inputValue} = useContext(GlobleProvider);
  return (
    <>
      <div>
        <form onSubmit={submissionFormHandler}>
          <div className="flex justify-center pt-[80px]  xl:bg-[--mainBg] h-[100vh] set4:pt-[10px]">
            <div className="xl:w-[80%] lg:w-[70%] border-2 border-[--white] h-[385px]  shadow-2xl shadow-white rounded-[10px] tablet:w-[65%] set3:h-[425px] set3:w-[70%] set4:h-[590px] set6:h-[710px]">
              <div>
                <h1 className="bg-[--white] text-[--black] text-center xl:text-[25px] lg:text-[22px] rounded-t-lg py-2 font-semibold set3:text-[22px] ">
                  Create Todo
                </h1>
              </div>
              <div className="bg-[--black] h-[326px] set:h-[331px] set1:h-[340px] set3:h-[380px] set4:h-[545px] set6:h-[655.5px]">
                <div className="flex justify-between pt-5 px-[30px] set3:flex set3:justify-normal set4:flex set4:flex-col">
                  <h2 className="xl:text-[23px] lg:text-[20px] font-medium text-[--white] set3:pt-[5px] set3:text-[22px] set">Heading : </h2>
                  <input
                    type="text"
                    placeholder="Write Here..."
                    onChange={inputData}
                    value={inputValue.heading}
                    name="heading"
                    className="border-2 border-[--white]  focus:border-[--black] bg-[--black] text-[--white]outline-none focus:bg-[--white] focus:text-[--black] xl:p-[7px] rounded-[10px] lg:p-[4px] text-[20px] set3:w-[200px] set3:text-[15px] set3:p-[7px] set4:w-[250px] set5:w-[170px] set6:w-[120px]"
                  />
                </div>
                <div className="flex justify-evenly pt-[20px] set3:flex-col">
                  <div className="flex gap-3 set3:pt-[10px] relative left-[30px] set4:flex set4:flex-col ">
                    <h2 className="xl:text-[23px] lg:text-[20px] font-medium text-[--white] set3:
pt-[4px] set3:text-[22px]">Time : </h2>
                    <input
                      type="time"
                      name="time"
                      onChange={inputData}
                      value={inputValue.time}
                      id=""
                      className="border-2 border-[--white] focus:border-[--white] focus:bg-[--white] focus:text-[--black] bg-[--black] text-[--white] xl:p-[7px] lg:p-[4px] rounded-[10px] px-[10px] set3:p-[5px] set4:w-[80px]"
                    />
                  </div>

                  <div className="flex gap-3 set3:pt-[20px] relative left-[30px] set4:flex set4:flex-col set4:w-[150px]">
                    <h2 className="xl:text-[23px] lg:text-[20px] font-medium text-[--white] set3:
pt-[4px] set3:text-[22px]">Date : </h2>
                    <input
                      type="date"
                      name="date"
                      onChange={inputData}
                      value={inputValue.date}
                      id=""
                      className="border-2  border-[--white] focus:border-[--white] focus:bg-[--white] focus:text-[--black] bg-[--black] text-[--white] xl:p-[7px] lg:p-[4px] rounded-[10px] set3:p-[5px] set6:w-[120px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between px-[30px] pt-[20px] text-[--white] set3:flex set3:justify-normal set4:flex set4:flex-col set4:w-[250px] set3:text-[22px]">
                  <h2 className="xl:text-[23px] lg:text-[20px] font-medium">Description : </h2>
                  <textarea
                    name="textArea"
                    onChange={inputData}
                    value={inputValue.textArea}
                    id=""
                    placeholder="Write Here..."
                    className="border-2 border-[--white] focus:border-[--white] focus:bg-[--white] focus:text-[--black] bg-[--black] text-[--white] outline-none xl:w-[300px] lg:w-[250px] rounded-[10px] xl:p-[7px] lg:p-[4px] text-[18px] set3:w-[200px] set3:p-[5px] set4:w-[250px] set5:w-[170px] set6:w-[120px] set6:h-[150px]"
                  ></textarea>
                </div>
                <div className="pt-[25px] px-[30px]">
                  <button className="border-4 border-[--white] bg-AddBtn-600 xl:p-[10px] lg:p-[6px] rounded-[10px] xl:w-[150px] lg:w-[110px] text-[--black] focus:bg-[--white] font-medium xl:text-[20px] lg:text-[18px] tablet:p-[10px] set3:px-[20px] set3:my-[20px]">
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
