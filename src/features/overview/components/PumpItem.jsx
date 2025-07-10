import Button from "../../../shared/Button/Button";

const PumpItem = ({ pump, onClick, onEditClick }) => {
  return (
    <tr key={pump.id} onClick={onClick}>
      <td>{pump.name}</td>
      <td>{pump.type}</td>
      <td>{pump.area}</td>
      <td>{pump.latitude}</td>
      <td>{pump.longitude}</td>
      <td>{pump.flowRate}</td>
      <td>{pump.offset}</td>
      <td>{pump.currentPressure}</td>
      <td>{pump.minPressure}</td>
      <td>{pump.maxPressure}</td>
      <td>
        <Button
          onClick={e => {
            e.stopPropagation();
            onEditClick(pump);
          }}
        >
          Edit
        </Button>
      </td>
    </tr>
  );
};

export default PumpItem;