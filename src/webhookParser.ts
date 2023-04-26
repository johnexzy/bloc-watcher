import axios from "axios";

async function sendWebHook(data: any, url: string) {
  const options = {
    url: url,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };

  await axios(options);
}

export default sendWebHook;
