import { useState } from "react"

export default function StatusCodes(){

    const [inputValue, setInputValue] = useState();
    const [statusCode, setStatusCode] = useState();

    
    async function fetchData(){
        try{
            let response = await fetch(`https://umk-async-api.fly.dev/status/${inputValue}`);
            let data;
            if (response.status === 404){
                setStatusCode("Request Error")
            }
            else if (response.status === 500){
                setStatusCode("Server Error");
            }
           
            else if (response.status === 200){
                data = await response.json();
                setStatusCode(data.message);
            }
            else{
                data = await response.text();
                setStatusCode(data);
            }
        }
        catch(error){
            setStatusCode(error.message);
        }
    }
    


    return <div>
        <p>Status codes</p>
        <input type="number" onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit" onClick={fetchData}>Send</button>
        <p>{setStatusCode === undefined ? "" : statusCode}</p>
        </div>
}