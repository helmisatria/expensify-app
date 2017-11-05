import React from 'react';
import { Link } from 'react-router-dom';

export const NotfoundPage = () => (
  <div>
    Page not found - <Link to="/" href="/">Go home</Link>
  </div>
);

export default NotfoundPage;
