import InputField from "./InputField";
import { useBlogForm } from "../hooks/useBlogForm";
import { Blog } from "../types/blog-types";

interface BlogFormProps {
    existingBlog?: Blog | null;
    onClose: () => void;
}

const formFields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Description", name: "description", type: "textarea" },
    { label: "Image URL", name: "image", type: "url" },
    { label: "Date", name: "time", type: "date" },
] as const;

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
    const { formData, handleChange, handleSubmit } = useBlogForm({ existingBlog, onClose });

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl w-full max-w-lg mx-auto shadow-xl transition-all">
            <h3 className="font-bold text-2xl mb-4 text-gray-900 text-center">
                {existingBlog ? "Edit Blog" : "Add Blog"}
            </h3>

            <div className="space-y-4">
                {formFields.map(({ label, name, type }) => (
                    <InputField
                        key={name}
                        label={label}
                        name={name}
                        type={type}
                        value={formData[name]}
                        onChange={handleChange}
                    />
                ))}
            </div>

            <div className="flex justify-end mt-6 space-x-4">
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                >
                    {existingBlog ? "Update" : "Add"}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default BlogForm;
