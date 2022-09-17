import axios from "../http";

const UserService = {
  register: async (user) => {
    const url = "/register";
    try {
      const { data } = await axios.post(url, user);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  login: async (user) => {
    const url = "/login";
    try {
      const { data } = await axios.post(url, user);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  getUserById: async (id) => {
    const url = `/users/${id}`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};

export default UserService;
