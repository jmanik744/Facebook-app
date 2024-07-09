import React from 'react';

const UserProfile = ({ user }) => {
    if (!user) {
        return null; // or a loading spinner or any placeholder
    }

    return (
        <div>
            <img src={user.picture?.data?.url} alt={user.name} />
            <h2>{user.name}</h2>
        </div>
    );
};

export default UserProfile;
