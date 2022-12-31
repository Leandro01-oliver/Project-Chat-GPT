import axios from 'axios'

const requestChatGpt = (description: String) =>{
    axios.post("api/chatGPT",
    {
        description: description
    }).then((result)=>{
        console.log(result.data)
    }).catch((e)=>{
        console.log(e)
    })
}


export { requestChatGpt }