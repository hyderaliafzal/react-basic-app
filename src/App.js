import React, { Component } from 'react';
import './App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {JumboTron} from "./components/JumboTron";
import {Root} from "./components/Root";

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true,
            button: "Home Changing",
            homeMounted: true
        };
        console.log("Constructor");
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    alert() {
        alert('alert');
    }

    onChangeHome(newName) {
        this.setState({
            title: newName
        });
    }

    onchangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

  render() {
      let rumi = "Jalāl ad-Dīn Muhammad Rūmī, also known as Jalāl ad-Dīn Muhammad Balkhī, Mevlânâ/Mawlānā, Mevlevî/Mawlawī, and more popularly simply as Rumi, was a 13th-century Persian Sunni Muslim poet, jurist, Islamic scholar, theologian, and Sufi mystic. Rumi's influence transcends national borders and ethnic divisions: Iranians, Tajiks, Turks, Greeks, Pashtuns";
      let maleficent = "Maleficent is a 2014 American dark fantasy film directed by Robert Stromberg from a screenplay by Linda Woolverton, and starring Angelina Jolie as the titular";
      let homeCmp = "";

      if(this.state.homeMounted) {
          homeCmp = (
              <Home
                  imgSrc={"https://dontgiveupworld.com/wp-content/uploads/2013/05/Quote-on-the-answers-from-God-1024x768.jpg"} title={"Rumi"} subTitle={"(Persian: جلال‌الدین محمد) "}
                  text={rumi}
                  buttonText={"more"}
                  time={"2:20AM"}
                  alert={this.alert}
              />
          );
      }

      return (

        <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Navbar color="inverse" inverse toggleable>
                        <NavbarToggler right onClick={this.toggle} />
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <JumboTron
                        color={"danger"}
                        title={this.onChangeHome.bind(this)}
                        bg={"bg-warning"}
                        target={"_blank"}
                        size={"large"}
                    />
                </div>
            </div>
            <div className="row">
                {homeCmp}
                <Home
                    imgSrc={"https://pbs.twimg.com/profile_images/507678840659775489/QdfNGNGk.jpeg"}
                    title={"Maleficent"}
                    subTitle={"(Stars: Angelina Jolie)"}
                    text={maleficent}
                    buttonText={"more"}
                    time={"3:00PM"}>
                    <p>IMDB</p>
                </Home>
            </div>
            <div className="row">
                <button onClick={this.onchangeHomeMounted.bind(this)} className="btn btn-primary"> (Un) Mount Home Component</button>
            </div>
        </div>

    );
  }
}

export default App;
