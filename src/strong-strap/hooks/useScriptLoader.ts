import { useEffect, useState } from 'react';

function useScriptLoader(url: string) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded) return;

        let newElement = document.querySelector('script[src="' + url + '"]') as HTMLScriptElement;
        if (newElement) {
            setIsLoaded(true);
            return;
        }

        // Create a new script element
        newElement = document.createElement('script');
        newElement.src = url;
        newElement.async = true;

        // Define a function to handle script load
        const handleLoad = () => {
            setIsLoaded(true);
        };

        // Define a function to handle script error
        const handleError = (error: any) => {
            console.error(`Failed to load ${url}`, error);
        };

        // Attach event listeners for script load and error
        newElement.addEventListener('load', handleLoad);
        newElement.addEventListener('error', handleError);

        // Append the script element to the document's body
        document.body.appendChild(newElement);

        // Clean up event listeners when the component unmounts
        return () => {
            newElement.removeEventListener('load', handleLoad);
            newElement.removeEventListener('error', handleError);
        };

    }, [url]);

    return isLoaded;
}

export default useScriptLoader;
