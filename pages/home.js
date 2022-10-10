

export default function Home() {
    return (
        <div className="containter">
            <div className="row">
                <div className="col-sm-8 mx-auto mt-5 pt-4">
                    <div className="card text-bg-light mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Balance: 1000 BDT</h5>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-3 col-sm-6">
                                    <i class="fa-solid fa-phone"></i>
                                    <br />
                                    Send money
                                </div>
                                <div className="col-3 col-sm-6">
                                    <i class="fa-solid fa-phone"></i><br />
                                    Mobile Recharge
                                </div>
                                <div className="col-3 col-sm-6">
                                    <i class="fa-solid fa-phone"></i> <br /> 
                                    Cash In
                                </div>
                                <div className="col-3 col-sm-6"> 
                                    <i class="fa-solid fa-phone"></i><br /> 
                                    Cash out
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}