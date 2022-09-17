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
};

export default UserService;
