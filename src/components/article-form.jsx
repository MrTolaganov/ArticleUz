import { useSelector } from "react-redux";
import { Input, TextArea } from "../ui";

const ArticleForm = (props) => {
  const {
    title,
    description,
    body,
    setTitle,
    setDescription,
    setBody,
    formSubmit,
  } = props;

  const { isLoading } = useSelector((state) => state.article);

  return (
    <form onSubmit={formSubmit}>
      <Input label={"Title"} type={"text"} state={title} setState={setTitle} />
      <TextArea
        label={"Description"}
        state={description}
        setState={setDescription}
      />
      <TextArea
        height={"200px"}
        label={"Body"}
        state={body}
        setState={setBody}
      />
      <button
        className="btn btn-primary w-100 py-2 mt-3"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  );
};

export default ArticleForm;
