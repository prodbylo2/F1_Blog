from rest_framework import serializers
from .models import BlogPost, Tag
from markdown import markdown

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'slug']

class BlogPostSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    html_content = serializers.SerializerMethodField()
    
    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'excerpt', 'html_content',
            'category', 'tags', 'author', 'featured_image',
            'publish_date', 'last_modified', 'is_featured'
        ]
        read_only_fields = ['html_content']

    def get_html_content(self, obj):
        """Convert markdown content to HTML"""
        if obj.markdown_file:
            try:
                with open(obj.markdown_file.path, 'r') as f:
                    return markdown(f.read())
            except Exception as e:
                return f"Error reading markdown file: {str(e)}"
        return markdown(obj.content) if obj.content else ""

    def create(self, validated_data):
        """Create a new blog post with optional markdown file"""
        markdown_file = self.context['request'].FILES.get('markdown_file')
        if markdown_file:
            # If markdown file is provided, read its content
            content = markdown_file.read().decode()
            validated_data['content'] = content
        return super().create(validated_data)

    def update(self, instance, validated_data):
        """Update blog post with optional markdown file"""
        markdown_file = self.context['request'].FILES.get('markdown_file')
        if markdown_file:
            # If markdown file is provided, read its content
            content = markdown_file.read().decode()
            validated_data['content'] = content
        return super().update(instance, validated_data)
