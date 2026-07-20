import { Navigate } from 'react-router';

import App from './App.jsx';


// -------------- DOMAINS --------------
import AuthCallback from '../domains/auth/api/authCallback.jsx';
import Profile from      '../domains/profile/Profile.jsx';
import Tournaments from  '../domains/tournaments/Tournaments.jsx';
import Products from     '../domains/products/Products.jsx';
import Devel from        '../domains/Devel/Devel.jsx';


// -------------- PAGES --------------
import Offer from          '../pages/Offer/Offer.jsx';
import PaymentSuccess from '../pages/PaymentSuccess/PaymentSuccess.jsx';
import PaymentFail from    '../pages/PaymentFail/PaymentFail.jsx';
import Work from           '../pages/Work/Work.jsx';
import Privacy from        '../pages/Privacy/Privacy.jsx';
import Donate from         '../pages/Donate/Donate.jsx';
import About from          '../pages/About/About.jsx'
import Error from          '../pages/Error/Error.jsx';
import Home from           '../pages/Home/Home.jsx';



export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        index: true,
        element: <Home />
      },
      {
        path: 'Home',
        index: true,
        element: <Home />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'auth/callback',
        element: <AuthCallback />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'Tourn',
        element: <Tournaments />
      },
      {
        path: 'Our',
        element: <Devel />
      },
      {
        path: 'Privacy',
        element: <Privacy />
      },
      {
        path: 'Offer',
        element: <Offer />
      },
      {
        path: 'Donate',
        element: <Products />
      },
      {
        path: 'Products/:id',
        element: <Donate />
      },
      {
        path: 'Work',
        element: <Work />
      },
      {
        path: 'payment-success',
        element: <PaymentSuccess />
      },
      {
        path: 'payment-fail',
        element: <PaymentFail />
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
];
