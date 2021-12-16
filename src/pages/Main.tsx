import React, {FC, useEffect, useMemo, useState} from 'react';
import UserService, {User, Users} from "../api/UserService";
import UserCardPreview from "../components/UserCardPreview";
import UserPopup from "../components/UserPopup";

const Main: FC = () => {
    const [users, setUsers] = useState<Users>([])
    const [user, setUser] = useState<User | null>(null)
    const [isPopupShown, setIsPopupShown] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, [])
    
    async function setFetchedUser(id: number) {
        const fetchedUser = await UserService.getById(id)
        setUser(fetchedUser)
        setIsPopupShown(true)
    }
    
    async function fetchUsers() {
        const fetchedUsers = await UserService.getAll()
        
        setUsers(fetchedUsers)
    }
    
    return (
        <div className='users'>
            {
                users 
                    ?
                    users.map(user =>
                        <UserCardPreview
                            onClick={() => setFetchedUser(user.id)}
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            avatar={user.avatar}
                        />
                    )
                    :
                    ''
            }

            {
                isPopupShown && user
                    ?
                    <UserPopup user={user}
                               onClose={() => setIsPopupShown(false)}
                    />
                    :
                    ''
            }
        </div>
    );
};

export default Main;
