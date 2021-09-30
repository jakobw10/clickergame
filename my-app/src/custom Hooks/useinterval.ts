import React from "react";
import { useEffect } from "react";

function UseInterval(callback:()=> void, delay:number | null) {
    const savedCallback = React.useRef(callback);
    useEffect(()=>{
        savedCallback.current=callback
    },[callback])
    useEffect(()=>{
        if (delay === null){
            return
        }
        const id = setInterval(() => savedCallback.current(),delay)
        return ()=> clearInterval(id)
    },[delay])
  }
export default UseInterval