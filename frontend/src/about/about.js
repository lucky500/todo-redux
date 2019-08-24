import React, { Component } from 'react';
import PageHeader from '../template/pageHeader';

export default class About extends Component {
    render(){
        return(
            <div>
                <PageHeader name='Sobre' small='Nos' />

                <h2>Nossa Historia</h2>
                <p>Lorem ispum dolor sit amet...</p>
                <h2>Missao e Visao</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <h2>Imprensa</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        )
    }
}