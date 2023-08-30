import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import GaugeChart from '../../strong-strap/components/gaugeChart';

const GaugeSamples = () => {
    const size = 150
    const speedOptions = { width: size, height: size, min: 0, max: 5, greenFrom: 0, greenTo: 3, yellowFrom: 3, yellowTo: 4, redFrom: 4, redTo: 5, minorTicks: 5 }
    const voltOptions = { width: size, height: size, min: 0, max: 40, redFrom: 0, redTo: 15, yellowFrom: 15, yellowTo: 20, greenFrom: 20, greenTo: 40, minorTicks: 5 }
    const ampOptions = { width: size, height: size, min: -10, max: 10, is3D: true, minorTicks: 5 }
    const powOptions = { width: size, height: size, min: -1000, max: 1000, is3D: true, minorTicks: 5 }

    const [speed, setSpeed] = useState(3);
    const [volts, setVolts] = useState(3);

    useEffect(() => {
        const id = setInterval(() => {
            setSpeed(Math.random() * 5);
        }, 3000);

        return () => {
            clearInterval(id);
        };
    });

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>Gauges</h1>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <button type='button' onClick={() => { setVolts(Math.random() * 29); }}>V</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <div className="row">
                            <div className="col">
                                <GaugeChart id="speedGauge" caption="SPEED" value={speed} options={speedOptions} />
                                <GaugeChart id="lPowGauge" caption="L POW" value={0} options={powOptions} />
                                <GaugeChart id="lAmpsGauge" caption="L AMPS" value={0} options={ampOptions} />
                            </div>
                            <div className="col">
                                <GaugeChart id="voltsGauge" caption="VOLTS" value={volts} options={voltOptions} />
                                <GaugeChart id="rPowGauge" caption="R POW" value={160} options={powOptions} />
                                <GaugeChart id="rAmpsGauge" caption="R AMPS" value={11} options={ampOptions} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default GaugeSamples;