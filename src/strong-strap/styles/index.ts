import { CSSProperties } from "react";


export const bshamburgericon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb%28140, 140, 140%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`

export type StatedStyles = {
    active: CSSProperties,
    base: CSSProperties,
    focus: CSSProperties,
    hover: CSSProperties,
}

export const RoundedBottom: CSSProperties = {
    borderBottomLeftRadius: 'var(--bs-radius)',
    borderBottomRightRadius: 'var(--bs-radius)',
}
export const RoundedTop: CSSProperties = {
    borderTopLeftRadius: 'var(--bs-radius)',
    borderTopRightRadius: 'var(--bs-radius)',
}
export const Rounded: CSSProperties = {
    ...RoundedBottom,
    ...RoundedTop
}


export const AspectRatioContainer: CSSProperties = {
    display: 'flex',
    position: 'relative',
    // paddingTop: '93%',
}
export const AspectRatioItem: CSSProperties = {
    height: '100%',
    left: 0,
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    width: '100%',
}


export const Backdrop: CSSProperties = {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100vw',
}


export const Btn: CSSProperties = {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: '.25rem',
    color: 'var(--bs-body-color)',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'inherit',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    padding: '.375rem .75rem',
    textDecoration: 'none',
    textTransform: 'none',
    transition: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    WebkitAppearance: 'button',
}
export const BtnStates: StatedStyles = {
    active: Btn,
    base: Btn,
    focus: Btn,
    hover: Btn,
}
export const BtnPrimary: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
}
export const BtnPrimaryFocus: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#0b5ed7',
    borderColor: '#0a58ca',
    boxShadow: '0 0 0 0.25rem rgb(49 132 253 / 50%)',
}
export const BtnPrimaryHover: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#0b5ed7',
    borderColor: '#0a58ca',
}
export const BtnPrimaryStates: StatedStyles = {
    active: {},
    base: BtnPrimary,
    focus: BtnPrimaryFocus,
    hover: BtnPrimaryHover,
}
export const BtnSecondary: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
}
export const BtnSecondaryFocus: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#5c636a',
    borderColor: '#565e64',
    boxShadow: '0 0 0 0.25rem rgb(130 138 145 / 50%)',
}
export const BtnSecondaryHover: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#5c636a',
    borderColor: '#565e64',
}
export const BtnSecondaryStates: StatedStyles = {
    active: {},
    base: BtnSecondary,
    focus: BtnSecondaryFocus,
    hover: BtnSecondaryHover,
}
export const BtnLight: CSSProperties = {
    ...Btn,
    color: '#000',
    backgroundColor: '#f8f9fa',
    borderColor: '#f8f9fa',
}
export const BtnLightFocus: CSSProperties = {
    ...Btn,
    color: '#000',
    backgroundColor: '#f9fafb',
    borderColor: '#f9fafb',
    boxShadow: '0 0 0 0.25rem rgba(211, 212, 213, 0.5)',
}
export const BtnLightHover: CSSProperties = {
    ...Btn,
    color: '#000',
    backgroundColor: '#d3d4d5',
    borderColor: '#c6c7c8',
}
export const BtnLightStates: StatedStyles = {
    active: {},
    base: BtnLight,
    focus: BtnLightFocus,
    hover: BtnLightHover,
}
export const BtnLink: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#198754',
    borderColor: '#198754',
}
export const BtnLinkFocus: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#157347',
    borderColor: '#146c43',
    boxShadow: '0 0 0 0.25rem rgba(60, 153, 110, 0.5)',
}
export const BtnLinkHover: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#157347',
    borderColor: '#146c43',
}
export const BtnLinkStates: StatedStyles = {
    active: {},
    base: BtnLink,
    focus: BtnLinkFocus,
    hover: BtnLinkHover,
}
export const BtnSuccess: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#198754',
    borderColor: '#198754',
}
export const BtnSuccessFocus: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#157347',
    borderColor: '#146c43',
    boxShadow: '0 0 0 0.25rem rgba(60, 153, 110, 0.5)',
}
export const BtnSuccessHover: CSSProperties = {
    ...Btn,
    color: '#fff',
    backgroundColor: '#157347',
    borderColor: '#146c43',
}
export const BtnSuccessStates: StatedStyles = {
    active: {},
    base: BtnSuccess,
    focus: BtnSuccessFocus,
    hover: BtnSuccessHover,
}


export const Card: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    wordWrap: 'break-word',
    backgroundColor: '#fff',
    backgroundClip: 'border-box',
    border: '1px solid rgba(0,0,0,.125)',
    borderRadius: '.25rem',
}
export const CardBody: CSSProperties = {
    wordWrap: 'break-word',
    boxSizing: 'border-box',
    flex: '1 1 auto',
    padding: '1rem 1rem',
}
export const CardImage: CSSProperties = {
    verticalAlign: 'middle',
    width: '100%',
}
export const CardImageTop: CSSProperties = {
    ...CardImage,
    borderTopLeftRadius: 'calc(.25rem - 1px)',
    borderTopRightRadius: 'calc(.25rem - 1px)',
}
export const CardText: CSSProperties = {
    wordWrap: 'break-word',
    boxSizing: 'border-box',
    // marginTop: 0,
    // marginBottom: '1rem',
}
export const CardTitle: CSSProperties = {
    marginTop: 0,
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '1.25rem',
    marginBottom: '.5rem',
}
export const CardWall: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%'
}


export const CloseButton: CSSProperties = {
    background: `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat`,
    border: 0,
    borderRadius: '.25rem',
    boxSizing: 'content-box',
    cursor: 'pointer',
    height: '1em',
    margin: '-.5rem',
    padding: '.5rem',
    width: '1em',
}


export const Container: CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 'calc(var(--bs-gutter-x) * .5)',
    paddingRight: 'calc(var(--bs-gutter-x) * .5)',
    width: '100%',
    display: 'inherit',
    flexWrap: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
}


export const Dropdown: CSSProperties = {
    display: 'inline-flex',
    position: 'relative',
    verticalAlign: 'middle',
}
export const DropdownMenu: CSSProperties = {
    backgroundClip: 'padding-box',
    backgroundColor: 'var(--bs-dropdown-bg)',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '.25rem',
    listStyle: 'none',
    minWidth: '10rem',
    margin: 0,
    padding: '.5rem',
    position: 'absolute',
    textAlign: 'left',
    top: '100%',
    zIndex: 1000,
}
export const DropdownMenuItem: CSSProperties = {
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    borderRadius: '.25rem',
    clear: 'both',
    color: 'var(--bs-body-color)',
    display: 'block',
    padding: '.25rem 1rem',
    textAlign: 'left',
    width: '100%',
    whiteSpace: 'nowrap',
}


export const FormCheck: CSSProperties = {
    display: 'block',
    marginBottom: '.125rem',
    minHeight: '1.5rem',
    paddingLeft: '1.5em',
}
export const FormCheckSwitch: CSSProperties = {
    ...FormCheck,
    paddingLeft: '2.5em',
}
export const FormCheckInput: CSSProperties = {
    margin: 0,
    height: '1em',
    marginTop: '.25em',
    verticalAlign: 'top',
    backgroundColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,.25)',
    appearance: 'none',
    float: 'left',
    width: '2em',
    marginLeft: '-2.5em',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e")`,
    backgroundPosition: 'left center',
    borderRadius: '2em',
    transition: 'none',
}
export const FormCheckInputChecked: CSSProperties = {
    ...FormCheckInput,
    backgroundPosition: 'right center',
    backgroundColor: '#0d6efd',
    borderColor: '#0d6efd',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")`,
}
export const FormCheckInputFocus: CSSProperties = {
    borderColor: '#86b7fe',
    outline: 0,
    boxShadow: '0 0 0 .25rem rgba(13,110,253,.25)',
}
export const FormControl: CSSProperties = {
    display: 'block',
    width: '100%',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    borderWidth: '1px',
    borderColor: '#ced4da',
    borderStyle: 'solid',
    appearance: 'none',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
}
export const FormControlFocus: CSSProperties = {
    ...FormControl,
    borderColor: '#86b7fe',
    outline: 0,
    boxShadow: '0 0 0 .25rem rgba(13,110,253,.25)',
}


export const FormFloating: CSSProperties = {
    position: 'relative',
}
export const FormFloatingFormControl: CSSProperties = {
    ...FormControl,
    height: 'calc(3.5rem + 2px)',
    lineHeight: 1.25,
    paddingTop: '1.625rem',
    paddingBottom: '.625rem',
}
export const FloatingLabel: CSSProperties = {
    border: '1px solid transparent',
    color: '#777',
    left: 0,
    height: '100%',
    padding: '1rem 0.75rem',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    transformOrigin: '0 0',
}
export const FloatingLabelFocus: CSSProperties = {
    ...FloatingLabel,
    opacity: '0.65',
    transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
}


export const FixedTop: CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1030,
}


export const HorizontalScrollContainer: CSSProperties = {
    display: "flex", overflowX: "auto", maxWidth: "100%"
}


export const Lead: CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: '300',
}


export const Masonry: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly'
}
export const MasonryBrick: CSSProperties = {
    margin: '10px 0px',
}
export const MasonryCol: CSSProperties = {
    margin: '0px 5px',
}


export const ModalBody: CSSProperties = {
    flex: '1 1 auto',
    padding: '1rem',
    position: 'relative',
}
export const ModalContent: CSSProperties = {
    backgroundClip: 'padding-box',
    backgroundColor: '#fff',
    borderRadius: '.3em',
    border: '1px solid rgba(0,0,0,.2)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%'
}
export const ModalDialog: CSSProperties = {
    position: 'relative',
}
export const ModalFooter: CSSProperties = {
    alignItems: 'center',
    borderBottomLeftRadius: 'calc(.3rem - 1px)',
    borderBottomRightRadius: 'calc(.3rem - 1px)',
    borderTop: '1px solid #dee2e6',
    display: 'flex',
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    padding: '.75rem',
}
export const ModalHeader: CSSProperties = {
    alignItems: 'center',
    borderBottom: '1px solid #dee2e6',
    borderTopLeftRadius: 'calc(.3rem - 1px)',
    borderTopRightRadius: 'calc(.3rem - 1px)',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'space-between',
    padding: '1rem'
}


export const NavBar: CSSProperties = {
    alignItems: 'center',
    backgroundColor: 'rgba(var(--bs-navbar-bgcolor),1)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 0,
    padding: '0.5rem 0.5rem',
    position: 'relative',
}
export const NavBarBrand: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--bs-body-color)',
    fontSize: '1.25rem',
    marginRight: '1rem',
    paddingBottom: '0.3125rem',
    paddingTop: '0.3125rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
}
export const NavBarCollapse: CSSProperties = {
    alignItems: 'center',
    flexGrow: '1',
}
export const NavBarCollapseHor: CSSProperties = {
    ...NavBarCollapse,
    display: 'flex',
    flexBasis: 'auto',
}
export const NavBarCollapseVer: CSSProperties = {
    ...NavBarCollapse,
    flexBasis: '100%',
}
export const NavBarNav: CSSProperties = {
    color: '',
    display: 'flex',
    flexBasis: '100%',
    flexGrow: 1,
    marginBottom: 0,
    paddingLeft: 0,
}
export const NavBarNavHor: CSSProperties = {
    ...NavBarNav,
    flexDirection: 'row',
}
export const NavBarNavVer: CSSProperties = {
    ...NavBarNav,
    flexDirection: 'column',
}
export const NavBarToggler: CSSProperties = {
    backgroundColor: 'transparent',
    border: '1px solid rgb(140, 140, 140)',
    borderRadius: '0.375rem',
    color: 'rgb(140, 140, 140)',
    cursor: 'pointer',
    fontSize: '1.25rem',
    lineHeight: 1,
    padding: '.25rem .75rem',
}
export const NavBarTogglerFocus: CSSProperties = {
    ...NavBarToggler,
    textDecoration: 'none',
    boxShadow: '0 0 0 0.25rem',
    outline: 0,
}
export const NavBarTogglerIcon: CSSProperties = {
    backgroundImage: bshamburgericon,
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    display: 'inline-block',
    height: '1.5em',
    width: '1.5em',
    verticalAlign: 'middle',
}
export const NavLink: CSSProperties = {
    color: 'var(--bs-body-color)',
    display: 'block',
    padding: '.5rem 1rem',
    textDecoration: 'none',
    transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
}
export const NavLinkHover: CSSProperties = {
    borderColor: '#e9ecef #e9ecef #dee2e6',
}


export const Row: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'calc(-.5 * var(--bs-gutter-x))',
    marginRight: 'calc(-.5 * var(--bs-gutter-x))',
    marginTop: 'calc(-1 * var(--bs-gutter-y))',
}
export const RowChild: CSSProperties = {
    marginTop: 'var(--bs-gutter-y)',
    maxWidth: '100%',
    paddingLeft: 'calc(var(--bs-gutter-x) * .5)',
    paddingRight: 'calc(var(--bs-gutter-x) * .5)',
    width: '100%',
}


export const Col: CSSProperties = {
    ...RowChild,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '0%',
}

export const ScrollToTop: CSSProperties = {
    bottom: '22px',
    fontSize: 'xx-large',
    position: 'fixed',
    right: '22px',
    zIndex: 500,
}
