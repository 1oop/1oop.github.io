import { TmuxLayout } from '../../../components/TmuxLayout';
import TmuxPane from '../../../components/TmuxLayout';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getArticle, getArticleMetas } from '@/utils/articles';
import type { Components } from 'react-markdown';
import { CodeProps, PageProps } from '@/types/article';



export async function generateStaticParams() {
  const articles = await getArticleMetas();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({params} :PageProps) {
  const resolveParams = await params;
  const article = await getArticle(decodeURIComponent(resolveParams.slug));

  if (!article) {
    notFound();
  }

  // 定义 markdown 组件映射
  const components: Partial<Components> = {
    h1: ({children}) => <h1 className="text-[#9cdcfe] border-b border-[#3c3c3c] pb-2">{children}</h1>,
    h2: ({children}) => <h2 className="text-[#ce9178] mt-8">{children}</h2>,
    h3: ({children}) => <h3 className="text-[#569cd6] mt-6">{children}</h3>,
    code: ({inline, children, className}: CodeProps) => (
      inline 
        ? <code className="bg-[#1e1e1e] px-1 py-0.5 rounded border border-[#3c3c3c]">{children}</code>
        : <code className={className}>{children}</code>
    ),
    a: ({children, href}) => (
      <a href={href} className="text-[#64dd17] hover:underline">{children}</a>
    ),
    ul: ({children}) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({children}) => <ol className="list-decimal list-inside">{children}</ol>,
    li: ({children}) => <li className="text-[#d4d4d4]">{children}</li>,
    p: ({children}) => <p className="text-[#d4d4d4]">{children}</p>,
  };

  return (
    <TmuxLayout>
      <div className="h-[calc(100vh-80px)] overflow-auto">
        <div className="max-w-4xl mx-auto px-4">
          <TmuxPane title={`article: ${article.title} -- ${article.author} published on ${article.date}`}>
            <div className="space-y-4">
              <div className="border-b border-[#3c3c3c] pb-4">
                <div className="flex gap-2 mt-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-[#ce9178]">#{tag}</span>
                  ))}
                </div>
              </div>
              
              <article className="prose prose-invert prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-[#3c3c3c] max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={components}
                >
                  {article.content}
                </ReactMarkdown>
              </article>
            </div>
          </TmuxPane>
        </div>
      </div>
    </TmuxLayout>
  );
}
