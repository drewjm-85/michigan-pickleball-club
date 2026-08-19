export const execTeam = [
  {
    name: 'Leland Branco',
    role: 'President',
    grad: 'Class of 2028',
  },
  {
    name: 'Caleb Hyun',
    role: 'VP of Operations',
    grad: 'Class of 2027',
  },
  {
    name: 'Asher Smith',
    role: 'VP of Sponsorship',
    grad: 'Class of 2028',
  },
  {
    name: 'Andrew Murphy',
    role: 'Treasurer',
    grad: 'Class of 2029',
  },
  {
    name: 'Kelly Lenart',
    role: "Women's Captain",
    grad: 'Class of 2027',
  },
  {
    name: 'Nathan Bishop',
    role: "Men's Captain",
    grad: 'Class of 2027',
  },
] as const

export const sponsors = [
  {
    name: 'Babolat',
    role: 'Shoe Sponsor',
    url: 'https://www.babolat.com/us/pickleball.html',
  },
  {
    name: 'PaddleTek',
    role: 'Paddle Sponsor',
    url: 'https://www.paddletek.com/',
  },
  {
    name: 'Muev',
    role: 'Jersey Sponsor',
    url: 'https://muevbrand.com/',
  },
] as const

export const tournaments = [
  {
    name: 'Grand Rapids PPA Challenger',
    dateRange: 'Sep 18–20',
  },
  {
    name: 'Metro Detroit Open',
    dateRange: 'Sep 25–27',
  },
] as const

export const pastResults = [
  {
    season: '2025',
    name: 'DUPR Campus Regional',
    location: 'Boston, MA',
    result: 'Champions',
    note: 'Earned a bid to DUPR Nationals',
    instagramUrl: 'https://www.instagram.com/p/DQU6nC0D4_n/?img_index=1',
  },
  {
    season: '2025',
    name: 'NCPA Texas Regional',
    location: 'Texas',
    result: 'Champions',
    note: 'Earned a bid to NCPA Nationals',
    instagramUrl: 'https://www.instagram.com/p/DQ18C8fCfO2/?img_index=1',
  },
] as const

export const tryoutInfo = {
  cost: '$15',
  days: [
    { date: 'September 8', time: '9–11 PM' },
    { date: 'September 9', time: '9–11 PM' },
  ],
  chooseOne: true,
  location: 'Varsity Pickleball',
  callback: { date: 'September 15', time: '9–11 PM' },
  ridesNote: 'Rides will be coordinated for anyone who needs a ride to and from tryouts.',
  signupUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScma6xSm3qM8np5SWtXCein0ubvDPZlosTMg2TgE2psZD6UlQ/viewform?usp=publish-editor',
}

export const clubFoundedYear = 2022

export const donationUrl = 'https://www.gofundme.com/f/67xmdk-support-the-michigan-pickleball-club'
