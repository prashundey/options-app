import React, { } from 'react'
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import OptionsDataService from '../../api/OptionsDataService'
import { Contract } from './contract/ContractComponent';
import "./SearchComponent.css";

interface stockIdenity {
    symbol: string,
    name: string
}

interface state {
    suggestions: stockIdenity[],
    currentSelection: string,
    strikes: number[],
    expirationDates: string[],
    picked: boolean,

    ticker: string,
    expirationDate: string,
    strike: number,
    type: string,
}

export class SearchComponent extends React.Component<{}, state> {
    private exRef = React.createRef<HTMLDivElement>();

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            suggestions: [],
            currentSelection: "",
            strikes: [],
            expirationDates: [],
            picked: false,

            ticker: "",
            expirationDate: "",
            strike: 0,
            type: "",
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        OptionsDataService.getAutoCompleteSuggestions(value).then(response => {
            this.setState({
                suggestions: response.data,
                strikes: [],
                expirationDates: [],
                currentSelection: "",
                picked: false,
                ticker: "",
                expirationDate: "",
                strike: 0,
                type: "",
            });

        }).catch(() => {
            this.setState({
                suggestions: [],
                strikes: [],
                expirationDates: [],
                currentSelection: "",
                picked: false,
                ticker: "",
                expirationDate: "",
                strike: 0,
                type: "",
            });
        })
    }

    onOptionClick(e: React.MouseEvent) {
        OptionsDataService.getOptionChainInfo(e.currentTarget.id).then(response => {
            this.setState({
                ticker: response.data.symbol,
                strikes: response.data.strikes,
                expirationDates: response.data.dates,

                suggestions: [],
                currentSelection: response.data.symbol
            });
        })
    }

    submitForm = (e: any) => {
        e.preventDefault(); 

        this.setState({
            expirationDate: e.target.form.date.value,
            strike: e.target.form.strike.value,
            type: e.target.form.type.value,
            picked: true
        })
    }

    onFocus = (e: any) => {
        e.target.setAttribute('autocomplete', 'off');
    }

    render() {
        return (
            <div>
                <Container className="search-container">
                    <Form className="search-form">
                        <Row className="search-form-row">
                            <Col className="search-form-col" xs={8} md={6}>
                                <Form.Control className="search-bar" placeholder="Search Stock Ticker" aria-label="ticker" id="ticker" name="ticker"
                                    onChange={this.onInputChange} 
                                    onFocus={this.onFocus}/>
                                <div className="list-group" id="suggestions">
                                    {this.state.suggestions.map((stock, index) => {
                                        return (
                                            <button type="button"
                                                key={index}
                                                className="list-group-item list-group-item-action"
                                                id={stock.symbol}
                                                onClick={this.onOptionClick}>
                                                {stock.symbol}
                                            </button>
                                        )
                                    })}
                                </div>
                            </Col>
                            <Col className="search-form-col" xs={4} md={4}>
                                <h2><Badge bg="success">{this.state.currentSelection}</Badge></h2>
                            </Col>
                        </Row>

                        <Row className="search-form-row ">
                            <Col className="search-form-col second" xs={12} md={3}>
                                <Form.Select aria-label="ExpirationDate" id="date" name="date">
                                    <option>Expiration Date</option>
                                    {this.state.expirationDates.map((date, index) => {
                                        return (
                                            <option key={index} value={date}>
                                                {date}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Col>
                            <Col className="search-form-col second" xs={12} md={3}>
                                <Form.Select aria-label="Strike" id="strike" name="strike">
                                    <option>Strike</option>
                                    {this.state.strikes.map((strike, index) => {
                                        return (
                                            <option key={index} value={strike}>
                                                {strike}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Col>
                            <Col className="search-form-col second" xs={12} md={3}>
                                <Form.Select aria-label="Type" name="type" id="type">
                                    <option>Type</option>
                                    <option value="call">Call</option>
                                    <option value="put">Put</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="search-form-row">
                            <Col className="search-form-col" xs={6} md={6}>
                                <Button type="submit" className="btn submit" onClick={this.submitForm}>Find</Button>
                            </Col>
                        </Row>

                    </Form>
                </Container>

                <Container className="contract-section" ref={this.exRef}>
                    <Row className="picked-contract">
                        {this.state.picked && 
                            <Contract stockTicker={this.state.ticker} 
                                expirationDate={this.state.expirationDate} 
                                strike={this.state.strike} 
                                type={this.state.type}>
                            </Contract>
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}