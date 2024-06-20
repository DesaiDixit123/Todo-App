/* eslint-disable react/prop-types */
import { useContext } from "react"
import { GlobleProvider } from "../Context/GlobleContext"

export default function Popup({props}){
    const { activeTodo } = useContext(GlobleProvider)
    return(
        <>
        
        <div className={activeTodo ? "absolute right-0 top-0 text-red-500 bg-[--white] text-[--black] m-2 px-5 py-1 font-bold rounded-lg" : "hidden"}>
      <p>{props.message}</p>
    </div>
        </>
    )
}