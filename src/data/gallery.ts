import checkPresentation from '../assets/photos/action-check-presentation.jpg'
import tryoutGroup from '../assets/photos/action-tryout-pair.jpg'
import tryoutPairOriginal from '../assets/photos/action-tryout-pair-original.jpg'
import vpPairRailing from '../assets/photos/action-vp-pair-railing.jpg'
import teamNavyGroup from '../assets/photos/team-navy-group.jpg'
import teamWhitePaddletekGroup from '../assets/photos/team-white-paddletek-group.jpg'

import babolatLogo from '../assets/photos/sponsor-babolat-logo.webp'
import paddletekLogo from '../assets/photos/sponsor-paddletek-logo.png'
import muevLogo from '../assets/photos/sponsor-muev-logo.png'

import lelandPhoto from '../assets/photos/exec-leland-branco.jpg'
import calebPhoto from '../assets/photos/exec-caleb-hyun.jpg'
import asherPhoto from '../assets/photos/exec-asher-smith.jpg'
import andrewPhoto from '../assets/photos/exec-andrew-murphy.jpg'
import kellyPhoto from '../assets/photos/exec-kelly-lenart.jpg'
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

export const sponsorLogos = {
  Babolat: babolatLogo,
  PaddleTek: paddletekLogo,
  Muev: muevLogo,
} as const

export const tryoutsPagePhoto = {
  src: tryoutGroup,
  alt: 'Six Michigan Pickleball Club members holding paddles at an indoor tournament',
}

export const sponsorActionPhoto = {
  src: teamWhitePaddletekGroup,
  alt: 'The full team in white Michigan Pickleball Club jerseys holding PaddleTek paddles',
}

export const execPhotos = {
  'Leland Branco': lelandPhoto,
  'Caleb Hyun': calebPhoto,
  'Asher Smith': asherPhoto,
  'Andrew Murphy': andrewPhoto,
  'Kelly Lenart': kellyPhoto,
  'Nathan Bishop': nathanPhoto,
} as const
