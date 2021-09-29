import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { SearchComponent } from './SearchComponent';
import "./StockOptionsApp.css"

interface props {
    searchComponent: SearchComponent;

}
export class StockOptionsApp extends React.Component {

    render() {
        return (
            <div className="stockOptionsApp">
                <Container>
                    <Row><SearchComponent/></Row>
                </Container>

            </div>
        )
    }
}

