import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/news/posts/${params.slug}/`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) return {};
    
    const post = await res.json();
    return {
      title: post.title,
      description: post.content.substring(0, 155) + '...',
    };
  } catch (error) {
    return {};
  }
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
