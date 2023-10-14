import { ChangeEvent, useState } from "react"
import { menssageChatgpt } from "../utils/chat-gpt/menssagem";

export default function Home() {

  const [input, setInput] = useState<string>("");

  const [menssagem, setMenssagem] = useState<string>();

  const [imageOpen, setImageOpen] = useState<string[]>([]);

  const handlerChanger = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = e.target;
    setInput(value)
  }


  return (
    <>
      {/* <input
        onChange={(e) => {
          handlerChanger(e);
          if (input != "") {
            generateImageChatGpt(input, setImageOpen);
          }
        }}
      />
      {
        imageOpen &&
        imageOpen.map((i: any) => {
          return (
            <>
              <div>
                <img
                  src={i}
                />
              </div>
            </>
          )
        })
      } */}
      {/* <input
        onChange={(e) => {
          handlerChanger(e);
        }}
      />
        <button
        onClick={()=>menssageChatgpt(input,setMenssagem)}
        >
        mandar
        </button>
        {
          menssagem &&
          <p>
            {menssagem}
          </p>
        } */}
    </>
  )
}
