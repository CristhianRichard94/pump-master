import React, {  useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PressureChart from '../components/PressureChart';
import httpService from '../../../services/httpService';



const PumpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const pumpId = params.get('id') || '1';

  const [pump, setPump] = useState(null);
   
  useEffect(() => {
    httpService.getPump(pumpId).then(data => {
      setPump(data);
    });
  }, [pumpId]);
if (!pump) 
    return <div>Loading...</div>;

  return (
    <div>
      <button
        onClick={() => navigate('/overview')}
      >
        ← 
      </button>
      <div>
        <h2>{pump.name}</h2>
        <div>
          <span>ID: {pump.id}</span> |
          <span>
            Status:
            <b
            >
              {pump.status}
            </b>
          </span>
          |
          <span>Last updated: {pump.lastUpdated}</span>
        </div>
        <div>
          <div>
            <table>
              <tbody>
                <tr><td>Type</td><td>{pump.type}</td></tr>
                <tr><td>Area/Block</td><td>{pump.area}</td></tr>
                <tr><td>Location</td><td>{pump.latitude}, {pump.longitude}</td></tr>
                <tr><td>Flow Rate</td><td>{pump.flowRate} GPM</td></tr>
                <tr><td>Offset</td><td>{pump.offset} s</td></tr>
                <tr><td>Current Pressure</td><td>{pump.currentPressure} psi</td></tr>
                <tr><td>Min Pressure</td><td>{pump.minPressure} psi</td></tr>
                <tr><td>Max Pressure</td><td>{pump.maxPressure} psi</td></tr>
              </tbody>
            </table>
          </div>
          <hr />
            <div>
              <img
                src={`https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${pump.longitude},${pump.latitude}&z=14&size=400,220&l=map&pt=${pump.longitude},${pump.latitude},pm2rdm`}
                alt="Pump Location"
              />
            </div>
          </div>
        <div>
          </div>
          <hr />
          <PressureChart data={{}} />
      </div>
    </div>
  );
};

export default PumpPage;