import React from 'react'
import wave from '../image/wave.png';
import undraw_file_searching_duff from '../image/undraw_file_searching_duff.svg';
const QrCode = () => {
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
                        <h2>Welcome</h2>
                        <form class="url-form" action="https://github.com/Ritwik880">
                            <p>Work is under deployment</p>
                            <button type="submit" class="submit-button">Star on Github</button>
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

export default QrCode
