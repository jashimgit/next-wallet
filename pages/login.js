
import Head from "next/head";




export default function Login() {
    return (
        <div className="contianer-fluid">
            <div className="col-6 d-flex align-items-center justify-content-center mt-4 pt-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title text-center">Login</h4>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" name="phone" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Pin</label>
                                <input type="password" class="form-control" name="pin" />
                            </div>
                            <div>
                                <button type="submit" className="w-100 btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}