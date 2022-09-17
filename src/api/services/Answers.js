import axios from "../http";

const AnswersService = {
  getAnswers: async (id) => {
    const url = `/questions/${id}/answers?_expand=user`;
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
};

export default AnswersService;
