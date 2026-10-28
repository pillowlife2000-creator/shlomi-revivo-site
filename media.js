/*
  כל המדיה של האתר מוגדרת כאן.
  קטע שאין בו פריטים מוסתר אוטומטית באתר.

  איך מוסיפים:
  1. שמים את הקבצים בתיקייה media/ (תמונות jpg/webp, סרטונים mp4 מכווצים עד ~20MB)
  2. מוסיפים שורה לרשימה המתאימה למטה.
  3. ai: true = הדמיה. האתר מסמן אותה "הדמיה" אוטומטית.
     כשמחליפים בעבודה אמיתית - מוחקים את ai: true.

  כיתוב טוב: יישוב · סוג נכס · מוצר · מידות. למשל: "יקנעם · בית פרטי · פרגולה גבוהה 6x4 + ZIP"
*/
window.SITE_MEDIA = {
  // תמונת הנוף שנחשפת באנימציית הפתיחה (המסך נגלל למעלה בגלילה)
  introView: "media/hero-view.jpg",

  // סרטון ראשי שמתנגן לבד (מושתק). למשל: { src: "media/hero.mp4", poster: "media/hero.jpg" }
  heroVideo: null,

  // סרטונים נוספים שנפתחים בלחיצה
  videos: [
    // { src: "media/zip-wind.mp4", caption: "קריית ביאליק · קומה 9 · מסך ZIP ביום רוח" },
  ],

  // גלריית עבודות - כרגע הדמיות להמחשה. להחליף בעבודות אמיתיות.
  gallery: [
    { src: "media/works/01.jpg", caption: "בית במושב בעמק · פרגולת אלומיניום גבוהה, אנתרציט", w: 1600, h: 1200, ai: true },
    { src: "media/works/10.jpg", caption: "בית ביישוב בגליל · פרגולה גבוהה + 3 מסכי ZIP", w: 1600, h: 1200, ai: true },
    { src: "media/works/07.jpg", caption: "סגירת חורף · פרגולה + מסכי ZIP בגשם", w: 1600, h: 1200, ai: true },
    { src: "media/works/05.jpg", caption: "דירה בקומה 9 בקריות · 2 מסכי ZIP נגד רוח", w: 1600, h: 1200, ai: true },
    { src: "media/works/03.jpg", caption: "וילה בגליל העליון · פרגולה ביוקלימטית (רפפות)", w: 1600, h: 1200, ai: true },
    { src: "media/works/08.jpg", caption: "פנטהאוז בכרמל · פרגולה גבוהה + ZIP לכיוון הים", w: 1600, h: 1200, ai: true },
    { src: "media/works/02.jpg", caption: "בית בגליל · פרגולה דמוי עץ, פוליקרבונט, LED ומאוורר", w: 1600, h: 1200, ai: true },
    { src: "media/works/04.jpg", caption: "פרט: רפפות מסתובבות, ניקוז ותאורה מובנים", w: 1600, h: 1200, ai: true },
    { src: "media/works/06.jpg", caption: "פרט: שולי מסך ZIP נעולים במסילת הצד", w: 1600, h: 1200, ai: true },
    { src: "media/works/09.jpg", caption: "התקנה: הרכבת קורה על עמודים, פילוס בלייזר", w: 1600, h: 1200, ai: true }
  ],

  // לפני ואחרי
  beforeAfter: [
    // { before: "media/ba/01-before.jpg", after: "media/ba/01-after.jpg", caption: "חיפה · החלפת פרגולת עץ ישנה באלומיניום" },
  ],

  // תמונה של בעל העסק לקטע "אודות"
  ownerPhoto: null
};
