import React from 'react';

const PhotoCard = ({img}) => {

    return (
        <div>
            <img src={img} alt="фото"/>
        </div>
    );
};

export default PhotoCard;
