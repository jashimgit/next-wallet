
import Head from "next/head";




export default function Login() {
    return (
        <div className="loginForm">
            <div className="card mt-4">

                <div className="card-body">
                    <h4 className="text-center">Login</h4>
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

    )
}


