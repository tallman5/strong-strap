import { useEffect, useState } from 'react';
import useGoogle from './useGoogle';

function useGoogleCharts() {
    const [isChartsReady, setIsChartsReady] = useState(false);
    const g = useGoogle();

    useEffect(() => {
        if (isChartsReady || !g) return;

        g.charts.load('current', { 'packages': ['corechart'] });
        g.charts.load('current', { 'packages': ['gauge'] });
        g.charts.setOnLoadCallback(() => {
            console.log('Charts ready');
            setIsChartsReady(true);
        });

    }, [g]);

    return isChartsReady && g;
}

export default useGoogleCharts;
