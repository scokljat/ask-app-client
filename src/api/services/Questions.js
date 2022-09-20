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
    console.log(dislikedQuestion);
    const url = "/dislikes";
    try {
      const { data } = await axios.post(url, dislikedQuestion);
      console.log(data);
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
    console.log(updatedQuestion, "servis");
    const url = `/questions/${updatedQuestion.id}`;
    try {
      await axios.put(url, updatedQuestion);
    } catch (error) {
      return { error };
    }
  },
};

export default QuestionsService;
