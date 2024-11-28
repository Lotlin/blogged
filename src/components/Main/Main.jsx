import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import Modal from '../Modal';
import MainPage from './MainPage';
import NoPage from '../UI/NoPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<MainPage />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Layout>
  </main>
);


