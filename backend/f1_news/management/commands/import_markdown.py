from django.core.management.base import BaseCommand
from django.core.files import File
import os
from .models import BlogPost, Tag
from markdown import markdown
import frontmatter

class Command(BaseCommand):
    help = 'Import markdown files from the posts directory'

    def handle(self, *args, **options):
        # Get the directory containing the management command
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        posts_dir = os.path.join(base_dir, 'posts')

        if not os.path.exists(posts_dir):
            self.stdout.write(self.style.ERROR(f"Directory {posts_dir} does not exist"))
            return

        # Process each markdown file
        for filename in os.listdir(posts_dir):
            if filename.endswith('.md'):
                file_path = os.path.join(posts_dir, filename)
                
                try:
                    # Read the markdown file with frontmatter
                    with open(file_path, 'r') as f:
                        post = frontmatter.load(f)
                        
                        # Create or update the blog post
                        blog_post, created = BlogPost.objects.update_or_create(
                            title=post.metadata.get('title', filename[:-3]),
                            defaults={
                                'excerpt': post.metadata.get('excerpt', ''),
                                'category': post.metadata.get('category', 'RACE_WEEKEND'),
                                'author': post.metadata.get('author', 'Anonymous'),
                                'content': post.content,
                                'is_featured': post.metadata.get('featured', False),
                            }
                        )

                        # Handle tags
                        tag_names = post.metadata.get('tags', [])
                        if isinstance(tag_names, str):
                            tag_names = [tag_names]
                        
                        tags = []
                        for tag_name in tag_names:
                            tag, _ = Tag.objects.get_or_create(name=tag_name)
                            tags.append(tag)
                        blog_post.tags.set(tags)

                        # Save the markdown file
                        with open(file_path, 'rb') as md_file:
                            blog_post.markdown_file.save(filename, File(md_file))

                        self.stdout.write(
                            self.style.SUCCESS(
                                f"Successfully {'created' if created else 'updated'} post: {blog_post.title}"
                            )
                        )

                except Exception as e:
                    self.stdout.write(
                        self.style.ERROR(f"Error processing {filename}: {str(e)}")
                    )
