import React, { useEffect, useState } from "react";

import NewsContent from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&author=${
      props.author
    }&apiKey=b23513b546e448dfafc6f71bb63f5ab1&page=${setPage(page)}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    updateNews();
  }, []);

  /* {handlePreviousClick = async () =>
    console.log("Previous");
    setPage(page-1);
   updateNews()

    
  };
  handleNextClick = async () => {
    console.log("Next");
    setPage(page+1);
   updateNews()
   
  };}*/
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&author=${
      props.author
    }&apiKey=b23513b546e448dfafc6f71bb63f5ab1&page=${setPage(
      page + 1
    )}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };

  return (
    <div className="container my-2">
      <h1 className="text-center" style={{ margin: "60px 20px" }}>
        NewsMonkey - Top Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row my-2">
            {articles.map((element) => {
              return (
                <div className="col " key={element.url}>
                  <NewsContent
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
        </div>{" "}
      </InfiniteScroll>
    </div>
  );
};
/* {<div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-info"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-info"
            onClick={this.handleNextClick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>}*/
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: " general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
