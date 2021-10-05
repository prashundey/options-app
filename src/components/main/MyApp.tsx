import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { StockOptionsApp } from "../options/StockOptionsApp";
import { PersonalApp } from "../personal/PersonalApp";
import { HeaderComponent } from "./HeaderComponent";
import "./MyApp.css"

export class MyApp extends React.Component {
    render(): JSX.Element {
        return (
            <div className="MyApp">
                <BrowserRouter>
                    <HeaderComponent />
                    <Route path="/" exact component={PersonalApp} />
                    <Route path="/options-pricer" exact component={StockOptionsApp} />
                </BrowserRouter>
            </div>
            )
    }
}