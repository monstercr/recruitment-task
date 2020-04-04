export const ApiConfig = {
  URL: process.env.REACT_APP_BASE_URL,
  endpoints: {
    searchUsers: (keyword: string, maxResults: number) =>
      `/search/users?q=${keyword}&per_page=${maxResults}`
  }
};

export const Config = {
  MAX_RESULTS: 5
};
