import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);
  const [Check, setCheck] = useState(false);

  useEffect(() => {
    let json = localStorage.getItem("value");
    let item = JSON.parse(json);
    if (item) setValue(item);
  }, []);

  useEffect(() => {
    let json = JSON.stringify(value);
    localStorage.setItem("value", json);
  }, [value]);

  const add = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 10000);

    if (state === "") {
      return;
    }

    setValue([...value, { id, value: state, complete: false }]);
    setState("");
  };

  const dele = (e) => setValue([...value].filter((i) => i.id !== e));

  const edit = () => setCheck(true);

  const editor = (x, y) => {
    setValue([
      ...value.map((i) =>
        i.id === x ? { id: x, value: y, complete: false } : i
      ),
    ]);
    setCheck(false);
  };

  const complete = (e) => {
    setValue([
      ...value.map((i) =>
        i.id === e ? { id: e, value: i.value, complete: !i.complete } : i
      ),
    ]);

    console.log(value);
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
        com={complete}
      />
    </div>
  );
};
export default TodoForm;
