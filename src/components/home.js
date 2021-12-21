import React from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import Cookies from 'js-cookie'
const Home = () => {
   const {t} = useTranslation()
    // const currentLanguage = i18next.language
    // console.log(currentLanguage)
    //
    // const lng = Cookies.get('i18next')
    // console.log(lng)

    return (
        <div>
            {t('home')}
        </div>
    );
};

export default Home;