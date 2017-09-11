import React from  "react";
import { Button, Jumbotron } from 'reactstrap';

export class JumboTron extends React.Component {
    constructor(props) {
        super();
        console.log(this);
        this.state = {
            name: "I Changed"
        };
        setTimeout(() => {
            this.setState({
                buttonText: this.state.oldButtonText
            });
        },30000);
    }
    onChangeText() {
        this.props.title(this.state.name);
    }
    render() {
        return(
           <Jumbotron className={this.props.bg}>
             <h1>Welcome to React</h1>
             <p>
               <Button
                 tag="a"
                 color={this.props.color}
                 size={this.props.size}
                 href={this.props.link}
                 target={this.props.target}
                 onClick={this.onChangeText.bind(this)}
               >
               {this.props.title}
               </Button>
             </p>
           </Jumbotron>
        );
    }
}