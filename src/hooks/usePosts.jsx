// hooks/usePosts.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'], // Use an object instead of passing as the first argument
    queryFn: fetchPosts, // The function to fetch data
  });
};
