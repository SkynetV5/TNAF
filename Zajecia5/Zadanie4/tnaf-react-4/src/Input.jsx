import { useRef } from "react"
import { useEffect } from "react"

export default function Input(){

    const buttonRef = useRef();

    function setFocus(){
        document.getElementById("input").focus()
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (buttonRef.current) {
              // Toggle button color between white and red
              if (buttonRef.current.style.color == "black") {
                buttonRef.current.style.background = "green"
                buttonRef.current.style.color = "white";
              } else {
                buttonRef.current.style.color = "black";
                buttonRef.current.style.background = "white";
              }
            }
          }, 1000);
      
          // Cleanup function to clear interval on component unmount
          return () => clearInterval(intervalId);

    })

    return <div>
        <input type="text" id="input"/>
        <button ref={buttonRef} onClick={setFocus}>ustaw focus na input</button>
    </div>
}