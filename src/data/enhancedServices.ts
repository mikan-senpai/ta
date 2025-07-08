export interface ServiceCategory {
  name: string;
  items: string[];
}

export interface EnhancedService {
  id: number;
  title: string;
  description: string;
  icon: string;
  categories: ServiceCategory[];
  benefits?: string[];
}

export const enhancedServices: EnhancedService[] = [
  {
    id: 1,
    title: 'Complete Server & Infrastructure Solutions',
    description: 'Professional server management, hosting solutions, and data center services',
    icon: 'server',
    categories: [
      {
        name: 'Windows & Linux Servers',
        items: [
          'Complete server setup, configuration, and maintenance',
          'Performance optimization and security hardening',
          '24/7 monitoring and support',
          'Server migration and upgrade services',
          'Backup and disaster recovery solutions'
        ]
      },
      {
        name: 'Email & Hosting Solutions',
        items: [
          'Build your own email server with complete control',
          'Custom hosting server deployment and management',
          'SMTP server configuration and SMTP gateway setup',
          'All hosting server maintenance and web application support',
          'Domain management and DNS configuration'
        ]
      },
      {
        name: 'Data Center Solutions',
        items: [
          'Build your own data center infrastructure',
          'Hardware procurement and installation',
          'Network architecture and connectivity',
          'Disaster recovery and backup solutions',
          'Power and cooling system design'
        ]
      }
    ],
    benefits: [
      'Complete infrastructure control',
      'Enhanced security and compliance',
      'Reduced operational costs',
      'Scalable architecture',
      '99.9% uptime guarantee',
      'Expert 24/7 support'
    ]
  },
  {
    id: 2,
    title: 'Advanced Communication Solutions',
    description: 'Complete PBX systems, migration services, and modern telephony infrastructure',
    icon: 'phone',
    categories: [
      {
        name: 'IP-PBX Software',
        items: [
          'Advanced communication solutions with IP-based private branch exchange systems',
          'Modern business communication infrastructure',
          'VoIP integration and configuration',
          'Call routing and management systems',
          'Multi-site connectivity solutions'
        ]
      },
      {
        name: 'PBX Migration & Management',
        items: [
          'Physical PBX to cloud migration services',
          'Comprehensive PBX maintenance and support',
          'PBX security implementation and monitoring',
          'Scalable PBX solutions for growing businesses',
          'Legacy system integration and modernization'
        ]
      }
    ],
    benefits: [
      'Reduced communication costs',
      'Enhanced call quality',
      'Improved business productivity',
      'Seamless remote work support',
      'Advanced call analytics',
      'Easy scalability'
    ]
  },
  {
    id: 3,
    title: 'Secure & Scalable Cloud Infrastructure',
    description: 'Enterprise-grade cloud solutions with optimization and management',
    icon: 'cloud',
    categories: [
      {
        name: 'Cloud Infrastructure',
        items: [
          'Secure, scalable cloud infrastructure for business applications',
          'Multi-cloud deployment and management',
          'Cloud security implementation',
          'Performance optimization and cost management',
          'Cloud migration and consultation services'
        ]
      },
      {
        name: 'Cloud Services',
        items: [
          'Infrastructure as a Service (IaaS)',
          'Platform as a Service (PaaS)',
          'Backup and disaster recovery in the cloud',
          'Cloud monitoring and analytics',
          'Hybrid cloud solutions'
        ]
      }
    ],
    benefits: [
      'Pay-as-you-scale pricing',
      'Global accessibility',
      'Enhanced data security',
      'Automatic backups',
      'High availability',
      'Reduced IT overhead'
    ]
  },
  {
    id: 4,
    title: 'Custom Web Solutions',
    description: 'Modern, responsive websites with cutting-edge technologies',
    icon: 'code',
    categories: [
      {
        name: 'Web Development',
        items: [
          'Custom, responsive websites built with modern technologies',
          'E-commerce platform development',
          'Content management systems',
          'Web application development',
          'Mobile-responsive design'
        ]
      },
      {
        name: 'Web Design & AI Applications',
        items: [
          'Modern responsive web design with AI-enhanced features',
          'Intelligent chatbots and customer service automation',
          'AI-powered analytics and user behavior insights',
          'Complete automation solutions for web applications',
          'Progressive web applications (PWA)'
        ]
      }
    ],
    benefits: [
      'Enhanced user experience',
      'Mobile-first design',
      'SEO optimization',
      'Fast loading speeds',
      'AI-powered features',
      'Cross-browser compatibility'
    ]
  },
  {
    id: 5,
    title: 'Custom Software-as-a-Service Solutions',
    description: 'Scalable SaaS applications with subscription management and analytics',
    icon: 'layers',
    categories: [
      {
        name: 'SaaS Platform Development',
        items: [
          'Custom software-as-a-service solutions built to scale',
          'Subscription management and billing systems',
          'User analytics and reporting dashboards',
          'Multi-tenant architecture implementation',
          'API development and integration'
        ]
      },
      {
        name: 'SaaS Features',
        items: [
          'Cloud-based applications for global reach',
          'Streamlined business operations',
          'Customer management systems',
          'Real-time data synchronization',
          'Automated scaling and load balancing'
        ]
      }
    ],
    benefits: [
      'Recurring revenue model',
      'Global market reach',
      'Automatic updates',
      'Scalable architecture',
      'Built-in analytics',
      'Multi-tenant security'
    ]
  },
  {
    id: 6,
    title: 'Intelligent Business Automation',
    description: 'Smart systems that enhance processes with automation and data insights',
    icon: 'brain',
    categories: [
      {
        name: 'AI Solutions',
        items: [
          'Intelligent systems that enhance business processes',
          'Smart automation and data insights',
          'Machine learning implementation',
          'Predictive analytics and forecasting',
          'Natural language processing solutions'
        ]
      },
      {
        name: 'AI Applications',
        items: [
          'Workflow optimization and decision-making tools',
          'Automated customer service systems',
          'Data mining and pattern recognition',
          'Intelligent document processing',
          'AI-powered business intelligence'
        ]
      }
    ],
    benefits: [
      'Increased operational efficiency',
      'Data-driven decision making',
      'Reduced manual errors',
      'Predictive insights',
      'Automated workflows',
      'Competitive advantage'
    ]
  },
  {
    id: 7,
    title: 'Complete Digital Evolution',
    description: 'Comprehensive strategies for modern business transformation',
    icon: 'shuffle',
    categories: [
      {
        name: 'Digital Strategy',
        items: [
          'Comprehensive strategies to evolve your business in the digital age',
          'Modern tech stack implementation',
          'Business process digitization',
          'Digital workflow optimization',
          'Technology consultation and planning'
        ]
      },
      {
        name: 'Transformation Services',
        items: [
          'Legacy system modernization',
          'Digital infrastructure assessment',
          'Change management and training',
          'Digital security implementation',
          'Performance monitoring and optimization'
        ]
      }
    ],
    benefits: [
      'Modernized business processes',
      'Improved operational efficiency',
      'Enhanced customer experience',
      'Future-ready technology stack',
      'Competitive market position',
      'ROI optimization'
    ]
  }
];