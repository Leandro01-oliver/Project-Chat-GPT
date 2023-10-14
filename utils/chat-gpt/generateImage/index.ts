import axios from "axios";

const generateImageChatGpt = (promp: String, setImageOpen: any) =>{
    axios.post("api/chatGPT/generateImage",
    {
        promp: promp
    }).then((result : any)=>{
        setImageOpen(result.data)
    }).catch((e : Error)=>{
        console.log(e)
    })
}


export { generateImageChatGpt }