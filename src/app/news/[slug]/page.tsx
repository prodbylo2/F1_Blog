'use client';

import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  html_content: string;
  category: string;
  author: string;
  publish_date: string;
  featured_image: string | null;
  slug: string;
}

export default function PostPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        if (!slug) {
          router.push('/news');
          return;
        }

        const res = await fetch(`http://127.0.0.1:8000/api/news/posts/${slug}/`);
        if (!res.ok) {
          throw new Error('Post not found');
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [router, slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => router.push('/news')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="mb-8 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600"
        >
          ← Back to News
        </button>

        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.featured_image && (
            <div className="relative h-96 mb-8">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover rounded-lg"
              />
            </div>
          )}

          {/* Post Header */}
          <div className="mb-8">
            <div className="text-sm font-semibold text-blue-600 mb-2">
              {post.category}
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>{new Date(post.publish_date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </div>

          {/* Post Content */}
          <div
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html_content }}
          />
        </article>
      </div>
    </div>
  );
}
