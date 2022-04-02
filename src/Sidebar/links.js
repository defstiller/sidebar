import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouseChimney,
  faPeopleGroup,
  faBookOpen,
  faCalendarDays,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
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
    icon:"fa-brands fa-facebook-square",
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon:"fa-brands fa-twitter-square",
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: "fa-brands fa-linkedin",
  },
  {
    id: 4,
    url: 'https://vk.com',
    icon:"fa-brands fa-vk",
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: "broken",
  },
];
