import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/article";

const ArticleCard = ({ article, getArticles }) => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
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
              {isLoggedIn && user.username === article.author.username && (
                <>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => navigate(`/edit-article/${article.slug}`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteArticle(article.slug)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
            <small className="text-body-secondary fw-bold text-capitalize">
              {article.author.username}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
