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

let authToken = null;
let refreshToken = "dummy-refresh-token";

const simulateRefreshToken = async (token) => {
  console.log(`Call to token refresh for: ${token}`);
  
  if (token === refreshToken) {
    authToken = "dummy-refreshed-token";
    return { token: authToken, refreshToken };
  }
  throw new Error("Invalid refresh token");
};

const ApiService = {
  login: async ({ username, password }) => {
    console.log('[API] login called');
    // Simulate login
    authToken = 'dummy-auth-token';
    refreshToken = 'dummy-refresh-token';
    return {
      token: authToken,
      refreshToken,
      user: { username: 'admin', name: 'Admin User' }
    };
  },

  // Refresh token
  refreshAuthToken: async (token) => {
    console.log('[API] refreshAuthToken called with token:', token);
    return simulateRefreshToken(token);
  },

  // Get all pumps
  getPumps: async (token) => {
    console.log('[API] getPumps called with token:', token, 'current authToken:', authToken);
    if (token !== authToken) throw new Error('Unauthorized');
    return [...pumps];
  },

  // Get pump by id
  getPump: async (id, token) => {
    console.log('[API] getPump called with id:', id, 'token:', token, 'current authToken:', authToken);
    if (token !== authToken) throw new Error('Unauthorized');
    return pumps.find(p => p.id === id) || null;
  },

  // Add a new pump
  addPump: async (pumpData, token) => {
    console.log('[API] addPump called with token:', token, 'current authToken:', authToken);
    if (token !== authToken) throw new Error('Unauthorized');
    // Http call to add a pump
    return pumpData;
  },

  // Edit a pump
  editPump: async (id, pumpData, token) => {
    console.log('[API] editPump called with id:', id, 'token:', token, 'current authToken:', authToken);
    if (token !== authToken) throw new Error('Unauthorized');
    // Http call to edit a pump
    return pumpData;
  },

  // Remove a pump
  removePump: async (id, token) => {
    console.log('[API] removePump called with id:', id, 'token:', token, 'current authToken:', authToken);
    if (token !== authToken) throw new Error('Unauthorized');
    // Http call to remove a pump
    return id;
  },

  // Utility to get current token 
  getAuthToken: () => authToken,
  getRefreshToken: () => refreshToken,
};

export default ApiService;