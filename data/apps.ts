export interface App {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryColor: string;
  platforms: ('android' | 'ios')[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  icon: string; // emoji fallback
  iconBg: string;
  features: string[];
  hasAccount: boolean; // whether app has user accounts (for data deletion)
}

export const apps: App[] = [
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
    icon: '🎹',
    iconBg: 'linear-gradient(135deg, #4C1D95, #7C3AED)',
    features: [
      'MIDI keyboard support',
      'SoundFont instrument loader',
      'Multi-track beat sequencer',
      'Mix & export audio',
      'DAW-quality sound engine',
    ],
    hasAccount: false,
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
    icon: '📅',
    iconBg: 'linear-gradient(135deg, #0C4A6E, #0369A1)',
    features: [
      'Online appointment booking',
      'Staff & schedule management',
      'Customer notifications',
      'Payment integration',
      'Business dashboard',
    ],
    hasAccount: true,
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
    icon: '📰',
    iconBg: 'linear-gradient(135deg, #7F1D1D, #DC2626)',
    features: [
      '4.7★ rated on Play Store',
      'Multiple news sources',
      'Category filtering',
      'Offline reading',
      'Breaking news alerts',
    ],
    hasAccount: false,
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
    icon: '🗞️',
    iconBg: 'linear-gradient(135deg, #78350F, #D97706)',
    features: [
      '4.2★ rated on Play Store',
      '20+ newspaper sources',
      'Category browsing',
      'Share articles',
      'Lightweight & fast',
    ],
    hasAccount: false,
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
    platforms: ['android'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseapps.invoicemanager',
    icon: '🧾',
    iconBg: 'linear-gradient(135deg, #14532D, #16A34A)',
    features: [
      'Professional invoice templates',
      'PDF export & sharing',
      'Client management',
      'Payment tracking',
      'Tax calculations',
    ],
    hasAccount: false,
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
    icon: '🧠',
    iconBg: 'linear-gradient(135deg, #78350F, #B45309)',
    features: [
      'AI quiz generation from PDFs',
      'Multiple question types',
      'Performance tracking',
      'Study streak system',
      'Offline quiz access',
    ],
    hasAccount: true,
  },
  {
    id: 'nigeria-comedy-sounds',
    slug: 'nigeria-comedy-sounds',
    name: 'Nigeria Comedy Sounds & Effect',
    tagline: 'Your favourite Nigerian comedy clips & sound effects.',
    description:
      'A collection of the most hilarious and popular Nigerian comedy sound clips and effects. Perfect for prank calls, WhatsApp chats, or just having a good laugh. Loved by over thousands of Nigerian users.',
    category: 'Entertainment',
    categoryColor: '#EC4899',
    platforms: ['android'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wiseapps.comedysound',
    icon: '😂',
    iconBg: 'linear-gradient(135deg, #831843, #DB2777)',
    features: [
      '4.5★ rated on Play Store',
      'Huge sound library',
      'One-tap playback',
      'Downloadable sounds',
      'New sounds added regularly',
    ],
    hasAccount: false,
  },
  {
    id: 'adpulse',
    slug: 'adpulse',
    name: 'AdPulse',
    tagline: 'Your AdMob earnings, at a glance.',
    description:
      'AdPulse is a clean, fast AdMob dashboard that gives app developers instant visibility into their advertising revenue, impressions, eCPM, and trends — all from their mobile device.',
    category: 'Developer Tools',
    categoryColor: '#6366F1',
    platforms: ['android'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.adpulse.ad_pulse',
    icon: '📊',
    iconBg: 'linear-gradient(135deg, #1E1B4B, #4338CA)',
    features: [
      'AdMob revenue dashboard',
      'Earnings trend charts',
      'eCPM & impression tracking',
      'Per-app breakdown',
      'Fast & lightweight',
    ],
    hasAccount: true,
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
    icon: '💳',
    iconBg: 'linear-gradient(135deg, #134E4A, #0F766E)',
    features: [
      'Mobile data purchase',
      'Airtime top-up',
      'TV subscription payment',
      'Electricity bill payment',
      'Transaction history',
    ],
    hasAccount: true,
  },
];

export const categories = [...new Set(apps.map((a) => a.category))];
