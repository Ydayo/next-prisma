import Form from "@/components/Form";
import prisma from "@/libs/prisma";

type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
};

const Todos = async () => {
  const todos = await prisma.todo.findMany();
  return (
    <div className="m-8">
      <h1 className="text-lg font-bold"></h1>
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      <Form />
    </div>
  );
};

export default Todos;
