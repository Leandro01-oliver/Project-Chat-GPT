import axios from "axios"

const menssageChatgpt = (promp: String,setMenssage: any)=>{
    axios.post("api/chatGPT/chat",
    {
        promp: promp
    }).then((result : any)=>{
        setMenssage(result.data)
    }).catch((e : Error)=>{
        console.log(e)
    })
}

export { menssageChatgpt };