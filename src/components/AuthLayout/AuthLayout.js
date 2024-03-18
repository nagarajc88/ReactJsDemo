import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (<><Outlet/></>);

AuthLayout.propTypes = {};

AuthLayout.defaultProps = {};

export default AuthLayout;
