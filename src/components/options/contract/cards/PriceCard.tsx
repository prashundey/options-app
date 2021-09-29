
import "./card.css"
interface props {
    name: string,
    value: number | string,
    color : string
}

export function PriceCard(props: props) {
    return (
        <div>
            <div className={`priceCard l-bg-${props.color}-dark`}>
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">{props.name}</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                ${props.value}
                            </h2>
                        </div>
                    </div>
                    <div className="progress mt-1 " data-height="8">
                        <div className="progress-bar l-bg-orange" role="progressbar" data-width="25%"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}