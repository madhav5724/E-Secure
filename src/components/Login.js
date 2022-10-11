import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import wave from '../image/wave.png';
import undraw_file_searching_duff from '../image/undraw_file_searching_duff.svg';
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        console.log(e);
        e.preventDefault();

        const res = await fetch("https://e-59d73-default-rtdb.firebaseio.com/e-secure.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        });


        if (res) {
            loginUser({

                email: "",
                password: "",

            });
            window.alert("Login Successfull");
            history.push("/Otp");
        }
        else {
            window.alert("Login Unsucessful");
            history.push("/");

        }
    }


    return (
        <>
            <section class="form-section">

                <div class="row">
                    <div class="col-md-6" id="waves">
                        <img class="wave" src={wave} alt="svg" />
                        <div class="img">
                            <img src={undraw_file_searching_duff} alt="svg" />
                        </div>
                    </div>
                    <div class="col-md-6" id="main-content">
                        <img class="mobile" src={undraw_file_searching_duff} alt="svg" />
                        <h2>Login</h2>
                        <form class="url-form" method="POST">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputPassword1">Password</label>
                                <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" required className="form-control" id="exampleInputEmail1" />
                            </div>

                            <button type="submit" onClick={loginUser} value="login" className="submit-button">Submit</button>



                        </form>

                        <div class="footer">
                            Made with <font color="red">♥</font> by <a  href="https://github.com/Ritwik880">ritwik </a>
                        </div>
                    </div>

                </div>

            </section >


        </>
    )
}
export default Login
