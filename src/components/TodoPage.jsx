// Import components
import TodoInput from "./TodoInput";
import TodoItems from "./TodoItems";

const TodoPage = () => {
    return (
        <div className="flex flex-col justify-center mt-[50px] items-center mb-[50px] overflow-y-auto">
            {/* Heading */}
            <div className="text-center text-[#212121] font-bold text-[40px]">TODO&apos;S</div>
            <TodoInput/>
            <TodoItems />
        </div>
    );
}

export default TodoPage; 
