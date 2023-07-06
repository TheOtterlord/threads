export function graphql(body: string, options: { headers?: Record<string, string> } = {}) {
  return fetch("https://www.threads.net/api/graphql", {
    headers: {
      "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-site": "same-origin",
      "x-ig-app-id": "238260118697367",
      ...options.headers
    },
    referrer: "https://www.threads.net",
    referrerPolicy: "origin-when-cross-origin",
    body,
    method: "POST",
    mode: "cors",
    credentials: "include"
  })
}
