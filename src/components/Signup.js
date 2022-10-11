import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import wave from '../image/wave.png';
import undraw_file_searching_duff from '../image/undraw_file_searching_duff.svg';

const SignUp = () => {
    let response;
    const history = useHistory();
    const [user, setUser] = useState({

        email: "",
        number: "",
        password: "",
        cpassword: "",
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });

    };
    const postData = async (e) => {
        e.preventDefault();

        const { email, number, password, cpassword } = user;

        if ( !email ||!number || !password || !cpassword) {
            return response.JSON({ error: "Please fill all the data" });
        }

        const res = await fetch("https://e-59d73-default-rtdb.firebaseio.com/e-secure.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                email,
                number,
                password,
                cpassword,
            })
        });
        if (res) {
            setUser({

                email: "",
                number: "",
                password: "",
                cpassword: "",
            });
            alert("Data stored successfully");
            history.push("/Login");
        };


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
                        <h2>Sign Up</h2>
                        <form class="url-form" method="POST">
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Email</label>
                                <input type="email" name="email" value={user.email} onChange={getUserData} autoComplete="off" required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                                <input type="number" name="number" value={user.number} onChange={getUserData} autoComplete="off" required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="exampleInputPassword1">Password</label>
                                <input type="text" name="password" value={user.password} onChange={getUserData} autoComplete="off" required className="form-control" id="exampleInputEmail1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="text" name="cpassword" value={user.cpassword} onChange={getUserData} autoComplete="off" required className="form-control" id="exampleInputEmail1" />
                            </div>
                            <button type="submit" onClick={postData} className="submit-button">Submit</button>  

                          


                        </form>

                        <div class="footer">
                            Made with <font color="red">♥</font> by <a href="https://github.com/Ritwik880">ritwik </a>
                        </div>
                    </div>

                </div>

            </section >

        </>
    )
}

export default SignUp;
