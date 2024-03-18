import React from 'react';
import styles from './MainLayout.module.css';
import { Provider } from 'react-redux';
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom';
import store from "../../store/store";

const MainLayout = () => (<>
   <Provider store={store}>
      <Header></Header>
      <div className={styles.MainLayout }>
         <Outlet />
      </div>
   </Provider>
</>);

MainLayout.propTypes = {};

MainLayout.defaultProps = {};

export default MainLayout;
