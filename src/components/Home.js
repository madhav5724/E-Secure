import React from 'react';
import '../style.css';
import wave from '../image/wave.png';
import undraw_file_searching_duff from '../image/undraw_file_searching_duff.svg';
const Home = () => {
    return (

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
                    <h2>E-Secure</h2>
                    <form class="url-form" action="/signup">
                        <p>A strong security system by which the user can authenticate to a particular web page by scanning QR code or generating Otp system.</p>
                        <button type="submit" class="submit-button">Get Started</button>
                    </form>

                    <div class="footer">
                        Made with <font color="red">♥</font> by <a  href="https://github.com/nishant9546">nishant </a>
                    </div> 
                </div>

            </div>

        </section >

    )
}

export default Home
