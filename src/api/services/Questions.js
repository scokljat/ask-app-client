import axios from "../http";

const QuestionsService = {
  getPaginatedQuestions: async (pageSize) => {
    const url = `/questions?_expand=user&_embed=likes&_embed=dislikes&_sort=dateOfPublished&_limit=${pageSize}`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  getAllQuestions: async () => {
    const url =
      "/questions?_expand=user&_embed=likes&_embed=dislikes&_sort=dateOfPublished";
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  getUserQuestions: async (id) => {
    const url = `/questions?userId=${id}&_expand=user&_embed=likes&_embed=dislikes&_sort=dateOfPublished`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  getQuestionById: async (id) => {
    const url = `/questions/${id}/?_expand=user&_embed=answers&_embed=likes&_embed=dislikes`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  createQuestion: async (question) => {
    const url = "/questions";
    try {
      const { data } = await axios.post(url, question);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};

export default QuestionsService;
