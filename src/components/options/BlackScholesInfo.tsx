import React from 'react'
import { Accordion, Card } from 'react-bootstrap';
import "./BlackScholesInfo.css"


export class BlackScholesInfo extends React.Component {
    render() {
        return (
            <div>
                <Accordion className="bs-accordion" defaultActiveKey="0" flush>
                    <Card>
                        <Card.Title><h3>Black-Scholes Option Pricer</h3></Card.Title>
                    </Card>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is it?</Accordion.Header>
                        <Accordion.Body>
                            Black-Scholes-Merton (BSM) Model is a differential
                            equation that estimates the theoretical value of derivatives.
                            Developed in 1973, it is still regarded as one of the best ways
                            for pricing an options contract.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does it work?</Accordion.Header>
                        <Accordion.Body>
                        Black-Scholes assumes that instruments, such as stock shares or futures contracts, will have a 
                        lognormal distribution of prices following a random walk with constant drift and volatility. 
                        The Black-Scholes model is a differential equation that requires five total input variables: 
                        <ul>
                            <li>Strike price of an option</li>
                            <li>Current stock price</li>
                            <li>Time to expiration</li>
                            <li>Risk-free rate</li>
                            <li>Volatility</li>
                        </ul>

                        Though usually accurate, the Black-Scholes model makes certain assumptions
                        that can lead to prices that deviate from the real-world results.
                        The standard BSM model is only used to price EUROPEAN options, as it does not take 
                        into account that American options could be exercised before the expiration date.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Implementation Information</Accordion.Header>
                        <Accordion.Body>
                                The realtime implied volatitiy of the contract will be used as volatility in the BSM model.
                                <br/>
                                The realtime price of the US 10 Treasury Bond yield, will serve as as the risk free rate.
                                <br/>
                                Web-app depends on <a href="https://www.stockoptionsdomain.link/">stockoptionsdomain.link</a> which routes to the backend Spring Boot Application deployed on AWS Elastic Bean. The bean queries and processes real-time data from Yahoo Finance API. 
                                All links are secured by Amazon issued SSL certificates.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        );
    }
}