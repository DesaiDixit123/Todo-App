/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GlobleProvider } from "../Context/GlobleContext";

export default function TodoCart({TodoItem}){

    const {removeTodo}=useContext(GlobleProvider)
    return (
        <>
        
        <div>
      
        <div className="px-[30px] py-[30px] ">
          <div className=" w-[100%] bg-white border-4 border-black rounded-[15px]">
            <div className="">
              <h1 className="bg-black text-white text-center text-[30px] py-[5px] font-semibold">
               {TodoItem.heading}
              </h1>
            </div>
            <div className="py-[10px] px-[13px]">
              <div className="flex gap-2 text-[23px]">
                <p className="font-bold textClor">Description : </p>
                {TodoItem.textArea}
              </div>
              <div className="flex gap-2 text-[23px] pt-[10px]">
                <h2 className="textClor font-bold">Time : </h2>
               {TodoItem.time}
              </div>
              <div className="flex  gap-2 text-[23px] pt-[10px]">
                <h2 className="textClor font-bold">Date : </h2>
               {TodoItem.date}
              </div>
              <br />
              <hr className="w-[100%] border-black " />
            <div className="pt-[20px]">
              <button onClick={()=>removeTodo(TodoItem.id)} className=" border-4 border-black w-[130px] h-[40px] text-[22px] font-semibold bg-listBtn-400 text-white rounded-[15px]">Remove</button>
            </div>
            </div>
            <div className="flex justify-between px-[20px] bg-black text-gray-500 py-[5px] mt-[10px]">
              <div>Todo Created</div>
              <div className="">
                <span className="pr-[40px]">Date : {TodoItem.createdDate}</span>
                <span>Time : {TodoItem.createdTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}