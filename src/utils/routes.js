import {ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE} from "./urls";
import Home from "../components/home";
import About from "../components/about";
import Contacts from "../components/contacts";

export const routes = [
    {path: HOME_PAGE, component: Home, name: 'Home'},
    {path: ABOUT_PAGE, component: About, name: 'About'},
    {path: CONTACT_PAGE, component: Contacts, name: 'Contact'},
]