import { useEffect, useState } from 'react';

function useCssLoader(url: string) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded) return;

        let newElement = document.querySelector('link[href="' + url + '"]') as HTMLLinkElement;
        if (newElement) {
            setIsLoaded(true);
            return;
        }

        // Create a new script element
        newElement = document.createElement('link');
        newElement.rel = 'stylesheet';
        newElement.href = url;

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
        document.head.appendChild(newElement);

        // Clean up event listeners when the component unmounts
        return () => {
            newElement.removeEventListener('load', handleLoad);
            newElement.removeEventListener('error', handleError);
        };

    }, [url]);

    return isLoaded;
}

export default useCssLoader;
