/*
  הגדרות פרטי קשר, שליחת טפסים ופיקסלים.
  ממלאים רק את מה שיש. פיקסל בלי מזהה לא נטען.
*/
window.SITE_CONFIG = {
  businessName: "שלומי רביבו",
  phone: "054-5438821",
  whatsapp: "972545438821", // מספר בינלאומי בלי + ובלי מקפים
  instagram: "",          // קישור מלא לאינסטגרם
  email: "",

  // ---- פרטים שמופיעים באתר רק כשממלאים אותם (ריק = המשפט לא מוצג) ----
  replyHours: "",         // תוך כמה שעות חוזרים לפנייה, למשל "24"
  serviceDays: "",        // תוך כמה ימי עבודה מגיעים לתקלה, למשל "3"
  warranty: "",           // למשל "שלד 10 שנים · צבע 10 · מנוע 5 · בד 5"
  priceNote: "",          // טווח המחיר של העסק, משפט אחד
  about: [],              // 2-3 משפטים על שלומי, כל משפט מחרוזת נפרדת

  // לאן נשלחים הלידים: כתובת שמקבלת POST עם JSON (Formspree / Make / Supabase Edge Function וכו').
  // אם ריק, הטופס פותח וואטסאפ עם הודעה מוכנה.
  formEndpoint: "",

  metaPixelId: "",        // Meta Pixel
  googleTagId: ""         // למשל "G-XXXXXXX" או "AW-XXXXXXX"
};

(function () {
  var c = window.SITE_CONFIG;
  if (c.metaPixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', c.metaPixelId); fbq('track', 'PageView');
  }
  if (c.googleTagId) {
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + c.googleTagId;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', c.googleTagId);
  }
  window.trackLead = function (data) {
    if (window.fbq) fbq('track', 'Lead', { content_name: data.product || '' });
    if (window.gtag) gtag('event', 'generate_lead', { product: data.product || '', source: data.utm_source || '' });
  };
})();
