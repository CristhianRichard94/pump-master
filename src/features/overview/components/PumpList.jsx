import { useNavigate } from 'react-router-dom';
import PumpItem from '../components/PumpItem';

const PumpList = ({ pumps, handleEdit }) => {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Area/Block</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Flow Rate (GPM)</th>
          <th>Offset (s)</th>
          <th>Current Pressure (psi)</th>
          <th>Min Pressure</th>
          <th>Max Pressure</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {pumps.map((pump, idx) => (
          <PumpItem
            key={pump.id || idx}
            pump={pump}
            onClick={() => navigate(`/pump/${pump.id}`)}
            onEditClick={handleEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default PumpList;