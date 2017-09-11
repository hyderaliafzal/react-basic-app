import React from  "react";
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
var PropTypes = require('prop-types');

export class Home extends React.Component {
    constructor(props) {
      super();
      this.state = {
          buttonText: props.buttonText,
          oldButtonText: props.buttonText,
      };
      setTimeout(() => {
          this.setState({
              buttonText: this.state.oldButtonText
          });
      },30000);
    }

    changeText(){
        this.setState({
            buttonText: "Go"
        });
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWilReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    render() {
        return(
            <div className="col-md-4">
                <Card>
                    <CardImg top src={this.props.imgSrc} alt="Card image cap" height="300px" width="100%"/>
                    <CardBlock>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subTitle}</CardSubtitle>
                        <CardText>{this.props.text}</CardText>
                        {this.props.children}
                        <Button onClick={() => this.changeText()} className="alert-info">{this.state.buttonText}</Button>
                        <Button onClick={this.props.alert}>Alert</Button>
                        <CardText>
                            <small className="text-muted">{this.props.time}</small>
                        </CardText>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

Home.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    text: PropTypes.string,
    buttonText: PropTypes.string,
    children: PropTypes.element
};