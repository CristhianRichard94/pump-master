import React, { useState, useEffect } from 'react';
import Button from '../../../shared/Button/Button';

const initialState = {
  name: '',
  id: '',
  type: 'Centrifugal',
  area: '',
  latitude: '',
  longitude: '',
  offset: '',
  minPressure: '',
  maxPressure: '',
};

const PumpForm = ({ pump, onSubmit, onCancel }) => {
  const isEdit = !!pump;
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (isEdit && pump) {
      setForm({
        name: pump.name || '',
        id: pump.id || '',
        type: pump.type || 'Centrifugal',
        area: pump.area || '',
        latitude: pump.latitude || '',
        longitude: pump.longitude || '',
        offset: pump.offset || '',
        minPressure: pump.minPressure || '',
        maxPressure: pump.maxPressure || '',
      });
    } else {
      setForm(initialState);
    }
  }, [isEdit, pump]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        {isEdit ? 'Edit Pump' : 'Add Pump'}
      </h3>
      <div>
        <label>Pump Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Pump ID</label>
        <input
          name="id"
          value={form.id}
          onChange={handleChange}
          required
          disabled={isEdit}
        />
      </div>
      <div>
        <label>Type</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="Centrifugal">Centrifugal</option>
          <option value="Submersible">Submersible</option>
        </select>
      </div>
      <div>
        <label>Area/Block</label>
        <input
          name="area"
          value={form.area}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <div>
          <label>Latitude</label>
          <input
            name="latitude"
            value={form.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Longitude</label>
          <input
            name="longitude"
            value={form.longitude}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <label>Offset</label>
        <input
          name="offset"
          value={form.offset}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <div>
          <label>Min Pressure</label>
          <input
            name="minPressure"
            value={form.minPressure}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Max Pressure</label>
          <input
            name="maxPressure"
            value={form.maxPressure}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <Button
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
        type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default PumpForm;