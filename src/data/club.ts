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
    name: 'Kelly Linart',
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

export type TournamentLink = {
  label: string
  url: string
}

export type TournamentResult = {
  name: string
  location: string
  date?: string
  result: string
  note?: string
  links: TournamentLink[]
}

// Newest season first; events within a season in the order they happened.
export const seasons: { season: string; summary: string; results: TournamentResult[] }[] = [
  {
    season: '2026',
    summary: '2nd at NCPA Global Championship',
    results: [
      {
        name: 'Boiler Bash Regional 300',
        location: 'West Lafayette, IN',
        result: '3rd Place',
        note: 'Plus a second team in the quarterfinals',
        links: [
          { label: 'Tournament page', url: 'https://purduepickleballclub.com/tournaments/boiler-bash-300' },
          { label: 'See the recap', url: 'https://www.instagram.com/p/DeFT0w2ifjS/?img_index=1' },
        ],
      },
      {
        name: 'NCPA Indiana Regional',
        location: 'Noblesville, IN',
        result: 'Semifinals',
        links: [
          { label: 'Bracket', url: 'https://tournaments.ncpaofficial.com/brackets/3010' },
          { label: 'Qualified for NCPA Nationals', url: 'https://www.instagram.com/p/DeVo0tzjTja/?img_index=10' },
        ],
      },
      {
        name: 'DUPR Ohio Super Regional',
        location: 'Columbus, OH',
        result: 'Quarterfinals',
        links: [
          {
            label: 'DUPR recap',
            url: 'https://www.dupr.com/post/ohio-state-wins-on-home-court-at-ohio-super-regional',
          },
        ],
      },
      {
        name: 'NCPA Global Championship',
        location: 'Bridgeton, MO',
        date: 'Nov 15, 2026',
        result: '2nd Place',
        links: [
          { label: 'Bracket', url: 'https://tournaments.ncpaofficial.com/brackets/3094' },
          { label: 'See the recap', url: 'https://www.instagram.com/p/Df-3RgZownR/' },
        ],
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
        links: [
          { label: 'Earned a bid to DUPR Nationals', url: 'https://www.instagram.com/p/DQU6nC0D4_n/?img_index=1' },
        ],
      },
      {
        name: 'NCPA Texas Regional',
        location: 'Texas',
        result: 'Champions',
        links: [
          { label: 'Earned a bid to NCPA Nationals', url: 'https://www.instagram.com/p/DQ18C8fCfO2/?img_index=1' },
        ],
      },
    ],
  },
]

export const clubFoundedYear = 2022

export const donationUrl = 'https://www.gofundme.com/f/67xmdk-support-the-michigan-pickleball-club'
