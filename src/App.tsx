import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components';
import Routes from './routes';

// Styles
// import { Wrapper, StyledButton } from './App.styles';

// Types
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
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
