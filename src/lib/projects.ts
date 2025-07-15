
type Project = {
  name: string;
  description: string;
  urls: {[key in urlTypes]?: string;};
  tags: string[];
  img: string;
  live?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Rate limiter middleware for ExpressJS (NPM PACKAGE)',
    description: 'Middleware for Express that limits requests per IP over a recent time window using Redis.',
    tags: ['Typescript', 'NPM', 'Redis', 'ExpressJS'],
    img: '/assets/projects/npm.png',
    urls: {
      "Github": 'https://github.com/dev-Miguel-Mendez/redis-rate-limiter-express',
      "Youtube": 'https://www.youtube.com/watch?v=RLs76oVvA0A',
      "NPM package": 'https://www.npmjs.com/package/redis-rate-limiter-express'
    }
  },
  {
		name: 'JWT Authentication and Cookies',
    description: 'A minimalistic app that uses JWT authentication and cookies to store user information and session.',
		tags: ['Python', 'Flask', 'PostgreSQL'],
		img: '/assets/projects/cookies-python.png',
    urls: {
      "Read Docs": 'https://documenter.getpostman.com/view/40182356/2sB2xBEqrP',
      "Github": 'https://github.com/PAIKY-ORGANIZATION/Json-Web-Tokens-Python',
      "Youtube": '',
      
    },
    live: true
	},
  {
    name: 'Massive Chat Application',
    description: 'A massive, anonymous chat application using socket.io for communication and Redis for job queues.',
    tags: ['NextJS', 'Socket.io', 'Redis', 'PostgreSQL' ],
    img: '/assets/projects/cha-app-GIIF.gif',
    urls: {
      "Read Docs": '',
      "Github": 'https://github.com/dev-Miguel-Mendez/omegalol-chat-application',
      "Youtube": 'https://www.youtube.com/watch?v=1tHXYV41Kls&t=3s',
    },
  },
  {
    name: 'SDK Library for a backend as service (Inspired on Firebase)',
    description: 'SDK (software development kit) library that can be use to interact with a backend through simple method calls.',
    tags: ['NPM', 'Typescript', "SDK"],
    img: '/assets/projects/sdk.png',
    urls: {
      "Read Docs": 'https://crocus-ceres-509.notion.site/SDK-library-NPM-for-Backend-As-Service-BAAS-Documentation-2243826aa7ed80228d4dc093efd0cefd',
      "Github": 'https://github.com/dev-Miguel-Mendez/User-Manager-SDK',
      "NPM package": 'https://www.npmjs.com/package/user-manager-sdk',
      "Youtube": 'https://www.youtube.com/watch?v=PUpnQ1NVllA&t=470s'
    },
    live: true
  },
  {
    name: 'Accepting ETH Payments and Subscriptions',
    description: 'A lightweight app that allows users to subscribe to a service and pay for it using ETH.',
    tags: ['EthersJS', 'RainbowKit', 'React', 'Typescript'],
    img: '/assets/projects/metamask.GIIFF.gif',
    urls: {
      "Read Docs": '',
      "Github": 'https://github.com/dev-Miguel-Mendez/paymets-crypto-AI',
      "Youtube": '',
      "Try Out": '',
    }
  },
  {
    name: 'AWS S3 File Upload API',
    description: 'An API that handles file uploads, retrieval, listing, and deletion using AWS S3 and multer. Built with modular service functions and clean controller separation.',
    tags: [ 'AWS S3', 'ExpressJS', 'Typescript', 'Multer'],
    img: '/assets/projects/s3.jpeg',
    urls: {
      "Read Docs": 'https://documenter.getpostman.com/view/40182356/2sB34foMGE',
      "Github": 'https://github.com/PAIKY-ORGANIZATION/AWS_S3_Public',
    },
    live: true
  },
	{
		name: 'Redis cache for performance',
    description: 'An app that uses JWT authentication and cookies to store user information.',
		tags: ['Redis', 'NodeJS', 'Typescript'],
		img: '/assets/projects/redis.png',
    urls: {
      "Read Docs": 'https://documenter.getpostman.com/view/40182356/2sB2x9jqfd',
      "Github": 'https://github.com/PAIKY-ORGANIZATION/Redis-Cache-API',
      "Youtube": '',
    },
    live: true
	},
  {
    name: 'AWS S3 File Upload and Viewer',
    description: 'An app that allows users to upload images with captions to S3 using presigned URLs and view or delete them privately using client-specific metadata.',
    tags: ['AWS S3', 'NextJS', 'Typescript'],
    img: '/assets/projects/s3-frontend-GIIF.gif',
    urls:{
      "Try Out": 'https://miguel-apps.click/aws-s3-app/upload',
      "Read Docs": 'https://documenter.getpostman.com/view/40182356/2sB34foMGE',
      "Github": 'https://github.com/PAIKY-ORGANIZATION/AWS_S3_Public',
    },
    live: true
  },
  {
    name: 'Web Scraper for Ecommerce Website',
    description: 'This is a web scraper that scrapes data from a website and uses an external AI to generate reports.',
    tags: ['TypeScript', 'Playwright', 'PostgreSQL'],
    img: '/assets/projects/scraper.png',
    urls: {
      "Read Docs": '',
      "Github": 'https://github.com/dev-Miguel-Mendez/Comet-Scraper-Bot',
      "Youtube": 'https://www.youtube.com/watch?v=2Eqwh2XNKj0&t=456s',
    }
  },
];
