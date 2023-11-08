import { useEffect, useState } from "react";
import { getUsers } from "../services/user";

export const useUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(pesons => setUsers(pesons))
  }, []);

	return {users, setUsers}
};
