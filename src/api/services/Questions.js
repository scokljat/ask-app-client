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

  getHotQuestions: async () => {
    const url =
      "/questions?_expand=user&_embed=likes&_embed=dislikes&_sort=numberOfLikes";
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

  likeQuestion: async (likedQuestion) => {
    const url = "/likes";
    try {
      const { data } = await axios.post(url, likedQuestion);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  dislikeQuestion: async (dislikedQuestion) => {
    const url = "/dislikes";
    try {
      const { data } = await axios.post(url, dislikedQuestion);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  deleteQuestion: async (id) => {
    const url = `/questions/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      return { error };
    }
  },

  updateQuestion: async (updatedQuestion) => {
    const url = `/questions/${updatedQuestion.id}`;
    try {
      const { data } = await axios.put(url, updatedQuestion);

      return { data };
    } catch (error) {
      return { error };
    }
  },

  increaseQuestionLikes: async (likedQuestion) => {
    const url = `/questions/${likedQuestion.id}`;
    try {
      const { data } = await axios.put(url, likedQuestion);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};

export default QuestionsService;
