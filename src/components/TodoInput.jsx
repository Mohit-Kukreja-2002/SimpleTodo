// React hooks
import { useState } from "react";

// Redux utilities
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/features/todoSlice";

const TodoInput = () => {
    // useState to handle Input Value
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch()

    // to handle addition of a todoItem on enter press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodoHandler();
        }
    };

    // function to add-a-todo-item
    const addTodoHandler = () => {

        // If input value is empty just return back
        if (inputValue.trim() === "") return

        // add this todo to the redux state
        dispatch(addTodo({
            "task": inputValue.trim(),
            "completed": false,
        }))

        // Revert back to original state
        setInputValue("")
    }
    return (
        <div className="mt-4">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // 400px, 800px, 1200px are the various screen sizes customly defined in tailwind css 
                // for better responsiveness
                className="p-[8px] text-[16px] w-[250px] 400px:w-[300px] 800px:w-[400px] 1200px:w-[500px] border-black border-2 rounded-lg"
                placeholder="Enter task"
                onKeyDown={handleKeyPress}
            />
            <button
                onClick={addTodoHandler}
                className="ml-2 text-white hover:bg-slate-600 bg-black rounded-lg px-[14px] py-[10px]"
            >
                ADD
            </button>
        </div>
    )
}

export default TodoInput