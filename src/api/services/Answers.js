import axios from "../http";

const AnswersService = {
  getAnswers: async (id) => {
    const url = `/questions/${id}/answers?_expand=user&_embed=answerLikes&_embed=answerDislikes`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  createAnswer: async (answer) => {
    const url = `/questions/${answer.questionId}/answers?_expand=user`;
    try {
      const { data } = await axios.post(url, answer);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  likeAnswer: async (likedAnswer) => {
    const url = "/answerLikes";
    try {
      const { data } = await axios.post(url, likedAnswer);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  dislikeAnswer: async (dislikedAnswer) => {
    const url = "/answerDislikes";
    try {
      const { data } = await axios.post(url, dislikedAnswer);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  deleteAnswer: async (id) => {
    const url = `/answers/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      return { error };
    }
  },
};

export default AnswersService;
