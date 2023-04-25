const GlobalModelTable = (props) => {
  return Object.keys(props.roundDatainGlobalModel).length > 0 ? (
    <div>
      <h2>Round: {props.roundDatainGlobalModel.round}</h2>
      <p>Aggregation Time: {props.roundDatainGlobalModel.aggregation_time}</p>
      <p>Model Size: {props.roundDatainGlobalModel.model_size}</p>
      <p>Model: {props.roundDatainGlobalModel.model}</p>
      <p>Download Latency: {props.roundDatainGlobalModel.download_latency}</p>
    </div>
  ) : (
    <h2>Computing....</h2>
  );
};

export default GlobalModelTable;
