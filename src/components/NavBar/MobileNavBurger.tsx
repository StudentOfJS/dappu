import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mobileActions from '../../redux/actions'
import { IStateMenu } from '../../redux/model'
import styled from "../../theme"
import Div from '../Div'
const Container = styled(Div) `
  display: inline-block;
  cursor: pointer;
`
const Bar = styled(Div) `
  width: 35px;
  height: 5px;
  background-color: ${props => props.theme.secondaryColor};
  margin: 6px 0;
  transition: 0.4s;
`
const Bar1 = Bar.extend`
  transform: rotate(-45deg) translate(-9px, 6px);
`
const Bar2 = Bar.extend`
  opacity: 0;
`
const Bar3 = Bar.extend`
  transform: rotate(45deg) translate(-8px, -8px);
`
export interface IMenuProps {
  open: IStateMenu;
  onOpen: () => ({ type: 'actions/MOBILE_MENU_OPEN' });
  onClose: () => ({ type: 'actions/MOBILE_MENU_CLOSE' });
}

const MobileNavBurger: React.SFC<any> = ({ onOpen, onClose, open }) => {
  return open
    ? (<div onClick={onOpen}><Container><Bar /><Bar /><Bar /></Container></div>)
    : (<div onClick={onClose}><Container><Bar1 /><Bar2 /><Bar3 /></Container></div>)
}

const mapStateToProps = (state: IStateMenu) => ({
  open: state.openMobileMenu,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onClose: mobileActions.closeMobileMenu,
  onOpen: mobileActions.openMobileMenu,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavBurger)