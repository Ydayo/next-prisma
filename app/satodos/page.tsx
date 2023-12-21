import DeleteButton from "@/components/DeleteButton";
import { addTodo } from "@/libs/actions";
import prisma from "@/libs/prisma";

const SaTodos = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-lg font-bold">Server Action</h1>
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-2">
            <span>{todo.name}</span>
            <DeleteButton id={todo.id} />
          </li>
        ))}
      </ul>
      <form className="flex items-center mt-4" action={addTodo}>
        <label htmlFor="name">Name:</label>
        {/* <CInput placeholder="記入してください" type="text" /> */}
        <input type="text" name="name" className="border mx-2 p-1" />
        <button
          type="submit"
          className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default SaTodos;
