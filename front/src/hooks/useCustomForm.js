import { useEffect, useState } from "react";
import { getCustomFormById } from "../services/customForm";

export const useCustomForm = () => {
  const [customForm, setCustomForm] = useState({});

  useEffect(() => {
    getCustomFormById().then(custom => setCustomForm(custom))
  }, []);

	return {customForm, setCustomForm}
};
