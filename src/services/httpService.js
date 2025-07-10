let pumps = Array.from({ length: 10 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `Pump ${i + 1}`,
  type: i % 2 === 0 ? 'Centrifugal' : 'Submersible',
  area: `Block ${String.fromCharCode(65 + (i % 5))}`,
  latitude: (34.05 + i * 0.01).toFixed(4),
  longitude: (-118.25 + i * 0.01).toFixed(4),
  flowRate: (100 + i * 2).toFixed(1),
  offset: (10 + i).toString(),
  currentPressure: (30 + i % 10).toFixed(1),
  minPressure: 25,
  maxPressure: 50,
  status: i % 3 === 0 ? 'Running' : i % 3 === 1 ? 'Stopped' : 'Error',
  lastUpdated: new Date(Date.now() - i * 3600 * 1000).toLocaleString(),
}));

const httpService = {
  // Login function
  login: async ({ username, password }) => {
      return { token: 'dummy', user: { username: 'admin', name: 'Admin User' } };

  },

  // Get all pumps
  getPumps: async () => {
    return [...pumps];
  },

  // Get pump by id
  getPump: async (id) => {
    return pumps.find(p => p.id === id) || null;
  },

  // Add a new pump
  addPump: async (pumpData) => {
    const newPump = {
      ...pumpData,
      id: (pumps.length + 1).toString(),
      lastUpdated: new Date().toLocaleString(),
    };
    pumps.push(newPump);
    return newPump;
  },

  // Edit a pump
  editPump: async (id, pumpData) => {
    const idx = pumps.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Pump not found');
    pumps[idx] = { ...pumps[idx], ...pumpData, lastUpdated: new Date().toLocaleString() };
    return pumps[idx];
  },

  // Remove a pump
  removePump: async (id) => {
    const idx = pumps.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Pump not found');
    const removed = pumps.splice(idx, 1)[0];
    return removed;
  }
};

export default httpService;