// Importing react-icons
import { MdDelete } from "react-icons/md";

// redux utilities
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateStatusOfTodo } from "../../redux/features/todoSlice";

const TodoItems = () => {
    // Storing todos as [{"task": "...." , "completed": boolean}]
    const todos = useSelector(state => state.todo.todos)

    const dispatch = useDispatch()

    const deleteTodo = (index) => {
        // Remove todo from the redux state
        dispatch(removeTodo(index))
    }

    const handleStatusChange = (index) => {
        // change the status of todo of this index in redux state
        dispatch(updateStatusOfTodo(index))
    }

    return (
        // flex-col-reverser to show the latest todo at the top
        <div className="flex flex-col-reverse">
            {todos.map((todo, index) => {
                return <div
                    key={index}
                    className={`rounded-lg flex justify-between items-center mt-2 w-[312px] 400px:w-[362px] 800px:w-[462px] 1200px:w-[562px] py-4 px-4 
                    ${todo.completed ? "bg-green-500" : "bg-[#212121]"} `}
                >
                    {/* CheckBox to Handle Completeion state */}
                    <input
                        className="h-[20px] min-w-[20px] cursor-pointer"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleStatusChange(index)}
                    />

                    {/* Task of particular TODO */}
                    <div className={`ml-4 text-white flex-grow ${todo.completed ? "line-through" : ""}`}>
                        {todo.task}
                    </div>

                    {/* Delete icon */}
                    <MdDelete
                        onClick={() => deleteTodo(index)}
                        size={30}
                        className="text-white min-w-[40px] mr-0 hover:text-red-600 cursor-pointer"
                    />
                </div>
            })}
        </div>
    )
}

export default TodoItems