import axios from "../http";

const UserService = {
  register: (user) => {
    const url = "/register";

    return axios.post(url, user);
  },

  login: (user) => {
    const url = "/login";

    return axios.post(url, user);
  },

  getUserById: (id) => {
    const url = `/users/${id}`;

    return axios.get(url);
  },

  getPopularUsers: () => {
    const url = "/users?_sort=numberOfAnswers";

    return axios.get(url);
  },

  updateUser: (updatedUser) => {
    const url = `/users/${updatedUser.id}`;

    return axios.patch(url, updatedUser);
  },
};

export default UserService;
