import { useEffect, useState } from 'react';
import useScriptLoader from './useScriptLoader';
import useCssLoader from './useCssLoader';

function useAtlas() {
    const azCss = useCssLoader("https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.css");
    const azScript = useScriptLoader("https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.js");
    const [a, setA] = useState<Atlas>();

    useEffect(() => {
        if (!azCss || !azScript) return;

        const waitForAtlas = () => {
            if (typeof window.atlas === 'undefined') {
                setTimeout(waitForAtlas, 100);
            }
            else {
                setA(window.atlas);
            }
        }

        waitForAtlas();
    }, [azCss, azScript])

    return a;
}

export default useAtlas;