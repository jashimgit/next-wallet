export default function Sendmoney() {
    return (
        <div className="containter">
            <div className="row">
                <div className="col-sm-6 mx-auto mt-5 pt-4 justify-content-center">
                    <div style={{ width: '100%' }} >
                        <div className="card text-bg-light mb-3">
                            <div className="card-header bg-success text-white">My Wallet Service</div>
                            <div className="card-body">
                                <h5 className="card-title mb-3">Avaiable Balance: 1000 BDT</h5>
                                <div className="row d-flex  justify-content-center align-items-center">
                                    <form>
                                        <div className="mb-3">
                                            <label  className="form-label">Number</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Amount</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Reference</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                        <button type="submit" className="btn btn-primary w-100">Send Money</button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}