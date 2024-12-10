import React, { useState, useEffect } from 'react';
import { Card, Title, AreaChart } from '@tremor/react';

const Dashboard = () => {
  const [kpiData, setKpiData] = useState([]);

  // Simulación de datos SCADA
  useEffect(() => {
    const mockData = [
      { timestamp: '00:00', efficiency: 85, temperature: 120, pressure: 2.4 },
      { timestamp: '04:00', efficiency: 88, temperature: 125, pressure: 2.5 },
      { timestamp: '08:00', efficiency: 92, temperature: 122, pressure: 2.6 },
      { timestamp: '12:00', efficiency: 90, temperature: 128, pressure: 2.3 },
      { timestamp: '16:00', efficiency: 87, temperature: 123, pressure: 2.4 },
      { timestamp: '20:00', efficiency: 89, temperature: 121, pressure: 2.5 }
    ];
    setKpiData(mockData);
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard SCADA</h1>
        <p className="text-gray-600">Monitor de KPIs en tiempo real</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <Title>Eficiencia del Sistema</Title>
          <AreaChart
            className="h-72 mt-4"
            data={kpiData}
            index="timestamp"
            categories={['efficiency']}
            colors={['blue']}
          />
        </Card>

        <Card>
          <Title>Temperatura</Title>
          <AreaChart
            className="h-72 mt-4"
            data={kpiData}
            index="timestamp"
            categories={['temperature']}
            colors={['red']}
          />
        </Card>

        <Card>
          <Title>Presión</Title>
          <AreaChart
            className="h-72 mt-4"
            data={kpiData}
            index="timestamp"
            categories={['pressure']}
            colors={['green']}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;