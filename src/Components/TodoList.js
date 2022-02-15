import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const TodoList = ({ value, Delete, Edit }) => {
  return (
    <div className="w-[72%] mx-auto">
      {value.map((i) => {
        return (
          <div
            className="h-[50px] pr-2 flex justify-between leading-[50px] pl-3 text-white text-xl relative bg-red-400 rounded my-3 overflow-y-scroll scrollbar-none"
            key={i.id}
          >
            <div className="w-[70%] break-words">{i.value}</div>
            <div className="flex items-center sticky flex top-0">
              <AiOutlineCloseCircle
                className=" w-10 cursor-pointer"
                onClick={(_) => Delete(i.id)}
              />
              <FiEdit
                className=" w-10 cursor-pointer"
                onClick={(_) => Edit(i.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
