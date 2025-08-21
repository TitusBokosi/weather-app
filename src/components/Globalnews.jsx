import { useEffect, useState } from "react";
import { ErrorContainer } from "./Error";

export const GlobalNews = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
  const [err, setErr] = useState(null);

  const fetchNews = async () => {
    try {
      const res = await fetch(`/api/news?q=weather&language=en&pageSize=5`);

      const data = await res.json();
      if (data) {
        return data;
      }
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchNews()
      .then((res) => {
        setNews(res.articles);
      })
      .catch((err) => {
        setErr("Failed to get weather news");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="global-news text-left bg-white pt-5 pb-5 flex flex-col items-center justify-center gap-5 lg:w-5xl">
      <div className="header text-center">
        {" "}
        <h2>Global Weather News</h2>
        <p>Weather news around the world</p>
      </div>
      {loading ? (
        <p>loading</p>
      ) : err ? (
        <ErrorContainer message={err}></ErrorContainer>
      ) : (
        <div className="news flex flex-col items-center justify-center gap-10  ">
          {news.map((news) => (
            <div className="main-news shadow-gray-500 bg-white p-5  flex flex-col items-center justify-center gap-5 lg:w-2xl">
              <div className="content tex-left">
                {" "}
                <div className="news-header  flex flex-col gap-2  ">
                  <h3>{news.title}</h3>
                  <div className="title-author text-right w-fit flex gap-5">
                    {news.author && <p>{news.author}</p>}
                    <p>{news.source.name}</p>
                  </div>
                </div>
                <img src={news.urlToImage} alt="" />
                <h3>{news.description}</h3>
              </div>
              <div className="link text-white p-2 mt-2 rounded-2xl w-full bg-blue-600 text-center md:w-2xl md:p-4">
                <a href={news.url} className="">
                  {" "}
                  <span className="text-white">Continue reading</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
