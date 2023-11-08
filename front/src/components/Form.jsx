import { useUser } from "../hooks/useUsers";
export const Form = () => {
  const {users, setUsers} = useUser()
  const onSubmit = (e) => {
    e.preventDefault()
    setUsers([
      {
        nombre: e.target.name.value,
        direccion: e.target.age.value,
        foto: e.target.document.value,
      },
      ...users,
    ]);
  }
  return (
    <div className="col-6">
      <div className="card">
        <h5 className="card-header">Agregar Usuario</h5>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div>
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="name"
                name="name"
              />
            </div>
            <div>
              <label className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="age"
                name="age"
              />
            </div>
            <div>
              <label className="form-label">Foto</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="document"
                name="document"
              />
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
