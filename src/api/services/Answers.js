import axios from "../http";

const AnswersService = {
  getAnswers: (id) => {
    const url = `/questions/${id}/answers?_expand=user&_embed=answerLikes&_embed=answerDislikes`;
    return axios.get(url);
  },

  createAnswer: (answer) => {
    const url = `/questions/${answer.questionId}/answers?_expand=user`;
    return axios.post(url, answer);
  },

  likeAnswer: (likedAnswer) => {
    const url = "/answerLikes";
    return axios.post(url, likedAnswer);
  },

  dislikeAnswer: (dislikedAnswer) => {
    const url = "/answerDislikes";
    return axios.post(url, dislikedAnswer);
  },

  deleteAnswer: (id) => {
    const url = `/answers/${id}`;
    return axios.delete(url);
  },

  updateAnswer: (updatedAnswer) => {
    const url = `/answers/${updatedAnswer.id}`;
    return axios.put(url, updatedAnswer);
  },
};

export default AnswersService;
