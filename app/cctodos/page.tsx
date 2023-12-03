import CcForm from "@/components/CcForm";
import prisma from "@/libs/prisma";

const Page = async () => {
  const todos = await prisma.todo.findMany();

  return (
    <div className="m-8">
      <h1 className="text-lg font-bold">Client Components</h1>
      <h1 className="text-xl font-bold">Todo一覧</h1>
      <ul className="mt-8">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <CcForm />
    </div>
  );
};

export default Page;
