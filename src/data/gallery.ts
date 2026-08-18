import checkPresentation from '../assets/photos/action-check-presentation.jpg'
import tryoutPair from '../assets/photos/action-tryout-pair.jpg'
import vpPairRailing from '../assets/photos/action-vp-pair-railing.jpg'
import teamNavyGroup from '../assets/photos/team-navy-group.jpg'
import teamWhitePaddletekGroup from '../assets/photos/team-white-paddletek-group.jpg'

import babolatLogo from '../assets/photos/sponsor-babolat-logo.webp'
import paddletekLogo from '../assets/photos/sponsor-paddletek-logo.png'
import muevLogo from '../assets/photos/sponsor-muev-logo.png'

export const heroPhoto = {
  src: teamNavyGroup,
  alt: 'Michigan Pickleball Club members posing together as a team',
}

export const galleryPhotos = [
  {
    src: checkPresentation,
    alt: 'Kyler Fung and Jacob Liu holding an oversized $300 check',
    caption: "Kyler Fung & Jacob Liu",
    detail: "$300, Men's Doubles Div. 5 — JOOLA College Pickleball Tour",
  },
  {
    src: tryoutPair,
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

export const sponsorActionPhoto = {
  src: teamWhitePaddletekGroup,
  alt: 'The full team in white Michigan Pickleball Club jerseys holding PaddleTek paddles',
}
