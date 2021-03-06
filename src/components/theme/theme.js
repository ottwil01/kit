import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const white = '#fff'

function pxToRem(value) {
	return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
    breakpoints: {
		values: {
			xs: 0,
			sm: 700,
			md: 960,
			lg: 1280,
			xl: 1920,
		}
    },
	overrides: {
		MuiTypography: {
			h1: {
				fontSize: pxToRem(24),
				color: white,
				marginBottom: '15px',
				[breakpoints.up("md")]: {
					fontSize: pxToRem(32)
				}
			},
			h2: {
				fontSize: pxToRem(21),
				color: white,
				fontWeight: '400',
				marginBottom: '10px',
				textAlign: 'center',
				[breakpoints.up("md")]: {
					fontSize: pxToRem(24)
				}
			},
			h3: {
				fontSize: pxToRem(18),
				color: white,
				fontWeight: '300',
				marginBottom: '10px',
				textAlign: 'center',
				[breakpoints.up("md")]: {
					fontSize: pxToRem(21)
				}
			},
			body1: {
				fontSize: pxToRem(14),
				color: white,
				[breakpoints.up("md")]: {
					fontSize: pxToRem(18)
				}
			},
		},
		MuiButton: {
			label: {
				fontSize: pxToRem(16),
				color: white,
				[breakpoints.up("md")]: {
					fontSize: pxToRem(18)
				}
			}
		},
		MuiFormLabel: {
			root: {
				color: white,	
			}
		},
		MuiInput: {
			underline: {
				'&:before': {
					content: 'none',
				},
			}
		},
		MuiInputBase: {
			input: {
				color: white,
			}
		}
	},

	palette: {
		primary: {
		  light: '#C2DEFF',
		  main: '#59BDFF',
		  dark: '#3D83B3',
		  text: '#fff',
		},
		secondary: {
		  light: '#FFBC40',
		  main: '#FFA840',
		  dark: '#483D4C',
		  text: '#000',
		},
		success: {
			light: '#98FB98',
			main: '#4BB543',
		},
		danger: {
			light: '#FA8072',
			main: '#F32013',
		}
	  },
});

export default function Theme(props) {
	return ThemeProvider({...props, theme: theme});
}
