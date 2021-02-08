import React from 'react';
import { Link, Element, Events as scroll, scrollSpy, scroller } from 'react-scroll';
import styled from 'styled-components';

import HomePage from './pages/Home';

import logo from './assets/yonathan-cahyadi-logo.svg';

import { Layout, Navigation, ContentDiv } from './components/layout/Layout';


class App extends React.Component {

    render(){
        return(
            <Layout>
                <Navigation logo={logo} />
                <ContentDiv>
                    
                </ContentDiv>
            </Layout>
        )
    }
   
}


export default App;