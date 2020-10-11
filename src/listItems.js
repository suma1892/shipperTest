import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateRange from '@material-ui/icons/DateRange';
import Home from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Typography } from '@material-ui/core';

export const mainListItems =(history)=> (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Beranda" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText ><Typography style={{fontSize: 13, color:'red'}}>DRIVER MANAGEMENT</Typography></ListItemText>
    </ListItem>
    <ListItem button onClick={()=>history.push('/')}>
      <ListItemIcon>
        <DateRange />
      </ListItemIcon>
      <ListItemText primary="Pick up" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);