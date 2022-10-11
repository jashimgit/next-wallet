

export default function Home() {
    return (
        <div className="containter">
            <div className="row">
                <div className="col-sm-6 mx-auto mt-5 pt-4 justify-content-center">
                    <div style={{ width: '100%' }} >
                        <div className="card text-bg-light mb-3">
                            <div className="card-header">My Wallet Service</div>
                            <div className="card-body">
                                <h5 className="card-title mb-3">Balance: 1000 BDT</h5>
                                <div className="row d-flex text-center justify-content-center align-items-center">
                                    <div className="col-6 border border-primary p-3">
                                        <i class="fa-solid fa-phone"></i>
                                        <br />
                                        <button className="btn btn-primary my-3"> Send money</button>
                                    </div>
                                    <div className="col-6 border border-primary p-3">
                                        <i class="fa-solid fa-phone"></i><br />
                                        <button className="btn btn-primary my-3">Mobile Recharge</button>
                                    </div>
                                    <div className="col-6 border border-primary p-3">
                                        <i class="fa-solid fa-phone"></i> <br />
                                        <button className="btn btn-primary my-3">Cash In</button>
                                    </div>
                                    <div className="col-6 border border-primary p-3">
                                        <i class="fa-solid fa-phone"></i><br />
                                        <button className="btn btn-primary my-3">Cash out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}