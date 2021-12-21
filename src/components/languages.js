import React, {useEffect, useState} from 'react';
import i18next from "i18next";
import cookies from 'js-cookie'

const Languages = () => {
    const languages = [
        {id: 1, lang: 'en'},
        {id: 2, lang: 'am'},
        {id: 3, lang: 'ru'},
        {id: 4, lang: 'fr'}
    ]

    const currentLang = cookies.get('i18next')
    const [activeLang, setActiveLang] = useState(currentLang)

    const selectlanguages = (lang) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
    }

    useEffect(() => {
        console.log(activeLang)
    }, [])


    return (
        <ul className='languages'>
            {
                languages.map(({id, lang}) => {
                    return <li
                        key={id}
                        onClick={() => selectlanguages(lang, id)}
                        className={lang === activeLang ? 'language active' : 'language'}
                    >
                        {lang}
                    </li>
                })
            }
        </ul>
    );
};

export default Languages;