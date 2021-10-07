import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BlackScholesInfo } from './BlackScholesInfo';
import { SearchComponent } from './SearchComponent';
import "./StockOptionsApp.css"

export class StockOptionsApp extends React.Component {

    render() {
        return (
            <div className="stockOptionsApp">
                <Container> 
                     <BlackScholesInfo/>
                </Container>
                <Container>
                    <Row><SearchComponent/></Row>
                </Container>
            </div>
        )
    }
}

