import React from 'react';
import ApexCharts from 'react-apexcharts';
import styles from './styles';

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
      width: '100%',
      height: 350,
      background: '#ffffff',
    },
    stroke: {
      lineCap: 'round',
      width: 6,
    },
    plotOptions: {
      radialGauge: {
        size: 130,
        hollow: {
          size: '50%',
          width: 1,
          color: 'transparent',
        },
        track: {
          background: '#e0e0e0',
          startAngleAdjust: 90,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.6,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 80, 100],
      },
    },
    labels: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ],
    dataLabels: {
      enabled: true,
      formatter: function(val, opts) {
        return val.toFixed(2) + '%';
      },
      style: {
        colors: ['#fff'],
        fontSize: '14px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 500,
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

  const series = [44, 55, 57, 53, 72, 25, 15, 60, 45, 12, 35, 5];
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.textDashboard}>Pendências Mensais</h2>
      <ApexCharts options={options} series={series} type="donut" height={350} />
      <div style={{ marginTop: '20px' }}>
        {months.map((month, index) => (
          <div key={month} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
            <span style={{ color: '#333' }}>{month}</span>
            <span style={{ fontWeight: 'bold', color: '#333' }}>{series[index].toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
