import prisma from "@/libs/prisma";

type Article = {
  id: number;
  title: string;
  content: string;
};

const Articles = async () => {
  const articles = await prisma.article.findMany();
  return (
    <div>
      <ul>
        {articles.map((article: Article) => (
          <li key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
