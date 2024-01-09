"use client";

import { useChat } from "ai/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex justify-center items-center h-lvh">
      <div className="flex justify-center items-center font-bold text-3xl fixed top-0 bg-white h-32 w-full">
        Chat GPT with Vercel AI
      </div>
      <div className="w-full flex justify-center overflow-y-scroll mt-80">
        <div className="w-3/5 mb-48">
          {messages.map((m) => (
            <div key={m.id} className="text-lg">
              <div className="flex mt-5">
                <div className="h-full mr-2 w-12 pt-1 min-w-12">
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
                <div className="flex items-start">{m.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full fixed bottom-0 h-20 bg-white"
      >
        <label className="flex justify-between items-center w-full p-6">
          <h1 className="text-1xl font-bold w-48">Say something ...</h1>
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full h-10 border border-black"
          />
        </label>
      </form>
    </div>
  );
}
