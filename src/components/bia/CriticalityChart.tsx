import React from 'react';
import { BusinessImpact } from '../../types';

interface CriticalityChartProps {
  processes: BusinessImpact[];
}

export default function CriticalityChart({ processes }: CriticalityChartProps) {
  const criticalityCount = {
    critical: processes.filter(p => p.criticality === 'critical').length,
    high: processes.filter(p => p.criticality === 'high').length,
    medium: processes.filter(p => p.criticality === 'medium').length,
    low: processes.filter(p => p.criticality === 'low').length,
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Process Criticality Distribution</h3>
      <div className="space-y-4">
        {Object.entries(criticalityCount).map(([level, count]) => (
          <div key={level} className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                  level === 'critical' ? 'text-red-600 bg-red-200' :
                  level === 'high' ? 'text-orange-600 bg-orange-200' :
                  level === 'medium' ? 'text-yellow-600 bg-yellow-200' :
                  'text-green-600 bg-green-200'
                }`}>
                  {level}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-gray-600">
                  {count} Processes
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${(count / processes.length) * 100}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                  level === 'critical' ? 'bg-red-500' :
                  level === 'high' ? 'bg-orange-500' :
                  level === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}