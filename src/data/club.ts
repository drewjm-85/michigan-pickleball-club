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
    blurb: 'Outfitting the club with the footwear that keeps us moving from the baseline to the kitchen.',
  },
  {
    name: 'PaddleTek',
    role: 'Paddle Sponsor',
    blurb: 'Supplying the paddles our players compete with at every tournament and tryout.',
  },
  {
    name: 'Muev',
    role: 'Jersey Sponsor',
    blurb: 'Behind the jerseys that put Michigan Pickleball on the court in club colors.',
  },
] as const

export const tournaments = [
  {
    name: 'Grand Rapids PPA Challenger',
    dateRange: 'Sep 18–20',
    blurb: 'Club members compete at the PPA Challenger level in Grand Rapids.',
  },
  {
    name: 'Metro Detroit Open',
    dateRange: 'Sep 25–27',
    blurb: 'The club heads to the Metro Detroit Open to close out September.',
  },
] as const

export const tryoutInfo = {
  cost: '$15',
  days: [
    { date: 'September 8', time: '9–11 PM' },
    { date: 'September 9', time: '9–11 PM' },
  ],
  chooseOne: true,
  location: 'Varsity Pickleball, Ypsilanti',
  callback: { date: 'September 15', time: '9–11 PM' },
  ridesNote: 'Rides will be coordinated for anyone who needs a ride to and from tryouts.',
  signupUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScma6xSm3qM8np5SWtXCein0ubvDPZlosTMg2TgE2psZD6UlQ/viewform?usp=publish-editor',
}

export const clubFoundedYear = 2021
