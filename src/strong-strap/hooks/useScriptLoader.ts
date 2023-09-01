import { useEffect, useState } from 'react';

function useScriptLoader(scriptUrl: string) {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        if (isScriptLoaded) return;

        // Create a new script element
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;

        // Define a function to handle script load
        const handleScriptLoad = () => {
            setIsScriptLoaded(true);
        };

        // Define a function to handle script error
        const handleScriptError = (error: any) => {
            console.error(`Failed to load script: ${scriptUrl}`, error);
        };

        // Attach event listeners for script load and error
        script.addEventListener('load', handleScriptLoad);
        script.addEventListener('error', handleScriptError);

        // Append the script element to the document's body
        document.body.appendChild(script);

        // Clean up event listeners when the component unmounts
        return () => {
            script.removeEventListener('load', handleScriptLoad);
            script.removeEventListener('error', handleScriptError);
        };
        
    }, [scriptUrl]);

    return isScriptLoaded;
}

export default useScriptLoader;
