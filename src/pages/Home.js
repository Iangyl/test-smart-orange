import { Fragment } from 'react';
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
  </Fragment>
);

export default Home;
