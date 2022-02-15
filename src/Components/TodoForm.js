import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);

  const add = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 10000);
    setValue([...value, { id, value: state }]);
    setState("");
  };

  const dele = (e) => setValue([...value].filter((i) => i.id !== e));

  const edit = (e) => {
    let a = prompt("enter Some Thing");

    setValue([...value.map((i) => (i.id === e ? { id: e, value: a } : i))]);
  };

  return (
    <div className="w-[30%] mx-auto pt-10 bg-[#581b98] min-h-[80vh] rounded">
      <form
        className="bg-violet-500 rounded-lg w-[80%] h-14 px-5 mx-auto flex justify-center items-center"
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
      <TodoList value={value} Delete={dele} Edit={edit} />
    </div>
  );
};
export default TodoForm;
