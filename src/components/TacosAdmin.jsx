import React, {Component} from 'react';

import Container from './Container';
import PageTitle from './PageTitle';
import Routes from './Routes';

//import axios from 'axios';

export default class TacosAdmin extends Component{
    

    render() {
        return (
            <Container>
                <PageTitle text='Taquería ' color='black' fontSize={5}/>
                <Routes/>
            </Container>
        );
    }
}