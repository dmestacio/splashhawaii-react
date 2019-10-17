import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Grid, Image, Icon, Input, Dropdown} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <Menu inverted borderless className="topmenu">
          <Grid container columns={2}>
            <Grid.Column>
              <Menu.Item style={itemStyle}>FREE SHIPPING ON ORDERS $50+ || APPLIED AUTOMATICALLY</Menu.Item>
            </Grid.Column>
            <Grid.Column>
              <Menu.Menu position="right">
                <Menu.Item style={itemStyle}>Login</Menu.Item>
                <Menu.Item style={itemStyle} text>or</Menu.Item>
                <Menu.Item style={itemStyle}>Create Account</Menu.Item>
                <Menu.Item style={itemStyle}><Icon name="shopping cart"/>Cart</Menu.Item>
                <Menu.Item style={itemStyle}><Input icon='search link' placeholder="Search..."/></Menu.Item>
              </Menu.Menu>
            </Grid.Column>
          </Grid>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    const shopOptions = [
      {key: 1, text: 'TOPS', value: 1},
      {key: 2, text: 'BOTTOMS', value: 2},
      {key: 3, text: 'ONE PIECES', value: 3},
      {key: 4, text: 'APPAREL', value: 4},
      {key: 5, text: 'ACCESSORIES', value: 5},
    ];
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Menu.Item active>HOME</Menu.Item>
            <Dropdown simple item text="SHOP" options={shopOptions}/>
            <Menu.Item>SHIPPING</Menu.Item>
            <Menu.Item>RETURNS</Menu.Item>
            <Menu.Item>CONTACT US</Menu.Item>
            <Menu.Item>LOCATIONS</Menu.Item>
            <Menu.Item>ABOUT US</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class Footer extends React.Component{
  render() {
    return (
        <Grid container columns={2}>
          <Grid.Column>
            <Menu vertical text>
              <Menu.Item header>SPLASH! HAWAII</Menu.Item>
              <Menu.Item>SEARCH</Menu.Item>
              <Menu.Item>CAREERS</Menu.Item>
              <Menu.Item>PRESS</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu vertical text>
              <Menu.Item header>LET'S GET SOCIAL</Menu.Item>
              <Menu.Item>INSTAGRAM</Menu.Item>
              <Menu.Item>FACEBOOK</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>
    )
  }
}
class SplashHawaii extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <Image src="https://cdn.shopify.com/s/files/1/0006/7669/2028/files/Logo_720x.png?v=1534546885" size='large' centered/>
          <MiddleMenu/>
          <Image src="https://cdn.shopify.com/s/files/1/0006/7669/2028/files/J5D_0996_2048x.jpg?v=1549242837" fluid centered/>
          <hr/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<SplashHawaii/>, document.getElementById('root'));
