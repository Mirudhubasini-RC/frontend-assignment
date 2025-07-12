import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';
import { fetchYearlyUsage } from '../services/api';
import '../styles/BarChartComponent.css';

interface BarChartComponentProps {
  darkMode: boolean;
}

type UsageData = {
  id: string;
  type: string;
  label: string[];
  data: number[];
};

// Custom glowing bar shape
const CustomActiveBar = (props: any) => {
  const { x, y, width, height, fill, darkMode } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        ry={4}
        fill={fill}
        stroke="#4a90e2"
        strokeWidth={2}
        style={{
          filter: darkMode
            ? 'drop-shadow(0 0 8px rgba(74, 144, 226, 0.5))'
            : 'drop-shadow(0 0 6px rgba(45, 114, 225, 0.35))',
        }}
      />
    </g>
  );
};

const BarChartComponent: React.FC<BarChartComponentProps> = ({ darkMode }) => {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchYearlyUsage();
        const yearEntry = res.data.find((d: UsageData) => d.type === 'year');
        if (yearEntry) {
          const transformed = yearEntry.label.map((name: string, i: number) => ({
            name,
            value: yearEntry.data[i],
          }));
          setChartData(transformed);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const legendFormatter = (value: string) => {
    return <span style={{ color: darkMode ? 'white' : 'black' }}>{value}</span>;
  };

  const axisLabelStyle = {
    fill: darkMode ? 'white' : 'black',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return (
    <div className="bar-chart-container">
      <h3 className="chart-title">Yearly API Usage</h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: 'Months',
              position: 'bottom',
              offset: 20,
              style: axisLabelStyle,
            }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            label={{
              value: 'API Call Usage',
              angle: -90,
              position: 'left',
              offset: 10,
              style: axisLabelStyle,
            }}
          />
          <Tooltip
            cursor={{
              fill: darkMode
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.05)',
              radius: 6,
            }}
            contentStyle={{
              backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
              border: darkMode ? '1px solid #777' : '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              color: darkMode ? '#fff' : '#000',
              padding: '10px',
            }}
            itemStyle={{
              color: darkMode ? '#fff' : '#000',
              fontSize: '0.9rem',
            }}
            labelStyle={{
              color: darkMode ? '#ccc' : '#333',
              fontWeight: 'bold',
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="left"
            wrapperStyle={{ paddingTop: '10px', paddingLeft: '20px' }}
            formatter={legendFormatter}
          />
          <Bar
            dataKey="value"
            fill="#2d72e1"
            name="No. of API Calls"
            barSize={30}
            activeBar={<CustomActiveBar darkMode={darkMode} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
