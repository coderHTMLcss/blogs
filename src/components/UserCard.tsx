import { FaUserCircle } from 'react-icons/fa';
import { PersonProps } from './PeopleToFollow';

const UserCard = ({ name, following }: PersonProps) => {
    return (
        <div className='flex justify-between items-center'>
            <section className='flex items-center'>
                <FaUserCircle className='text-3xl mr-3 text-gray-500 ' />
                <span>{name}</span>
            </section>
            <button
                className={`px-4 py-1 text-sm rounded-full ${following ?
                    "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
            >
                {following ? 'Following' : 'Follow'}
            </button>
        </div>
    )
}

export default UserCard
