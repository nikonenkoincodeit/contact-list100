const BASE_URL = "http://localhost:3000/contacts/";

export function saveData(data) {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}

export function getData() {
  return fetch(BASE_URL).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText || resp.status);
    }
    return resp.json();
  });
}

export function deleteData(id) {
  return fetch(BASE_URL + id, {
    method: "DELETE"
  })
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status)
      }
      return resp.json()
  })
}
