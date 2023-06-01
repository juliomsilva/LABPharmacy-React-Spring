import React from 'react';
import labPhamacyImage from '../Images/LabPhamacy.png';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { PersonAdd as PersonAddIcon, People as PeopleIcon, AttachMoney as AttachMoneyIcon, ShoppingBasket as ShoppingBasketIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({  
   
    list: {
        width: 190,
        backgroundColor: '#D8D8D8',
        height: '100vh',
      },

  drawerPaper: {
    width: 190,
    backgroundColor: '#D8D8D8',
    
    
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#D8D8D8',
  },

  logo: {
    width: '100%',
    maxWidth: 130,
    
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Obtenha o objeto history do react-router-dom

  // Função para lidar com o clique nos itens da sidebar
  const handleItemClick = (path) => {
    // Use o método push do history para navegar para o caminho de redirecionamento passado como argumento
    navigate(path);
  }

  return (
    <Drawer variant="permanent" className={classes.drawerPaper} >
        <Box className={classes.logoContainer}>
        <img src={labPhamacyImage} alt="Logo" className={classes.logo} />
      </Box>
      <List className={classes.list} >
      <ListItem button onClick={() => handleItemClick('/cadastro')} className={classes.listItem}>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Cadastro" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('/usuarios')} className={classes.listItem}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuários" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('/vendas')} className={classes.listItem}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Vendas" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('/produtos')} className={classes.listItem}>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem button onClick={() => handleItemClick('/login')} className={classes.listItem}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;



