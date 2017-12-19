import fetch from "node-fetch";

export async function ask(url: string, pars: any) {
  let response = await fetch(`http://localhost:3000/${url}`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pars)
  });
  return await response.json();
}
