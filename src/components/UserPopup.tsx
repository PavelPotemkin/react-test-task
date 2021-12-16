import React, {FC} from 'react';
import {User} from "../api/UserService";

type userPopupType = {
    user: User,
    onClose: () => any
}

const UserPopup: FC<userPopupType> = (props) => {
    console.log(props)
    return (
        <div>
            
        </div>
    );
};

export default UserPopup;
