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
};

export default QuestionsService;
