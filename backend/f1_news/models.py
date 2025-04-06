import os
from pathlib import Path
from typing import List, Dict, Optional
import frontmatter
from django.conf import settings

class Tag:
    def __init__(self, name: str, slug: str):
        self.name = name
        self.slug = slug

    def __str__(self):
        return self.name

class BlogPost:
    def __init__(self, title: str, excerpt: str, content: str, 
                 category: str, author: str, publish_date: str,
                 tags: List[str], featured_image: Optional[str] = None,
                 is_featured: bool = False, id: str = None):
        self.title = title
        self.excerpt = excerpt
        self.content = content
        self.category = category
        self.author = author
        self.publish_date = publish_date
        self.tags = tags
        self.featured_image = featured_image
        self.is_featured = is_featured
        self.html_content = None  # Will be generated when needed
        self.id = id or self._generate_id()

    def _generate_id(self) -> str:
        # Generate a unique ID based on title and publish date
        import hashlib
        unique_str = f"{self.title}{self.publish_date}"
        return hashlib.md5(unique_str.encode()).hexdigest()

    def to_dict(self) -> Dict:
        return {
            'id': self.id,
            'title': self.title,
            'excerpt': self.excerpt,
            'content': self.content,
            'category': self.category,
            'author': self.author,
            'publish_date': self.publish_date,
            'tags': self.tags,
            'featured_image': self.featured_image,
            'is_featured': self.is_featured
        }

class BlogManager:
    def __init__(self, posts_dir: str):
        self.posts_dir = Path(posts_dir)
        
    def get_all_posts(self) -> List[BlogPost]:
        posts = []
        for file in self.posts_dir.glob('*.md'):
            try:
                with open(file, 'r') as f:
                    post = frontmatter.load(f)
                    blog_post = BlogPost(
                        title=post.get('title', file.stem),
                        excerpt=post.get('excerpt', ''),
                        content=post.content,
                        category=post.get('category', 'RACE_WEEKEND'),
                        author=post.get('author', 'Anonymous'),
                        publish_date=post.get('publish_date', ''),
                        tags=post.get('tags', []),
                        featured_image=post.get('featured_image'),
                        is_featured=post.get('featured', False)
                    )
                    posts.append(blog_post)
            except Exception as e:
                print(f"Error reading {file}: {e}")
        return sorted(posts, key=lambda p: p.publish_date, reverse=True)

    def get_post_by_slug(self, slug: str) -> Optional[BlogPost]:
        # First try to find by filename stem
        for file in self.posts_dir.glob('*.md'):
            if file.stem == slug:
                try:
                    with open(file, 'r') as f:
                        post = frontmatter.load(f)
                        return BlogPost(
                            title=post.get('title', file.stem),
                            excerpt=post.get('excerpt', ''),
                            content=post.content,
                            category=post.get('category', 'RACE_WEEKEND'),
                            author=post.get('author', 'Anonymous'),
                            publish_date=post.get('publish_date', ''),
                            tags=post.get('tags', []),
                            featured_image=post.get('featured_image'),
                            is_featured=post.get('featured', False)
                        )
                except Exception as e:
                    print(f"Error reading {file}: {e}")
                    continue

        # If not found by stem, try to find by ID
        posts = self.get_all_posts()
        for post in posts:
            if post.id == slug:
                return post

        return None

    def search_posts(self, query: str) -> List[BlogPost]:
        results = []
        keywords = query.lower().split()
        for post in self.get_all_posts():
            if any(keyword in post.title.lower() or 
                   keyword in post.content.lower() or 
                   keyword in post.author.lower() or 
                   keyword in post.excerpt.lower() 
                   for keyword in keywords):
                results.append(post)
        return results

# Initialize the blog manager
BLOG_MANAGER = BlogManager(settings.BASE_DIR / 'posts')
