export interface RozaDay {
  roza: number;
  date: string; // "YYYY-MM-DD"
  dayOfWeek: string;
  hijriDate: string;
  sehriTime: string;
  iftarTime: string;
  fastingDuration: string;
  significance: string;
  duaArabic: string;
  duaEnglish: string;
  isSpecial: boolean;
  specialType?: "quran-revelation" | "badr" | "laylatul-qadr" | "odd-night" | "last-10";
}

export const ramadanData: RozaDay[] = [
  {
    roza: 1, date: "2026-02-19", dayOfWeek: "Thursday",
    hijriDate: "1 Ramadan 1447", sehriTime: "5:41 AM", iftarTime: "6:43 PM",
    fastingDuration: "13h 02m", significance: "Beginning of Ramadan — the month the Quran was first revealed.",
    duaArabic: "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ",
    duaEnglish: "O Allah, let this moon appear on us with security and faith.",
    isSpecial: true, specialType: "quran-revelation"
  },
  {
    roza: 2, date: "2026-02-20", dayOfWeek: "Friday",
    hijriDate: "2 Ramadan 1447", sehriTime: "5:40 AM", iftarTime: "6:44 PM",
    fastingDuration: "13h 04m", significance: "Jumu'ah (Friday) — extra blessings on this holy day.",
    duaArabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
    duaEnglish: "Our Lord, give us good in this world and good in the Hereafter.",
    isSpecial: false
  },
  {
    roza: 3, date: "2026-02-21", dayOfWeek: "Saturday",
    hijriDate: "3 Ramadan 1447", sehriTime: "5:39 AM", iftarTime: "6:44 PM",
    fastingDuration: "13h 05m", significance: "",
    duaArabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى",
    duaEnglish: "O Allah, I ask You for guidance and piety.",
    isSpecial: false
  },
  {
    roza: 4, date: "2026-02-22", dayOfWeek: "Sunday",
    hijriDate: "4 Ramadan 1447", sehriTime: "5:38 AM", iftarTime: "6:45 PM",
    fastingDuration: "13h 07m", significance: "",
    duaArabic: "اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي",
    duaEnglish: "O Allah, forgive my sins.",
    isSpecial: false
  },
  {
    roza: 5, date: "2026-02-23", dayOfWeek: "Monday",
    hijriDate: "5 Ramadan 1447", sehriTime: "5:37 AM", iftarTime: "6:45 PM",
    fastingDuration: "13h 08m", significance: "",
    duaArabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    duaEnglish: "My Lord, expand my chest and ease my task for me.",
    isSpecial: false
  },
  {
    roza: 6, date: "2026-02-24", dayOfWeek: "Tuesday",
    hijriDate: "6 Ramadan 1447", sehriTime: "5:36 AM", iftarTime: "6:46 PM",
    fastingDuration: "13h 10m", significance: "",
    duaArabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    duaEnglish: "O Allah, I seek refuge in You from worry and grief.",
    isSpecial: false
  },
  {
    roza: 7, date: "2026-02-25", dayOfWeek: "Wednesday",
    hijriDate: "7 Ramadan 1447", sehriTime: "5:35 AM", iftarTime: "6:46 PM",
    fastingDuration: "13h 11m", significance: "",
    duaArabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
    duaEnglish: "Our Lord, do not impose blame upon us if we forget or err.",
    isSpecial: false
  },
  {
    roza: 8, date: "2026-02-26", dayOfWeek: "Thursday",
    hijriDate: "8 Ramadan 1447", sehriTime: "5:34 AM", iftarTime: "6:46 PM",
    fastingDuration: "13h 12m", significance: "",
    duaArabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    duaEnglish: "O Allah, help me remember You, thank You, and worship You well.",
    isSpecial: false
  },
  {
    roza: 9, date: "2026-02-27", dayOfWeek: "Friday",
    hijriDate: "9 Ramadan 1447", sehriTime: "5:33 AM", iftarTime: "6:47 PM",
    fastingDuration: "13h 14m", significance: "Jumu'ah — seek blessings and make abundant dua.",
    duaArabic: "رَبِّ زِدْنِي عِلْمًا",
    duaEnglish: "My Lord, increase me in knowledge.",
    isSpecial: false
  },
  {
    roza: 10, date: "2026-02-28", dayOfWeek: "Saturday",
    hijriDate: "10 Ramadan 1447", sehriTime: "5:32 AM", iftarTime: "6:47 PM",
    fastingDuration: "13h 15m", significance: "Death of Khadijah (RA) — the Prophet's beloved first wife (some narrations).",
    duaArabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    duaEnglish: "O Allah, You are Forgiving and love forgiveness, so forgive me.",
    isSpecial: false
  },

  // ✅ UPDATED SECTION (CARD MATCHED)

  { roza: 11, date: "2026-03-01", dayOfWeek: "Sunday", hijriDate: "11 Ramadan 1447", sehriTime: "5:35 AM", iftarTime: "6:47 PM", fastingDuration: "13h 16m", significance: "", duaArabic: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي", duaEnglish: "O Allah, rectify my religion for me, which is the safeguard of my affairs.", isSpecial: false },

  { roza: 12, date: "2026-03-02", dayOfWeek: "Monday", hijriDate: "12 Ramadan 1447", sehriTime: "5:34 AM", iftarTime: "6:47 PM", fastingDuration: "13h 18m", significance: "", duaArabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ", duaEnglish: "O Allah, I ask You for Paradise and seek refuge from the Fire.", isSpecial: false },

  { roza: 13, date: "2026-03-03", dayOfWeek: "Tuesday", hijriDate: "13 Ramadan 1447", sehriTime: "5:33 AM", iftarTime: "6:47 PM", fastingDuration: "13h 19m", significance: "", duaArabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ", duaEnglish: "Our Lord, grant us comfort in our spouses and offspring.", isSpecial: false },

  { roza: 14, date: "2026-03-04", dayOfWeek: "Wednesday", hijriDate: "14 Ramadan 1447", sehriTime: "5:32 AM", iftarTime: "6:48 PM", fastingDuration: "13h 20m", significance: "", duaArabic: "اللَّهُمَّ بَارِكْ لَنَا فِي رَمَضَانَ", duaEnglish: "O Allah, bless us in Ramadan.", isSpecial: false },

  { roza: 15, date: "2026-03-05", dayOfWeek: "Thursday", hijriDate: "15 Ramadan 1447", sehriTime: "5:32 AM", iftarTime: "6:48 PM", fastingDuration: "13h 22m", significance: "Mid-Ramadan — the halfway point. Renew your intentions.", duaArabic: "اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ", duaEnglish: "O Allah, accept from us, indeed You are the All-Hearing, All-Knowing.", isSpecial: false },

  { roza: 16, date: "2026-03-06", dayOfWeek: "Friday", hijriDate: "16 Ramadan 1447", sehriTime: "5:31 AM", iftarTime: "6:48 PM", fastingDuration: "13h 23m", significance: "Jumu'ah — the best day of the week.", duaArabic: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ", duaEnglish: "Our Lord, forgive us and our brothers who preceded us in faith.", isSpecial: false },

  { roza: 17, date: "2026-03-07", dayOfWeek: "Saturday", hijriDate: "17 Ramadan 1447", sehriTime: "5:30 AM", iftarTime: "6:48 PM", fastingDuration: "13h 24m", significance: "Battle of Badr (17th Ramadan) — the first major victory in Islam (624 CE).", duaArabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا", duaEnglish: "Our Lord, pour upon us patience, plant our feet firmly, and give us victory.", isSpecial: true, specialType: "badr" },

  { roza: 18, date: "2026-03-08", dayOfWeek: "Sunday", hijriDate: "18 Ramadan 1447", sehriTime: "5:29 AM", iftarTime: "6:48 PM", fastingDuration: "13h 26m", significance: "", duaArabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ", duaEnglish: "O Allah, send blessings upon Muhammad and the family of Muhammad.", isSpecial: false },

  { roza: 19, date: "2026-03-09", dayOfWeek: "Monday", hijriDate: "19 Ramadan 1447", sehriTime: "5:29 AM", iftarTime: "6:49 PM", fastingDuration: "13h 27m", significance: "", duaArabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ", duaEnglish: "O Allah, make me among the repentant and the purified.", isSpecial: false },

  { roza: 20, date: "2026-03-10", dayOfWeek: "Tuesday", hijriDate: "20 Ramadan 1447", sehriTime: "5:28 AM", iftarTime: "6:49 PM", fastingDuration: "13h 28m", significance: "Conquest of Makkah (20th Ramadan, 8 AH) — the peaceful liberation of Makkah.", duaArabic: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ", duaEnglish: "My Lord, let my entry be truthful and let my exit be truthful.", isSpecial: false },

  { roza: 21, date: "2026-03-11", dayOfWeek: "Wednesday", hijriDate: "21 Ramadan 1447", sehriTime: "5:27 AM", iftarTime: "6:49 PM", fastingDuration: "13h 30m", significance: "🌟 Last 10 Nights begin — Odd Night. Seek Laylat al-Qadr!", duaArabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", duaEnglish: "O Allah, You are the Most Generous Pardoner, You love to pardon, so pardon me.", isSpecial: true, specialType: "odd-night" },

  { roza: 22, date: "2026-03-12", dayOfWeek: "Thursday", hijriDate: "22 Ramadan 1447", sehriTime: "5:26 AM", iftarTime: "6:50 PM", fastingDuration: "13h 31m", significance: "Last 10 Nights — increase worship and I'tikaf.", duaArabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ", duaEnglish: "O Allah, save me from the Fire.", isSpecial: true, specialType: "last-10" },

  { roza: 23, date: "2026-03-13", dayOfWeek: "Friday", hijriDate: "23 Ramadan 1447", sehriTime: "5:25 AM", iftarTime: "6:50 PM", fastingDuration: "13h 32m", significance: "🌟 Odd Night + Jumu'ah — potential Laylat al-Qadr.", duaArabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", duaEnglish: "O Allah, You are Forgiving and love forgiveness, so forgive me.", isSpecial: true, specialType: "odd-night" },

  { roza: 24, date: "2026-03-14", dayOfWeek: "Saturday", hijriDate: "24 Ramadan 1447", sehriTime: "5:24 AM", iftarTime: "6:50 PM", fastingDuration: "13h 32m", significance: "Last 10 Nights — continue seeking Laylat al-Qadr.", duaArabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", duaEnglish: "Our Lord, we have wronged ourselves; if You forgive us not, we shall be losers.", isSpecial: true, specialType: "last-10" },

  { roza: 25, date: "2026-03-15", dayOfWeek: "Sunday", hijriDate: "25 Ramadan 1447", sehriTime: "5:24 AM", iftarTime: "6:50 PM", fastingDuration: "13h 34m", significance: "🌟 Odd Night — potential Laylat al-Qadr.", duaArabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", duaEnglish: "O Allah, You are Forgiving and love forgiveness, so forgive me.", isSpecial: true, specialType: "odd-night" },

  { roza: 26, date: "2026-03-16", dayOfWeek: "Monday", hijriDate: "26 Ramadan 1447", sehriTime: "5:23 AM", iftarTime: "6:51 PM", fastingDuration: "13h 35m", significance: "Last 10 Nights — stay steadfast in worship.", duaArabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ", duaEnglish: "O Allah, guide me among those You have guided.", isSpecial: true, specialType: "last-10" },

  { roza: 27, date: "2026-03-17", dayOfWeek: "Tuesday", hijriDate: "27 Ramadan 1447", sehriTime: "5:22 AM", iftarTime: "6:51 PM", fastingDuration: "13h 36m", significance: "✨ Laylat al-Qadr — The Night of Power! Better than a thousand months (Quran 97:3).", duaArabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", duaEnglish: "O Allah, You are Forgiving and love forgiveness, so forgive me.", isSpecial: true, specialType: "laylatul-qadr" },

  { roza: 28, date: "2026-03-18", dayOfWeek: "Wednesday", hijriDate: "28 Ramadan 1447", sehriTime: "5:21 AM", iftarTime: "6:51 PM", fastingDuration: "13h 36m", significance: "Last 10 Nights — continue in devotion.", duaArabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ", duaEnglish: "Our Lord, accept from us. Indeed, You are the All-Hearing, All-Knowing.", isSpecial: true, specialType: "last-10" },

  { roza: 29, date: "2026-03-19", dayOfWeek: "Thursday", hijriDate: "29 Ramadan 1447", sehriTime: "5:20 AM", iftarTime: "6:51 PM", fastingDuration: "13h 38m", significance: "🌟 Odd Night — one of the final chances for Laylat al-Qadr.", duaArabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", duaEnglish: "O Allah, You are Forgiving and love forgiveness, so forgive me.", isSpecial: true, specialType: "odd-night" },

  { roza: 30, date: "2026-03-20", dayOfWeek: "Friday", hijriDate: "30 Ramadan 1447", sehriTime: "5:19 AM", iftarTime: "6:52 PM", fastingDuration: "13h 39m", significance: "Last day of Ramadan — prepare for Eid ul-Fitr! 🎉", duaArabic: "اللَّهُمَّ تَقَبَّلْ مِنَّا صِيَامَنَا وَقِيَامَنَا", duaEnglish: "O Allah, accept our fasting and our prayers.", isSpecial: true }
];


export const getTodayRoza = (): RozaDay | undefined => {
  const today = new Date().toISOString().split("T")[0];
  return ramadanData.find((r) => r.date === today);
};

export const getNextIftarTime = (): Date | null => {
  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const todayRoza = ramadanData.find((r) => r.date === today);
  if (!todayRoza) return null;

  const [time, period] = todayRoza.iftarTime.split(" ");
  const [hours, minutes] = time.split(":").map(Number);
  const iftarDate = new Date(now);
  iftarDate.setHours(period === "PM" && hours !== 12 ? hours + 12 : hours, minutes, 0, 0);

  if (iftarDate <= now) return null;
  return iftarDate;
};
