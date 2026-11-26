import checkPresentation from '../assets/photos/action-check-presentation.jpg'
import tryoutPairOriginal from '../assets/photos/action-tryout-pair-original.jpg'
import vpPairRailing from '../assets/photos/action-vp-pair-railing.jpg'
import tournamentWhiteJersey from '../assets/photos/tournament-white-jersey.jpg'
import tournamentForehand from '../assets/photos/tournament-forehand-ncpa.jpg'
import tournamentCelebration from '../assets/photos/tournament-celebration.jpg'
import tournamentBracket from '../assets/photos/tournament-bracket-east.jpg'
import tournamentTeamCourt from '../assets/photos/tournament-team-court.jpg'
import teamNavyGroup from '../assets/photos/team-navy-group.jpg'

import babolatLogo from '../assets/photos/sponsor-babolat-logo.webp'
import paddletekLogo from '../assets/photos/sponsor-paddletek-logo.webp'
import muevLogo from '../assets/photos/sponsor-muev-logo.png'

import lelandPhoto from '../assets/photos/exec-leland-branco.jpg'
import calebPhoto from '../assets/photos/exec-caleb-hyun.jpg'
import asherPhoto from '../assets/photos/exec-asher-smith.jpg'
import andrewPhoto from '../assets/photos/exec-andrew-murphy.jpg'
import kellyPhoto from '../assets/photos/exec-kelly-linart.jpg'
import nathanPhoto from '../assets/photos/exec-nathan-bishop.jpg'

export const heroPhoto = {
  src: teamNavyGroup,
  alt: 'Michigan Pickleball Club members posing together as a team',
}

export const galleryPhotos = [
  {
    src: checkPresentation,
    alt: 'Kyler Fung and Jacob Liu holding an oversized $300 check',
    caption: 'Tournaments',
    detail: '',
  },
  {
    src: tryoutPairOriginal,
    alt: 'Two club members on an indoor pickleball court holding paddles',
    caption: 'On the Court',
    detail: '',
  },
  {
    src: vpPairRailing,
    alt: 'Two club members at a club open house event',
    caption: 'Close Friendships',
    detail: '',
  },
] as const

export const tournamentPhotos = [
  {
    src: tournamentBracket,
    alt: 'Michigan players pointing to the Michigan spot in the East region of the NCPA bracket',
    caption: 'NCPA Bracket',
  },
  {
    src: tournamentForehand,
    alt: 'A Michigan player hitting a forehand on an indoor court at an NCPA event',
    caption: 'NCPA Match Play',
  },
  {
    src: tournamentCelebration,
    alt: 'A Michigan player celebrating a point with a fist pump',
    caption: 'Big Point',
  },
  {
    src: tournamentTeamCourt,
    alt: 'Five Michigan Pickleball Club players posing at the net in club jerseys',
    caption: 'Team Michigan',
  },
  {
    src: tournamentWhiteJersey,
    alt: 'A Michigan player in a white club jersey between games at an outdoor tournament',
    caption: 'Between Games',
  },
] as const

export const sponsorLogos = {
  Babolat: babolatLogo,
  PaddleTek: paddletekLogo,
  Muev: muevLogo,
} as const

export const execPhotos = {
  'Leland Branco': lelandPhoto,
  'Caleb Hyun': calebPhoto,
  'Asher Smith': asherPhoto,
  'Andrew Murphy': andrewPhoto,
  'Kelly Linart': kellyPhoto,
  'Nathan Bishop': nathanPhoto,
} as const
