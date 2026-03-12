import type { ExperienceEntry, SkillCategory, EducationEntry, Achievement, ContactInfo } from '../types';

export const experiences: ExperienceEntry[] = [
  {
    id: 'msft',
    title: 'Senior Content Program Manager',
    company: 'Microsoft',
    dateRange: { start: '2022', end: 'Present' },
    location: 'Global Remote',
    mandate: 'Lead content strategy for Copilot and AI readiness across enterprise platforms',
    description: 'Driving AI-ready content governance and knowledge architecture for enterprise customers.',
    achievements: [
      'Increased Copilot readiness from 67% to 94% through comprehensive content governance',
      'Managed stakeholder alignment across 70+ cross-functional teams globally',
      'Architected knowledge systems serving 100M+ users',
      'Led content migration and AI integration initiatives',
      'Established content governance frameworks for enterprise adoption'
    ],
    metrics: [
      { label: 'Users Reached', value: '100M+' },
      { label: 'AI Readiness Improvement', value: '67% → 94%' },
      { label: 'Stakeholders Aligned', value: '70+' }
    ]
  },
  {
    id: 'ea',
    title: 'Content Strategist (Contract)',
    company: 'Electronic Arts',
    dateRange: { start: '2020', end: '2022' },
    location: 'Remote',
    mandate: 'Transform knowledge architecture and service operations for gaming division',
    description: 'Redesigned content strategy and knowledge systems for EA\'s global support operations.',
    achievements: [
      'Redesigned knowledge architecture supporting 50M+ players',
      'Reduced support costs through self-service optimization',
      'Established content governance across multiple studios',
      'Implemented analytics-driven knowledge management',
      'Coordinated global content teams across time zones'
    ]
  },
  {
    id: 'vmware',
    title: 'Digital Support Coordinator - Content & Self-Service',
    company: 'VMware',
    dateRange: { start: '2018', end: '2020' },
    location: 'Palo Alto, CA (Hybrid)',
    mandate: 'Build self-service content platforms for enterprise IT operations',
    description: 'Coordinated digital support strategy and content organization.',
    achievements: [
      'Built self-service portal architecture',
      'Organized technical documentation at scale',
      'Reduced support ticket volume by 35%',
      'Implemented content lifecycle management',
      'Trained global support teams on knowledge management'
    ]
  },
  {
    id: 'blizzard',
    title: 'Knowledge Operations Manager',
    company: 'Blizzard Entertainment',
    dateRange: { start: '2016', end: '2018' },
    location: 'Irvine, CA',
    mandate: 'Manage knowledge systems for customer support operations',
    description: 'Oversaw knowledge base operations and content organization.',
    achievements: [
      'Implemented KCS (Knowledge Centered Service) methodology',
      'Built knowledge management team from ground up',
      'Increased article effectiveness metrics by 42%',
      'Established quality assurance processes',
      'Created training programs for content creators'
    ]
  },
  {
    id: 'eu-parliament',
    title: 'Chief of Staff / Office Manager',
    company: 'EU Parliament',
    dateRange: { start: '2014', end: '2016' },
    location: 'Brussels, Belgium',
    mandate: 'Manage operations and information systems for elected officials',
    description: 'Coordinated office operations and information management.',
    achievements: [
      'Managed operations for parliamentary departments',
      'Implemented document management systems',
      'Coordinated multilingual content strategy',
      'Led organizational efficiency projects',
      'Supported legislative research and documentation'
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    id: 'content-strategy',
    label: 'Content Strategy',
    title: {
      professional: 'Content Strategy & Architecture',
      nerdy: 'Knowledge Architects Guild'
    },
    description: 'Strategic content planning, governance frameworks, and information architecture design',
    tools: ['Content Strategy', 'IA Design', 'Knowledge Architecture', 'Content Governance', 'User Research'],
    icon: 'BookOpen',
    size: 'large'
  },
  {
    id: 'ai-readiness',
    label: 'AI & LLM Readiness',
    title: {
      professional: 'AI Integration & LLM Optimization',
      nerdy: 'Magical Systems Mastery'
    },
    description: 'Preparing knowledge systems for AI tools and LLM applications',
    tools: ['LLM Optimization', 'Copilot Strategy', 'Data Structuring', 'Semantic Search', 'AI Readiness Assessment'],
    icon: 'Zap',
    size: 'large'
  },
  {
    id: 'program-leadership',
    label: 'Program Leadership',
    title: {
      professional: 'Leadership & Stakeholder Management',
      nerdy: 'Quest Master'
    },
    description: 'Leading cross-functional teams and aligning global stakeholders',
    tools: ['Team Leadership', 'Stakeholder Management', 'Program Management', 'Change Management', 'Remote Coordination'],
    icon: 'Users',
    size: 'wide'
  },
  {
    id: 'service-operations',
    label: 'Service Operations',
    title: {
      professional: 'Service Operations & Process Design',
      nerdy: 'Operations Engineering'
    },
    description: 'Designing and optimizing customer support and service delivery',
    tools: ['ITIL', 'KCS', 'Process Design', 'Metrics & Analytics', 'Service Design'],
    icon: 'Gear',
    size: 'wide'
  },
  {
    id: 'analytics',
    label: 'Analytics & Measurement',
    title: {
      professional: 'Data Analytics & Measurement',
      nerdy: 'Data Sorcery'
    },
    description: 'Tracking and measuring content effectiveness and business impact',
    tools: ['Analytics', 'Metrics Design', 'Reporting', 'Data Visualization', 'Business Intelligence'],
    icon: 'BarChart3',
    size: 'regular'
  },
  {
    id: 'languages',
    label: 'Languages',
    title: {
      professional: 'Multilingual Capabilities',
      nerdy: 'Ancient Tongues'
    },
    description: 'Fluent in English and Polish, enabling global communication',
    tools: ['English', 'Polish', 'Cross-Cultural Communication', 'Localization'],
    icon: 'Globe',
    size: 'regular'
  }
];

export const education: EducationEntry[] = [
  {
    id: 'masters',
    type: 'degree',
    name: 'Master\'s Degree in Information Science',
    institution: 'University of Pittsburgh',
    dateRange: { start: '2012', end: '2014' },
    highlights: [
      'Specialized in Knowledge Management and Information Architecture',
      'Thesis: "Designing Knowledge Ecosystems for Global Organizations"',
      'GPA: 3.8/4.0'
    ]
  },
  {
    id: 'kcs',
    type: 'certification',
    name: 'KCS Practitioner Level 3',
    institution: 'Knowledge Centered Service',
    dateRange: { start: '2017', end: '2024' },
    credentialId: 'KCS-L3-2024',
    highlights: [
      'Knowledge Centered Service Methodology',
      'Process Design and Implementation',
      'Continuous Improvement Framework'
    ]
  },
  {
    id: 'cxm',
    type: 'certification',
    name: 'Customer Experience Management (CXM)',
    institution: 'ServiceNow University',
    dateRange: { start: '2021', end: '2024' },
    credentialId: 'SNW-CXM-2024',
    highlights: [
      'Customer Journey Mapping',
      'Experience Design',
      'Analytics and Optimization'
    ]
  },
  {
    id: 'itil4',
    type: 'certification',
    name: 'ITIL 4 Foundation',
    institution: 'AXELOS',
    dateRange: { start: '2020', end: '2024' },
    credentialId: 'ITIL-2020-001',
    highlights: [
      'IT Service Management',
      'Process Framework',
      'Best Practices'
    ]
  },
  {
    id: 'svc-design',
    type: 'certification',
    name: 'Service Design Professional',
    institution: 'Service Design Network',
    dateRange: { start: '2019', end: '2024' },
    credentialId: 'SDN-SDP-2019',
    highlights: [
      'Service Design Methodology',
      'Customer-Centric Approaches',
      'Implementation Frameworks'
    ]
  },
  {
    id: 'content-strat',
    type: 'certification',
    name: 'Content Strategy Specialist',
    institution: 'Content Marketing Institute',
    dateRange: { start: '2018', end: '2024' },
    credentialId: 'CMI-CS-2018',
    highlights: [
      'Strategic Content Planning',
      'Audience Research',
      'Analytics and Measurement'
    ]
  },
  {
    id: 'analytics',
    type: 'certification',
    name: 'Advanced Analytics Certification',
    institution: 'Google Analytics Academy',
    dateRange: { start: '2017', end: '2024' },
    credentialId: 'GAA-ADVANCED-2017',
    highlights: [
      'Web Analytics',
      'Data Analysis',
      'Reporting and Insights'
    ]
  },
  {
    id: 'project-mgmt',
    type: 'certification',
    name: 'Project Management Professional (PMP)',
    institution: 'Project Management Institute',
    dateRange: { start: '2018', end: '2024' },
    credentialId: 'PMI-PMP-2018',
    highlights: [
      'Project Leadership',
      'Stakeholder Management',
      'Risk and Quality Management'
    ]
  },
  {
    id: 'ux-content',
    type: 'certification',
    name: 'UX Content Strategy',
    institution: 'Nielsen Norman Group',
    dateRange: { start: '2020', end: '2024' },
    credentialId: 'NNG-UXC-2020',
    highlights: [
      'User Experience Writing',
      'Information Architecture',
      'Content for Digital Products'
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: 'copilot-readiness',
    metric: '67% → 94%',
    title: {
      professional: 'AI Readiness Transformation',
      nerdy: 'Magical System Ascension'
    },
    description: [
      'Led enterprise-wide initiative to prepare knowledge systems for Copilot and AI tools',
      'Implemented comprehensive content governance and structuring framework',
      'Achieved 94% Copilot readiness across Microsoft 365 documentation',
      'Served 100M+ users with AI-optimized content'
    ],
    impact: 'Enabled enterprise customers to fully leverage AI capabilities, increasing productivity and reducing support costs',
    category: 'milestones'
  },
  {
    id: 'user-scale',
    metric: '100M+',
    title: {
      professional: 'Enterprise-Scale Impact',
      nerdy: 'Realm-Wide Influence'
    },
    description: [
      'Knowledge systems and content architecture reached 100M+ users',
      'Designed scalable information architecture for global organizations',
      'Managed content governance across multiple enterprise divisions',
      'Supported diverse user populations across multiple languages and regions'
    ],
    impact: 'Established systems that empower enterprise users worldwide with accessible, searchable knowledge',
    category: 'milestones'
  },
  {
    id: 'stakeholder-alignment',
    metric: '70+',
    title: {
      professional: 'Multi-Team Stakeholder Alignment',
      nerdy: 'Kingdom Unification'
    },
    description: [
      'Led coordination across 70+ cross-functional stakeholders globally',
      'Managed complex multi-timezone collaboration across product teams, operations, and leadership',
      'Established governance and decision-making frameworks for diverse teams',
      'Achieved consensus on enterprise content strategy and architecture'
    ],
    impact: 'Unified disparate teams around a shared vision, enabling efficient execution of large-scale initiatives',
    category: 'awards'
  },
  {
    id: 'cost-reduction',
    metric: '35%',
    title: {
      professional: 'Support Cost Reduction',
      nerdy: 'Treasury Optimization'
    },
    description: [
      'Implemented self-service knowledge platforms reducing support ticket volume',
      'Redesigned content findability and user experience',
      'Optimized customer support operations through automation',
      'Achieved measurable reduction in operational costs'
    ],
    impact: 'Transformed operations to deliver better customer outcomes at lower cost',
    category: 'technical'
  },
  {
    id: 'kcs-implementation',
    metric: '42%',
    title: {
      professional: 'Knowledge Process Effectiveness',
      nerdy: 'Wisdom System Enhancement'
    },
    description: [
      'Implemented Knowledge Centered Service (KCS) methodology',
      'Increased article effectiveness metrics by 42%',
      'Built knowledge management processes from ground up',
      'Created training programs and governance frameworks'
    ],
    impact: 'Established sustainable knowledge management practices enabling continuous improvement',
    category: 'technical'
  },
  {
    id: 'team-building',
    metric: '5+',
    title: {
      professional: 'Team Building & Development',
      nerdy: 'Fellowship Formation'
    },
    description: [
      'Built and led knowledge management teams across multiple organizations',
      'Trained content creators and knowledge specialists globally',
      'Established best practices and quality standards',
      'Mentored junior professionals in content strategy and operations'
    ],
    impact: 'Created sustainable team capabilities enabling organizations to maintain and grow knowledge systems',
    category: 'community'
  }
];

export const contactInfo: ContactInfo = {
  email: 'marcela.gleixner@outlook.com',
  phone: '+49 (0) 123 456 7890',
  location: 'Global Remote',
  linkedin: 'https://linkedin.com/in/marcela-gleixner-programmanager',
  github: undefined,
  twitter: undefined,
  blog: 'https://knowledgemanagement.ie'
};
