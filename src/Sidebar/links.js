import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouseChimney,
  faPeopleGroup,
  faBookOpen,
  faCalendarDays,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faVk,
} from "@fortawesome/free-brands-svg-icons"
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: faHouseChimney,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: faPeopleGroup,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: faBookOpen,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: faCalendarDays,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: faBook,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: faFacebookSquare,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: faTwitterSquare,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: faLinkedin,
  },
  {
    id: 4,
    url: 'https://vk.com',
    icon: faVk,
  },
];
