import { Blog } from '../types/blog-types';
import ArticleCard from './ArticleCard';
import { useBlog } from '../shared/BlogContext';

type ArticleListProps = {
    onEdit: (blog: Blog) => void;
}

const ArticleList = ({ onEdit }: ArticleListProps) => {
    const { blogs, deleteBlog } = useBlog();

    return (
        <div className='ml-[5rem]'>
            {blogs.map((blog) => (
                <ArticleCard
                    key={blog.id}
                    article={blog}
                    onDelete={() => deleteBlog(blog.id)}
                    onEdit={() => onEdit(blog)}
                />
            ))}
        </div>
    )
}

export default ArticleList
