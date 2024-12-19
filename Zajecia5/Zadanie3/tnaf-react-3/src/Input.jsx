import { useEffect } from "react"

useEffect

export default function Input(){

    useEffect(() => {
        document.getElementById("input").focus()
    }, [])


    return <input type="text" id="input" />
}