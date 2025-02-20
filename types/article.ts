export interface ArticleMeta {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  slug: string;
  author: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
  params: {
    slug: string;
  };
}