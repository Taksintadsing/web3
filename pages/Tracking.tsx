
import React, { useEffect, useState, useRef } from 'react';
import PageCard from '../components/PageCard';

interface Shipment {
  id: string;
  sender: string;
  receiver: string;
  origin: string;
  dest: string;
  curLat: number;
  curLon: number;
  status: string;
  timestamp: string;
  speed: number;
  weather: string;
  traffic: number;
  distanceRemaining: number;
  delay: number;
  risk: string;
}

const SHIPMENT_DATA: Shipment[] = [
  { id: "SHP001", sender: "Center-BKK", receiver: "Chiang Mai", origin: "Bangkok", dest: "Chiang Mai", curLat: 15.23, curLon: 99.85, status: "In Transit", timestamp: "10:30", speed: 65, weather: "Rain", traffic: 85, distanceRemaining: 406.51, delay: 85, risk: "High Risk" },
  { id: "SHP002", sender: "Center-BKK", receiver: "Phuket Hub", origin: "Bangkok", dest: "Phuket", curLat: 10.5, curLon: 99.1, status: "In Transit", timestamp: "10:35", speed: 70, weather: "Clear", traffic: 20, distanceRemaining: 301.57, delay: 0, risk: "Low Risk" },
  { id: "SHP003", sender: "Center-BKK", receiver: "Khon Kaen", origin: "Bangkok", dest: "Khon Kaen", curLat: 14.8, curLon: 101.5, status: "Delayed", timestamp: "10:00", speed: 15, weather: "Storm", traffic: 95, distanceRemaining: 229.85, delay: 160, risk: "High Risk" },
  { id: "SHP004", sender: "Center-BKK", receiver: "Hat Yai", origin: "Bangkok", dest: "Hat Yai", curLat: 8.5, curLon: 99.8, status: "In Transit", timestamp: "11:00", speed: 80, weather: "Clear", traffic: 30, distanceRemaining: 182.39, delay: 0, risk: "Low Risk" },
  { id: "SHP005", sender: "Eastern Hub", receiver: "Rayong Hub", origin: "Chonburi", dest: "Rayong", curLat: 12.9, curLon: 101.1, status: "Delivered", timestamp: "9:00", speed: 0, weather: "Clear", traffic: 10, distanceRemaining: 31.29, delay: 0, risk: "Low Risk" },
  { id: "SHP006", sender: "Center-BKK", receiver: "Ayutthaya", origin: "Bangkok", dest: "Ayutthaya", curLat: 14.1, curLon: 100.55, status: "In Transit", timestamp: "10:45", speed: 55, weather: "Rain", traffic: 75, distanceRemaining: 27.98, delay: 65, risk: "High Risk" },
  { id: "SHP007", sender: "North Hub", receiver: "Chiang Rai", origin: "Chiang Mai", dest: "Chiang Rai", curLat: 19.2, curLon: 99.4, status: "In Transit", timestamp: "10:15", speed: 60, weather: "Fog", traffic: 60, distanceRemaining: 91.42, delay: 50, risk: "Medium Risk" },
  { id: "SHP008", sender: "Center-BKK", receiver: "Korat Hub", origin: "Bangkok", dest: "Korat", curLat: 14.5, curLon: 101.2, status: "In Transit", timestamp: "11:10", speed: 75, weather: "Clear", traffic: 35, distanceRemaining: 109.99, delay: 0, risk: "Low Risk" },
  { id: "SHP009", sender: "South Hub", receiver: "Surat Thani", origin: "Phuket", dest: "Surat Thani", curLat: 8.5, curLon: 98.9, status: "Delayed", timestamp: "9:45", speed: 20, weather: "Rain", traffic: 80, distanceRemaining: 84.49, delay: 65, risk: "High Risk" },
  { id: "SHP010", sender: "Center-BKK", receiver: "Ubon Hub", origin: "Bangkok", dest: "Ubon", curLat: 14.8, curLon: 103.5, status: "In Transit", timestamp: "10:55", speed: 85, weather: "Clear", traffic: 25, distanceRemaining: 153.01, delay: 0, risk: "Low Risk" },
  { id: "SHP011", sender: "Center-BKK", receiver: "Pattaya Hub", origin: "Bangkok", dest: "Pattaya", curLat: 13.2, curLon: 100.7, status: "In Transit", timestamp: "11:20", speed: 90, weather: "Clear", traffic: 40, distanceRemaining: 36.73, delay: 0, risk: "Low Risk" },
  { id: "SHP012", sender: "West Hub", receiver: "Kanchanaburi", origin: "Ratchaburi", dest: "Kanchanaburi", curLat: 13.8, curLon: 99.65, status: "In Transit", timestamp: "10:25", speed: 65, weather: "Cloudy", traffic: 45, distanceRemaining: 27.68, delay: 0, risk: "Low Risk" },
  { id: "SHP013", sender: "Center-BKK", receiver: "Tak Hub", origin: "Bangkok", dest: "Tak", curLat: 15.5, curLon: 99.8, status: "In Transit", timestamp: "10:40", speed: 72, weather: "Rain", traffic: 65, distanceRemaining: 169.76, delay: 65, risk: "High Risk" },
  { id: "SHP014", sender: "NE Hub", receiver: "Udon Thani", origin: "Khon Kaen", dest: "Udon Thani", curLat: 16.9, curLon: 102.8, status: "In Transit", timestamp: "11:05", speed: 68, weather: "Clear", traffic: 20, distanceRemaining: 56.74, delay: 0, risk: "Low Risk" },
  { id: "SHP015", sender: "South Hub", receiver: "Trang Hub", origin: "Hat Yai", dest: "Trang", curLat: 7.3, curLon: 100, status: "Delayed", timestamp: "10:10", speed: 30, weather: "Storm", traffic: 90, distanceRemaining: 52.73, delay: 160, risk: "High Risk" }
];

const Tracking: React.FC = () => {
  const mapRef = useRef<any>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Initialize Leaflet Map
    if (!mapRef.current && (window as any).L) {
      const L = (window as any).L;
      mapRef.current = L.map('map').setView([13.7367, 100.5231], 6);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);

      SHIPMENT_DATA.forEach(shp => {
        const markerColor = shp.status === 'Delayed' ? '#ef4444' : shp.status === 'Delivered' ? '#10b981' : '#3b82f6';
        const circle = L.circleMarker([shp.curLat, shp.curLon], {
          radius: 8,
          fillColor: markerColor,
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(mapRef.current);
        
        circle.bindPopup(`
          <div style="font-family: 'Prompt', sans-serif;">
            <strong style="color: #0f172a;">${shp.id}</strong><br/>
            <span>Status: ${shp.status}</span><br/>
            <span>To: ${shp.receiver}</span><br/>
            <span style="color: ${shp.risk === 'High Risk' ? '#ef4444' : '#64748b'}">Risk: ${shp.risk}</span>
          </div>
        `);
      });
    }
  }, []);

  const stats = {
    total: SHIPMENT_DATA.length,
    inTransit: SHIPMENT_DATA.filter(s => s.status === 'In Transit').length,
    delayed: SHIPMENT_DATA.filter(s => s.status === 'Delayed').length,
    highRisk: SHIPMENT_DATA.filter(s => s.risk === 'High Risk').length
  };

  const filteredData = filter === 'All' ? SHIPMENT_DATA : SHIPMENT_DATA.filter(s => s.risk === filter);

  return (
    <PageCard>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
          🚚 Real-time Tracking Dashboard
        </h1>
        <div className="flex gap-2">
          {['All', 'Low Risk', 'Medium Risk', 'High Risk'].map(r => (
            <button 
              key={r}
              onClick={() => setFilter(r)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${filter === r ? 'bg-sky-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Shipments', val: stats.total, color: 'text-slate-900', bg: 'bg-slate-50' },
          { label: 'In Transit', val: stats.inTransit, color: 'text-sky-600', bg: 'bg-sky-50' },
          { label: 'Delayed', val: stats.delayed, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'High Risk', val: stats.highRisk, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.bg} p-4 rounded-2xl border border-white/50 shadow-sm`}>
            <p className="text-xs font-bold text-slate-500 uppercase">{stat.label}</p>
            <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Interactive Map */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 shadow-inner">
        <div id="map" className="w-full"></div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-bold text-slate-600">ID</th>
              <th className="p-4 font-bold text-slate-600">Receiver</th>
              <th className="p-4 font-bold text-slate-600">Status</th>
              <th className="p-4 font-bold text-slate-600">Weather</th>
              <th className="p-4 font-bold text-slate-600">Distance Left</th>
              <th className="p-4 font-bold text-slate-600">Risk</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((shp) => (
              <tr key={shp.id} className="border-b border-slate-100 hover:bg-sky-50/30 transition-colors">
                <td className="p-4 font-bold text-sky-600">{shp.id}</td>
                <td className="p-4 text-slate-700">{shp.receiver}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    shp.status === 'Delayed' ? 'bg-amber-100 text-amber-700' : 
                    shp.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-sky-100 text-sky-700'
                  }`}>
                    {shp.status}
                  </span>
                </td>
                <td className="p-4 text-slate-500">{shp.weather}</td>
                <td className="p-4 text-slate-500">{shp.distanceRemaining.toFixed(1)} km</td>
                <td className="p-4">
                  <span className={`font-bold ${shp.risk === 'High Risk' ? 'text-red-500' : shp.risk === 'Medium Risk' ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {shp.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageCard>
  );
};

export default Tracking;
