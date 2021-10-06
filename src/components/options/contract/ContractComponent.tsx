import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import OptionsDataService from '../../../api/OptionsDataService';
import "./ContractComponent.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {PriceCard } from './cards/PriceCard';
import { StatCard } from './cards/StatCard';

interface props {
    stockTicker: string,
    expirationDate: string,
    strike: number,
    type: string
}

interface data {
    stockTicker: string,
    type: string,
    expirationDate: string,
    stockPrice: number,
    strikePrice: number,
    inTheMoney: boolean,
    impliedVolatility: number,
    riskFreeInterestRate: number,
    realTimePrice: number,
    blackScholesPrice: number,
}

export class Contract extends React.Component<props, data> {
    constructor(props: props) {
        super(props);
        this.state = {
            stockTicker: "",
            type: "",
            expirationDate: "",
            stockPrice: 0,
            strikePrice: 0,
            inTheMoney: false,
            impliedVolatility: 0,
            riskFreeInterestRate: 0,
            realTimePrice: 0,
            blackScholesPrice: 0,
        }
    }

    componentDidMount() {
        
        OptionsDataService.getStockOptionContractInfo(this.props.stockTicker, this.props.expirationDate, this.props.strike, this.props.type)
            .then(response => {
                if (response.data === "") alert("Contract entered NOT FOUND. Try different combination of available strikes and dates")   
                else this.setState({...response.data})
            }).catch (e => {
                alert("Network Error")
            })
    }

    render() {
        return (
            <div className="contract">
                <Container>
                    <Row>
                        <BasicContractInfo {...this.state}></BasicContractInfo>
                    </Row>
                </Container>
                <PriceInfo {...this.state}></PriceInfo>
                <StatsInfo {...this.state}></StatsInfo>
            </div>
        )
    }
}

class BasicContractInfo extends React.Component<data> {
    render() {
        AOS.init() 

        var stockPriceRound = Math.round((this.props.stockPrice + Number.EPSILON) * 100) / 100

        return (
            <div>
                <Card className="contractBasic">
                    <Card.Title>
                        <h1><b>{this.props.stockTicker}</b></h1>
                        <h5>${stockPriceRound}</h5>
                    </Card.Title>

                    <Card.Header>
                        <Container>
                            <Row>
                                <Col sm={8} md={4}>
                                    <Card className="basicInfo"
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in">
                                        <Card.Title>Strike</Card.Title>
                                        <Card.Body><h4>${this.props.strikePrice}</h4></Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={8} md={4}>
                                    <Card className="basicInfo"
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in">
                                        <Card.Title>Option</Card.Title>
                                        <Card.Body><h4>{this.props.type.toUpperCase()}</h4></Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={8} md={4}>
                                    <Card className="basicInfo"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in">
                                        <Card.Title>Expiration</Card.Title>
                                        <Card.Body><h4>{this.props.expirationDate}</h4></Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                </Card>
            </div>
        );
    }
}

class PriceInfo extends React.Component<data> {
    render() {
        AOS.init() 
        return (
            <div className="priceInfo">
                <Container>
                    <Row data-aos="flip-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in">
                        <Col></Col>
                        <Col md={3} lg={4}>
                            <PriceCard name="Real-Time" value={this.props.realTimePrice} color="green"></PriceCard>
                        </Col>

                        <Col md={3} lg={4}>
                            <PriceCard name="Black-Scholes" value={this.props.blackScholesPrice} color="blue"></PriceCard>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div>
        );
    }
}

function StatsInfo(data: data) {
    var iv = data.impliedVolatility * 100;
    var ir = data.riskFreeInterestRate * 100;
    
    return (
        <div className="statsInfo">
            <Container>
                <Row>
                    <Col/>
                    <Col md={5} lg={4}
                        data-aos="fade-right"
                        data-aos-easing="ease-in">
                        <StatCard name="Implied Volatility" value={`${iv}%`} color="cyan"></StatCard>
                    </Col>
                    <Col md={5} lg={4}
                        data-aos="fade-left"
                        data-aos-easing="ease-in">
                            <StatCard name="Risk Free Interest Rate" value={`${ir}%`} color="cherry"></StatCard>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </div>
    )
}