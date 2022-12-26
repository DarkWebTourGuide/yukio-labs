const fetchAiNews = () => {
    // Make a GET request to the AI news API endpoint
    return fetch('https://ai-news-api.com/latest')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Return the data as a feed
        return data.articles.map(article => {
          return {
            title: article.title,
            summary: article.summary,
            url: article.url
          };
        });
      });
  };