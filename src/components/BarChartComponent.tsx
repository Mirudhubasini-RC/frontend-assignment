import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts';
import { fetchYearlyUsage } from '../services/api';

// Define props for BarChartComponent
interface BarChartComponentProps {
  darkMode: boolean; // Add darkMode prop here
}

type UsageData = {
  id: string;
  type: string;
  label: string[];
  data: number[];
};

// Update the component to accept BarChartComponentProps
const BarChartComponent: React.FC<BarChartComponentProps> = ({ darkMode }) => {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetchYearlyUsage();
      console.log("API Response:", res.data);

      const yearEntry = res.data.find((d: UsageData) => d.type === 'year');
      console.log("Found Year Entry:", yearEntry);

      if (yearEntry) {
        const transformed = yearEntry.label.map((name: string, i: number) => ({
          name,
          value: yearEntry.data[i],
        }));
        console.log("Chart Data:", transformed);
        setChartData(transformed);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Custom formatter for legend items
  const legendFormatter = (value: string) => {
    const color = darkMode ? 'white' : 'black'; // Determine color based on theme
    return <span style={{ color }}>{value}</span>;
  };

  // Custom style for axis labels based on dark mode
  const axisLabelStyle = {
    fill: darkMode ? 'white' : 'black', // Text color for the label
    fontSize: '14px', // Adjust font size as needed
    fontWeight: 'bold', // Make it bold if desired
  };


  return (
    // The bar-chart-container and bar-chart-window classes should be in your CSS files
    <div className="bar-chart-container">
      {/* 'chart-title' class applied, styles defined in Dashboard.css */}
      <h2 className="chart-title">Yearly API Usage</h2>

      <div className="bar-chart-window">
        {/* Reduced ResponsiveContainer height slightly to reduce overall vertical space */}
        {/* Adjusted height to 320 (from 350) */}
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData}
            // Significantly reduced left margin to pull chart closer to left edge
            // Reduced bottom margin to pull legend closer to X-axis
            margin={{ top: 20, right: 30, left: 40, bottom: 40 }} // Reduced left to 40, bottom to 40
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{
                value: 'Months', // X-axis label
                position: 'bottom', // Position of the label
                offset: 20, // Offset from the axis line (adjust as needed)
                style: axisLabelStyle, // Apply custom style
              }}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              label={{
                value: 'API Call Usage', // Y-axis label
                angle: -90, // Rotate label vertically
                position: 'left', // Crucially, use 'left' or 'outerLeft'
                // Adjusted offset for Y-axis label. May need fine-tuning after margin change.
                offset: 10, // Adjusted to 10 (from 20) as left margin is smaller
                style: axisLabelStyle, // Apply custom style
              }}
            />
            <Tooltip />
            {/* Position Legend at the bottom-left and apply custom formatter */}
            {/* Reduced paddingTop to pull the legend closer to the X-axis */}
            <Legend
              verticalAlign="bottom" // Position at the bottom
              align="left"         // Align to the left
              wrapperStyle={{ paddingTop: '10px', paddingLeft: '20px' }} // Reduced paddingTop to 10px
              formatter={legendFormatter} // Apply the custom formatter
            />
            <Bar dataKey="value" fill="#2d72e1" name="No. of API Calls" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
