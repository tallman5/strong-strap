import React, { useEffect, useState } from 'react';
import { isBrowser } from '../utilities';
import useGoogleCharts from '../hooks/useGoogleCharts';

export interface GaugeChartProps {
    caption: string
    id: string
    options?: any
    value?: number
}

const GaugeChart: React.FC<GaugeChartProps> = ({ caption, id, options = null, value = 0 }) => {
    const gc = useGoogleCharts();
    const [chartData, setChartData] = useState<DataTable>();
    const [chart, setChart] = useState<GoogleChart>();

    useEffect(() => {
        if (!isBrowser || !gc) return;

        const cd = new gc.visualization.DataTable();
        cd.addColumn('number', caption);
        cd.addRows(1);
        cd.setCell(0, 0, value);
        setChartData(cd);

        const newChart = new gc.visualization.Gauge(document.getElementById(id));
        newChart.draw(cd, options);
        setChart(newChart);

    }, [gc]);

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