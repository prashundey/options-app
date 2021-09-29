import React from "react";
import { StockOptionsApp } from "../options/StockOptionsApp";
import { HeaderComponent } from "./HeaderComponent";

export class MyApp extends React.Component {
    render() : JSX.Element {
        return(
            <div>
                <HeaderComponent></HeaderComponent>
                <StockOptionsApp></StockOptionsApp>
            </div>
        )
    }
}