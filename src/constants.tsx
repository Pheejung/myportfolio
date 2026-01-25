
import { BarChart3, Grid3X3, Network, QrCode, RotateCw, Users, Map } from 'lucide-react';
import { Experience, SandboxItem, EducationItem, CertificationItem, ImpactProject, SecondaryProject } from './types';

// export const EXPERIENCES: Experience[] = [
//   {
//     company: "Vertigo Games",
//     role: "Senior Frontend Developer",
//     period: "2021 — Present",
//     accentColor: "bg-primary",
//     projects: [
//       {
//         title: "VR Interaction Engine",
//         problem: "Critical de-sync between 50+ concurrent users during physics-based object manipulation.",
//         solution: "Engineered interpolation layer using SharedArrayBuffer and Worker threads for off-main-thread prediction.",
//         impact: "-40% Latency",
//         impactLabel: "IMPACT",
//         tech: ["THREE.JS", "WEBGL", "WEBWORKERS"],
//         icon: "hub"
//       },
//       {
//         title: "Multiplayer Lobby System",
//         problem: "Socket connection exhaustion during peak traffic events (10k+ concurrent lobbies).",
//         solution: "Redesigned state management with Redis-backed sticky sessions and HAProxy scaling.",
//         impact: "99.9% Uptime",
//         impactLabel: "IMPACT",
//         tech: ["NODE.JS", "SOCKET.IO", "REDIS"],
//         icon: "groups"
//       }
//     ]
//   },
//   {
//     company: "O2Oz Logistics",
//     role: "Frontend Developer",
//     period: "2018 — 2021",
//     accentColor: "bg-blue-400",
//     projects: [
//       {
//         title: "Smart Routing Dashboard",
//         subtitle: "REAL-TIME OPTIMIZATION SYSTEM",
//         problem: "Inefficient pathing calculations causing delay in driver updates.",
//         solution: "Implemented client-side Voronoi tessellation for rapid proximity estimation.",
//         impact: "-14% Fuel Cost",
//         impactLabel: "CORE IMPACT",
//         tech: ["VUE", "D3.JS"],
//         icon: "route"
//       },
//       {
//         title: "Virtual High-Density Grid",
//         subtitle: "INVENTORY MANAGEMENT INTERFACE",
//         problem: "DOM bottleneck rendering 100k+ inventory items.",
//         solution: "Built a custom canvas renderer to bypass React reconciliation for bulk data visuals.",
//         impact: "50k+ Live Records",
//         impactLabel: "CORE IMPACT",
//         tech: ["REACT", "CANVAS"],
//         icon: "inventory_2"
//       }
//     ]
//   }
// ];

export const SANDBOX_ITEMS: SandboxItem[] = [
  {
    title: "Type-Safe Events",
    description: "A tiny utility for strictly typed event emitters in TypeScript.",
    icon: "data_object"
  },
  {
    title: "Procedural UI",
    description: "Algorithm-driven interface generator using Perlin noise.",
    icon: "draw"
  },
  {
    title: "Git Flow Visualizer",
    description: "Canvas-based tool to visualize complex git branch operations.",
    icon: "terminal"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.S. Computer Science",
    institution: "Korea University",
    description: "Specialization in Graphics & Distributed Systems.",
    active: true
  },
  {
    degree: "Global Exchange Program",
    institution: "University of Washington",
    description: "Focused on Advanced HCI and UI Engineering."
  }
];


export const CERTIFICATIONS: CertificationItem[] = [
  { title: "AWS Solutions Architect" },
  { title: "Google Cloud Dev" },
  { title: "Three.js Specialist" },
  { title: "TensorFlow for JS" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Vertigo Games',
    role: 'Senior Frontend',
    period: '21-Present',
    active: true,
  },
  {
    company: 'O2Oz',
    role: 'Frontend Dev',
    period: '18-21',
    active: false,
  }
];

export const VERTIGO_PROJECTS: ImpactProject[] = [
  {
    id: 'v1',
    title: 'VR Interaction Engine',
    category: 'ARCHITECTURAL PROBLEM',
    impact: '-40% Latency',
    problem: 'Critical de-sync between 50+ concurrent users during physics-based object manipulation in WebGL environments.',
    solution: 'Engineered a custom interpolation layer using SharedArrayBuffer and Worker threads to offload heavy prediction calculations from the main loop.',
    tags: ['THREE.JS', 'WEBGL', 'WEBWORKERS'],
    iconType: 'network',
  },
  {
    id: 'v2',
    title: 'Multiplayer Lobby System',
    category: 'ARCHITECTURAL PROBLEM',
    impact: '99.9% Uptime',
    problem: 'Socket connection exhaustion during peak traffic events (10k+ concurrent lobbies).',
    solution: 'Redesigned state management with a Redis-backed sticky session layer and horizontal WebSocket scaling via HAProxy.',
    tags: ['NODE.JS', 'SOCKET.IO', 'REDIS'],
    iconType: 'users',
  },
  {
    id: 'v3',
    title: 'Performance Profiler',
    category: 'ARCHITECTURAL PROBLEM',
    impact: '-25% Memory',
    problem: 'Inconsistent frame times on mid-range hardware due to garbage collection spikes.',
    solution: 'Built an internal observability dashboard that visualizes heap snapshots and event-loop lag in real-time using WASM-optimized parsers.',
    tags: ['TYPESCRIPT', 'RUST/WASM', 'D3.JS'],
    iconType: 'chart',
  },
  {
    id: 'v4',
    title: 'Asset Pipeline Automation',
    category: 'ARCHITECTURAL PROBLEM',
    impact: '3x Delivery',
    problem: 'Manual optimization of 3D assets taking 30% of sprint time for technical artists.',
    solution: 'Implemented a CI/CD pipeline using Blender\'s Python API to automatically compress and convert FBX assets to Draco-optimized GLTFs.',
    tags: ['PYTHON', 'GITHUB ACTIONS', 'GLTF'],
    iconType: 'settings',
  },
];

export const O2OZ_PROJECTS: ImpactProject[] = [
  {
    id: 'o1',
    title: 'Smart Routing Dashboard',
    category: 'REAL-TIME OPTIMIZATION SYSTEM',
    impact: '-14% Fuel Cost',
    problem: '',
    solution: '',
    tags: [],
    iconType: 'route',
  },
  {
    id: 'o2',
    title: 'Virtual High-Density Grid',
    category: 'INVENTORY MANAGEMENT INTERFACE',
    impact: '50k+ Live Records',
    problem: '',
    solution: '',
    tags: [],
    iconType: 'grid',
  },
  {
    id: 'o3',
    title: 'Warehouse Edge PWA',
    category: 'OFFLINE-FIRST SCANNING TOOL',
    impact: '-30% Op Risk',
    problem: '',
    solution: '',
    tags: [],
    iconType: 'scanner',
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: 'API Gateway Console',
    description: 'Config UI for microservices traffic management.'
  },
  {
    title: 'Predictive Analytics Suite',
    description: 'ML integration for inventory forecasting dashboards.'
  },
  {
    title: 'Enterprise Client Portal',
    description: 'SSO-enabled self-service billing system.'
  }
];

export const getIcon = (type: string, className?: string) => {
  switch (type) {
    case 'network': return <Network className={className} />;
    case 'users': return <Users className={className} />;
    case 'chart': return <BarChart3 className={className} />;
    case 'settings': return <RotateCw className={className} />;
    case 'route': return <Map className={className} />;
    case 'grid': return <Grid3X3 className={className} />;
    case 'scanner': return <QrCode className={className} />;
    default: return <Network className={className} />;
  }
};
