
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
    name: 'Implementing Oauth v2 without external libraries and  beyond',
    description: 'Oauth v2 without libraries + integration with Database, JWT tokens, and manual encryption of access tokens.',
    tags: ['TypeScript', 'Playwright', 'PostgreSQL'],
    img: '/assets/projects/oauth.png',
    urls: {
      "Youtube": 'https://www.youtube.com/watch?v=Qi02P98V8LE&t=929s',
      "Read Docs": 'https://www.notion.so/Managing-Oauth-without-third-party-libraries-Github-and-Google-2333826aa7ed80b7a562e495ab6b82c3',
      "Github": 'https://github.com/PAIKY-ORGANIZATION/Oauth--Github-and-Google-No-libraries',
    },
    live: true
  },
  {
    name: 'OTP code verification by Email or Text Messgae',
    description: 'An app that sends one-time passwords via email (SMTP) or SMS using the Brevo API. Domain verification and SMTP settings are configured through AWS Route-53.',
    tags: ['TypeScript', 'Brevo.com', 'AWS Route-53'],
    img: '/assets/projects/otp.png',
    urls: {
      "Read Docs": '',
      "Github": 'https://github.com/PAIKY-ORGANIZATION/projects-front-end/tree/master/src/actions/otp-app',
      "Try Out": 'https://miguel-apps.click/otp-app/get-code'
    },
    live: true
  },
  {
    name: 'Rate limiter middleware for ExpressJS (NPM Package)',
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
    description: 'An app that uses JWT authentication and cookies to store user information and session.',
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
    description: 'A caching layer powered by Redis to speed up repeated data requests and reduce server load.',
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
    description: 'This is a web scraper that scrapes data from a website and triggers an AI workflow to generate reports based on the scraped data.',
    tags: ['TypeScript', 'Playwright', 'PostgreSQL'],
    img: '/assets/projects/scraper.png',
    urls: {
      "Read Docs": '',
      "Github": 'https://github.com/dev-Miguel-Mendez/Comet-Scraper-Bot',
      "Youtube": 'https://www.youtube.com/watch?v=2Eqwh2XNKj0&t=456s',
    },
  },
];
