// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactECharts from 'echarts-for-react';

// const TreeComponent = () => {
//     const [jsonData, setJsonData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3111/relationship', {
//                     responseType: 'text',
//                 });

//                 const parsedData = JSON.parse(response.data);
//                 setJsonData(parsedData);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     // Call useTree unconditionally
//     const treeData = useTree(jsonData);

//     console.log('jsonData', jsonData);
//     console.log('treeData', treeData);

//     const option = {
//         tooltip: {
//             trigger: 'item',
//             triggerOn: 'mousemove',
//         },
//         series: [
//             {
//                 type: 'tree',
//                 data: [treeData],
//                 left: '2%',
//                 right: '2%',
//                 top: '8%',
//                 bottom: '20%',
//                 symbol: 'emptyCircle',
//                 orient: 'vertical',
//                 expandAndCollapse: false,
//                 label: {
//                     position: 'top',
//                     rotate: 0,
//                     verticalAlign: 'middle',
//                     align: 'middle',
//                     fontSize: 15,
//                 },
//                 leaves: {
//                     label: {
//                         position: 'bottom',
//                         rotate: 0,
//                         verticalAlign: 'middle',
//                         align: 'middle',
//                     },
//                 },
//                 lineStyle: {
//                     width: 2, // Adjust line width here
//                     color: 'black', // Adjust line color here
//                     curveness: 0.2, // Adjust curvature of the lines
//                 },
//                 animationDurationUpdate: 750,
//             },
//         ],
//     };

//     return (
//         <div style={{ width: '500px', height: '500px' }}>
//             {jsonData.length === 0 ? (
//                 <p>Loading data...</p>
//             ) : (
//                 <ReactECharts option={option}></ReactECharts>
//             )}
//         </div>
//     );
// };

// // Move the useTree function outside of the TreeComponent component
// const useTree = (tree) => {
//     const queue = [];
//     const flattendata = new Array(tree.length << 1).fill(-1);
//     flattendata[0] = 8000;

//     const nodes = tree.map(({ leader, self }) => {
//         if (leader === 8000) {
//             flattendata[1] = self;
//             queue.push({ peer: self, index: 1 });
//         }
//         return { self, leader };
//     });

//     while (queue.length !== 0) {
//         const { peer, index } = queue.shift();
//         let hasChild = false;

//         nodes.forEach((node) => {
//             if (node.leader === peer) {
//                 if (!hasChild) {
//                     hasChild = true;
//                     flattendata[index << 1] = node.self;
//                     queue.push({ peer: node.self, index: index << 1 });
//                 } else {
//                     flattendata[(index << 1) + 1] = node.self;
//                     queue.push({ peer: node.self, index: (index << 1) + 1 });
//                 }
//             }
//         });
//     }

//     const objectArray = flattendata.map((element, index) => {
//         if (index === 0) {
//             return {
//                 name: `Publisher`,
//                 value: element,
//                 children: [],
//             };
//         }
//         if (index === 1) {
//             return {
//                 name: `FL Server ${element}`,
//                 value: element,
//                 children: [],
//             };
//         }
//         return {
//             name: `Peer ${element}`,
//             value: element,
//             children: [],
//         };
//     });

//     for (let i = objectArray.length - 1; i > 1; i--) {
//         if (objectArray[i].value !== -1) {
//             objectArray[Math.floor(i >> 1)].children.push(objectArray[i]);
//         }
//     }

//     objectArray[0].children = [objectArray[1]];

//     return objectArray[0];
// };

// export default TreeComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';

const TreeComponent = () => {
    const [jsonData, setJsonData] = useState([]);
    const [latestRoundRelationships, setLatestRoundRelationships] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3111/relationship', {
                    responseType: 'text',
                });

                const parsedData = JSON.parse(response.data);
                setJsonData(parsedData);
                setLatestRoundRelationships(parsedData.length > 0 ? parsedData[parsedData.length - 1].relationship : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        // Fetch data every 1 second
        const intervalId = setInterval(fetchData, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const treeData = useTree(latestRoundRelationships);

    console.log('jsonData', jsonData);
    console.log('treeData', treeData);

    const option = {
        // ... (rest of the option configuration remains the same)
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
        },
        series: [
            {
                type: 'tree',
                data: [treeData],
                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '20%',
                symbol: 'emptyCircle',
                orient: 'vertical',
                expandAndCollapse: false,
                label: {
                    position: 'top',
                    rotate: 0,
                    verticalAlign: 'middle',
                    align: 'middle',
                    fontSize: 15,
                },
                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: 0,
                        verticalAlign: 'middle',
                        align: 'middle',
                    },
                },
                lineStyle: {
                    width: 2, // Adjust line width here
                    color: 'black', // Adjust line color here
                    curveness: 0.2, // Adjust curvature of the lines
                },
                animationDurationUpdate: 750,
            },
        ],
    };

    return (
        // <div style={{ width: '500px', height: '500px' }}>
        //     {jsonData.length === 0 || !treeData ? (
        //         <p>Loading data...</p>
        //     ) : (
        //         <ReactECharts option={option}></ReactECharts>
        //     )}
        // </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '500px', height: '500px' }}>
        {jsonData.length === 0 || !treeData ? (
          <p>Loading data...</p>
        ) : (
          <ReactECharts option={option}></ReactECharts>
        )}
      </div>
    </div>
    );
};

const useTree = (relationships) => {
    const queue = [];
    const flattendata = new Array(relationships.length << 1).fill(-1);
    flattendata[0] = 99;

    const nodes = relationships.map(({ leader, self }) => {
        if (leader === 99) {
            flattendata[1] = self;
            queue.push({ peer: self, index: 1 });
        }
        return { self, leader };
    });

    while (queue.length !== 0) {
        const { peer, index } = queue.shift();
        let hasChild = false;

        nodes.forEach((node) => {
            if (node.leader === peer) {
                if (!hasChild) {
                    hasChild = true;
                    flattendata[index << 1] = node.self;
                    queue.push({ peer: node.self, index: index << 1 });
                } else {
                    flattendata[(index << 1) + 1] = node.self;
                    queue.push({ peer: node.self, index: (index << 1) + 1 });
                }
            }
        });
    }

    const objectArray = flattendata.map((element, index) => {
        if (index === 0) {
            return {
                name: `Publisher`,
                value: element,
                children: [],
            };
        }
        if (index === 1) {
            return {
                name: `FL Server ${element}`,
                value: element,
                children: [],
            };
        }
        return {
            name: `Peer ${element}`,
            value: element,
            children: [],
        };
    });

    for (let i = objectArray.length - 1; i > 1; i--) {
        if (objectArray[i].value !== -1) {
            objectArray[Math.floor(i >> 1)].children.push(objectArray[i]);
        }
    }

    objectArray[0].children = [objectArray[1]];

    return objectArray[0];
};

export default TreeComponent;
