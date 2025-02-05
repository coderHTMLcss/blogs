export type Trends = {
    id: number,
    title: string,
    author: string
};

const movieTrends: Trends[] = [
    {
        id: 1,
        title: "The Rise of AI in Filmmaking",
        author: "James Cameron",
    },
    {
        id: 2,
        title: "How Streaming Changed the Movie Industry",
        author: "Sophie Bennett",
    },
    {
        id: 3,
        title: "The Return of Practical Effects in Hollywood",
        author: "David Nolan",
    },
    {
        id: 4,
        title: "Why Indie Films Are Winning More Awards",
        author: "Rachel Simmons",
    },
    {
        id: 5,
        title: "The Marvel vs. DC Rivalry: What’s Next?",
        author: "Mark Stevenson",
    },
];

const TrendsList = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-8">
            <h3 className="font-semibold text-lg mb-4">📈 Today's top trends</h3>
            <ul className="space-y-4 overflow-y-auto h-[200px] 
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                {movieTrends.map(({ id, title, author }) => (
                    <li key={id} className="flex flex-col">
                        <span className="font-medium">{title}</span>
                        <span className="text-sm text-gray-500">By {author}</span>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default TrendsList;


