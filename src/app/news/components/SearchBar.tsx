'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { BlogPost } from '../types';

interface SearchBarProps {
  posts: BlogPost[];
  onSearch: (filteredPosts: BlogPost[]) => void;
}

export default function SearchBar({ posts, onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Debounce function to prevent too frequent updates
  const debounce = (fn: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  const handleSearch = () => {
    try {
      setIsSearching(true);
      const filteredPosts = posts.filter(post => {
        const query = searchTerm.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
        );
      });
      onSearch(filteredPosts);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setIsSearching(false);
    }
  };

  // Debounced search function
  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          debouncedSearch();
        }}
        placeholder="Search articles..."
        className="w-full px-4 py-2 pr-10 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        disabled={isSearching}
      />
      <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
    </div>
  );
}
