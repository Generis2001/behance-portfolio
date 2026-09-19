export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'web3' | 'ai' | 'contracts' | 'fullstack' | 'games';
  categoryLabel: string;
  language: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  views: number;
  appreciations: number;
  stars: number;
  updatedAt: string;
  details: {
    architecture: string;
    features: string[];
    techStack: string[];
    codeSnippet?: string;
    stats: { label: string; value: string }[];
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'cortex',
    title: 'Cortex Document Intelligence',
    subtitle: 'ASP Service Provider for OKX X Layer',
    description: 'A Document Intelligence Agent Service Provider (ASP) transforming unstructured text and PDF documents into structured intelligence for autonomous AI agents, smart contracts, and onchain workflows on X Layer (OKX blockchain).',
    category: 'ai',
    categoryLabel: 'AI & Web3 Agent',
    language: 'TypeScript',
    tags: ['X Layer', 'Document AI', 'Agentic Workflow', 'TypeScript', 'OKX Chain'],
    githubUrl: 'https://github.com/Generis2001/cortex',
    liveUrl: 'https://cortex-beta-eight.vercel.app',
    image: '/images/cortex.jpg',
    featured: true,
    views: 4820,
    appreciations: 642,
    stars: 12,
    updatedAt: '2026-07-10',
    details: {
      architecture: 'Client-facing dApp connecting to Python document extraction microservice on X Layer EVM with vector embeddings and smart contract oracle routing.',
      features: [
        'Automated document ingestion and vector parsing',
        'Direct smart contract integration for X Layer',
        'Autonomous agent payload verification',
        'High-speed structured JSON payload extraction'
      ],
      techStack: ['TypeScript', 'Next.js', 'Ethers.js', 'X Layer EVM', 'TailwindCSS'],
      codeSnippet: `// Cortex Oracle Payload Ingestion
export async function parseDocumentToOnchainEvent(docId: string) {
  const intel = await CortexSDK.extractIntelligence(docId);
  const tx = await CortexOracleContract.commitDocumentState(docId, intel.hash);
  return tx.wait();
}`,
      stats: [
        { label: 'Network', value: 'OKX X Layer' },
        { label: 'Latency', value: '< 1.2s' },
        { label: 'Type', value: 'Agentic dApp' }
      ]
    }
  },
  {
    id: 'genlayer-spinna',
    title: 'GenLayer Spinna',
    subtitle: 'Signature Pinwheel Gradient Loader',
    description: 'An original GenLayer loading spinner component built from the official GenLayer mark. Features a continuous pink → purple → blue gradient flowing seamlessly through precision blades around a luminous center gem.',
    category: 'web3',
    categoryLabel: 'GenLayer & UI Tool',
    language: 'HTML & CSS',
    tags: ['GenLayer', 'CSS Animation', 'SVG Graphics', 'UI Component', 'Vite'],
    githubUrl: 'https://github.com/Generis2001/genlayer-spinna',
    liveUrl: 'https://genlayer-spinna.vercel.app/',
    image: '/images/spinna.jpg',
    featured: true,
    views: 6150,
    appreciations: 890,
    stars: 18,
    updatedAt: '2026-08-19',
    details: {
      architecture: 'Zero-dependency GPU-accelerated CSS keyframe animation engine with vector SVG blade paths tailored for ultra-crisp render across all viewport sizes.',
      features: [
        'Continuous pink → purple → cyan gradient flow',
        'Light, dark, and micro-size UI responsive states',
        '60 FPS smooth hardware accelerated spin loops',
        'Reusable React, Vue, and Vanilla JS drop-in module'
      ],
      techStack: ['HTML5', 'CSS3 Keyframes', 'SVG Design', 'TypeScript'],
      codeSnippet: `@keyframes genlayerSpinGradient {
  0% { filter: hue-rotate(0deg) drop-shadow(0 0 12px #ff2a85); }
  50% { filter: hue-rotate(180deg) drop-shadow(0 0 18px #00f0ff); }
  100% { filter: hue-rotate(360deg) drop-shadow(0 0 12px #ff2a85); }
}`,
      stats: [
        { label: 'FPS', value: '60 FPS' },
        { label: 'Dependencies', value: '0 (Pure SVG/CSS)' },
        { label: 'Bundle', value: '< 2 KB' }
      ]
    }
  },
  {
    id: 'chromium-app',
    title: 'Chromium Weather Oracle',
    subtitle: 'AI Weather Intelligence on GenLayer Blockchain',
    description: 'AI-driven weather oracle on GenLayer StudioNet. Every atmospheric evaluation is an onchain AI computation backed by GenLayer Intelligent Contracts consensus. Verifiable, decentralized, and autonomous.',
    category: 'ai',
    categoryLabel: 'AI Oracle & GenLayer',
    language: 'TypeScript',
    tags: ['GenLayer StudioNet', 'AI Weather Oracle', 'Intelligent Contracts', 'React'],
    githubUrl: 'https://github.com/Generis2001/chromium-app',
    liveUrl: 'https://chromium-seven.vercel.app',
    image: '/images/chromium.jpg',
    featured: true,
    views: 3940,
    appreciations: 512,
    stars: 15,
    updatedAt: '2026-07-07',
    details: {
      architecture: 'GenLayer Python Intelligent Contracts interfacing with global meteorological APIs, performing consensus voting across validators before writing weather state onchain.',
      features: [
        'Verifiable consensus AI weather oracle logic',
        'Real-time atmospheric radar visualization UI',
        'Automated insurance trigger smart contract hooks',
        'Multi-node temperature & precipitation verification'
      ],
      techStack: ['TypeScript', 'GenLayer JS SDK', 'React', 'Vite', 'TailwindCSS'],
      codeSnippet: `// GenLayer Intelligent Contract Call
const weatherState = await client.readContract({
  address: CHROMIUM_ORACLE_ADDR,
  functionName: 'getConsensusWeather',
  args: ['San Francisco', '2026-09-19']
});`,
      stats: [
        { label: 'Consensus', value: 'GenLayer Optimistic' },
        { label: 'Data Source', value: 'Multi-API AI Aggregator' },
        { label: 'Status', value: 'Live Testnet' }
      ]
    }
  },
  {
    id: 'foster',
    title: 'Foster Grant Platform',
    subtitle: 'Decentralized Funding on GenLayer StudioNet',
    description: 'A decentralized ecosystem grant funding platform built on GenLayer StudioNet. Enables builders to propose AI dApps and receive milestone payouts verified by AI Intelligent Contracts.',
    category: 'web3',
    categoryLabel: 'Web3 dApp',
    language: 'TypeScript',
    tags: ['GenLayer', 'Grants Platform', 'DeFi & Funding', 'TypeScript', 'React'],
    githubUrl: 'https://github.com/Generis2001/foster',
    liveUrl: 'https://foster-xi.vercel.app/',
    image: '/images/foster.jpg',
    featured: true,
    views: 3200,
    appreciations: 430,
    stars: 9,
    updatedAt: '2026-07-10',
    details: {
      architecture: 'Fullstack dApp with Web3 wallet connection, GenLayer StudioNet contract bindings, project proposal submission system, and community voting interface.',
      features: [
        'Milestone-based automated fund release',
        'AI evaluation of grant delivery proofs',
        'Interactive project discovery timeline',
        'Metamask & GenLayer wallet integration'
      ],
      techStack: ['React', 'TypeScript', 'GenLayer SDK', 'Lucide React', 'CSS3'],
      codeSnippet: `export async function submitGrantProposal(proposal: ProposalData) {
  const hash = await fosterContract.createGrantProposal({
    title: proposal.title,
    requestedAmount: proposal.amount,
    milestoneCount: proposal.milestones.length
  });
  return hash;
}`,
      stats: [
        { label: 'Platform', value: 'GenLayer StudioNet' },
        { label: 'Type', value: 'Decentralized Funding' },
        { label: 'Verification', value: 'AI Validator Consensus' }
      ]
    }
  },
  {
    id: 'cohora',
    title: 'Cohora Workspace',
    subtitle: 'Collaborative AI Workspace Engine',
    description: 'Modern workspace platform for high-velocity software teams, integrating AI code reviews, real-time collaboration, and task scheduling.',
    category: 'fullstack',
    categoryLabel: 'Fullstack App',
    language: 'TypeScript',
    tags: ['TypeScript', 'Next.js', 'Real-time', 'TailwindCSS', 'Fullstack'],
    githubUrl: 'https://github.com/Generis2001/cohora',
    liveUrl: 'https://cohora-com.vercel.app',
    image: '/images/cortex.jpg',
    featured: false,
    views: 2900,
    appreciations: 380,
    stars: 14,
    updatedAt: '2026-09-19',
    details: {
      architecture: 'Next.js 14 App Router codebase with real-time state synchronization, modular layout components, and Vercel edge runtime deployment.',
      features: [
        'Real-time collaborative document editor',
        'AI prompt assistant integration',
        'Custom workspace organization panels',
        'Fast page transitions & responsive design'
      ],
      techStack: ['TypeScript', 'Next.js 14', 'React', 'TailwindCSS'],
      stats: [
        { label: 'Framework', value: 'Next.js App Router' },
        { label: 'Speed', value: '100 Lighthouse' }
      ]
    }
  },
  {
    id: 'predictiq',
    title: 'PredictIQ Platform & Contracts',
    subtitle: 'AI Prediction Market Protocols',
    description: 'Decentralized prediction market protocol powered by Python smart contracts and AI sentiment analysis. Includes both contract repository and frontend app.',
    category: 'contracts',
    categoryLabel: 'Smart Contracts & AI',
    language: 'Python & TypeScript',
    tags: ['Python', 'Smart Contracts', 'Prediction Market', 'Web3', 'TypeScript'],
    githubUrl: 'https://github.com/Generis2001/predictiq-contracts',
    liveUrl: 'https://predictiq-tau.vercel.app',
    image: '/images/chromium.jpg',
    featured: false,
    views: 2600,
    appreciations: 310,
    stars: 11,
    updatedAt: '2026-08-20',
    details: {
      architecture: 'Python smart contract suite for market creation, liquidity pool management, and automated resolution via AI oracle feeds.',
      features: [
        'Automated liquidity market maker (AMM) contracts',
        'AI-driven event outcome resolution',
        'User staking and yield reward calculation',
        'Clean React dashboard dApp UI'
      ],
      techStack: ['Python', 'TypeScript', 'Ethers.js', 'React'],
      codeSnippet: `@public
def resolve_market(market_id: String[64], outcome: uint256):
    assert msg.sender == self.oracle_address
    self.markets[market_id].resolved = True
    self.markets[market_id].winning_outcome = outcome`,
      stats: [
        { label: 'Contracts', value: 'Python Smart Contracts' },
        { label: 'Frontend', value: 'React / Vercel' }
      ]
    }
  },
  {
    id: 'reapoor',
    title: 'Reapoor Platform',
    subtitle: 'Web3 Protocol Intelligence Dashboard',
    description: 'Comprehensive protocol analytics and intelligence dashboard tracking token metrics, liquidity flows, and contract events.',
    category: 'fullstack',
    categoryLabel: 'Web3 Analytics',
    language: 'TypeScript',
    tags: ['TypeScript', 'Vercel', 'Web3 Analytics', 'Charts', 'React'],
    githubUrl: 'https://github.com/Generis2001/reapoor',
    liveUrl: 'https://reapoor.vercel.app',
    image: '/images/foster.jpg',
    featured: false,
    views: 2100,
    appreciations: 275,
    stars: 7,
    updatedAt: '2026-07-22',
    details: {
      architecture: 'Single page application fetching live RPC metrics and displaying real-time data visualizers.',
      features: [
        'Token flow & volume graphs',
        'Automated RPC node health check',
        'Customizable analytics layout'
      ],
      techStack: ['TypeScript', 'React', 'Recharts', 'Vite'],
      stats: [
        { label: 'Category', value: 'Analytics' }
      ]
    }
  },
  {
    id: 'sung-jin-woo-puzzle',
    title: 'Shadow Monarch Match',
    subtitle: 'Solo Leveling Inspired Puzzle Game',
    description: 'An interactive browser puzzle game inspired by Sung Jin-Woo from Solo Leveling. Features anime visual effects, particle combos, sound effects, and level progression.',
    category: 'games',
    categoryLabel: 'Web Game',
    language: 'TypeScript',
    tags: ['Game Dev', 'TypeScript', 'Canvas', 'CSS FX', 'Vite'],
    githubUrl: 'https://github.com/Generis2001/sung-jin-woo-puzzle',
    liveUrl: 'https://shadow-monarch-match.vercel.app',
    image: '/images/spinna.jpg',
    featured: false,
    views: 4500,
    appreciations: 720,
    stars: 22,
    updatedAt: '2026-06-13',
    details: {
      architecture: 'HTML5 Canvas and React state game engine managing grid swaps, combo multipliers, particle effects, and high scores.',
      features: [
        'Shadow army particle unleash animations',
        'Multi-stage level scaling & score leaderboard',
        'Responsive touch and mouse controls',
        'Custom sound & visual feedback'
      ],
      techStack: ['TypeScript', 'HTML5 Canvas', 'React', 'Web Audio API'],
      stats: [
        { label: 'Genre', value: 'Match-3 Puzzle' },
        { label: 'Theme', value: 'Solo Leveling Anime' }
      ]
    }
  },
  {
    id: 'cortexpro',
    title: 'Cortex Pro Suite',
    subtitle: 'Enterprise AI Agent Management Console',
    description: 'Professional enterprise dashboard extension for the Cortex Document Intelligence system with custom agent role provisioning and audit logs.',
    category: 'ai',
    categoryLabel: 'AI & Enterprise',
    language: 'TypeScript',
    tags: ['TypeScript', 'Enterprise AI', 'Dashboard', 'Vercel'],
    githubUrl: 'https://github.com/Generis2001/cortexpro',
    liveUrl: 'https://cortexpro.vercel.app',
    image: '/images/cortex.jpg',
    featured: false,
    views: 1800,
    appreciations: 240,
    stars: 6,
    updatedAt: '2026-07-14',
    details: {
      architecture: 'React + TypeScript dashboard interface with authentication hooks and agent execution monitoring.',
      features: ['Agent API key provisioning', 'Usage rate limit meters', 'Audit log viewer'],
      techStack: ['TypeScript', 'React', 'Lucide Icons'],
      stats: [{ label: 'Type', value: 'Admin Console' }]
    }
  },
  {
    id: 'lightpay',
    title: 'LightPay Protocol',
    subtitle: 'Ultra-Fast Micropayments Engine',
    description: 'Lightweight crypto micropayment checkout widget and SDK supporting instant stablecoin transactions.',
    category: 'web3',
    categoryLabel: 'Web3 Payments',
    language: 'TypeScript',
    tags: ['Payments', 'Web3', 'TypeScript', 'SDK'],
    githubUrl: 'https://github.com/Generis2001/lightpay',
    image: '/images/foster.jpg',
    featured: false,
    views: 1550,
    appreciations: 195,
    stars: 8,
    updatedAt: '2026-08-08',
    details: {
      architecture: 'Embeddable TypeScript widget SDK interfacing with EVM payment gateways.',
      features: ['1-click payment widget', 'Instant QR code generation', 'EVM gas optimization'],
      techStack: ['TypeScript', 'Ethers', 'Vite'],
      stats: [{ label: 'Format', value: 'NPM SDK Module' }]
    }
  }
];

export const PROFILE_STATS = {
  name: 'Generis2001',
  handle: '@Generis2001',
  avatar: 'https://avatars.githubusercontent.com/u/150087899?v=4',
  role: 'Web3 & AI Architect | GenLayer Intelligent Contracts Developer',
  location: 'Global / Remote',
  bio: 'Building the future of autonomous Web3 dApps, AI Weather Oracles, and Document Intelligence Agents. Specialized in GenLayer StudioNet, OKX X Layer, and high-performance Web3 frontends.',
  followers: 1420,
  projectViews: 38900,
  appreciations: 5410,
  githubUrl: 'https://github.com/Generis2001',
  skills: [
    'GenLayer StudioNet',
    'Intelligent Contracts',
    'OKX X Layer',
    'TypeScript',
    'React & Vite',
    'Python Smart Contracts',
    'AI Agents',
    'SVG & CSS3 FX'
  ]
};
