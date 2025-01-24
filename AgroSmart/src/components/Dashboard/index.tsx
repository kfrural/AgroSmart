import React from 'react';
import ApexCharts from 'react-apexcharts';

// Definindo tipos personalizados
type ApexStroke = {
  show?: boolean;
  curve?: string | string[];
  lineCap?: 'butt' | 'square' | 'round';
  colors?: string[];
  width?: number | number[];
  dashArray?: number | number[];
};

type ApexPlotOptions = {
  radialGauge: {
    size: number;
    hollow: {
      size: string;
      width: number;
      color: undefined;
    };
    track: {
      background: string;
      startAngleAdjust: number;
    };
  };
};

type ApexFill = {
  type: string;
  gradient?: {
    shade: string;
    shadeIntensity: number;
    inverseColors: boolean;
    opacityFrom: number;
    opacityTo: number;
    stops: number[];
  };
};

type ApexDataLabels = {
  enabled?: boolean;
  formatter?: (val: any, opts: any) => string;
  style?: {
    colors?: string[];
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: number;
  };
};

type ApexTooltip = {
  y4?: {
    title?: {
      formatter?: (value: any, options: any) => string;
    };
  };
};

type ApexOptions = {
  chart: {
    type: 'donut';
    height?: number;
    width?: number;
  };
  stroke?: ApexStroke;
  plotOptions?: ApexPlotOptions;
  fill?: ApexFill;
  labels?: string[];
  dataLabels?: ApexDataLabels;
  tooltip?: ApexTooltip;
};

const Dashboard = () => {
    const options: ApexOptions = {
        chart: {
            type: 'donut',
            width: 350,
            height: 350,
        },
        stroke: {
            lineCap: 'round',
        },
        plotOptions: {
            radialGauge: {
                size: 130,
                hollow: {
                    size: '50%',
                    width: 1,
                    color: undefined,
                },
                track: {
                    background: 'transparent',
                    startAngleAdjust: 90,
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'inverse-in',
                shadeIntensity: 1,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 0, 1],
            },
        },
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
        dataLabels: {
            enabled: true,
            formatter: function(val, opts) {
                return val + '%';
            },
            style: {
                colors: ['#fff'],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, Tahoma, Geneva, Verdana',
                fontWeight: 400,
            },
        },
        tooltip: {
            y4: {
                title: {
                    formatter: () => '',
                },
            },
        },
    };

    const series = [44, 55, 57, 53, 72];

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Dashboard</h2>
            <ApexCharts options={options} series={series} type="donut" height={350} />
        </div>
    );
};

export default Dashboard;
