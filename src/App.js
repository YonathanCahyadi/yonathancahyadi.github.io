import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import HomePage from './pages/Home';

import styled from 'styled-components';
import { element } from 'prop-types';


const StyledContentDiv = styled.div`
    border: 1px solid blue;
    padding: 10px 0px;
`;

const StyledPageDiv = styled.div`
    border: 1px solid red;
    padding: 10px 15px;
    margin: 0px 15px;
    min-height: 80vh;
    max-height: 80vh;
`;

const StyledNav= styled.nav`
    border: 1px solid green;
    position: fixed; 
    min-height: 10vh;
    max-height: 10vh;
    min-width: 100vw;
    max-width: 100vw;
    height: 10vh;
    width: 100vw;
`;

const StyledSpacer = styled.div`
    border: 1px solid violet;
    min-height: 10vh;
    max-height: 10vh;
`;

const StyledUl = styled.ul`
    border: 1px solid yellowgreen;
    list-style-type: none;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLi = styled.li`
    border: 1px solid black;
    display: inline-block;
    padding: 0px 10%;
`;

const StyledNavSelection = styled.h3`

    border-bottom: ${(props) => props.active ? '2px solid teal' : 'none'};
    
    &:hover {
        border-bottom: 2px solid teal;
    }
`;

class App extends React.Component {


    componentDidMount(){
        Events.scrollEvent.register('begin', (to, element) => {
            console.log(`being -> ${to} -- ${arguments}`)
        })

        Events.scrollEvent.register('end', (to, element) => {
            console.log(`end -> ${to} -- ${arguments}`)
        })

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        
    }

    setActive(){

    }

    render(){
        return(
            <div>
                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <Link activeClass='active' to='home' offset={-122} spy={true} smooth={true}>
                                <StyledNavSelection >Home</StyledNavSelection>
                            </Link>
                        </StyledLi>
                        <StyledLi>
                            <Link activeClass='active' to='about' offset={-122} spy={true} smooth={true}>
                                <StyledNavSelection>About</StyledNavSelection>
                            </Link>
                        </StyledLi>
                        <StyledLi>
                            <Link activeClass='active' to='contact' offset={-122} spy={true} smooth={true}>
                                <StyledNavSelection>Contact</StyledNavSelection>
                            </Link>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>

                <StyledSpacer />

                <StyledContentDiv>
                    <StyledPageDiv>
                        <Element name='home'>Home</Element>
                        <HomePage />
                    </StyledPageDiv>
                    <StyledPageDiv>
                        <Element name='about'>About</Element>
                        <HomePage />
                    </StyledPageDiv>
                    <StyledPageDiv>
                        <Element name='contact'>Contact</Element>
                        <HomePage />
                    </StyledPageDiv>
                </StyledContentDiv>
            </div>  
        )
    }
}


export default App;