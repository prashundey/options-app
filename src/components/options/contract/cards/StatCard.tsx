import "./card.css"
interface props {
    name: string,
    value: number | string,
    color : string
}

export function StatCard(props: props) {
    return (
        <div>
            <div className={`priceCard statCard l-bg-${props.color}`}>
                <div className="card-statistic-3 p-4">
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <div className="mb-4">
                                <h6 className="card-title mb-0">{props.name}</h6>
                            </div>
                        </div>
                        <div className="col-4">
                            <h5 className="d-flex align-items-center mb-0">
                                {props.value}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}