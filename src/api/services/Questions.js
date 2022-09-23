import axios from "../http";

const QuestionsService = {
  getPaginatedQuestions: (pageSize) => {
    const url = `/questions?_expand=user&_embed=likes&_embed=dislikes&_sort=dateOfPublished&_order=des&_limit=${pageSize}`;
    return axios.get(url);
  },

  getAllQuestions: () => {
    const url =
      "/questions?_expand=user&_embed=likes&_embed=dislikes&_sort=dateOfPublished&_order=des";
    return axios.get(url);
  },

  getUserQuestions: (id) => {
    const url = `/questions?userId=${id}&_expand=user&_embed=likes&_embed=dislikes&_sort=dateOfPublished&_order=des`;
    return axios.get(url);
  },

  getQuestionById: (id) => {
    const url = `/questions/${id}/?_expand=user&_embed=answers&_embed=likes&_embed=dislikes`;
    return axios.get(url);
  },

  getHotQuestions: () => {
    const url =
      "/questions?_expand=user&_embed=likes&_embed=dislikes&_sort=numberOfLikes";
    return axios.get(url);
  },

  createQuestion: (question) => {
    const url = "/questions";
    return axios.post(url, question);
  },

  likeQuestion: (likedQuestion) => {
    const url = "/likes";
    return axios.post(url, likedQuestion);
  },

  dislikeQuestion: (dislikedQuestion) => {
    const url = "/dislikes";
    return axios.post(url, dislikedQuestion);
  },

  deleteQuestion: (id) => {
    const url = `/questions/${id}`;
    return axios.delete(url);
  },

  updateQuestion: (updatedQuestion) => {
    const url = `/questions/${updatedQuestion.id}`;
    return axios.put(url, updatedQuestion);
  },

  increaseQuestionLikes: (likedQuestion) => {
    const url = `/questions/${likedQuestion.id}`;
    return axios.put(url, likedQuestion);
  },
};

export default QuestionsService;
