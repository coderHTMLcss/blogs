import UserCard from './UserCard';

export type PersonProps = {
    id?: number,
    name: string,
    following: boolean,
}

const peopleToFollow: PersonProps[] = [
    { id: 1, name: "John Wick", following: false },
    { id: 2, name: "Bruce Willis", following: true },
    { id: 3, name: "Will Smith", following: false },
    { id: 4, name: "Ben Affleck", following: false },
];

const PeopleToFollow = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            <h3 className='font-semibold text-lg mb-4'>👥 People to follow</h3>
            <div className='space-y-4'>
                {peopleToFollow.length > 0 && peopleToFollow.map(({ id, name, following }) => {
                    return <UserCard
                        key={id}
                        name={name}
                        following={following}
                    />
                })}
            </div>
        </div>
    )
}

export default PeopleToFollow
