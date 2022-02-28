import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actionCreators/productActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';

import { Item } from '../../components';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

// Styles
import { Wrapper } from '../../App.styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const { products, error, loading } = useTypedSelector(
    (state) => state.products
  );
  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  if (loading) return <LinearProgress />;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={4}>
            <Item item={product} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Home;
