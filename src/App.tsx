import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dumbbell, Flame, Shield, Zap, Award, Heart, Clock, Phone, Mail, MapPin, 
  MessageSquare, Languages, Check, ArrowRight, Sparkles, Trophy, 
  Calendar, Star, ChevronRight, Menu, X, Activity, ShieldCheck, Camera, Image as ImageIcon, Upload, ExternalLink
} from "lucide-react";

const translations = {
  en: {
    brand: "SFN FITNESS",
    status: "OPEN NOW // AJMAN-UAE",
    heroTitle1: "THE PEAK OF",
    heroTitle2: "GYM FITNESS",
    heroSub: "Premier athletic training and fitness hub in the heart of Ajman. Equipped with top-tier strength machines, heavy free weights, exclusive ladies' hours, and expert personal training by Coach Sharafu.",
    joinNow: "JOIN MEMBERSHIP",
    explorePricing: "VIEW MEMBERSHIP PLANS",
    virtualTour: "EXPLORE FACILITIES",
    coachBadge: "HEAD COACH: SHARAFU",
    equipmentBadge: "PREMIUM GYM EQUIPMENT",
    challengeBadge: "3-MONTH BELLY REMOVAL CHALLENGE ACTIVE",
    
    // Nav
    navTraining: "FACILITIES",
    navTiming: "SCHEDULE",
    navGallery: "GALLERY",
    navPricing: "MEMBERSHIP PLANS",
    navContact: "LOCATION & CONTACT",
    whatsappBtn: "INSTANT CHAT",

    // Services / Facilities
    servicesHeader: "PREMIER GYM FACILITIES",
    servicesSub: "Modern strength equipment, dedicated ladies' zone, cardio machinery, and professional personal coaching in Ajman.",
    s1Title: "STRENGTH & FREE WEIGHTS",
    s1Sub: "HEAVY IRON & MACHINES",
    s1Desc: "Comprehensive selection of pin-selected machines, plate-loaded stations, dumbbells, squat racks, and power benches for serious muscular strength.",
    s2Title: "PERSONAL TRAINING",
    s2Sub: "HEAD COACH SHARAFU",
    s2Desc: "One-on-one tailored workout programs, technique correction, body transformation, and customized workout guidance with Coach Sharafu.",
    s3Title: "CARDIO & ENDURANCE",
    s3Sub: "STAMINA & FAT LOSS",
    s3Desc: "Treadmills, elliptical trainers, stationary bikes, and conditioning gear designed to boost cardiovascular endurance and burn fat efficiently.",
    s4Title: "EXCLUSIVE LADIES GYM",
    s4Sub: "100% PRIVATE ATHLETIC SUITE",
    s4Desc: "A dedicated, fully equipped, and private workout environment giving female members complete comfort and privacy every single day.",

    // Timings
    timingHeader: "OPERATION SCHEDULE",
    timingSub: "7 days a week operations featuring general mixed sessions and daily dedicated ladies-only access.",
    mixedTitle: "GENERAL TRAINING (MIXED)",
    mixedTime1: "05:30 AM - 12:00 PM",
    mixedTime2: "03:30 PM - 02:00 AM",
    mixedDesc: "Full facility access for men & women with on-floor trainer assistance and motivating atmosphere.",
    ladiesTitle: "LADIES EXCLUSIVE TIME",
    ladiesTime: "12:00 PM - 03:30 PM",
    ladiesDesc: "100% private access reserved exclusively for female members every single day.",
    ptTitle: "PERSONAL TRAINING & VIP",
    ptTime: "BY APPOINTMENT",
    ptDesc: "Dedicated 1-on-1 coaching sessions scheduled around your availability for fast-tracked physical goals.",
    dailyNote: "Schedule active Monday through Sunday at City Tower, Al Nuaimia 3, Ajman.",

    // Gallery
    galleryHeader: "SFN GYM GALLERY",
    gallerySub: "Real photos from our training floors and facility layout (Official photos coming soon).",
    uploadNotice: "OFFICIAL PHOTOS COMING SOON",
    uploadDesc: "Photo slots reserved for official SFN Fitness high-resolution gym photos.",

    // Pricing
    pricingHeader: "MEMBERSHIP PACKAGES",
    pricingSub: "Clear, straightforward pricing with zero hidden fees. Pick your duration and start training today.",
    dayPass: "1 DAY PASS",
    dayDesc: "Single day full gym & facility access.",
    oneMonth: "1 MONTH MEMBERSHIP",
    oneDesc: "30 days of full daily gym access.",
    twoMonths: "2 MONTHS MEMBERSHIP",
    twoDesc: "Sustained momentum and muscle conditioning.",
    threeMonths: "3 MONTHS MEMBERSHIP",
    threeDesc: "Most Popular! Automatically includes entry to the 3-Month Belly Removal Challenge.",
    sixMonths: "6 MONTHS MEMBERSHIP",
    sixDesc: "Serious long-term physical transformation & endurance.",
    oneYear: "1 YEAR VIP MEMBERSHIP",
    yearDesc: "Best annual value with full year unlimited gym access.",
    currency: "AED",
    popularTag: "MOST POPULAR // CHALLENGE INCLUDED",
    choosePlan: "SELECT PLAN",
    couplePromo: "⚡ SPECIAL COUPLE & GROUP DISCOUNTS AVAILABLE UPON REQUEST!",

    // Contact
    contactHeader: "CONTACT & LOCATION",
    contactSub: "Reach out to reception directly or chat via WhatsApp for instant membership inquiry.",
    phoneLabel: "LANDLINE PHONE",
    whatsappLabel: "DIRECT WHATSAPP",
    emailLabel: "EMAIL ADDRESS",
    locationLabel: "ADDRESS LOCATION",
    socialLabel: "INSTAGRAM PAGE",
    addressValue: "Tower A1, City Tower, Al Nuaimia 3, Ajman, UAE",
    openMapBtn: "OPEN IN GOOGLE MAPS",
    chatNow: "START CHAT NOW",
    footerText: "© 2026 SFN FITNESS. ALL RIGHTS RESERVED."
  },
  ar: {
    brand: "SFN فيتنس",
    status: "مفتوح الآن // عجمان - الإمارات",
    heroTitle1: "قمة اللياقة",
    heroTitle2: "والبناء البدني",
    heroSub: "المركز الرياضي والأفضل للتدريب في قلب عجمان. مجهز بأحدث أجهزة القوة، الأوزان الحرة، فترات خاصة بالسيدات، وإشراف مباشر من الكابتن شرفو.",
    joinNow: "اشترك الآن",
    explorePricing: "عرض باقات العضوية",
    virtualTour: "استكشف المرافق",
    coachBadge: "المدرب الرئيسي: شرفو",
    equipmentBadge: "معدات رياضية احترافية",
    challengeBadge: "تحدي إزالة الكرش لمدة 3 أشهر نشط الآن",
    
    // Nav
    navTraining: "المرافق والخدمات",
    navTiming: "جدول المواعيد",
    navGallery: "معرض الصور",
    navPricing: "باقات العضوية",
    navContact: "الموقع والتواصل",
    whatsappBtn: "تواصل واتساب",

    // Services / Facilities
    servicesHeader: "مرافق الصالة الرياضية",
    servicesSub: "أحدث معدات القوة والحديد، قسم خاص ومستقل للسيدات، وأجهزة الكارديو بإشراف مدربين محترفين في عجمان.",
    s1Title: "قسم القوة والأوزان الحرة",
    s1Sub: "معدات وأجهزة الحديد",
    s1Desc: "تشكيلة واسعة من أجهزة التمارين المستهدفة، منصات السكوات، ومقاعد البنش والأوزان الحرة لبناء العضلات وزيادة القوة.",
    s2Title: "التدريب الشخصي المباشر",
    s2Sub: "إشراف الكابتن شرفو",
    s2Desc: "برامج تدريبية مخصصة 1 على 1، تصحيح التكنيك والأداء، وتوجيه متكامل لتحقيق أهدافك البدنية بفعالية.",
    s3Title: "منطقة الكارديو واللياقة",
    s3Sub: "تحمل وحرق الدهون",
    s3Desc: "أجهزة الجري، الدراجات الرياضية، وأدوات اللياقة البدنية لحرق الدهون وتحسين صحة القلب والتحمل البدني.",
    s4Title: "القسم الخاص بالسيدات",
    s4Sub: "بيئة تدريب خاصة ومستقلة 100%",
    s4Desc: "صالة مجهزة بالكامل تضمن الخصوصية التامة والراحة المطلقة للسيدات يومياً طوال فترة الساعات المخصصة.",

    // Timings
    timingHeader: "جدول أوقات العمل",
    timingSub: "مواعيد عمل طوال أيام الأسبوع السبعة تتضمن أوقاتاً مختلطة وفترات يومية محجوزة حصرياً للسيدات.",
    mixedTitle: "التدريب العام (الأوقات المختلطة)",
    mixedTime1: "05:30 صباحاً - 12:00 ظهراً",
    mixedTime2: "03:30 عصراً - 02:00 صباحاً",
    mixedDesc: "دخول كامل للمنشأة ومرافقها مع توفير المساعدة الفنية والارشادية من الكادر التدريبي.",
    ladiesTitle: "الوقت الحصري للسيدات",
    ladiesTime: "12:00 ظهراً - 03:30 عصراً",
    ladiesDesc: "خصوصية تامة 100% محجوزة حصرياً للسيدات للاستمتاع بحرية في الصالة ومعداتها يومياً.",
    ptTitle: "التدريب الشخصي والـ VIP",
    ptTime: "حسب الموعد المسبق",
    ptDesc: "جلسات مخصصة تتماشى مع جدولك الزمني وأهدافك البدنية للوصول إلى التحول المطلوب بسرعة.",
    dailyNote: "الجدول يعمل طوال أيام الأسبوع من الاثنين إلى الأحد في سيتي تاور، عجمان.",

    // Gallery
    galleryHeader: "معرض صور النادي",
    gallerySub: "صور واقعية لمرافق ومعدات النادي (سيتّم رفع الصور الرسمية قريباً).",
    uploadNotice: "سيتم رفع الصور الرسمية قريباً",
    uploadDesc: "خانة مخصصة لرفع صور النادي عالية الدقة.",

    // Pricing
    pricingHeader: "باقات العضوية والاشتراكات",
    pricingSub: "أسعار شفافة بدون أي رسوم مخفية. اختر المدة المناسبة وانطلق فوراً في رحلتك الرياضية.",
    dayPass: "اشتراك يوم واحد",
    dayDesc: "تذكرة ليوم كامل لتجربة النادي وجميع الأجهزة والتمارين.",
    oneMonth: "اشتراك شهر واحد",
    oneDesc: "30 يوماً من الدخول اليومي غير المحدود لجميع مرافق النادي.",
    twoMonths: "اشتراك شهرين",
    twoDesc: "تقدم مستمر وبناء قوي للياقة البدنية ورسم العضلات.",
    threeMonths: "اشتراك 3 أشهر",
    threeDesc: "الأكثر طلباً! يشمل تلقائياً الدخول في تحدي إزالة الكرش الخاص.",
    sixMonths: "اشتراك 6 أشهر",
    sixDesc: "التزام جاد بالتحول الكامل للشكل والقدرة البدنية.",
    oneYear: "اشتراك سنة كاملة",
    yearDesc: "أفضل استثمار سنوي لنمط حياة رياضي مستدام مع أعلى قيمة.",
    currency: "درهم",
    popularTag: "الأكثر شهرة // يشمل التحدي الخاص",
    choosePlan: "اختر الباقة الآن",
    couplePromo: "⚡ خصومات وعروض حصرية للأزواج والمجموعات متوفرة عند الطلب!",

    // Contact
    contactHeader: "التواصل والموقع الجغرافي",
    contactSub: "تواصل مع الاستقبال مباشرة عبر الهاتف أو الواتساب للاستفسار والتسجيل.",
    phoneLabel: "الهاتف الثابت",
    whatsappLabel: "واتساب مباشر",
    emailLabel: "البريد الإلكتروني",
    locationLabel: "عنوان النادي",
    socialLabel: "إنستغرام النادي",
    addressValue: "برج A1، سيتي تاور، النعيمية 3، عجمان، الإمارات العربية المتحدة",
    openMapBtn: "الفتح في خرائط جوجل",
    chatNow: "بدء التحدث الآن",
    footerText: "© 2026 SFN فيتنس. جميع الحقوق محفوظة."
  }
};

const packages = [
  { id: "day", price: "20", titleKey: "dayPass", descKey: "dayDesc", featured: false, code: "DAY_PASS" },
  { id: "month", price: "125", titleKey: "oneMonth", descKey: "oneDesc", featured: false, code: "1_MONTH" },
  { id: "two", price: "230", titleKey: "twoMonths", descKey: "twoDesc", featured: false, code: "2_MONTHS" },
  { id: "three", price: "325", titleKey: "threeMonths", descKey: "threeDesc", featured: true, code: "3_MONTHS" },
  { id: "six", price: "540", titleKey: "sixMonths", descKey: "sixDesc", featured: false, code: "6_MONTHS" },
  { id: "year", price: "900", titleKey: "oneYear", descKey: "yearDesc", featured: false, code: "1_YEAR" },
];

const fallbackImg = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=800&auto=format&fit=crop";
const googleMapsDirectUrl = "https://maps.google.com/?q=City+Tower+Al+Nuaimia+3+Ajman";

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = "https://wa.me/971567772004?text=Hello%20SFN%20Fitness!%20I%27d%20like%20to%20inquire%20about%20your%20gym%20memberships%20and%20packages.";

  return (
    <div className={`min-h-screen bg-[#040604] bg-cyber-grid text-slate-100 ${isRtl ? 'dir-rtl text-right' : 'dir-ltr text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* AMBIENT RADIAL LIGHTS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-[#74E600]/10 blur-[100px] sm:blur-[160px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-2 sm:top-3 left-0 right-0 z-50 px-2 sm:px-4 max-w-7xl mx-auto">
        <nav className="cyber-panel-nav px-3.5 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between">
          
          {/* OFFICIAL SFN LOGO & BRAND */}
          <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img 
              src="/sfn_logo.png" 
              alt="SFN Fitness Official Logo" 
              className="h-8 sm:h-11 md:h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(116,230,0,0.5)] transform hover:scale-105 transition-transform" 
            />
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-2xl font-black tracking-wider text-white flex items-center gap-1 text-glow-neon">
                  {t.brand}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#74E600] animate-pulse" />
              </div>
              <div className="flex items-center gap-2 text-[9px] sm:text-[10px] tracking-widest text-[#74E600] font-tech font-bold -mt-1 uppercase">
                <span>{t.status}</span>
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7 font-tech font-bold text-xs text-slate-300 tracking-widest uppercase">
            <button onClick={() => scrollToSection("services")} className="hover:text-[#74E600] transition-colors flex items-center gap-1">
              <Dumbbell className="w-3.5 h-3.5 text-[#74E600]" /> {t.navTraining}
            </button>
            <button onClick={() => scrollToSection("timings")} className="hover:text-[#74E600] transition-colors flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#74E600]" /> {t.navTiming}
            </button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-[#74E600] transition-colors flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5 text-[#74E600]" /> {t.navGallery}
            </button>
            <button onClick={() => scrollToSection("pricing")} className="hover:text-[#74E600] transition-colors flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-[#74E600]" /> {t.navPricing}
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#74E600] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#74E600]" /> {t.navContact}
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="cyber-badge px-3 py-1.5 text-xs font-extrabold flex items-center gap-1.5 hover:bg-[#74E600] hover:text-black transition-all"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'العربية // AR' : 'ENGLISH // EN'}</span>
            </button>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button px-4 lg:px-5 py-2 text-xs flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" />
              <span>{t.whatsappBtn}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button onClick={toggleLang} className="cyber-badge px-2.5 py-1 text-[10px] font-extrabold">
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1.5 text-slate-200 hover:text-[#74E600]">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              className="sm:hidden mt-2 cyber-card p-4 border border-[#74E600]/40 flex flex-col gap-2.5 font-tech tracking-widest text-center shadow-2xl bg-[#040604] border-t-2"
            >
              <button onClick={() => scrollToSection("services")} className="py-2.5 font-bold text-slate-200 hover:text-[#74E600] border-b border-white/10 flex items-center justify-center gap-2 text-xs">
                <Dumbbell className="w-4 h-4 text-[#74E600]" /> {t.navTraining}
              </button>
              <button onClick={() => scrollToSection("timings")} className="py-2.5 font-bold text-slate-200 hover:text-[#74E600] border-b border-white/10 flex items-center justify-center gap-2 text-xs">
                <Clock className="w-4 h-4 text-[#74E600]" /> {t.navTiming}
              </button>
              <button onClick={() => scrollToSection("gallery")} className="py-2.5 font-bold text-slate-200 hover:text-[#74E600] border-b border-white/10 flex items-center justify-center gap-2 text-xs">
                <ImageIcon className="w-4 h-4 text-[#74E600]" /> {t.navGallery}
              </button>
              <button onClick={() => scrollToSection("pricing")} className="py-2.5 font-bold text-slate-200 hover:text-[#74E600] border-b border-white/10 flex items-center justify-center gap-2 text-xs">
                <Trophy className="w-4 h-4 text-[#74E600]" /> {t.navPricing}
              </button>
              <button onClick={() => scrollToSection("contact")} className="py-2.5 font-bold text-slate-200 hover:text-[#74E600] flex items-center justify-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#74E600]" /> {t.navContact}
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button py-3 text-center block mt-2 text-xs"
              >
                💬 {t.whatsappBtn}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-24 pb-16 sm:pt-36 sm:pb-28 px-3 sm:px-4 max-w-7xl mx-auto z-10 min-h-[85vh] flex flex-col justify-center">
        
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl sm:rounded-3xl border border-[#74E600]/40 shadow-2xl bg-[#091209]">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=800&auto=format&fit=crop" 
            alt="SFN Fitness Gym Floor Background" 
            className="w-full h-full object-cover filter brightness-105 contrast-110 opacity-80"
            loading="eager"
            onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040604]/90 via-[#040604]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040604] via-transparent to-[#040604]/40" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pl-1 sm:pl-4">
            
            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-4 sm:mb-6 font-tech"
            >
              <span className="cyber-badge px-3 py-1 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-md">
                <Trophy className="w-3.5 h-3.5 text-[#74E600]" /> {t.coachBadge}
              </span>
              <span className="px-3 py-1 bg-black/70 border border-white/30 text-slate-100 font-bold text-[11px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md rounded-md">
                <Dumbbell className="w-3.5 h-3.5 text-[#74E600]" /> {t.equipmentBadge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-[5.6rem] font-black tracking-tight leading-[0.95] uppercase mb-4 sm:mb-6 drop-shadow-2xl"
            >
              <span className="block text-white drop-shadow-lg">{t.heroTitle1}</span>
              <span className="block text-[#74E600] text-glow-neon">
                {t.heroTitle2}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-100 max-w-2xl text-xs sm:text-lg md:text-xl font-medium leading-relaxed mb-6 sm:mb-8 bg-black/80 p-3.5 sm:p-4 rounded-xl border border-white/20 shadow-2xl"
            >
              {t.heroSub}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full"
            >
              <button 
                onClick={() => scrollToSection("pricing")}
                className="cyber-button px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-lg flex items-center gap-3 justify-center shadow-xl shadow-[#74E600]/40 w-full sm:w-auto"
              >
                <span>{t.joinNow}</span>
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              
              <button 
                onClick={() => scrollToSection("services")}
                className="cyber-button-outline px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-lg flex items-center gap-3 justify-center bg-black/80 shadow-lg w-full sm:w-auto"
              >
                <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 text-[#74E600]" />
                <span>{t.virtualTour}</span>
              </button>
            </motion.div>

            {/* Belly Challenge Banner */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 sm:mt-8 w-full sm:w-auto cyber-card px-4 sm:px-6 py-3 sm:py-4 border-amber-400/60 text-amber-300 font-extrabold text-xs sm:text-base flex items-center gap-3 shadow-xl shadow-amber-500/20 bg-black/90"
            >
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0 animate-bounce" />
              <span>🔥 {t.challengeBadge}</span>
            </motion.div>

          </div>

          {/* Right Side Visual Logo & Schedule Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 pr-1 sm:pr-4"
          >
            {/* Official Logo Display Card */}
            <div className="cyber-card p-6 sm:p-8 border-[#74E600]/60 bg-black/90 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#74E600] text-black font-tech text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                OFFICIAL GYM // AJMAN
              </div>

              <div className="my-3 sm:my-4 relative">
                <div className="absolute -inset-4 bg-[#74E600]/20 rounded-full blur-xl group-hover:bg-[#74E600]/30 transition-all" />
                <img 
                  src="/sfn_logo.png" 
                  alt="SFN Fitness Official Emblem" 
                  className="h-24 sm:h-44 w-auto object-contain relative z-10 drop-shadow-[0_0_20px_rgba(116,230,0,0.6)] transform group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-white uppercase tracking-wider mb-1 text-glow-neon">
                SFN FITNESS
              </h3>
              <p className="text-[10px] sm:text-xs font-tech text-[#74E600] font-bold tracking-widest uppercase mb-4">
                CITY TOWER A1 // AL NUAIMIA 3, AJMAN
              </p>

              <div className="w-full pt-3 sm:pt-4 border-t border-white/10 space-y-2 font-tech text-[10px] sm:text-xs">
                <div className="p-2 sm:p-2.5 bg-white/5 border border-white/10 flex items-center justify-between rounded">
                  <span className="text-slate-300 font-bold uppercase">MORNING MIXED:</span>
                  <span className="text-[#74E600] font-extrabold">05:30 AM - 12:00 PM</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-pink-950/40 border border-pink-500/40 flex items-center justify-between rounded">
                  <span className="text-pink-300 font-bold uppercase">LADIES ONLY:</span>
                  <span className="text-pink-400 font-extrabold">12:00 PM - 03:30 PM</span>
                </div>
                <div className="p-2 sm:p-2.5 bg-white/5 border border-white/10 flex items-center justify-between rounded">
                  <span className="text-slate-300 font-bold uppercase">EVENING MIXED:</span>
                  <span className="text-[#74E600] font-extrabold">03:30 PM - 02:00 AM</span>
                </div>
              </div>
            </div>

            {/* Quick Ladies Notice */}
            <div className="cyber-card p-3.5 sm:p-4 border-pink-500/50 bg-black/90 flex items-center justify-between font-tech text-xs text-slate-200 shadow-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 shrink-0" /> 
                <span className="font-bold text-[10px] sm:text-xs">LADIES HOURS: <span className="text-pink-400">12:00 PM - 3:30 PM</span></span>
              </div>
              <span className="text-pink-400 font-extrabold uppercase bg-pink-500/10 px-2 py-0.5 text-[9px] sm:text-[10px]">100% PRIVATE</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PREMIER GYM FACILITIES & SERVICES */}
      <section id="services" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto relative z-10 border-t border-[#74E600]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-tech font-extrabold text-[#74E600] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#74E600]" /> // OUR FACILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              {t.servicesHeader}
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-base max-w-lg">
            {t.servicesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Feature 1: Strength & Free Weights */}
          <div className="relative overflow-hidden cyber-card group border-[#74E600]/40 hover:border-[#74E600] flex flex-col justify-between min-h-[360px] sm:min-h-[440px] p-6 sm:p-8 shadow-xl bg-[#0a120a]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=75&w=800&auto=format&fit=crop" 
                alt="Strength & Free Weights Equipment" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040604] via-[#040604]/50 to-black/20" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#74E600] text-black font-bold border border-black flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#74E600]/40">
                  <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs font-tech text-[#74E600] uppercase font-extrabold tracking-widest block mb-1 drop-shadow-md">{t.s1Sub}</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-wide drop-shadow-lg">{t.s1Title}</h3>
                <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed mb-6 bg-black/80 p-3 sm:p-3.5 border border-white/10 rounded-md">{t.s1Desc}</p>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-white/20 flex items-center justify-between font-tech text-xs font-extrabold text-[#74E600] bg-black/80 px-3 py-2 rounded-md">
                <span>HEAVY IRON & SQUAT RACKS</span>
                <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>

          {/* Feature 2: Personal Training by Coach Sharafu */}
          <div className="relative overflow-hidden cyber-card-glow group flex flex-col justify-between min-h-[360px] sm:min-h-[440px] p-6 sm:p-8 shadow-xl bg-[#0f170f]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=75&w=800&auto=format&fit=crop" 
                alt="Personal Training & Coaching" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040604] via-[#040604]/50 to-black/20" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-400 text-black font-bold border border-black flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-amber-400/40">
                  <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs font-tech text-amber-400 uppercase font-extrabold tracking-widest block mb-1 drop-shadow-md">{t.s2Sub}</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-wide drop-shadow-lg">{t.s2Title}</h3>
                <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed mb-6 bg-black/80 p-3 sm:p-3.5 border border-white/10 rounded-md">{t.s2Desc}</p>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-amber-400/30 flex items-center justify-between font-tech text-xs font-extrabold text-amber-300 bg-black/80 px-3 py-2 rounded-md">
                <span>1-ON-1 TAILORED COACHING</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Feature 3: Cardio & Endurance */}
          <div className="relative overflow-hidden cyber-card group border-[#74E600]/40 hover:border-[#74E600] flex flex-col justify-between min-h-[360px] sm:min-h-[440px] p-6 sm:p-8 shadow-xl bg-[#0a120a]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=75&w=800&auto=format&fit=crop" 
                alt="Cardio Equipment & Treadmills" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040604] via-[#040604]/50 to-black/20" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#74E600] text-black font-bold border border-black flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#74E600]/40">
                  <Flame className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs font-tech text-[#74E600] uppercase font-extrabold tracking-widest block mb-1 drop-shadow-md">{t.s3Sub}</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-wide drop-shadow-lg">{t.s3Title}</h3>
                <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed mb-6 bg-black/80 p-3 sm:p-3.5 border border-white/10 rounded-md">{t.s3Desc}</p>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-white/20 flex items-center justify-between font-tech text-xs font-extrabold text-[#74E600] bg-black/80 px-3 py-2 rounded-md">
                <span>TREADMILLS & FAT BURN</span>
                <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </div>

        </div>

        {/* Featured Card: Exclusive Ladies Gym */}
        <div className="relative overflow-hidden cyber-card border-pink-500/60 group shadow-xl bg-[#120a10]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=75&w=800&auto=format&fit=crop" 
              alt="Ladies Private Gym Studio" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040604]/90 via-[#040604]/60 to-black/30" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-pink-400 font-tech text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md">
                <Shield className="w-4 h-4" /> <span>{t.s4Sub}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3 sm:mb-4 drop-shadow-lg">{t.s4Title}</h3>
              <p className="text-slate-100 text-xs sm:text-lg font-medium leading-relaxed bg-black/80 p-3.5 sm:p-4 border border-pink-500/20 rounded-md">{t.s4Desc}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <div className="p-3.5 sm:p-4 bg-black/80 border border-pink-500/50 text-center font-tech shadow-lg rounded-md">
                <span className="block text-[11px] sm:text-xs text-pink-300 font-bold uppercase">DAILY LADIES HOURS</span>
                <span className="block text-lg sm:text-xl font-black text-pink-400">12:00 PM - 03:30 PM</span>
              </div>
              <button 
                onClick={() => scrollToSection("timings")}
                className="px-6 py-3.5 sm:py-4 bg-pink-600 hover:bg-pink-500 text-white font-tech font-bold text-xs uppercase tracking-wider transition-colors w-full sm:w-auto shadow-lg shadow-pink-600/40 text-center rounded-md"
              >
                VIEW SCHEDULE
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* OPERATION SCHEDULE WITH DYNAMICALLY ANIMATED ICONS */}
      <section id="timings" className="py-16 sm:py-24 px-3 sm:px-4 bg-cyber-radial border-y border-[#74E600]/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-tech font-extrabold text-[#74E600] tracking-widest uppercase mb-2 block">
              // TIMING SCHEDULE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 sm:mb-4">
              {t.timingHeader}
            </h2>
            <p className="text-slate-400 text-xs sm:text-lg max-w-2xl mx-auto">
              {t.timingSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            
            {/* Mixed Hours */}
            <div className="cyber-card p-6 sm:p-8 flex flex-col items-center text-center group border-[#74E600]/40 hover:border-[#74E600] transition-colors bg-[#081008]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#74E600] bg-black/90 shadow-lg shadow-[#74E600]/40 flex items-center justify-center relative mb-6">
                <div className="absolute inset-1.5 rounded-full border border-dashed border-[#74E600]/60 animate-spin" style={{ animationDuration: '30s' }} />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="w-9 h-9 sm:w-11 sm:h-11 text-[#74E600] drop-shadow-[0_0_10px_rgba(116,230,0,0.6)]" />
                </motion.div>
                <div className="absolute -bottom-2 px-3 py-0.5 rounded bg-[#74E600] text-black font-tech text-[10px] font-black uppercase shadow-md">
                  5:30 AM - 2:00 AM
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wider mb-2">{t.mixedTitle}</h3>
              <span className="text-base sm:text-lg font-tech font-extrabold text-[#74E600] tracking-wider block mb-1">{t.mixedTime1}</span>
              <span className="text-base sm:text-lg font-tech font-extrabold text-[#74E600] tracking-wider block mb-4">{t.mixedTime2}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{t.mixedDesc}</p>
            </div>

            {/* Ladies Exclusive Time */}
            <div className="cyber-card p-6 sm:p-8 flex flex-col items-center text-center group border-pink-500/60 shadow-xl shadow-pink-500/10 bg-gradient-to-b from-black via-pink-950/30 to-black">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-pink-500 bg-black/90 shadow-lg shadow-pink-500/50 flex items-center justify-center relative mb-6">
                <div className="absolute inset-1.5 rounded-full border border-dashed border-pink-400/60 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1, 1.15, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-9 h-9 sm:w-11 sm:h-11 text-pink-400 fill-pink-500/40 drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]" />
                </motion.div>
                <div className="absolute -bottom-2 px-3 py-0.5 rounded bg-pink-500 text-white font-tech text-[10px] font-black uppercase shadow-md">
                  12:00 PM - 3:30 PM
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wider mb-2">{t.ladiesTitle}</h3>
              <span className="text-xl sm:text-2xl font-tech font-black text-pink-400 tracking-wider block mb-4 sm:mb-5">{t.ladiesTime}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{t.ladiesDesc}</p>
            </div>

            {/* VIP Personal Training */}
            <div className="cyber-card p-6 sm:p-8 flex flex-col items-center text-center group border-amber-400/40 hover:border-amber-400 transition-colors bg-[#100e08]">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-400 bg-black/90 shadow-lg shadow-amber-400/30 flex items-center justify-center relative mb-6">
                <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-400/60 animate-spin" style={{ animationDuration: '40s' }} />
                <motion.div 
                  animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" />
                </motion.div>
                <div className="absolute -bottom-2 px-3 py-0.5 rounded bg-amber-400 text-black font-tech text-[10px] font-black uppercase shadow-md">
                  BY APPOINTMENT
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wider mb-2">{t.ptTitle}</h3>
              <span className="text-base sm:text-lg font-tech font-extrabold text-amber-300 tracking-wider block mb-4 sm:mb-5">{t.ptTime}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{t.ptDesc}</p>
            </div>

          </div>

          <div className="cyber-card p-4 sm:p-5 border-[#74E600]/30 flex items-center justify-center gap-2.5 sm:gap-3 font-tech text-xs sm:text-sm font-bold text-[#74E600] uppercase tracking-wider text-center bg-[#081008]">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#74E600] shrink-0" />
            <span>{t.dailyNote}</span>
          </div>
        </div>
      </section>

      {/* GALLERY / INTERACTIVE GYM FEED */}
      <section id="gallery" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-tech font-extrabold text-[#74E600] tracking-widest uppercase mb-2 block">
            // MEDIA GALLERY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 sm:mb-4">
            {t.galleryHeader}
          </h2>
          <p className="text-slate-400 text-xs sm:text-lg">
            {t.gallerySub}
          </p>
        </div>

        {/* Clean Structured Placeholders for User's Original Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index} 
              className="relative h-52 sm:h-72 border-2 border-dashed border-[#74E600]/40 bg-black/70 hover:border-[#74E600] transition-colors p-5 sm:p-6 flex flex-col items-center justify-center text-center group cursor-pointer rounded-xl"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#74E600]/10 border border-[#74E600]/40 flex items-center justify-center text-[#74E600] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="font-tech text-[10px] sm:text-xs font-bold text-[#74E600] uppercase tracking-widest mb-1">
                PHOTO SLOT 0{index}
              </span>
              <span className="font-extrabold text-xs sm:text-sm text-white uppercase tracking-wide mb-1 sm:mb-2">
                {t.uploadNotice}
              </span>
              <p className="text-[10px] sm:text-xs text-slate-400 font-tech">
                {t.uploadDesc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION PACKAGES */}
      <section id="pricing" className="py-16 sm:py-24 px-3 sm:px-4 bg-gradient-to-b from-[#040604] via-[#0b120b] to-[#040604] border-t border-[#74E600]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <span className="text-xs font-tech font-extrabold text-[#74E600] tracking-widest uppercase mb-2 block">
              // MEMBERSHIP RATES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 sm:mb-4">
              {t.pricingHeader}
            </h2>
            <p className="text-slate-400 text-xs sm:text-lg">
              {t.pricingSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg) => {
              const title = t[pkg.titleKey as keyof typeof t];
              const desc = t[pkg.descKey as keyof typeof t];
              const isFeatured = pkg.featured;

              return (
                <div 
                  key={pkg.id}
                  className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isFeatured 
                      ? 'cyber-card-glow transform lg:-translate-y-3 shadow-2xl shadow-[#74E600]/20 bg-[#0f1a0f]' 
                      : 'cyber-card border-[#74E600]/30 hover:border-[#74E600] bg-[#0a120a]'
                  }`}
                >
                  {isFeatured && (
                    <div className="mb-4 bg-[#74E600] text-black py-1 px-4 font-tech text-[10px] sm:text-xs font-black uppercase tracking-widest text-center shadow-md shadow-[#74E600]/40 rounded-sm">
                      ★ {t.popularTag} ★
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4 font-tech text-xs border-b border-white/10 pb-3">
                      <span className="text-[#74E600] font-bold">{pkg.code}</span>
                      <span className="text-slate-400 uppercase">ACCESS: FULL</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm h-auto sm:h-12 mb-5 sm:mb-6 font-normal leading-relaxed">
                      {desc}
                    </p>

                    <div className="py-4 sm:py-5 bg-black/90 border border-[#74E600]/30 px-4 sm:px-5 mb-6 sm:mb-8 flex items-baseline justify-between rounded-md">
                      <div>
                        <span className="text-4xl sm:text-5xl font-tech font-extrabold text-white tracking-tight">{pkg.price}</span>
                        <span className="text-xs sm:text-sm font-bold text-[#74E600] ml-2 font-tech">{t.currency}</span>
                      </div>
                      <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-[#74E600]" />
                    </div>

                    <ul className="space-y-3 mb-6 sm:mb-8 font-tech text-xs sm:text-sm text-slate-300 tracking-wide">
                      <li className="flex items-center gap-2.5 sm:gap-3">
                        <Check className="w-4 h-4 text-[#74E600] shrink-0" />
                        <span>FULL GYM ACCESS & FREE WEIGHTS</span>
                      </li>
                      <li className="flex items-center gap-2.5 sm:gap-3">
                        <Check className="w-4 h-4 text-[#74E600] shrink-0" />
                        <span>MIXED & LADIES EXCLUSIVE TIMINGS</span>
                      </li>
                      <li className="flex items-center gap-2.5 sm:gap-3">
                        <Check className="w-4 h-4 text-[#74E600] shrink-0" />
                        <span>TRAINER ORIENTATION ON FLOOR</span>
                      </li>
                      {isFeatured && (
                        <li className="flex items-center gap-2.5 sm:gap-3 font-extrabold text-amber-300 bg-amber-400/10 p-2 border border-amber-400/30 text-xs rounded-sm">
                          <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>🔥 3-MONTH BELLY REMOVAL CHALLENGE!</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <a 
                    href={`https://wa.me/971567772004?text=I%20want%20to%20subscribe%20to%20the%20${pkg.code}%20package%20(${pkg.price}%20AED)%20at%20SFN%20Fitness!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest transition-all block ${
                      isFeatured 
                        ? 'cyber-button' 
                        : 'cyber-button-outline'
                    }`}
                  >
                    {t.choosePlan}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 text-center font-tech px-2">
            <p className="text-amber-400 text-xs sm:text-lg font-extrabold tracking-widest text-glow-neon">
              {t.couplePromo}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION MAP */}
      <section id="contact" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-tech font-extrabold text-[#74E600] tracking-widest uppercase mb-2 block">
            // TELEMETRY & LOCATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3 sm:mb-4">
            {t.contactHeader}
          </h2>
          <p className="text-slate-400 text-xs sm:text-lg">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4 font-tech">
            
            <a 
              href="tel:067160931" 
              className="cyber-card p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 group hover:border-[#74E600] bg-[#0a120a]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#74E600]/10 border border-[#74E600]/40 flex items-center justify-center text-[#74E600] group-hover:bg-[#74E600] group-hover:text-black transition-all shrink-0 rounded-md">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">{t.phoneLabel}</span>
                <span className="text-sm sm:text-lg font-black text-white group-hover:text-[#74E600] transition-colors">06 716 0931</span>
              </div>
            </a>

            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 border-[#74E600] bg-[#74E600]/10 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#74E600] flex items-center justify-center text-black font-black shrink-0 shadow-lg shadow-[#74E600]/40 rounded-md">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-black" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] sm:text-xs text-[#74E600] font-extrabold uppercase tracking-widest block">{t.whatsappLabel}</span>
                <span className="text-sm sm:text-lg font-black text-white">+971 56 777 2004</span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-extrabold bg-[#74E600] text-black px-2 py-0.5 sm:px-2.5 sm:py-1 uppercase rounded-sm">
                24/7 LIVE
              </span>
            </a>

            <a 
              href="mailto:sfn.fitness.ae@gmail.com" 
              className="cyber-card p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 group hover:border-[#74E600] bg-[#0a120a]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#74E600]/10 border border-[#74E600]/40 flex items-center justify-center text-[#74E600] group-hover:bg-[#74E600] group-hover:text-black transition-all shrink-0 rounded-md">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">{t.emailLabel}</span>
                <span className="text-xs sm:text-sm font-bold text-white break-all">sfn.fitness.ae@gmail.com</span>
              </div>
            </a>

            <div className="cyber-card p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 bg-[#0a120a]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#74E600]/10 border border-[#74E600]/40 flex items-center justify-center text-[#74E600] shrink-0 rounded-md">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">{t.locationLabel}</span>
                <span className="text-xs font-bold text-slate-200 uppercase">{t.addressValue}</span>
              </div>
            </div>

            <a 
              href="https://instagram.com/sfn.gym" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 group hover:border-pink-500 bg-[#0a120a]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center font-black shrink-0 text-sm sm:text-base rounded-md">
                @
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest block">{t.socialLabel}</span>
                <span className="text-sm sm:text-lg font-black text-white group-hover:text-pink-400 transition-colors">@SFN.GYM</span>
              </div>
            </a>

          </div>

          {/* Clean Google Maps Container with Mobile Navigation Link */}
          <div className="lg:col-span-7 cyber-card p-3 border-[#74E600]/50 overflow-hidden min-h-[340px] sm:min-h-[420px] flex flex-col bg-[#081008] relative">
            
            {/* Header bar over map */}
            <div className="flex items-center justify-between p-3 bg-black/90 border-b border-white/10 text-tech text-xs mb-2 rounded-t-md">
              <div className="flex items-center gap-2 text-[#74E600] font-bold">
                <MapPin className="w-4 h-4" />
                <span>TOWER A1 // CITY TOWER, AJMAN</span>
              </div>
              <a 
                href={googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-badge px-3 py-1 text-[10px] font-extrabold flex items-center gap-1 hover:bg-[#74E600] hover:text-black transition-all"
              >
                <span>{t.openMapBtn}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full flex-1 overflow-hidden relative min-h-[280px] sm:min-h-[340px] border border-white/10 rounded-b-md">
              <iframe
                title="SFN Fitness Location Map"
                src="https://maps.google.com/maps?q=City%20Tower%20Al%20Nuaimia%203%20Ajman&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px', width: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-b-md"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 sm:py-12 border-t border-[#74E600]/30 bg-black text-slate-500 font-tech text-center text-xs tracking-widest">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-black text-[#74E600]">
            <img src="/sfn_logo.png" alt="SFN Fitness Logo" className="h-7 sm:h-8 w-auto object-contain" />
            <span>{t.brand}</span>
          </div>
          <p className="text-[10px] sm:text-xs">{t.footerText}</p>
          <div className="flex items-center gap-6 font-bold text-slate-400 text-[10px] sm:text-xs">
            <button onClick={() => scrollToSection("hero")} className="hover:text-[#74E600] uppercase">TOP [↑]</button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#74E600] uppercase">SUPPORT [💬]</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
