import Link from 'next/link';
import { TmuxLayout } from '../../components/TmuxLayout';
import TmuxPane from '../../components/TmuxLayout';
import { getArticleMetas } from '@/utils/articles';

export default async function Articles() {
  const articles = await getArticleMetas();

  return (
    <TmuxLayout>
      <div className="h-[calc(100vh-80px)] overflow-auto">
        <div className="max-w-4xl mx-auto px-4">
          <TmuxPane title="articles">
            <div className="space-y-4">
              {articles.map(article => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block border-b border-[#3c3c3c] pb-4 hover:text-[#64dd17]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#64dd17]">→</span>
                    <h2 className="text-[#9cdcfe] text-lg">{article.title}</h2>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[#6a9955]">{"//"} {article.date}</span>
                    {article.tags.map(tag => (
                      <span key={tag} className="text-[#ce9178]">#{tag}</span>
                    ))}
                  </div>
                  <p className="mt-2">{article.description}</p>
                </Link>
              ))}
            </div>
          </TmuxPane>
        </div>
      </div>
    </TmuxLayout>
  );
}
