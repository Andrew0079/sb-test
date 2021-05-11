export const fetchPost = async (endPoint, data ) => {

  const backend ="http://localhost:8000/api/";

  try {
    const fetchApiSettings = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null, // body data type must match "Content-Type" header
    };
    const response = await fetch(backend + endPoint, fetchApiSettings);
    return response.json();
  } catch (error) {
    return error;
  }
};
