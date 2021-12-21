import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import i18nextHttpBackend from 'i18next-http-backend'

i18n
    .use(initReactI18next)
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .init({
        supportedLngs: ['en', 'am', 'ru', 'fr'],
        fallbackLng: 'en',
        detection: {
            order: ['cookie'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    })


ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={true}>
            <App />
        </Suspense>
    </BrowserRouter>,
  document.getElementById('root')
);


