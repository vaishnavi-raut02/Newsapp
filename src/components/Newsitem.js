import React from "react";

const Newsitem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author } = props;
    return (
      <>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                !imageUrl
                  ? "https://resources.pulse.icc-cricket.com/photo-resources/2023/10/11/f53875f9-d8ad-4494-85a0-eba4d3a4d2ad/Rohit-100-Hls.jpg?width=440&height=248 "
                  : imageUrl
              }
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">By {author} </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary"
              >
                Read more..
              </a>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default Newsitem;
