import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useQuery } from 'react-query';
// Components
// import Item from './Item/Item';
// import Cart from './Cart/Cart';
// import Drawer from '@material-ui/core/Drawer';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Grid from '@material-ui/core/Grid';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Badge from '@material-ui/core/Badge';
import { Header } from './components';
import Routes from './routes';

// Styles
// import { Wrapper, StyledButton } from './App.styles';

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const App = () => {
  // const [cartOpen, setCartOpen] = useState(false);
  // const { data, isLoading, error } = useQuery<CartItemType[]>(
  //   'products',
  //   getProducts
  // );
  // console.log(data);

  // if (isLoading) return <LinearProgress />;
  // if (error) return <div>Something went wrong ...</div>;

  return (
    <div>
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
