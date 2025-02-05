import React, { createContext, useState, useContext } from "react";
import { Blog } from "../types/blog-types";

interface BlogContextType {
    blogs: Blog[];
    addBlog: (blog: Blog) => void;
    updateBlog: (blog: Blog) => void;
    deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | null>(null);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const addBlog = (blog: Blog) => {
        setBlogs(prevBlog => [...prevBlog, blog]);
    };

    const updateBlog = (newBlog: Blog) => {
        setBlogs(prevBlog => prevBlog.map(blog => blog.id === newBlog.id ? newBlog : blog));
    };

    const deleteBlog = (id: number) => {
        setBlogs(prevBlog => prevBlog.filter(blog => blog.id !== id));
    };

    return (
        <BlogContext.Provider value={{
            blogs,
            addBlog,
            updateBlog,
            deleteBlog
        }}>
            {children}
        </BlogContext.Provider>
    )
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) throw new Error("useBlogs must be used within a BlogProvider");
    return context;
};