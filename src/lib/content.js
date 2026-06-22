// Single source of truth for firm details + section content.
// Edit copy here without touching components.

export const FIRM = {
  name: 'A I Modi & Co',
  short: 'AIM',
  tagline: 'Chartered Accountants',
  address:
    '105, 1st Floor, Modi Plaza, Laxminarayan Chowk, Pune-Satara Road, Swargate, Pune 411037',
  emails: ['info@aimodi.in', 'aimodiandco@gmail.com'],
  // Update this number to enable real WhatsApp / call links.
  phoneDisplay: '+91 00000 00000',
  phoneE164: '+910000000000',
}

export const SERVICES = [
  {
    n: '01',
    title: 'Accounting Services',
    body: 'Clean books, monthly close and management reporting that gives you a real-time view of your numbers.',
  },
  {
    n: '02',
    title: 'Audit & Assurance',
    body: 'Statutory, internal and tax audits conducted with rigour — findings you can act on, not just file.',
  },
  {
    n: '03',
    title: 'Income Tax Returns',
    body: 'Accurate ITR filing for individuals and businesses, structured to keep you compliant and optimised.',
  },
  {
    n: '04',
    title: 'GST Compliance',
    body: 'Registration, returns, reconciliations and notices handled end-to-end, on time, every cycle.',
  },
  {
    n: '05',
    title: 'Tax Planning',
    body: 'Forward-looking strategies that lower your effective rate within the four corners of the law.',
  },
  {
    n: '06',
    title: 'Business Consultancy',
    body: 'Financial strategy, MIS and decision support to help you grow with confidence and clarity.',
  },
  {
    n: '07',
    title: 'Startup Advisory',
    body: 'Entity setup, founder agreements, cap tables and compliance built right from day one.',
  },
  {
    n: '08',
    title: 'Regulatory Compliance',
    body: 'ROC, TDS, PF/ESIC and statutory filings tracked on a calendar so nothing slips through.',
  },
]

export const STATS = [
  { value: 15, suffix: '+', label: 'Years of practice' },
  { value: 1000, suffix: '+', label: 'Tax returns filed' },
  { value: 500, suffix: '+', label: 'Businesses served' },
  { value: 99, suffix: '%', label: 'Compliance accuracy' },
]

export const INDUSTRIES = [
  { name: 'Manufacturing', note: 'Costing, inventory & excise-grade audits' },
  { name: 'Retail', note: 'GST cycles & multi-outlet reconciliation' },
  { name: 'IT Services', note: 'Export compliance, transfer pricing & FEMA' },
  { name: 'Startups', note: 'Entity setup, ESOPs & investor reporting' },
  { name: 'Healthcare', note: 'Practice accounting & regulatory filings' },
  { name: 'Professional Services', note: 'Presumptive tax & advisory retainers' },
  { name: 'E-commerce', note: 'Marketplace TCS, GST & settlement audits' },
]

export const PROCESS = [
  {
    step: 'Consultation',
    body: 'We start by understanding your business, your numbers and where you want to be.',
  },
  {
    step: 'Analysis',
    body: 'A close read of your financials surfaces risks, gaps and opportunities you can act on.',
  },
  {
    step: 'Strategy',
    body: 'We build a tax and compliance roadmap tailored to your structure and goals.',
  },
  {
    step: 'Compliance',
    body: 'Filings, audits and statutory work executed on a tracked calendar — never late.',
  },
  {
    step: 'Growth',
    body: 'Ongoing advisory and MIS so financial clarity compounds into business growth.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'They moved us off spreadsheets and onto a real reporting rhythm. For the first time I actually understand my own numbers.',
    name: 'Rohan Deshpande',
    role: 'Founder, D2C Manufacturing',
  },
  {
    quote:
      'GST used to be a monthly fire drill. Now it just happens. Notices, reconciliations, everything — handled before I even ask.',
    name: 'Sneha Kulkarni',
    role: 'Director, Retail Group',
  },
  {
    quote:
      'Sharp on tax planning and genuinely commercial. Their advice has paid for itself several times over.',
    name: 'Amit Joshi',
    role: 'CEO, IT Services',
  },
]

export const INSIGHTS = [
  {
    tag: 'GST',
    title: 'GST reconciliation: the quiet leak in most SME books',
    read: '5 min read',
  },
  {
    tag: 'Tax Planning',
    title: 'Year-end moves that legitimately lower your tax outgo',
    read: '6 min read',
  },
  {
    tag: 'Startup Finance',
    title: 'Setting up your startup so funding does not break your books',
    read: '7 min read',
  },
]
