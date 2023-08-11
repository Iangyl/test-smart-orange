import placeholder from '../../assets/icons/placeholder.svg';
import phone from '../../assets/icons/phone.svg';
import mail from '../../assets/icons/mail.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';
import pinterest from '../../assets/icons/pinterest.svg';

export const navigationLinks = [
  { name: 'главная', href: '#', active: true },
  { name: 'галерея', href: '#', active: false },
  { name: 'проекты', href: '#', active: false },
  { name: 'сертификаты', href: '#', active: false },
  { name: 'контакты', href: '#', active: false },
];

export const contactInfo = [
  {
    img: placeholder,
    info: '100000, Республика  Казахстан, г. Караганда, ул. Телевизионная 10',
  },
  { img: phone, info: '+38 (000) 000 00 00' },
  { img: mail, info: 'mail@gmail.com' },
];

export const socialIcons = [
  { img: facebook, href: '#' },
  { img: twitter, href: '#' },
  { img: linkedin, href: '#' },
  { img: pinterest, href: '#' },
];
