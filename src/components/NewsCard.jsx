export const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.urlToImage} alt="" />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
};
