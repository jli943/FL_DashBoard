import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import { AccContainer, RightContentContainer, LossContainer } from './style';

const AccLossComponent = () => {
  const [jsonData, setJsonData] = useState([]);
  const [xAxis, setXAxis] = useState([]);
  const [accOption, setAccOption] = useState({});
  const [lossOption, setLossOption] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3111/accloss', {
          responseType: 'text',
        });

        const parsedData = JSON.parse(response.data);
        setJsonData(parsedData);

        const rounds = parsedData.map((item) => item.round);
        setXAxis(rounds);

        const accOption = {
          title: {
            text: 'Global ACC',
            x: 'center',
          },
          xAxis: {
            name: 'round',
            type: 'category',
            data: rounds,
          },
          yAxis: {
            name: 'acc',
            type: 'value',
          },
          series: [
            {
              data: parsedData.map((item) => item.acc),
              type: 'line',
              smooth: true,
            },
          ],
        };

        const lossOption = {
          title: {
            text: 'Global Loss',
            x: 'center',
          },
          xAxis: {
            name: 'round',
            type: 'category',
            data: rounds,
          },
          yAxis: {
            name: 'loss',
            type: 'value',
          },
          series: [
            {
              data: parsedData.map((item) => item.loss),
              type: 'line',
              smooth: true,
            },
          ],
        };

        setAccOption(accOption);
        setLossOption(lossOption);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <RightContentContainer>
    //   <AccContainer>
    //     <ReactECharts option={accOption}></ReactECharts>
    //   </AccContainer>
    //   <LossContainer>
    //     <ReactECharts option={lossOption}></ReactECharts>
    //   </LossContainer>
    // </RightContentContainer>
    <RightContentContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {/* AccContainer */}
      <div style={{ marginBottom: '10px', width: '100%' }}>
        <AccContainer>
          <ReactECharts option={accOption}></ReactECharts>
        </AccContainer>
      </div>

      {/* LossContainer */}
      <div style={{ width: '100%' }}>
        <LossContainer>
          <ReactECharts option={lossOption}></ReactECharts>
        </LossContainer>
      </div>
    </RightContentContainer>




  );
};

export default AccLossComponent;
