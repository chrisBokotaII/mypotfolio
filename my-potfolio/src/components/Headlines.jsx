import { useState, useEffect } from "react";

export default function Headlines() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_25247092e68695de0aa080ce1774b70dc3247&q=technology&language=en"
    )
      .then((res) => res.json())
      .then((data) => setHeadlines(() => data.results.slice(0, 4)));
  }, []);
  console.log(headlines);
  return (
    <div className="headlines">
      {headlines.map((item, index) => (
        <div className="headlines-item" key={index}>
          <h1>{item.title.slice(0, 25) + " ..."}</h1>
          <img src={item.url ? item.url : "../images/news.jpg"} alt="" />
          <p>{item.description.slice(0, 150) + "..."}</p>
          <button>
            <a target=" opener_blank" href={item.link}>
              Read More
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}
