"use server";

import axios from "axios";

export const ChatGPT_API = async (content: string) => {
  const options = {
    method: "POST",
    url: "https://chatgpt-42.p.rapidapi.com/matag2",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "df20e27d24mshf0bccc7e5ef1528p1edc77jsn1c365cb1c9f4",
      "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      image: "",
      max_tokens: 256,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
