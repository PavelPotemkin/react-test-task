import React, {FC, useEffect, useState} from 'react';
import UserService, {User, Users} from "../api/UserService";
import UserCardPreview from "../components/UserCardPreview";
import AppPopup from "../components/AppPopup";

type userCacheType = {
    [key: number]: User;
}

const userCache: userCacheType = {}

const Main: FC = () => {
    const [users, setUsers] = useState<Users>([])
    const [user, setUser] = useState<User | null>(null)
    const [isPopupShown, setIsPopupShown] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, [])
    
    async function setFetchedUser(id: number) {
        let fetchedUser;
        
        if (userCache[id]) {
            fetchedUser = userCache[id]
        } else {
            fetchedUser = await UserService.getById(id)
            userCache[id] = fetchedUser
        }
        
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
                    <AppPopup onClose={() => setIsPopupShown(false)}>
                        <div className='user-popup'>
                            <div className='user-popup__image-wrapper'>
                                <img className='user-popup__image' src={user.avatar} alt=""/>
                            </div>
                            
                            <div className='user-popup__info'>
                                <div>
                                    <div>Id: </div>
                                    <div>First name: </div>
                                    <div>Last name: </div>
                                    <div>Email: </div>
                                </div>
                                
                                <div>
                                    <div>{user.id}</div>
                                    <div>{user.first_name}</div>
                                    <div>{user.last_name}</div>
                                    <div>{user.email}</div>
                                </div>
                            </div>
                        </div>
                    </AppPopup>
                    :
                    ''
            }
        </div>
    );
};

export default Main;
