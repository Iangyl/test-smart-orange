import { Fragment } from 'react';
import ContactUs from '../components/ContactUs/ContactUs';
import TitleBlock from '../components/TitleBlock/TitleBlock';
import OurProjects from '../components/OurProjects/OurProjects';
import MainTasksBlock from '../components/MainTasksBlock/MainTasksBlock';
import AboutCompanyBlock from '../components/AboutCompanyBlock/AboutCompanyBlock';

const Home = () => (
  <Fragment>
    <TitleBlock />
    <AboutCompanyBlock />
    <MainTasksBlock />
    <OurProjects />
    <ContactUs />
  </Fragment>
);

export default Home;
