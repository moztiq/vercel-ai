"use client";

import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export default function Chat() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <div className="flex justify-center items-center font-medium text-xl fixed top-0 bg-white h-16 w-full border-b-[1px] border-b-black">
        ChatGPT{" "}
        <span className="text-gray-500 ml-2 text-lg">with Vercel AI</span>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div
          ref={contentRef}
          className="w-full h-full overflow-hidden overflow-y-scroll px-24 pt-20 pb-10"
        >
          {messages.map((m) => (
            <div key={m.id} className="text-lg">
              <div className="flex mt-5">
                <div className="h-full mr-2 w-12 pt-[3px] min-w-12">
                  {m.role === "assistant" ? (
                    <img src="/gpt.svg" width="25" alt="gpt" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      size="lg"
                      className="pl-0.5"
                    />
                  )}
                </div>
                <div>
                  {m.role === "assistant" ? (
                    <strong>ChatGPT</strong>
                  ) : (
                    <strong>You</strong>
                  )}
                  <div>{m.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full h-14 bg-white p-2"
        >
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full h-10 border border-black focus:outline-none p-2 rounded-md"
            placeholder="Message ChatGPT..."
          />
        </form>
      </div>
    </div>
  );
}
