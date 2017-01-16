import React, { Component } from 'react';
import { Grid,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import FontAwesome from './components/fontawesome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      vHeight: 320,
      vWidth: 480,
      email: '',
      validEmail: 'neutral'
    };
    this.calculateViewport = this.calculateViewport.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderSmallForm = this.renderSmallForm.bind(this);
    this.renderLargeForm = this.renderLargeForm.bind(this);
    //this.renderSocialIcons = this.renderSocialIcons.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', (e) => {
      this.calculateViewport();
    }, true);
    this.calculateViewport();
  }

  // calculates the most appropriate values
  calculateViewport() {
    let vHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let vWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.setState({
      vHeight: vHeight,
      vWidth: vWidth
    });
  }

  validateEmail() {
    let length = this.state.email.length;
    let valid = this.state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (valid) {
      this.setState({validEmail: 'success'});
    } else if (length > 5) {
      this.setState({validEmail: 'warning'});
    } else if (length > 0) {
      this.setState({validEmail: 'error'});
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  renderSmallForm() {
    return (
      <form style={{paddingTop: 15}}>
        <div
          style={{
            width: (this.state.vWidth/2),
            textAlign: 'center',
            margin: '0 auto'
          }} >
          <FormGroup bsSize="large"
            validationState={this.state.validEmail}>
            <FormControl
              type="email"
              placeholder="Enter your email address"
              value={this.state.email}
              onChange={this.handleEmailChange} />
            <br />
            <Button
              bsSize="large"
              bsStyle="primary"
              onClick={this.handleClick}>
              Sign up
            </Button>
          </FormGroup>
        </div>
      </form>
    );
  }

  renderLargeForm() {
    return (
      <form style={{paddingTop:30}}>
        <div style={{
          width: (this.state.vWidth/2),
          textAlign: 'center',
          margin: '0 auto'
        }}>
          <FormGroup bsSize="large"
            validationState={this.state.validEmail}>
            <InputGroup>
            <FormControl
              type="email"
              placeholder="Enter your email address"
              ref="inputEmail"
              value={this.state.email}
              onChange={this.handleEmailChange} />
              <InputGroup.Button>
                <Button
                  bsSize="large"
                  bsStyle="primary"
                  onClick={this.handleClick}>
                  Sing up
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </div>
      </form>
    );
  }

  handleClick(e){
    //process imput somehov
    this.validateEmail();
    console.log(e.target.form[0].value);
  }

  render() {
    let vWidth = this.state.vWidth;
    let vHeight = this.state.vHeight;
    let formCode = vWidth < 880
      ? this.renderSmallForm()
      : this.renderLargeForm();
    /*let socialIcons = vHeight >= 320
      ? this.renderSocialIcons()
      :null;
    */

    return (
      <div>
        <Grid fluid
          style={{
            margin: '0 auto',
            width: '100%',
            minHeigh: '100%',
            background: '#114',
            color: '#eee',
            overflow: 'hidden'
          }}>
            <Row
              style={{ height: vHeight }}>
              <Col sm={12}
                //margin set to a dynamic pixel width equal to the 1/20 of the vieport width
                style={{marginTop: (vHeight/20)}}>
                <h1 style={{textAlign: 'center'}}>
                  Welcome
                </h1>
                <div style={{
                  maxHeight: 250,
                  maxWidth: 500,
                  margin: '0 auto' }}>
                <Carousel>
                  <CarouselItem style={{
                    maxHeight: 250,
                    maxWidth: 500 }}>
                    <img width="100%"
                      alt="500x200"
                      src="http://placehold.it/500x220/f0f0f0/008800?text=It+will+amaze+you"/>
                  </CarouselItem>
                  <CarouselItem style={{
                    maxHeigth: 250,
                    maxWidth: 500 }}>
                    <img width="100%"
                      alt="500x200"
                      src="http://placehold.it/500x220/880000/eeeeee?text=Sign+up+now!" />
                  </CarouselItem>
                  <CarouselItem style={{
                    maxHeight: 250,
                    maxWidth: 500}}>
                    <img width="100%"
                      alt="500x200"
                      src="http://placehold.it/500x220/880000/eeeeee?text=Sign+up+now!"/>
                  </CarouselItem>
                </Carousel>
              </div>
            </Col>
            <Col xs={12}>
              {formCode}
            </Col>
            <Col xs={12}>
              <p style={{textAlign:'center', paddingTop:15}}>
                Your email will not be shared and will only be used to notify you when the app lauches.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
