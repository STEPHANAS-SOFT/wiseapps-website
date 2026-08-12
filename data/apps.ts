export interface App {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryColor: string;
  platforms: ('android' | 'ios' | 'windows' | 'mac')[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  iconUrl: string;
  iconBg: string;
  features: string[];
  hasAccount: boolean;
  downloads?: string;
  rating?: string;
  isDesktop?: boolean;
}

export const apps: App[] = [
  {
    id: 'verseflow',
    slug: 'verseflow',
    name: 'VerseFlow — Live Scripture & Lyrics',
    tagline: 'Automatic Bible verse and worship song display for church media teams.',
    description:
      'VerseFlow is WiseApps Dev’s flagship desktop application for Windows and macOS. It listens to church services in real time — detecting Bible references and spoken quotes as the pastor preaches, and recognizing hymns and worship songs as the congregation sings — displaying words on screen automatically via display output or NDI to OBS, vMix, and ProPresenter.',
    category: 'Desktop Software',
    categoryColor: '#5EEAD4',
    platforms: ['windows', 'mac'],
    websiteUrl: 'https://verseflow.app',
    iconUrl: '/icons/verseflow.png',
    iconBg: 'linear-gradient(135deg, #0F766E, #14B8A6)',
    features: [
      'Real-time Bible reference & quote detection from speech',
      'Automatic hymn & worship song recognition from singing',
      'NDI & fullscreen display output for OBS, vMix & ProPresenter',
      'Works 100% offline with bundled multi-language Bible library',
      'Supports 6 languages (English, Spanish, French, German, Italian, Portuguese)',
    ],
    hasAccount: true,
    isDesktop: true,
  },
  {
    id: 'soundpad',
    slug: 'soundpad',
    name: 'SoundPad — Beat Maker & DAW',
    tagline: 'Play any sound from your MIDI keyboard. Make beats, mix & export.',
    description:
      'SoundPad is a professional-grade beat maker and digital audio workstation for Android and iOS. Connect your MIDI keyboard, load SoundFont instruments, create layered beats, mix tracks, and export your music — all without a laptop.',
    category: 'Music & Audio',
    categoryColor: '#8B5CF6',
    platforms: ['android', 'ios'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseappsdev.soundpad',
    appStoreUrl: 'https://apps.apple.com/us/app/soundpad-sampler-daw/id6788076455',
    iconUrl: '/icons/soundpad.png',
    iconBg: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
    features: [
      'MIDI keyboard support',
      'SoundFont instrument loader',
      'Multi-track beat sequencer',
      'Mix & export audio',
      'DAW-quality sound engine',
    ],
    hasAccount: false,
    downloads: '50K+',
    rating: '4.5★',
  },
  {
    id: 'bookora',
    slug: 'bookora',
    name: 'Bookora – Appointment Booking',
    tagline: 'Connect customers with local service providers instantly.',
    description:
      'Bookora is an appointment booking platform that connects customers with local service providers — salons, spas, clinics, and more. Business owners can manage appointments, staff schedules, and payments all in one place.',
    category: 'Business',
    categoryColor: '#0EA5E9',
    platforms: ['android', 'ios'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseappsdev.bookora',
    iconUrl: '/icons/bookora.png',
    iconBg: 'linear-gradient(135deg, #0C4A6E, #0369A1)',
    features: [
      'Online appointment booking',
      'Staff & schedule management',
      'Customer notifications',
      'Payment integration',
      'Business dashboard',
    ],
    hasAccount: true,
    downloads: '10K+',
  },
  {
    id: 'all-nigeria-newspapers',
    slug: 'all-nigeria-newspapers',
    name: 'All Nigeria Newspapers',
    tagline: 'Every major Nigerian newspaper in one app.',
    description:
      'Access all major Nigerian newspapers and online publications from a single app. Browse headlines, read full articles, and stay informed with news from every corner of Nigeria.',
    category: 'News',
    categoryColor: '#EF4444',
    platforms: ['android'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseappsdev.com',
    iconUrl: '/icons/allnigerianewspapers.png',
    iconBg: 'linear-gradient(135deg, #78350F, #D97706)',
    features: [
      '500K+ downloads on Play Store',
      '4.2★ rating from thousands of reviews',
      '20+ newspaper sources',
      'Category browsing & instant share',
      'Lightweight & fast loading',
    ],
    hasAccount: false,
    downloads: '500K+',
    rating: '4.2★',
  },
  {
    id: 'newsradar',
    slug: 'newsradar',
    name: 'NewsRadar: Nigeria News',
    tagline: 'Fast, reliable Nigerian news — all in one place.',
    description:
      'NewsRadar aggregates top-rated news from trusted Nigerian sources, giving you the latest headlines, breaking news, and in-depth stories across politics, sports, entertainment, and business.',
    category: 'News',
    categoryColor: '#EF4444',
    platforms: ['android'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseapp.news',
    appStoreUrl: 'https://apps.apple.com/us/app/news-update-nigeria/id6462785273',
    iconUrl: '/icons/newsradar.png',
    iconBg: 'linear-gradient(135deg, #7F1D1D, #DC2626)',
    features: [
      '4.7★ rated on Play Store',
      'Multiple news sources',
      'Category filtering',
      'Offline reading mode',
      'Breaking news alerts',
    ],
    hasAccount: false,
    downloads: '10K+',
    rating: '4.7★',
  },
  {
    id: 'invoice-manager',
    slug: 'invoice-manager',
    name: 'Invoice Manager: Simple & Easy',
    tagline: 'Create, send, and track invoices in seconds.',
    description:
      'A lightweight, powerful invoice manager designed for freelancers and small businesses. Create professional invoices, track payments, manage clients, and export PDFs — no accounting degree needed.',
    category: 'Productivity',
    categoryColor: '#22C55E',
    platforms: ['android', 'ios'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseapps.invoicemanager',
    appStoreUrl: 'https://apps.apple.com/us/app/invoice-manager-simple-easy/id6737921764',
    iconUrl: '/icons/invoicemanager.png',
    iconBg: 'linear-gradient(135deg, #14532D, #16A34A)',
    features: [
      'Professional invoice templates',
      'PDF export & sharing',
      'Client management',
      'Payment tracking',
      'Tax calculations',
    ],
    hasAccount: false,
    downloads: '10K+',
  },
  {
    id: 'prepforge',
    slug: 'prepforge',
    name: 'PrepForge',
    tagline: 'AI-powered quizzes from your own documents.',
    description:
      'PrepForge uses AI to generate interactive quizzes directly from your PDF documents. Perfect for students, professionals, and lifelong learners who want to study smarter. Supports multiple choice, true/false, and short-answer questions.',
    category: 'Education',
    categoryColor: '#F59E0B',
    platforms: ['android', 'ios'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseapps.prepforge',
    appStoreUrl: 'https://apps.apple.com/us/app/prepforge/id6746358907',
    iconUrl: '/icons/prepforge.png',
    iconBg: 'linear-gradient(135deg, #78350F, #B45309)',
    features: [
      'AI quiz generation from PDFs',
      'Multiple question types',
      'Performance tracking',
      'Study streak system',
      'Offline quiz access',
    ],
    hasAccount: true,
    downloads: '10K+',
  },
  {
    id: 'nigeria-comedy-sounds',
    slug: 'nigeria-comedy-sounds',
    name: 'Nigeria Comedy Sounds & Effect',
    tagline: 'Your favourite Nigerian comedy clips & sound effects.',
    description:
      'A collection of the most hilarious and popular Nigerian comedy sound clips and effects. Perfect for prank calls, WhatsApp chats, or just having a good laugh. Loved by over 100,000 users.',
    category: 'Entertainment',
    categoryColor: '#EC4899',
    platforms: ['android'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseapps.comedysound',
    iconUrl: '/icons/comedysound.png',
    iconBg: 'linear-gradient(135deg, #831843, #DB2777)',
    features: [
      '100K+ downloads on Play Store',
      '4.5★ rating',
      'Huge comedy sound library',
      'One-tap audio playback',
      'Downloadable audio clips',
    ],
    hasAccount: false,
    downloads: '100K+',
    rating: '4.5★',
  },
  {
    id: 'adpulse',
    slug: 'adpulse',
    name: 'AdPulse — AdMob Dashboard',
    tagline: 'Your AdMob earnings & revenue analytics at a glance.',
    description:
      'AdPulse is a clean, fast AdMob dashboard that gives app developers instant visibility into their advertising revenue, impressions, eCPM, and trends — all from their mobile device.',
    category: 'Developer Tools',
    categoryColor: '#6366F1',
    platforms: ['android', 'ios'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.adpulse.ad_pulse',
    appStoreUrl: 'https://apps.apple.com/us/app/adpulse-admob-dashboard/id6762448472',
    iconUrl: '/icons/adpulse.png',
    iconBg: 'linear-gradient(135deg, #1E1B4B, #4338CA)',
    features: [
      'AdMob revenue dashboard',
      'Earnings trend charts',
      'eCPM & impression tracking',
      'Per-app revenue breakdown',
      'Fast & lightweight',
    ],
    hasAccount: true,
    downloads: '10K+',
  },
  {
    id: 'subsify',
    slug: 'subsify',
    name: 'Subsify – Data & Bills Payment',
    tagline: 'Buy data, airtime, and pay your bills instantly.',
    description:
      'Subsify makes it easy to purchase mobile data, airtime top-ups, and pay for TV subscriptions and electricity bills — all from one simple app. Fast, reliable, and available 24/7.',
    category: 'Finance',
    categoryColor: '#14B8A6',
    platforms: ['android', 'ios'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseappsdev.subsify',
    appStoreUrl: 'https://apps.apple.com/us/app/subsify-data-bills-payment/id6737881683',
    iconUrl: '/icons/subsify.png',
    iconBg: 'linear-gradient(135deg, #134E4A, #0F766E)',
    features: [
      'Mobile data purchase',
      'Airtime top-up',
      'TV subscription payment',
      'Electricity bill payment',
      'Transaction history',
    ],
    hasAccount: true,
    downloads: '10K+',
  },
  {
    id: 'buga-ride',
    slug: 'buga-ride',
    name: 'Buga Ride',
    tagline: 'Fast, reliable ride booking & urban transport.',
    description:
      'Buga Ride is a mobile ride hailing and transportation app designed for seamless urban movement. Book rides, track drivers in real time, and enjoy safe trips.',
    category: 'Travel',
    categoryColor: '#F59E0B',
    platforms: ['ios'],
    appStoreUrl: 'https://apps.apple.com/us/app/buga-ride/id6747893712',
    iconUrl: '/icons/bugaride.png',
    iconBg: 'linear-gradient(135deg, #B45309, #F59E0B)',
    features: [
      'Real-time ride booking',
      'Driver tracking',
      'Transparent pricing',
      'Trip history & receipts',
    ],
    hasAccount: true,
  },
  {
    id: 'fastrpay',
    slug: 'fastrpay',
    name: 'FastrPay',
    tagline: 'Instant digital payments & wallet transfers.',
    description:
      'FastrPay provides ultra-fast digital payments, peer-to-peer transfers, and utility payments built for high reliability.',
    category: 'Finance',
    categoryColor: '#10B981',
    platforms: ['ios'],
    appStoreUrl: 'https://apps.apple.com/us/app/fastrpay/id6761764803',
    iconUrl: '/icons/fastrpay.png',
    iconBg: 'linear-gradient(135deg, #065F46, #10B981)',
    features: [
      'Instant digital wallet',
      'Fast peer-to-peer transfers',
      'Bill payments & airtime',
      'Bank-grade security',
    ],
    hasAccount: true,
  },
];

export const categories = [...new Set(apps.map((a) => a.category))];
