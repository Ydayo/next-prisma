import { revalidatePath } from "next/cache";

export const addTodo = async (data: FormData) => {
  "use server";
  const name = data.get("name") as string;
  await prisma.todo.create({ data: { name } });
  revalidatePath("/satodos");
};

export const deleteTodo = async (id: number) => {
  "use server";
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};
