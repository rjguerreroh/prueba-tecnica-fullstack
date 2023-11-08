export const getUsers = async () => {
  const url =
    "http://localhost:3000/users/";

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Asegura que el servidor sabe que estás enviando JSON
    }
  };

  try {
    const res = await fetch(url, requestOptions);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(error);
    throw error; // Maneja el error según tu necesidad
  }
};