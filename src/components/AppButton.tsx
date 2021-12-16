import React, {FC} from 'react';

type buttonType = {
    onClick: () => any
} 

const AppButton: FC<buttonType> = (props) => {
    return (
        <button className='button' onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default AppButton;
