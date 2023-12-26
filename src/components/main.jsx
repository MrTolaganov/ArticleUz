import { useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.article);
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((article) => (
            <div className="col" key={article.id}>
              <div className="card shadow-sm h-100">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
                <div className="card-body d-flex flex-column justify-content-between">
                  <p className="card-text fw-bold">{article.title}</p>
                  <p className="card-text">{article.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => navigate(`/article/${article.slug}`)}
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-warning"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                    <small className="text-body-secondary fw-bold text-capitalize">
                      {article.author.username}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
