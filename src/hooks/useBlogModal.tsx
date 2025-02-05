import { useState, useCallback } from "react";
import { Blog } from "../types/blog-types";

export const useBlogModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

    const openModalForNewBlog = useCallback(() => {
        setEditingBlog(null);
        setIsModalOpen(true);
    }, []);

    const openModalForEdit = useCallback((blog: Blog) => {
        setEditingBlog(blog);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

    return { isModalOpen, editingBlog, openModalForNewBlog, openModalForEdit, handleCloseModal };
};
