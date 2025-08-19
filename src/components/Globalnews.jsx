import { useEffect, useState } from "react";

export const GlobalNews = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
  const [err, setErr] = useState(null);

  const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=weather&language=en&apiKey=430a4244a19f40b7aa4519047bf39768&pageSize=5`
      );
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
        setErr("Failed to get news");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(news);
  if (loading) {
    return (
      <>
        <p>Loading news</p>
      </>
    );
  }
  //   if (err) {
  //     return <Error message="failed"></Error>;
  //   }
  return (
    <div className="news flex flex-col gap-10 p-5">
      {news.map((news) => (
        <div className="main-news shadow-gray-500">
          <div className="news-header flex flex-col gap-2 ">
            <h3>{news.title}</h3> <p>{news.author}</p>
            <p>{news.source.name}</p>
          </div>
          <img src={news.urlToImage} alt="" />
          <h3>{news.description}</h3>
          {/* <p>{news.content}</p> */}
          <div className="link text-white p-2 mt-2 rounded-2xl bg-blue-600 text-center">
            <a href={news.url} className="">
              {" "}
              <span className="text-white">Continue reading</span>
            </a>
          </div>
        </div>
      ))}
      <div className="other-news">{}</div>
    </div>
  );
};
