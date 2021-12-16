import React from 'react';
import {FC} from "react";
import {User} from "../api/UserService";
import AppButton from "./AppButton";

type UserCardPreviewType = User & {
    onClick: () => any
}

const UserCardPreview: FC<UserCardPreviewType> = (props) => {    
    return (
        <div className='user-card-preview'>
            <div className='user-card-preview__name'>
                {props.first_name + ' ' + props.last_name}
            </div>

            <div className='user-card-preview__email'>
                {props.email}
            </div>
            
            <img className='user-card-preview__avatar' src={props.avatar} alt=""/>
            
            <AppButton onClick={props.onClick}>
                Открыть
            </AppButton>
        </div>
    );
};

export default UserCardPreview;