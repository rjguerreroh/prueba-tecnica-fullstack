import { users } from "../hooks/useUsers";
export const UserLIst = () => {
  const data = [
    {nombre: "Jhon", direccion: "kd87dj 3djfj", foto: 'jkd' },
    {nombre: "Jhon", direccion: "kd87dj 3djfj", foto: 'jkd' },
    {nombre: "Jhon", direccion: "kd87dj 3djfj", foto: 'jkd' },
    {nombre: "Jhon", direccion: "kd87dj 3djfj", foto: 'jkd' },
    {nombre: "Jhon", direccion: "kd87dj 3djfj", foto: 'jkd' },
    {nombre: "Jhon", direccion: "kd87dj 3djfj", foto: 'jkd' },
  ]
  return (
    <>
      <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
                <th scope="col">direccion</th>
                <th scope="col">Foto</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td scope="row">{i + 1}</td>
                    <td>{e.nombre}</td>
                    <td>{e.direccion}</td>
                    <td>{e.foto}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </>
  );
};
