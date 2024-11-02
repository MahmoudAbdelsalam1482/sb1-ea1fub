import React from 'react';
import { BarChart2, AlertTriangle, Shield, Activity, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Active Risks', value: '24', change: '+2', icon: BarChart2, color: 'text-amber-600' },
    { name: 'Open Incidents', value: '7', change: '-3', icon: AlertTriangle, color: 'text-red-600' },
    { name: 'Control Coverage', value: '86%', change: '+4%', icon: Shield, color: 'text-green-600' },
    { name: 'KRIs Above Threshold', value: '3', change: '+1', icon: Activity, color: 'text-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900">Risk Management Dashboard</h1>
              <p className="mt-2 text-sm text-gray-700">
                A comprehensive overview of your organization's risk landscape
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.name}
                className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
              >
                <dt>
                  <div className={`absolute rounded-md p-3 ${item.color} bg-opacity-10`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                  <p className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className={`h-4 w-4 flex-shrink-0 self-center ${
                      item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`} aria-hidden="true" />
                    <span className="ml-1">{item.change}</span>
                  </p>
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Risk Updates</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Cybersecurity Risk #{i}</p>
                      <p className="text-sm text-gray-500">Updated 2 hours ago</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Medium Risk
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Control Effectiveness</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                          Control #{i}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {80 + i * 5}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                      <div
                        style={{ width: `${80 + i * 5}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}