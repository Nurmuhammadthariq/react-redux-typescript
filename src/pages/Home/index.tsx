import React from 'react';
// import { useQuery } from 'react-query';
// import Drawer from '@material-ui/core/Drawer';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import Grid from '@material-ui/core/Grid';
// import Badge from '@material-ui/core/Badge';

// Styles
// import { Wrapper, StyledButton } from '../../App.styles';

// export type CartItemType = {
//   id: number;
//   category: string;
//   description: string;
//   image: string;
//   price: number;
//   title: string;
//   amount: number;
// };

// const getProducts = async (): Promise<CartItemType[]> =>
//   await (await fetch('https://fakestoreapi.com/products')).json();

const Home: React.FC = () => {
  // const { data, isLoading, error } = useQuery<CartItemType[]>(
  //   'products',
  //   getProducts
  // );
  // console.log(data);

  return <div>Home</div>;
};

export default Home;
