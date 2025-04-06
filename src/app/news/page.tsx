'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost } from './types';

export default function NewsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [originalPosts, setOriginalPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://127.0.0.1:8000/api/news/posts/?page=${currentPage}`);
      if (!res.ok) throw new Error('Failed to fetch posts');
      const data = await res.json();
      
      setOriginalPosts(data.results || data);
      setPosts(data.results || data);
      setCurrentPage(data.page || 1);
      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (filteredPosts: BlogPost[]) => {
    try {
      setIsLoading(true);
      setPosts(filteredPosts);
      setCurrentPage(1);
      setTotalPages(1); // Reset pagination for search results
    } catch (error) {
      console.error('Error searching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Latest F1 News</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, race results, and team updates from the world of Formula 1.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar posts={originalPosts} onSearch={handleSearch} />
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <FeaturedPost posts={posts} />
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}

function FeaturedPost({ posts }: { posts: BlogPost[] }) {
  const featuredPost = posts.find(post => post.is_featured);
  
  if (!featuredPost) return null;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto">
          {featuredPost.featured_image && (
            <Image 
              src={featuredPost.featured_image}
              alt={featuredPost.title}
              fill
              style={{ objectFit: 'cover' }}
              className="object-cover"
            />
          )}
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="text-sm font-semibold text-blue-600 mb-2">{featuredPost.category}</div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{featuredPost.title}</h2>
          <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{new Date(featuredPost.publish_date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>By {featuredPost.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const router = useRouter();

  const handleCardClick = () => {
    // Use the post filename (stem) as the slug
    const slug = post.id.substring(0, 32); // Take first 32 characters of the ID
    router.push(`/news/${slug}`);
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-48">
        {post.featured_image && (
          <Image 
            src={post.featured_image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="object-cover"
          />
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="text-sm font-semibold text-blue-600 mb-1">{post.category}</div>
        <CardTitle className="text-xl text-blue-900">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="text-sm text-gray-500 pt-0">
        <div className="flex items-center">
          <span>{new Date(post.publish_date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
