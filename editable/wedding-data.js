/**
 * wedding-data.js — Wedding Reception Invitation
 * Dr Shivam Mehta & Dr Krina Morabia
 * Saturday, 28th November 2026 · Surat, Gujarat
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Dr Shivam",
    bride: "Dr Krina",
    groomPrefix: "Dr",
    bridePrefix: "Dr",
    groomFull: "Dr Shivam Mehta",
    brideFull: "Dr Krina Morabia",
    groomParents: "Son of Mr Amul Mehta & Mrs Sharvari Mehta",
    brideParents: "Daughter of Mr Nitin Morabia & Mrs Jyoti Morabia",
    side: "Groom Side",
    sideTitle: "Mehta Family",
    heroTagline: "Mehta family welcomes you to the wedding reception of",
    hashtag: "#ShivamWedsKrina",
    monogram: "S · K",
  },

  family: {
    blessings: {
      badge: "✨ With the Blessings of",
      names: "Mr Niranjan Mehta & Mrs Asha Mehta",
      relation: "Grandfather & Grandmother of the Groom"
    }
  },

  wedding: {
    dateISO: "2026-11-28T19:00:00+05:30",
    dateLabel: "Saturday, 28th November 2026",
    weddingDayLabel: "Saturday, 28th November 2026",
    timeLabel: "7:00 PM onwards",
    destination: "Surat, Gujarat"
  },

  venue: {
    name: "Bai Dayakor Hindu Aarogya Bhavan",
    address: "Dumas Road, Sultanabad, Dumas, Surat, Gujarat 395007",
    city: "Surat, Gujarat",
    mapsQuery: "Bai Dayakor Hindu Aarogya Bhavan, Dumas Road, Sultanabad, Surat, Gujarat",
    shareUrl: "https://share.google/5ZnWHLHdmPleZPqko"
  },

  verse: {
    heading: "॥ श्री गणेशाय नमः ॥",
    sanskrit: "॥ श्री गणेशाय नमः ॥",
    arabic: "॥ श्री गणेशाय नमः ॥",
    text: "Two hearts, two families and one beautiful beginning as Shivam and Krina join hands forever.",
    subtext: "With the divine blessings of our elders and happy hearts, the Mehta family warmly invites you to celebrate the wedding reception of Dr Shivam & Dr Krina."
  },

  music: {
    enabled: true,
    title: "Tumhi Dekho Naa",
    version: "Sitar Lofi — Rishab Rikhiram Sharma",
    cue: "Sitar portion starting at 0:28",
    src: "./editable/assets/tumhi_dekho_naa.mp3"
  },

  eventsTitle: "The Royal Reception",
  eventsBadge: "A Toast to Forever 🍻",

  events: [
    {
      id: "royal-reception",
      name: "The Royal Reception",
      dayLabel: "Saturday",
      date: "28 November 2026",
      dayNum: "28",
      monthLabel: "November 2026",
      time: "7:00 PM onwards",
      venue: "Bai Dayakor Hindu Aarogya Bhavan",
      note: "A toast to forever 🍻 — Join us for an enchanting evening of celebration, love, and laughter as Dr Shivam & Dr Krina begin their forever.",
      badge: "The Royal Reception"
    }
  ],

  program: [
    { name: "The Royal Reception", time: "28 Nov · 7:00 PM onwards", venue: "Bai Dayakor Hindu Aarogya Bhavan" }
  ],

  footer: {
    message: "We can't wait to celebrate with you",
    signature: "With love, Mehta Family"
  },

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },

  images: {
    couple: "./editable/assets/layer-couple.png",
    background: "./editable/assets/layer-01-background.png",
    shadows: "./editable/assets/layer-02-shadows.png",
    groom: "./editable/assets/layer-03-groom.png",
    bride: "./editable/assets/layer-04-bride.png",
    bouquet: "./editable/assets/layer-05-bouquet.png",
    heroComposite: "./editable/assets/hero-composite.jpg",
    monogramLogo: "./editable/assets/ks-monogram.png",
    lastPage: "./editable/assets/last-page.png",
  },
};
