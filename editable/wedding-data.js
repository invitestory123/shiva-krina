/**
 * wedding-data.js — Groom-Side E-Invite Configuration
 * Dr Shivam Mehta & Dr Krina Morabia
 * 20 – 22 November 2026 · Surat, Gujarat
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Shivam",
    bride: "Krina",
    groomPrefix: "Dr",
    bridePrefix: "Dr",
    groomFull: "Dr Shivam Mehta",
    brideFull: "Dr Krina Morabia",
    groomParents: "Son of Mr Amul Mehta & Mrs Sharvari Mehta",
    brideParents: "Daughter of Mr Nitin Morabia & Mrs Jyoti Morabia",
    side: "Groom Side",
    sideTitle: "Dr Shivam Mehta & Family",
    hashtag: "#ShivamWedsKrina",
    monogram: "S · K",
  },

  family: {
    blessings: {
      badge: "✨ With the Blessings of",
      names: "Mr Niranjan Mehta & Mrs Asha Mehta",
      relation: "Grandfather & Grandmother of the Groom"
    },
    withLove: {
      badge: "❤️ With Love From",
      names: "Mrs Tanvi Patel & Mr Parthav Patel",
      relation: "Sister & Brother-in-law of the Groom"
    },
    littleOnes: {
      badge: "🥰 And Excited to Celebrate",
      names: "Aarush Patel & Raavika Patel",
      relation: "Nephew & Niece",
      note: "Excited to celebrate the wedding of their Mama! ❤️"
    },
    mameru: {
      title: "Mameru",
      note: "For our beloved Mama & Mami and Masi & Masaji — a little tradition, a lot of love, and memories to cherish forever. ❤️",
      elders: [
        {
          names: "Mr Himanshu Purohit & Mrs Vandana Purohit",
          relation: "Mama & Mami"
        },
        {
          names: "Mr Kumar Trivedi & Mrs Aparna Trivedi",
          relation: "Masi & Masaji"
        }
      ]
    }
  },

  wedding: {
    dateISO: "2026-11-22T18:15:00+05:30",
    dateLabel: "20 – 22 November 2026",
    weddingDayLabel: "Sunday, 22nd November 2026",
    timeLabel: "Hastmelap at 6:15 PM",
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
    subtext: "With the divine blessings of our elders and happy hearts, we warmly invite you to celebrate the wedding festivities of Shivam & Krina."
  },

  music: {
    enabled: true,
    title: "Gehra Hua",
    version: "Yalina’s Entry Version",
    cue: "Slow Sargam portion — “Ga Ma Pa Sa” section",
    src: "./editable/assets/gehra_hua.mp3"
  },

  events: [
    {
      id: "welcome-party",
      name: "Welcome Party",
      dayLabel: "Friday",
      date: "20 November 2026",
      dayNum: "20",
      monthLabel: "November 2026",
      time: "7:30 PM onwards",
      venue: "Polaris Banquet Hall",
      note: "An evening of warm welcomes, happy hearts and the beginning of our celebrations.",
      badge: "Welcome Evening"
    },
    {
      id: "haldi",
      name: "Haldi",
      dayLabel: "Saturday",
      date: "21 November 2026",
      dayNum: "21",
      monthLabel: "November 2026",
      time: "10:30 AM onwards",
      venue: "Nova Party Lawn",
      note: "Sunshine, laughter and a little haldi as we celebrate the bride and groom.",
      badge: "Haldi Rasam"
    },
    {
      id: "sangeet",
      name: "Sangeet",
      dayLabel: "Saturday",
      date: "21 November 2026",
      dayNum: "21",
      monthLabel: "November 2026",
      time: "7:30 PM onwards",
      venue: "Peacock Party Lawn",
      note: "An evening of music, dance, laughter and unforgettable family moments.",
      withLove: "With love from: Mrs Tanvi Patel & Mr Parthav Patel (Sister & Brother-in-law of the Groom)",
      badge: "Sangeet Night"
    },
    {
      id: "grahshanti",
      name: "Grahshanti",
      dayLabel: "Sunday",
      date: "22 November 2026",
      dayNum: "22",
      monthLabel: "November 2026",
      time: "10:30 AM onwards",
      venue: "Nova Party Lawn",
      note: "A beautiful morning of blessings, traditions and prayers for a lifetime of togetherness.",
      badge: "Auspicious Puja"
    },
    {
      id: "mameru",
      name: "Mameru",
      dayLabel: "Sunday",
      date: "22 November 2026",
      dayNum: "22",
      monthLabel: "November 2026",
      time: "Morning Rituals",
      venue: "Nova Party Lawn",
      note: "For our beloved Mama & Mami and Masi & Masaji — a little tradition, a lot of love, and memories to cherish forever. ❤️",
      elders: [
        { names: "Mr Himanshu Purohit & Mrs Vandana Purohit", relation: "Mama & Mami" },
        { names: "Mr Kumar Trivedi & Mrs Aparna Trivedi", relation: "Masi & Masaji" }
      ],
      badge: "Mameru Tradition"
    },
    {
      id: "baarat",
      name: "Baarat",
      dayLabel: "Sunday",
      date: "22 November 2026",
      dayNum: "22",
      monthLabel: "November 2026",
      time: "4:00 PM",
      venue: "Starts at the Entry Gate",
      note: "Let the beats begin as Shivam arrives with love, laughter and his baraat.",
      badge: "Baraat Swagat"
    },
    {
      id: "wedding",
      name: "Hastmelap & Wedding",
      dayLabel: "Sunday",
      date: "22 November 2026",
      dayNum: "22",
      monthLabel: "November 2026",
      time: "6:15 PM",
      venue: "Peacock Party Lawn",
      note: "Two hearts, two families and one beautiful beginning as Shivam and Krina join hands forever.",
      littleOnes: "🥰 With Excitement From Aarush & Raavika (Excited to celebrate the wedding of their Mama! ❤️)",
      badge: "The Sacred Vows"
    }
  ],

  program: [
    { name: "Welcome Party", time: "20 Nov · 7:30 PM", venue: "Polaris Banquet Hall" },
    { name: "Haldi", time: "21 Nov · 10:30 AM", venue: "Nova Party Lawn" },
    { name: "Sangeet", time: "21 Nov · 7:30 PM", venue: "Peacock Party Lawn" },
    { name: "Grahshanti", time: "22 Nov · 10:30 AM", venue: "Nova Party Lawn" },
    { name: "Mameru", time: "22 Nov · Morning", venue: "Nova Party Lawn" },
    { name: "Baarat", time: "22 Nov · 4:00 PM", venue: "Entry Gate" },
    { name: "Hastmelap & Wedding", time: "22 Nov · 6:15 PM", venue: "Peacock Party Lawn" }
  ],

  footer: {
    message: "We can't wait to celebrate with you",
    signature: "With love, Dr Shivam Mehta & Family"
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
  },
};
