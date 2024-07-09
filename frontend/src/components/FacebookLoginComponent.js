import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginButton = ({ responseFacebook }) => {
    return (
        <FacebookLogin
            appId="879034320730735"
            autoLoad={false}
            fields="name,email,picture"
            scope="pages_show_list,read_insights"
            callback={responseFacebook}
        />
    );
};

export default LoginButton;
