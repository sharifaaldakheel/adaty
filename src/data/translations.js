// All UI strings, keyed by language. No i18n library — just a plain object.
// `App` picks translations[lang] and passes the resulting object down as `t`.
// Area names and learning suggestions live here too, keyed by area key.

export const translations = {
  ar: {
    dir: "rtl",
    header: {
      info: "عن الأداة",
      toggleLanguage: "التبديل إلى الإنجليزية",
    },
    landing: {
      title: "اختبر معرفتك بأدوات الذكاء الاصطناعي",
      desc:
        "اكتشف مستواك الحقيقي في استخدام أدوات الذكاء الاصطناعي من خلال اختبار قصير، وتعرّف على نقاط قوتك والمجالات التي تحتاج إلى تطوير.",
      start: "ابدأ الاختبار",
      robotAlt: "روبوت المساعد",
    },
    question: {
      next: "التالي",
      showResult: "عرض النتيجة",
      back: "السؤال السابق",
    },
    result: {
      gaugesAria: "نتائج المجالات",
      restart: "البدء من جديد",
      percent: "٪",
      excellentTitle: "أداء ممتاز",
      excellentText:
        "لا توجد مجالات ضعف واضحة. واصل تطوير مهاراتك في الذكاء الاصطناعي.",
    },
    info: {
      title: "عن الأداة",
      close: "إغلاق",
      text:
        "أداة تقيّم مستوى معرفتك ومهاراتك في استخدام أدوات الذكاء الاصطناعي من خلال اختبار قصير يجمع بين أسئلة نظرية ومواقف عملية. بعد إكمال الاختبار تحصل على تقييم واضح لمستواك، مع إبراز نقاط قوتك والمجالات التي تحتاج إلى تطوير وتوصيات تعليمية مخصصة.",
    },
    areas: {
      fundamentals: "أساسيات الذكاء الاصطناعي",
      prompting: "صياغة التوجيهات",
      tools: "أدوات الذكاء الاصطناعي",
      responsible: "الاستخدام المسؤول",
    },
    recommendations: {
      fundamentals:
        "راجع المفاهيم الأساسية مثل النماذج اللغوية، والتوكن، والفرق بين التدريب والاستدلال.",
      prompting:
        "تدرّب على كتابة توجيهات واضحة تحدد السياق والهدف، واستعن بالأمثلة لتحسين النتائج.",
      tools:
        "استكشف أدوات الذكاء الاصطناعي الشائعة وتعرّف على الاستخدام الأنسب لكل أداة.",
      responsible:
        "تعلّم مبادئ الخصوصية، والتحقق من المخرجات، والاستخدام الأخلاقي للذكاء الاصطناعي.",
    },
  },

  en: {
    dir: "ltr",
    header: {
      info: "About the tool",
      toggleLanguage: "Switch to Arabic",
    },
    landing: {
      title: "Test Your Knowledge of AI Tools",
      desc:
        "Discover your real level in using AI tools through a short assessment, and learn your strengths and the areas you need to improve.",
      start: "Start the Assessment",
      robotAlt: "Assistant robot",
    },
    question: {
      next: "Next",
      showResult: "Show Result",
      back: "Previous question",
    },
    result: {
      gaugesAria: "Area results",
      restart: "Start Over",
      percent: "%",
      excellentTitle: "Excellent performance",
      excellentText:
        "No clear areas of weakness. Keep developing your AI skills.",
    },
    info: {
      title: "About the Tool",
      close: "Close",
      text:
        "A tool that assesses your knowledge and proficiency with AI tools through a short test combining theoretical questions and practical scenarios. After finishing, you get a clear evaluation of your level, highlighting your strengths, the areas you need to improve, and personalized learning recommendations.",
    },
    areas: {
      fundamentals: "AI Fundamentals",
      prompting: "Prompting",
      tools: "AI Tools",
      responsible: "Responsible Use",
    },
    recommendations: {
      fundamentals:
        "Review core concepts such as language models, tokens, and the difference between training and inference.",
      prompting:
        "Practice writing clear prompts that define the context and goal, and use examples to improve results.",
      tools:
        "Explore common AI tools and learn the most suitable use for each one.",
      responsible:
        "Learn the principles of privacy, verifying outputs, and the ethical use of AI.",
    },
  },
};

export default translations;
