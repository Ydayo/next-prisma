import { deleteTodo } from "@/libs/actions";
import React from "react";

const DeleteButton = ({ id }: { id: number }) => {
  const deleteWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteWithId}>
      <button>削除</button>
    </form>
  );
};

export default DeleteButton;
