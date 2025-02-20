import Link from 'next/link';
import TmuxPane, { TmuxLayout } from '../components/TmuxLayout';
import { getArticleMetas } from '@/utils/articles';
import { ComputerArt, GopherArt, RocketArt } from '@/components/AsciiArt';
import { MatrixRain, LoadingSpinner, CoffeeSteam } from '@/components/AnimatedAscii';
import { SkillTag } from '@/components/SkillTag';

export default async function Home() {
  const articles = await getArticleMetas();
  const frontendSkills = ['React', 'TypeScript', 'Next.js'];
  const backendSkills = ['Rust', 'Golang', 'Python'];
  
  return (
    <TmuxLayout>
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-80px)]">
        {/* 左侧面板 - 个人信息和技能 */}
        <div className="col-span-12 md:col-span-4 space-y-4">
          <TmuxPane title="profile">
            <div className="text-[#d4d4d4] space-y-2 relative">
              <MatrixRain className="absolute top-0 right-0" />
              <div className="relative">
                <div className="flex gap-2">
                  <span className="text-[#64dd17]">➜</span>
                  <span className="text-[#42a5f5]">whoami</span>
                </div>
                <div>
                  <span className="text-lg">Zhang Shan</span>
                  <span className="text-[#6a9955]">  #Full Stack Developer</span>
                </div>
              </div>
            </div>
          </TmuxPane>

          <TmuxPane title="skills">
            <div className="space-y-2">
              <div className="flex justify-between">
                <GopherArt className="mb-4 hidden md:block" />
                <CoffeeSteam className="hidden md:block" />
              </div>
              <div className="text-[#9cdcfe]">Frontend:</div>
              <div className="ml-2 flex flex-wrap gap-2">
                {frontendSkills.map(skill => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
              <div className="text-[#9cdcfe]">Backend:</div>
              <div className="ml-2 flex flex-wrap gap-2">
                {backendSkills.map(skill => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          </TmuxPane>
        </div>

        {/* 右侧面板 - 博客和项目 */}
        <div className="col-span-12 md:col-span-8 space-y-4">
          <TmuxPane title="blog" className="h-1/2">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  {articles.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      href={`/articles/${article.slug}`}
                      className="flex items-center gap-2 hover:text-[#64dd17]"
                    >
                      <LoadingSpinner />
                      <span>{article.title}</span>
                      <span className="text-[#6a9955]">{"//"} {article.date}</span>
                    </Link>
                  ))}
                  {articles.length > 3 && (
                    <Link
                      href="/articles"
                      className="flex items-center gap-2 text-[#6a9955] hover:text-[#64dd17]"
                    >
                      <span className="text-[#64dd17]">→</span>
                      <span>View more articles...</span>
                    </Link>
                  )}
                </div>
                <RocketArt className="hidden lg:block" />
              </div>
            </div>
          </TmuxPane>

          <TmuxPane title="projects" className="h-1/2">
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#64dd17]">$</span>
                  <span className="text-[#ce9178]">Project {i}</span>
                  <span className="text-[#6a9955]">{"//"} Description {i}</span>
                </div>
              ))}
            </div>
          </TmuxPane>
        </div>
      </div>
    </TmuxLayout>
  );
}
