// Static local question bank for the AI Knowledge Assessment.
// No backend / Supabase: this file is the single source of questions.
//
// Shape of each question:
//   id:            unique number
//   area:          one of the assessment areas (required on every question)
//                  "fundamentals" | "prompting" | "tools" | "responsible"
//   question:      { ar, en } question text per language
//   options:       { ar:[4], en:[4] } answer options per language
//   correctAnswer: index (0-based) of the correct answer (same across languages,
//                  since options are translated in the same order)
//
// 12 questions, 3 per area. The correct option index varies across the bank.
// Order is fixed here on purpose — do not shuffle at render time — so scoring
// is deterministic and tests stay repeatable.
//
// The Question Screen does not read `correctAnswer`; it is consumed only by
// the scoring logic.

const questions = [
  // --- Fundamentals ---
  {
    id: 1,
    area: "fundamentals",
    question: {
      ar: 'ماذا يعني مصطلح "الهلوسة" (Hallucination) في نماذج الذكاء الاصطناعي؟',
      en: 'What does the term "hallucination" mean in AI models?',
    },
    options: {
      ar: [
        "أن يتوقف النموذج عن العمل بشكل مفاجئ",
        "أن يعمل النموذج بسرعة أكبر من المعتاد",
        "أن ينتج النموذج معلومات تبدو صحيحة لكنها غير دقيقة أو مختلقة",
        "أن يرفض النموذج الإجابة عن الأسئلة",
      ],
      en: [
        "The model suddenly stops working",
        "The model runs faster than usual",
        "The model produces information that looks correct but is inaccurate or made up",
        "The model refuses to answer questions",
      ],
    },
    correctAnswer: 2,
  },
  {
    id: 2,
    area: "fundamentals",
    question: {
      ar: 'ما المقصود بـ "التوكن" (Token) في نماذج اللغة؟',
      en: 'What is a "token" in language models?',
    },
    options: {
      ar: [
        "وحدة نصية صغيرة يعالجها النموذج مثل كلمة أو جزء منها",
        "كلمة المرور الخاصة بحسابك",
        "رمز الدفع مقابل الاستخدام",
        "نوع من أنواع الرسومات",
      ],
      en: [
        "A small unit of text the model processes, such as a word or part of one",
        "The password for your account",
        "A payment code for usage",
        "A type of graphic",
      ],
    },
    correctAnswer: 0,
  },
  {
    id: 3,
    area: "fundamentals",
    question: {
      ar: 'ما الفرق بين "التدريب" و"الاستدلال" في نماذج الذكاء الاصطناعي؟',
      en: 'What is the difference between "training" and "inference" in AI models?',
    },
    options: {
      ar: [
        "لا يوجد أي فرق بينهما",
        "التدريب يحدث دائماً بعد الاستدلال",
        "الاستدلال يعني حذف بيانات النموذج",
        "التدريب هو تعلّم النموذج من البيانات، والاستدلال هو استخدامه للإجابة",
      ],
      en: [
        "There is no difference between them",
        "Training always happens after inference",
        "Inference means deleting the model's data",
        "Training is the model learning from data, and inference is using it to answer",
      ],
    },
    correctAnswer: 3,
  },

  // --- Prompting ---
  {
    id: 4,
    area: "prompting",
    question: {
      ar: "أي مما يلي يُعد أفضل ممارسة لكتابة توجيه (Prompt) فعّال؟",
      en: "Which of the following is the best practice for writing an effective prompt?",
    },
    options: {
      ar: [
        "كتابة أقصر جملة ممكنة في كل الحالات",
        "تحديد السياق والهدف والتنسيق المطلوب بوضوح",
        "استخدام كلمات غامضة لترك الحرية الكاملة للنموذج",
        "تجنّب إعطاء أي أمثلة على الإطلاق",
      ],
      en: [
        "Writing the shortest possible sentence in all cases",
        "Clearly specifying the context, goal, and desired format",
        "Using vague words to give the model full freedom",
        "Avoiding giving any examples at all",
      ],
    },
    correctAnswer: 1,
  },
  {
    id: 5,
    area: "prompting",
    question: {
      ar: "عند عدم رضاك عن إجابة النموذج، ما التصرف الأنسب؟",
      en: "When you're not satisfied with the model's answer, what is the best action?",
    },
    options: {
      ar: [
        "إغلاق الأداة نهائياً",
        "تكرار نفس الطلب حرفياً عدة مرات",
        "اعتماد النتيجة كما هي دون مراجعة",
        "إعادة صياغة الطلب وإضافة تفاصيل وتوضيحات",
      ],
      en: [
        "Closing the tool permanently",
        "Repeating the exact same request several times",
        "Accepting the result as is without review",
        "Rephrasing the request and adding details and clarifications",
      ],
    },
    correctAnswer: 3,
  },
  {
    id: 6,
    area: "prompting",
    question: {
      ar: "ماذا يعني تزويد النموذج بأمثلة ضمن التوجيه (Few-shot)؟",
      en: "What does giving the model examples within the prompt (few-shot) mean?",
    },
    options: {
      ar: [
        "إعطاؤه نماذج للإجابة المطلوبة ليحتذي بها",
        "مطالبته بإنشاء صور فقط",
        "إجباره على تقليل عدد الكلمات",
        "منعه من استخدام الإنترنت",
      ],
      en: [
        "Giving it samples of the desired answer to follow",
        "Asking it to create images only",
        "Forcing it to reduce the word count",
        "Preventing it from using the internet",
      ],
    },
    correctAnswer: 0,
  },

  // --- Tools ---
  {
    id: 7,
    area: "tools",
    question: {
      ar: "أي من الأدوات التالية تُعد الأنسب لتوليد الصور من وصف نصي؟",
      en: "Which of the following tools is most suitable for generating images from a text description?",
    },
    options: {
      ar: ["Microsoft Excel", "Midjourney", "Gmail", "Zoom"],
      en: ["Microsoft Excel", "Midjourney", "Gmail", "Zoom"],
    },
    correctAnswer: 1,
  },
  {
    id: 8,
    area: "tools",
    question: {
      ar: "لديك مهمة برمجية وتريد مساعداً يقترح عليك الشيفرة البرمجية، أي الأدوات أنسب؟",
      en: "You have a coding task and want an assistant that suggests code. Which tool is most suitable?",
    },
    options: {
      ar: ["Adobe Photoshop", "PowerPoint", "GitHub Copilot", "Google Maps"],
      en: ["Adobe Photoshop", "PowerPoint", "GitHub Copilot", "Google Maps"],
    },
    correctAnswer: 2,
  },
  {
    id: 9,
    area: "tools",
    question: {
      ar: "أي من التالي يُعد مساعداً محادثياً (Chatbot) قائماً على نماذج اللغة؟",
      en: "Which of the following is a chatbot based on language models?",
    },
    options: {
      ar: ["ChatGPT", "Windows Calculator", "VLC Media Player", "WinRAR"],
      en: ["ChatGPT", "Windows Calculator", "VLC Media Player", "WinRAR"],
    },
    correctAnswer: 0,
  },

  // --- Responsible & Practical Use ---
  {
    id: 10,
    area: "responsible",
    question: {
      ar: "قبل الاعتماد على معلومة قدّمها نموذج ذكاء اصطناعي في تقرير مهم، ماذا تفعل؟",
      en: "Before relying on information provided by an AI model in an important report, what do you do?",
    },
    options: {
      ar: [
        "تنشرها مباشرة دون أي مراجعة",
        "تفترض أنها صحيحة دائماً",
        "تحذف التقرير بالكامل",
        "تتحقق من صحتها عبر مصادر موثوقة",
      ],
      en: [
        "Publish it directly without any review",
        "Assume it is always correct",
        "Delete the entire report",
        "Verify it through trusted sources",
      ],
    },
    correctAnswer: 3,
  },
  {
    id: 11,
    area: "responsible",
    question: {
      ar: "طلب منك زميل لصق بيانات عملاء سرّية داخل أداة ذكاء اصطناعي عامة، ما التصرف الصحيح؟",
      en: "A colleague asks you to paste confidential customer data into a public AI tool. What is the right action?",
    },
    options: {
      ar: [
        "تفعل ذلك فوراً لتوفير الوقت",
        "ترفض لأن ذلك قد ينتهك خصوصية البيانات وسريتها",
        "تشارك البيانات مع تغيير الأسماء فقط",
        "تطلب من الأداة حذف البيانات لاحقاً",
      ],
      en: [
        "Do it immediately to save time",
        "Refuse, because it may violate data privacy and confidentiality",
        "Share the data but only change the names",
        "Ask the tool to delete the data later",
      ],
    },
    correctAnswer: 1,
  },
  {
    id: 12,
    area: "responsible",
    question: {
      ar: "عند استخدام مخرجات الذكاء الاصطناعي في عمل أكاديمي، ما الممارسة الصحيحة؟",
      en: "When using AI outputs in academic work, what is the correct practice?",
    },
    options: {
      ar: [
        "نسب العمل لنفسك بالكامل دون ذكر الأداة",
        "نسخ المخرجات كما هي دون مراجعة",
        "الإفصاح عن استخدام الأداة والتحقق من المصادر",
        "إخفاء أي استخدام للأداة",
      ],
      en: [
        "Claiming the work entirely as your own without mentioning the tool",
        "Copying the outputs as is without review",
        "Disclosing the use of the tool and verifying the sources",
        "Hiding any use of the tool",
      ],
    },
    correctAnswer: 2,
  },
];

export default questions;
