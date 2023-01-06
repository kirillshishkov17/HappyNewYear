import './Congradulation.css';
import person from './person.jpg';
import React, {useState} from 'react';
import vid from './vid_test.mp4';

const Congradulation = () => {
    const [show, setShow] = useState(false);

    return(
        <div className="container">

            <div className="row">
                <div className="col">
                    <p>Индвивдуальное поздравление с новым годом от одного Web-разработчика другому</p>
                </div>
            </div>

            <div className="person">
                
                {!show && <div className="image">
                    <img src={person} alt="File not found" />
                </div>}

                {!show && <div>
                    <button className='button' onClick={() => setShow(!show)}>Для поздравления тыкать сюда</button>
                </div>}

                {show && <div><video src={vid} controls></video></div>}
            </div>
        </div>
    );
}

export default Congradulation;