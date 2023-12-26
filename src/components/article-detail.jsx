import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ArticleService from "../service/article";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import "../scss/author-card.scss";
import { Loader } from "../ui";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };

    getArticleDetail();
  }, [slug]);

  return isLoading ? (
    <Loader />
  ) : (
    articleDetail !== null && (
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
        <p className="col-md-8 fs-4">{articleDetail.description}</p>
        <p className="text-muted">
          <span className="fw-bold">Created at: </span>
          {moment(articleDetail.createdAt).format("DD MMM, YYYY")}
        </p>
        <div className="bd-example m-0 border-0 ">
          <div className="card mb-3 w-50 ">
            <div className="row g-0 author-card">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-uppercase fw-bold text-primary">
                    {articleDetail.author.username}
                  </h5>
                  <p className="card-text">{articleDetail.author.bio}</p>
                </div>
              </div>
              <div className="col-md-4 author-card">
                <svg
                  className="bd-placeholder-img img-fluid rounded-start"
                  width="100%"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text
                    x="45%"
                    y="50%"
                    fill="#dee2e6"
                    dy=".3em"
                    className="text-uppercase fs-1 fw-bold"
                  >
                    {articleDetail.author.username[0]}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>{articleDetail.body}</div>
      </div>
    )
  );
};

export default ArticleDetail;
