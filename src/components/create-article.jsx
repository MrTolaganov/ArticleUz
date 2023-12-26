import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleForm from "./article-form";
import ArticleService from "../service/article";
import {
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (event) => {
    event.preventDefault();
    const article = {
      title,
      description,
      body,
      setTitle,
      setDescription,
      setBody,
    };
    dispatch(postArticleStart());
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleFailure());
    }
  };

  const formProps = {
    title,
    description,
    body,
    setTitle,
    setDescription,
    setBody,
    formSubmit,
  };

  return (
    <div>
      <h1 className="text-center mb-4">Create article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  );
};

export default CreateArticle;
