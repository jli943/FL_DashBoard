import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const Chart = (props)=>{
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
    setChartData(props.data);
    }, [props.data]);
   
    const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['Accuracy', 'Loss'],
          textStyle: {
            color: '#333',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: chartData.map((d) => `Round ${d.round}`),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Accuracy',
            type: 'line',
            data: chartData.map((d) => d.Acc),
            itemStyle: {
              color: 'rgba(255, 99, 132, 1)',
            },
          },
          {
            name: 'Loss',
            type: 'line',
            data: chartData.map((d) => d.Loss),
            itemStyle: {
              color: 'rgba(54, 162, 235, 1)',
            },
          },
        ],
      };

      return (

        <ReactECharts option={options} />
    );
};

export default Chart;