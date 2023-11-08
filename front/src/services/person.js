export const getPersons = async () => {
  const url =
    "http://localhost:3000/custom_form/6529a7bafac07c70960ac0ee";

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
// export const getPersons = async () => {
//   const url =
//     "http://localhost:3000/custom_form/6529a7bafac07c70960ac0ee";

//   const data = {
//     form_custom_name: "personas",
//     form_custom_fields: ["name", "last_name", "age", "gender", "document"],
//     form_custom_data: {
//       name: "rob doe",
//       last_name: "dd",
//       age: "22",
//       gender: "m",
//       document: "13242",
//     },
//   };

//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json', // Asegura que el servidor sabe que estás enviando JSON
//     },
//     body: JSON.stringify(data), // Convierte los datos a formato JSON
//   };

//   try {
//     const res = await fetch(url, requestOptions);
//     console.log(res);
//     const json = await res.json();
//     console.log(json)
//     return json.users;
//   } catch (error) {
//     console.error(error);
//     throw error; // Maneja el error según tu necesidad
//   }
// };
