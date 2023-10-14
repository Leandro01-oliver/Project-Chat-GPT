import axios from "axios";

const requestChatGpt = (description: String) =>{
    axios.post("api/chatGPT",
    {
        description: description
    }).then((result : any)=>{
        console.log(result.data)
    }).catch((e : Error)=>{
        console.log(e)
    })
}


export { requestChatGpt }