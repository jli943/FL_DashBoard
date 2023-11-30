// import { Outlet } from 'react-router-dom'
// import EdgeClientList from '../features/edgeClientList/edgeClientList'
// import GlobalModel from '../features/globalModel/globalModel';
import FinalInterface from '../features/finalInterface/finalInterface';
import Test from './test';
import Tree from '../features/relationship/relationship';
import AccLossComponent from '../features/acc_loss/acc_loss';

const DashLayout = () => {
  return (
    // <div>
    //   {/* Display FinalInterface and Tree in the same row */}
    //   <div style={{ display: 'flex' }}>
    //     <FinalInterface />
    //     <Tree />
    //   </div>

    //   {/* Display AccLossComponent in the next row */}
    //   <AccLossComponent />
    // </div>
    <div style={{ display: 'flex' }}>
      {/* First Column: FinalInterface */}
      <div style={{ flex: 2 }}>
        <FinalInterface />
      </div>

      {/* Second Column: Tree */}
      <div style={{ flex: 1 }}>
        <Tree />
      </div>

      {/* Third Column: AccLossComponent */}
      <div style={{ flex: 1 }}>
        <AccLossComponent />
      </div>
    </div>
  );
}
export default DashLayout