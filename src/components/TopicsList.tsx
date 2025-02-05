const topics: string[] = [
    "Technology",
    "Design Thinking",
    "Crypto",
    "Show Biz",
    "Personal Growth",
    "Reading",
];
const TopicsList = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-8">
            <h3 className="font-semibold text-lg mb-4">Topics for you</h3>
            <div className="flex flex-wrap gap-2">
                {topics.length > 0 && topics.map((topic) => {
                    return <span
                        key={topic}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full 
                        cursor-pointer hover:bg-gray-300"
                    >
                        {topic}
                    </span>
                })}
            </div>
        </div>
    )
}

export default TopicsList
