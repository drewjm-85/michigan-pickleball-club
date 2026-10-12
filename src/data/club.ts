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

export type TournamentResult = {
  name: string
  location: string
  result: string
  note: string
  instagramUrl: string
}

// Newest season first; events within a season in the order they happened.
export const seasons: { season: string; summary: string; results: TournamentResult[] }[] = [
  {
    season: '2026',
    summary: 'Nationals bid secured',
    results: [
      {
        name: 'Boiler Bash Regional 300',
        location: 'West Lafayette, IN',
        result: '3rd Place',
        note: 'See the recap',
        instagramUrl: 'https://www.instagram.com/p/DeFT0w2ifjS/?img_index=1',
      },
      {
        name: 'NCPA Indiana Regional',
        location: 'Indiana',
        result: 'Nationals Bid',
        note: 'Qualified for NCPA Nationals',
        instagramUrl: 'https://www.instagram.com/p/DeVo0tzjTja/?img_index=10',
      },
    ],
  },
  {
    season: '2025',
    summary: '2 Championships',
    results: [
      {
        name: 'DUPR Campus Regional',
        location: 'Boston, MA',
        result: 'Champions',
        note: 'Earned a bid to DUPR Nationals',
        instagramUrl: 'https://www.instagram.com/p/DQU6nC0D4_n/?img_index=1',
      },
      {
        name: 'NCPA Texas Regional',
        location: 'Texas',
        result: 'Champions',
        note: 'Earned a bid to NCPA Nationals',
        instagramUrl: 'https://www.instagram.com/p/DQ18C8fCfO2/?img_index=1',
      },
    ],
  },
]

export const clubFoundedYear = 2022

export const donationUrl = 'https://www.gofundme.com/f/67xmdk-support-the-michigan-pickleball-club'
