import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Badge } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navlinks: {
      display: 'flex',
    },
    logo: {
      flexGrow: 1,
      cursor: 'pointer',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '20px',
      marginLeft: theme.spacing(20),
      '&:hover': {
        color: 'yellow',
        borderBottom: '1px solid white',
      },
    },
  })
);

type Props = {};

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navlinks}>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >
            <Badge>
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
