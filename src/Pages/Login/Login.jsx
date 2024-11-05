import Button from "../../Custom/Button/Button";


const Login = () => {
    return (
        <div className="p-8 mt-28">
            <div></div>
            <div>
                <h2>Welcome back to CaringCrew</h2>
                <div>
                    <Button title='Sign In with Google'></Button>
                </div>
                <h1>OR</h1>
                <div>
                    <form>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="email" required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" placeholder="password" required />
                            <label>
                                <a href="#">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Sign In" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;