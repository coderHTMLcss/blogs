import { useState, useEffect, useCallback } from "react";
import { useBlog } from "../shared/BlogContext";
import { Blog } from "../types/blog-types";

interface UseBlogFormProps {
  existingBlog?: Blog | null;
  onClose: () => void;
}

export const useBlogForm = ({ existingBlog, onClose }: UseBlogFormProps) => {
  const { addBlog, updateBlog } = useBlog();
  const [formData, setFormData] = useState<Blog>({
    id: existingBlog?.id || Date.now(),
    title: existingBlog?.title || "",
    description: existingBlog?.description || "",
    image: existingBlog?.image || "",
    time: existingBlog?.time || "",
  });

  useEffect(() => {
    if (existingBlog) setFormData(existingBlog);
  }, [existingBlog]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (existingBlog) {
        updateBlog(formData);
      } else {
        addBlog(formData);
      }
      onClose();
    },
    [existingBlog, formData, addBlog, updateBlog, onClose]
  );

  return { formData, handleChange, handleSubmit };
};
