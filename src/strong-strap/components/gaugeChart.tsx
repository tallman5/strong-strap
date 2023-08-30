import React, { useEffect, useState } from 'react';
import { isBrowser } from '../utilities';

export interface GaugeChartProps {
    caption: string
    id: string
    options?: any
    value?: number
}

const GaugeChart: React.FC<GaugeChartProps> = ({
    caption, id, options = null, value = 0
}) => {
    const scriptSrc = 'https://www.gstatic.com/charts/loader.js';
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [google, setGoogle] = useState<Google>();
    const [googleChartsLoaded, setGoogleChartsLoaded] = useState(false);
    const [chartData, setChartData] = useState<DataTable>();
    const [chart, setChart] = useState<GoogleChart>();

    useEffect(() => {
        if (!isBrowser) return;
        if (scriptLoaded) return;

        let googleScript = document.querySelector(`script[src="${scriptSrc}"]`);
        if (!googleScript) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.async = true;
            script.onload = () => {
                setScriptLoaded(true);
            };
            document.head.appendChild(script);
        } else {
            setScriptLoaded(true);
        }

    }, []);

    useEffect(() => {
        if (!isBrowser) return;
        if (!scriptLoaded) return;
        const g = window.google;
        if (!g) return;

        setGoogle(g);
        g.charts.load('current', { 'packages': ['corechart'] });
        g.charts.load('current', { 'packages': ['gauge'] });
        g.charts.setOnLoadCallback(() => {
            setGoogleChartsLoaded(true);
        });
    }, [scriptLoaded]);

    useEffect(() => {
        if (!google || !googleChartsLoaded) return;

        const cd = new google.visualization.DataTable();
        cd.addColumn('number', caption);
        cd.addRows(1);
        cd.setCell(0, 0, value);
        setChartData(cd);

        const newChart = new google.visualization.Gauge(document.getElementById(id));
        newChart.draw(cd, options);
        setChart(newChart);

    }, [google, googleChartsLoaded]);

    useEffect(() => {
        if (!chartData || !chart) return;
        chartData.setCell(0, 0, value);
        chart.draw(chartData, options)
    }, [value]);

    return (
        <div id={id}>{caption}</div>
    );
};

export default GaugeChart;