import React from 'react';
import { Clock, DollarSign, Network, AlertTriangle } from 'lucide-react';
import { BusinessImpact } from '../../types';
import BusinessProcessTable from './BusinessProcessTable';
import CriticalityChart from './CriticalityChart';

const mockData: BusinessImpact[] = [
  {
    id: '1',
    process: 'Payment Processing',
    criticality: 'critical',
    rto: 4,
    rpo: 2,
    financialImpact: 50000,
    dependencies: ['Core Banking System', 'Payment Gateway', 'Database Servers']
  },
  {
    id: '2',
    process: 'Customer Service',
    criticality: 'high',
    rto: 8,
    rpo: 4,
    financialImpact: 25000,
    dependencies: ['CRM System', 'Call Center Infrastructure']
  },
  {
    id: '3',
    process: 'Reporting',
    criticality: 'medium',
    rto: 24,
    rpo: 12,
    financialImpact: 10000,
    dependencies: ['Data Warehouse', 'Reporting Tools']
  }
];

export default function BusinessImpactPage() {
  const stats = [
    {
      name: 'Critical Processes',
      value: '4',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      name: 'Average RTO',
      value: '6h',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Total Financial Impact',
      value: '$85K',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Key Dependencies',
      value: '12',
      icon: Network,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Business Impact Analysis</h1>
            <p className="mt-2 text-sm text-gray-700">
              Analyze and assess the potential impact of business disruptions on critical processes
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
              Add Process
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
            >
              <dt>
                <div className={`absolute rounded-md p-3 ${item.color} ${item.bgColor}`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
              </dd>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BusinessProcessTable processes={mockData} />
          <CriticalityChart processes={mockData} />
        </div>
      </div>
    </div>
  );
}