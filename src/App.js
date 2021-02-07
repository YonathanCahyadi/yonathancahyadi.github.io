import React from 'react';
import { Link, Element, Events as scroll, scrollSpy, scroller } from 'react-scroll';
import styled from 'styled-components';

import HomePage from './pages/Home';

import logo from './assets/yonathan-cahyadi-logo.svg';


const StyledContentDiv = styled.div`
    border: 1px solid blue;
`;

const StyledPageDiv = styled.div`
    // border: 1px solid red;
    padding: 10px 15px;
    min-height: 90vh;
    max-height: 90vh;
    background-color: ${(props) => props.secondary ? "#39374D" : "#39374D"};
    opacity: ${(props) => props.secondary ? "0.5" : "0.3"};
    
`;

const StyledNav= styled.nav`
     // border: 1px solid green;
    position: fixed; 
    min-height: 10vh;
    max-height: 10vh;
    min-width: 100vw;
    max-width: 100vw;
    height: 10vh;
    width: 100vw;
    background-color: #39374D;
    z-index: 10;
`;

const StyledSpacer = styled.div`
    // border: 3px solid violet;
    min-height: 10vh;
    max-height: 10vh;
`;

const StyledUl = styled.ul`
    // border: 1px solid yellowgreen;
    list-style-type: none;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

const StyledLi = styled.li`
    // border: 1px solid black;
    display: inline-block;
    padding: 5px 10%;

    
    font-family: 'Poppins', 'sans-serif';
    color: #FFFFFF;
    line-height: 28.5px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

   
    
`;

const StyledNavSelection = styled(Link)`

    &.active {
        border-bottom: 2px solid teal;
    }
    
    &:hover {
        border-bottom: 2px solid teal;
    }
`;


const StyledLogo = styled.img`
    //border: 1px solid red;
    padding: 0px 40px 0px 100px;
`;

class App extends React.Component {

    state = {
        activePage: 'home'
    }

    constructor(props){
        super(props);
        this.setActivePage = this.setActivePage.bind(this);
    }

    componentDidMount(){
        scrollSpy.update();
    }

    componentWillUnmount() {
    
    }

    setActivePage(page){
        this.setState({
            activePage: page
        })
    }


    render(){
        return(
            <div>
                <StyledNav>
                    <StyledUl>
                        <StyledLogo src={logo} />
                        <StyledLi>
                            <StyledNavSelection activeClass='active' to='home' offset={-150} spy={true} smooth={true}>
                                Home
                            </StyledNavSelection>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavSelection activeClass='active' to='about' offset={-105} spy={true} smooth={true}>
                                About
                            </StyledNavSelection>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavSelection activeClass='active' to='projects' offset={-105} spy={true} smooth={true}>
                                Projects
                            </StyledNavSelection>
                        </StyledLi>
                        <StyledLi>
                            <StyledNavSelection activeClass='active' to='contact' offset={-105} spy={true} smooth={true}>
                                Contact
                            </StyledNavSelection>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>
                <StyledSpacer />

                <StyledContentDiv>
                    <StyledPageDiv>
                        <Element name='home'>Home</Element>
                        <HomePage />
                    </StyledPageDiv>
                    <StyledPageDiv secondary>
                        <Element name='about'>About</Element>
                        <HomePage />
                    </StyledPageDiv>
                    <StyledPageDiv>
                        <Element name='projects'>Projects</Element>
                        <HomePage />
                    </StyledPageDiv>
                    <StyledPageDiv secondary>
                        <Element name='contact'>Contact</Element>
                        <HomePage />
                    </StyledPageDiv>
                </StyledContentDiv>
            </div>  
        )
    }
}


export default App;