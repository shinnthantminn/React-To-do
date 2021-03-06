import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const TodoList = ({ value, Delete, Edit, state, edition, com }) => {
  const [edit, setEdit] = useState(null);
  const [text, setText] = useState("");

  return (
    <div className="w-[82%] md:w-[72%] mx-auto">
      {value.map((i) => {
        return (
          <div
            className="h-[50px] pr-2 flex justify-between leading-[50px] pl-3 text-white text-xl relative bg-red-600 rounded my-3 overflow-y-scroll scrollbar-none"
            key={i.id}
          >
            {state && edit === i.id ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (text === "") {
                    return;
                  }
                  edition(i.id, text);
                  setText("");
                }}
              >
                <input
                  className="bg-red-600 outline-0"
                  type="text"
                  value={text}
                  autoFocus
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </form>
            ) : (
              <div
                className={
                  i.complete
                    ? "line-through w-[70%] select-none"
                    : "w-[70%] select-none"
                }
                onClick={(_) => com(i.id)}
              >
                {i.value}
              </div>
            )}
            {state && edit === i.id ? null : (
              <div className="flex items-center sticky flex top-0">
                <AiOutlineCloseCircle
                  className=" w-10 cursor-pointer"
                  onClick={(_) => Delete(i.id)}
                />
                <FiEdit
                  className=" w-10 cursor-pointer"
                  onClick={(_) => {
                    setEdit(i.id);
                    Edit(i.id);
                    console.log(edit);
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
