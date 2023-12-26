import { useState } from "react";
import { Input, TextArea } from "../ui";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <h1 className="text-center mb-4">Create article</h1>
      <div className="w-75 mx-auto">
        <form>
          <Input
            label={"Title"}
            type={"text"}
            state={title}
            setState={setTitle}
          />
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
          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateArticle;
