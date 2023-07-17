import React from 'react';
import Layout from '../../components/layout';
import { QrCode } from '../../strong-strap';

const QrCodeTest = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1>QR Code Testing</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 mb-3'>

                    </div>
                    <div className='col-sm-1'>
                        
                    </div>
                    <div className='col-sm-5'>
                        <QrCode id='mainQrCode' text='' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default QrCodeTest