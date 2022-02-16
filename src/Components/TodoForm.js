import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);
  const [Check, setCheck] = useState(false);

  const add = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 10000);

    if (state === "") {
      return;
    }

    setValue([...value, { id, value: state }]);
    setState("");
  };

  const dele = (e) => setValue([...value].filter((i) => i.id !== e));

  const edit = (e) => {
    setCheck(true);
  };

  const editor = (x, y) => {
    console.log(x, y);
    setValue([...value.map((i) => (i.id === x ? { id: x, value: y } : i))]);
    setCheck(false);
  };

  return (
    <div className="w-[100%] md:w-[70%] lg:w-[40%] 2xl:w-[30%] glass mx-auto pt-10 min-h-[80vh] rounded">
      <form
        className="bg-violet-500 rounded-lg w-[90%] md:w-[80%] h-14 px-5 mx-auto flex justify-center items-center"
        onSubmit={add}
      >
        <input
          type="text"
          className="pl-2 text-xl w-[100%] text-white outline-0 rounded bg-violet-500"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button className="text-xl font-bold text-white ml-2 ">click</button>
      </form>
      <TodoList
        value={value}
        Delete={dele}
        Edit={edit}
        state={Check}
        edition={editor}
      />
    </div>
  );
};
export default TodoForm;
