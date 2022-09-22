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

  getPopularUsers: async () => {
    const url = "/users?_sort=numberOfAnswers";
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  updateUser: async (updatedUser) => {
    console.log(updatedUser, "servis");
    const url = `/users/${updatedUser.id}`;
    try {
      const { data } = await axios.put(url, updatedUser);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};

export default UserService;
