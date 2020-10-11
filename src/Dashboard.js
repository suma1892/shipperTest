import React,{useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Row, Column } from '@mui-treasury/components/flex';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import { useHistory, withRouter } from 'react-router-dom'
import { mainListItems } from './listItems';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {driversActions} from './redux/actions/drivers-actions';
import GridList from '@material-ui/core/GridList';
import moment from 'moment';
const drawerWidth = 240;
window.onscroll = function () {
  window.scrollTo(0,window.scrollY);
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // position: 'fixed',
    // width: '100vw',
  // height: '100%',
  // left: 0,
  // top: 0,
  // zIndex: 10,
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
  },
  toolbar: {
    // paddingLeft: 124, // keep right padding when drawer closed
    backgroundColor:"white",
    alignSelf:"flex-end"
  },
  gridList: {
    minWidth: '2300px',
    // maxWidth: 2000
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor:"white",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create([ 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  headerText:{
    color:"grey",
    fontSize:13
  },
  childText:{
    // color:"grey",
    fontSize:20
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  root1: {
    minWidth: 275,
  },
  content:{
    padding:50
  },
  padding: {
    // padding: 30,
    // width: "200%",
    justifyContent:'space-between',
    flexGrow: 1
  },
  card1:{
    width: 1100
  },
  menuList:{
    width: '1200px',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  textCenter:{
    justifyContent:'center'
  }
}));

function Dashboard() {
  const dispatch = useDispatch();
  var history = useHistory();
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  let [max, setMax] = useState(5);
  let [min, setMin] = useState(0);
  let dataList = useSelector(state=>state.drivers.data);
  let [data1, setData] = useState(useSelector(state=>state.drivers.data));

  function getData(){
    dispatch(driversActions());
   }

   useEffect(()=>{
     getData()
   },[]);
 
  useEffect(()=>{
  },[])

  const prevButton=()=>{
    setMax(max-5);
    setMin(min-5);
    setData(data1);
    return 0
  }
  const nextButton=()=>{
    setMax(max+5);
    setMin(min+5);
    setData(data1);
    return 0;
  }

  async function setSearchText(event) {
    try {
    const searchText = event.target.value;
    setMin(0);
    setMax(5);
    if(searchText==='') {
      setData(dataList);
      return true;
    }
    const dataClone = await dataList.filter(row => {
      return (typeof row.name.first === 'string') &&
              (row.name.first.toLowerCase().includes(searchText.toLowerCase()) )
    });
    Promise.all(dataClone).then(()=>{
      setData(dataClone);
    })
    
    } catch (error) {
        console.log(error)
    }
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Row className={clsx(classes.direct)}>
            <Typography component="h1" variant="h6" color="textPrimary" className={classes.title}>
              Hallo,{' '}
            </Typography>
            <Typography component="h1" variant="h6" color="secondary" className={classes.title}>
               Suma Albaroh
            </Typography>
          </Row>
          <IconButton color="secondary">
              <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        <Typography component="h1" variant="h6" color="secondary" className={classes.title}>
               Shipper
        </Typography>
        </div>
        <List>{mainListItems(history)}</List>
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />


        <Card className={classes.card1} variant="outlined">
        <CardContent>

          <div className={clsx(classes.padding)}>
            <Row>
              <Column style={{flexGrow: 1}}>
                <Typography style={{fontSize: 20, color:'red', fontWeight:'bold'}}>
                  DRIVER MANAGEMENT
                </Typography>
                <Typography>
                  Data driver yang bekerja dengan anda
                </Typography>
              </Column>
              <OutlinedInput
                className={classes.margin}
                id="input-with-icon-textfield"
                style={{marginRight: 30}}
                onChange={setSearchText}
                startAdornment={<InputAdornment position="start"><Search /></InputAdornment>}
              />
              <Button
                  variant="contained"
                  color="primary"
                  style={{backgroundColor:'red'}}
                  className={classes.button}
                  endIcon={<Add/>}
                >
                  TAMBAH DRIVER
                </Button>
            </Row>  
          </div>
        </CardContent>
        </Card>


        <div className={classes.menuList}>

        <GridList className={classes.gridList} cols={2.5}>
        {JSON.parse(JSON.stringify(data1)).slice(min, max).map((res, index)=>(
          <Card style={{width: 400, margin: 20, height:450}} variant="outlined">
          <CardContent>
          <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={`Driver ID ${res.id.value}`}
            />
            <Divider/>

            <div className={clsx(classes.padding)}>
              <Avatar
                src={res.picture.medium}
                style={{
                  height: 100,
                  width: 100,
                  padding: 10,
                  borderRadius:10
                }}
              />
            <Typography className={classes.headerText}>
              Nama Driver
            </Typography>
            <Typography className={classes.childText}>
              {`${res.name.first} ${res.name.last}`}
            </Typography>
            <Typography className={classes.headerText}>
              Telepon
            </Typography>
            <Typography className={classes.childText}>
              {res.cell}
            </Typography>
            <Typography className={classes.headerText}>
              Email
            </Typography>
            <Typography className={classes.childText}>
              {res.email}
            </Typography>
            <Typography className={classes.headerText}>
              Tanggal Lahir
            </Typography>
            <Typography className={classes.childText}>
              {moment(res.registered.date).format('DD-MM-yyyy')}
            </Typography>
            </div>
          </CardContent>
        </Card>
        ))}
        </GridList>

      </div>
      <div style={{display: 'flex',  paddingLeft: 400}}>
      <Row style={{alignItems: 'center'}}>
        <IconButton aria-label="settings" disabled={min===0} onClick={prevButton}>
        <KeyboardArrowLeft />
        <Typography style={{color:min===0?"grey":'black'}}>Prevoius page</Typography>
        </IconButton>

        <IconButton aria-label="settings" disabled={(max===dataList.length) || data1.length<5} onClick={nextButton}>
            <Typography style={{color:(max===dataList.length) || data1.length<5 ?"grey":'black'}}>Next page</Typography>
        <KeyboardArrowRight />
        </IconButton>
      </Row>
      </div>
      </main>
    </div>
  );
}

export default withRouter(Dashboard)