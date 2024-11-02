export interface Risk {
  id: string;
  title: string;
  description: string;
  category: string;
  likelihood: number;
  impact: number;
  status: 'active' | 'mitigated' | 'accepted';
  owner: string;
  dateIdentified: string;
  controls: Control[];
}

export interface Control {
  id: string;
  name: string;
  type: 'preventive' | 'detective' | 'corrective';
  effectiveness: number;
  status: 'implemented' | 'in-progress' | 'planned';
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved' | 'closed';
  dateReported: string;
  dateResolved?: string;
  reporter: string;
  assignee?: string;
}

export interface KRI {
  id: string;
  name: string;
  description: string;
  threshold: number;
  currentValue: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  owner: string;
}

export interface BusinessImpact {
  id: string;
  process: string;
  criticality: 'low' | 'medium' | 'high' | 'critical';
  rto: number; // Recovery Time Objective
  rpo: number; // Recovery Point Objective
  financialImpact: number;
  dependencies: string[];
}