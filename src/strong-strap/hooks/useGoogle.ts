import { useEffect, useState } from 'react';
import useScriptLoader from './useScriptLoader';

function useGoogle() {
    const [g, setGoogle] = useState<Google>();
    const googleScriptLoaded = useScriptLoader('https://www.gstatic.com/charts/loader.js');

    useEffect(() => {
        if (!googleScriptLoaded) return;

        const checkGoogle = () => {
            if (window.google) {
                setGoogle(window.google);
            } else {
                setTimeout(checkGoogle, 100);
            }
        };

        checkGoogle();
        return () => { };
    }, [googleScriptLoaded]);

    return g;
}

export default useGoogle;
