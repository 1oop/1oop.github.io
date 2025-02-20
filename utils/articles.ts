import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { Article, ArticleMeta } from '../types/article';

const articlesDirectory = path.join(process.cwd(), 'resources/articles');

export async function getArticleMetas(): Promise<ArticleMeta[]> {
  const fileNames = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        id: slug,
        slug,
        ...(data as Omit<ArticleMeta, 'id' | 'slug'>),
      };
    })
  );

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    // 获取目录下所有文件
    const files = await fs.readdir(articlesDirectory);
    // 查找匹配的文件
    const fileName = files.find(file => 
      file.replace(/\.md$/, '') === decodeURIComponent(slug)
    );

    if (!fileName) {
      return null;
    }

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: slug,
      slug,
      content,
      ...(data as Omit<ArticleMeta, 'id' | 'slug'>),
    };
  } catch {
    return null;
  }
}
