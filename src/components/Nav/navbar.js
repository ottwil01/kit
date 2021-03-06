import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo_transparent.png';
import firebase from '../../services/firebase';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	logo: {
		width: '80px',
		[theme.breakpoints.up('md')]:{
		width: '120px',
		},
		marginTop: '15px'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '7vh',
		[theme.breakpoints.up('md')]:{
		height: '9vh',
		},
	}
}));

export default function Navbar(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
		<AppBar className={classes.header} position="static">
			<a href="/dashboard"><img alt="pelican-logo" className={classes.logo} src={logo}/></a>
			<Toolbar>
				<Button onClick={logout} href="/" color="inherit">Logout</Button>
			</Toolbar>
		</AppBar>
		</div>
	)

	async function logout() {
		await firebase.logout();
	}
}
