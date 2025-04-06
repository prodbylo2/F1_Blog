export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  html_content: string;
  category: string;
  author: string;
  publish_date: string;
  featured_image: string | null;
  is_featured: boolean;
  slug: string;
}
