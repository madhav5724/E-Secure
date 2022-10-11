import React from 'react'
import wave from '../image/wave.png';
import undraw_file_searching_duff from '../image/undraw_file_searching_duff.svg';
import '../style.css';
const Main = () => {
    return (
        <>
             <section class="form-section">

<div class="row">
    <div class="col-md-6" id="waves">
        <img class="wave" src={wave}alt="svg" />
        <div class="img">
            <img src={undraw_file_searching_duff}alt="svg" />
        </div>
    </div>
    <div class="col-md-6" id="main-content">
        <img class="mobile" src={undraw_file_searching_duff} alt="svg"/>
        <h2>Welcome User!</h2>
        <form class="url-form" action="/">
           
            <p>We are so glad that you have passed all the steps for strong security, Now feel free to use this web page</p>
            <button type="submit" class="submit-button">G0 Back</button>
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

export default Main
