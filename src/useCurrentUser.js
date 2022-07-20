import { useState, useEffect } from "react";
import axios from "axios";
// the custome hook always start with use
export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};
