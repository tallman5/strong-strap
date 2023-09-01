import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import useAtlas from "../../strong-strap/hooks/useAtlas";
import { FloatingTextbox } from "../../strong-strap";

const MapTest = () => {
    const [amk, setAmk] = useState<string>();
    const atlas = useAtlas();
    const elementId = 'mapDiv';

    useEffect(() => {
        if (!atlas || !amk) return;
        new atlas.Map(elementId, {
            authOptions: {
                authType: 'subscriptionKey',
                subscriptionKey: amk,
            },
            style: 'satellite',
        });

    }, [atlas, amk]);

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <FloatingTextbox onChange={(e) => { setAmk(e.target.value); }} defaultValue={amk} caption={"Azure Map Key"} id={"amk"} placeholder={"Azure Map Key"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div id={elementId} style={{ border: '1px solid red', height: '300px' }}></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MapTest;