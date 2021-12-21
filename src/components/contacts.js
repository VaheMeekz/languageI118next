import React from 'react';
import {useTranslation} from "react-i18next";

const Contacts = () => {
    const {t} = useTranslation()

    return (
        <div>
            {t('contacts')}
        </div>
    );
};

export default Contacts;