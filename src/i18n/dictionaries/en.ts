export const en = {
  shell: {
    navbar: {
      brandAlt: "Korea Beauty Business Academy",
      mobileQuickNavigationAria: "Mobile quick navigation",
      mainNavigationAria: "Main",
      openMenuLabel: "Open menu",
      contact: "Contact",
      languageSwitcherLabel: "Language",
      englishLabel: "EN",
      thaiLabel: "TH",
      items: [
        { label: "HOME", href: "/" },
        { label: "WHO WE ARE", href: "/who-we-are" },
        { label: "OUR COURSE", href: "/our-course" },
        { label: "REVIEW", href: "/review" },
        { label: "BLOG", href: "/blog" },
        { label: "START NOW", href: "/start-now" },
      ],
      mobileQuickItems: [
        { label: "HOME", emoji: "🏠", href: "/" },
        { label: "WHO WE ARE", emoji: "👥", href: "/who-we-are" },
        { label: "OUR COURSE", emoji: "🎓", href: "/our-course" },
        { label: "REVIEW", emoji: "💬", href: "/review" },
        { label: "BLOG", emoji: "📰", href: "/blog" },
        { label: "START NOW", emoji: "🚀", href: "/start-now" },
      ],
    },
    footer: {
      homeAriaLabel: "KBBA — Home",
      brandAlt: "Korea Beauty Business Academy (KBBA)",
      description:
        "Korea Beauty Business Academy — training and partner network connecting Korean hospitals and clinics with beauty businesses, plus practical online marketing programmes.",
      contactHeading: "Contact",
      supportText: "Our team can help with course options and hospital connections in Korea.",
      socialHeading: "Social",
      rightsReserved: "All rights reserved.",
    },
    lineFloatingButton: {
      ariaLabel: "Contact us on LINE",
      label: "LINE us",
    },
    socialLabels: {
      facebook: "Facebook",
      instagram: "Instagram",
      line: "LINE",
    },
  },
  shared: {
    registerSteps: {
      eyebrow: "Registration Steps",
      title: "How to register with KBBA",
      description:
        "Register, complete your contract and training, then launch with our team behind you.",
      steps: [
        {
          n: "01",
          title: "Register",
          desc: "Fill the form or contact our team.",
        },
        {
          n: "02",
          title: "Contract & training",
          desc: "Complete the agreed onboarding steps.",
        },
        {
          n: "03",
          title: "Launch your agency",
          desc: "Ongoing support after you graduate.",
        },
      ],
    },
    consultForm: {
      brandEyebrow: "Korea Beauty Business Academy",
      brandTitle: ["KOREA BEAUTY", "BUSINESS ACADEMY"],
      phoneLabel: "Phone",
      socialLabel: "Social",
      eyebrow: "Consultation Desk",
      title: "Consultation & registration",
      description:
        "Tell us how to reach you. We will follow up with course options and next steps.",
      fields: {
        fullName: "Full name",
        fullNamePlaceholder: "Enter your full name",
        nickname: "Nickname",
        nicknamePlaceholder: "Nickname",
        facebook: "Facebook profile",
        facebookPlaceholder: "Facebook profile name or URL",
        lineId: "Line ID",
        lineIdPlaceholder: "Enter your LINE ID",
        email: "Email",
        emailPlaceholder: "e.g. name@example.com",
        phone: "Phone number",
        phonePlaceholder: "e.g. +66-81-234-5678",
        selectCourse: "Select course",
        howDidYouFindUs: "How did you find us?",
      },
      requiredMark: "*",
      courseOptions: [
        {
          value: "compliant-agency",
          label: "Compliant Korean plastic surgery agency programme",
        },
        {
          value: "agency-study-tour",
          label: "Agency programme with a study tour in Korea",
        },
        {
          value: "surgeon-training",
          label: "Skills training with Korean plastic surgeons",
        },
      ],
      hearAboutOptions: [
        { value: "facebook", label: "Facebook" },
        { value: "online-ads", label: "Online ads" },
        { value: "friend", label: "Friend referral" },
      ],
      errors: {
        lineIdRequired: "LINE ID is required",
        emailRequired: "Email is required",
        emailInvalid: "Enter a valid email address",
        phoneRequired: "Phone number is required",
        courseRequired: "Please select a course",
      },
      submitIdle: "Apply now",
      submitBusy: "Sending...",
      backToTop: "Back to top",
    },
  },
  home: {
    meta: {
      title: "Home",
      description:
        "KBBA — Korean plastic surgery agency training, hospital coordinator pathways, and Korea beauty business support.",
    },
    hero: {
      eyebrow: "Beauty Business Academy",
      titleLines: [
        "Build a career as a",
        "Korean plastic surgery",
        "agency & hospital coordinator",
      ],
      description:
        "Korea Beauty Business Academy — a structured path to grow your beauty business as a professional agency and Korean hospital coordinator.",
      primaryCta: "Ask on LINE",
      secondaryCta: "View courses",
      heroImageAlt: "KBBA presenter at K-Beauty Business Academy desk with clinic screens",
    },
    motivations: {
      eyebrow: "Why People Start",
      title: "Does this sound like you?",
      description:
        "Many people come to KBBA not only for training, but because they are ready for a more independent, more meaningful, and more flexible future.",
      cards: [
        {
          emoji: "🔄",
          title: "Tired of the same routine",
          points: [
            "Your main job feels repetitive and no longer helps you grow.",
            "You want to use your ideas and creativity in a more meaningful way.",
            "You want to keep learning, meeting new people, and building a more flexible career path.",
          ],
        },
        {
          emoji: "💼",
          title: "Ready to build something of your own",
          points: [
            "You want work that feels personal and valuable.",
            "You want to become a business owner, not only a worker inside someone else’s system.",
            "You want to guide others and grow your own presence online and offline.",
          ],
        },
        {
          emoji: "💸",
          title: "Aiming for financial freedom",
          points: [
            "You want to increase your income and create stronger long-term stability.",
            "You want more freedom to care for yourself and your family.",
            "You want a business path that can support travel, lifestyle goals, and personal independence.",
          ],
        },
      ],
    },
    officialPartners: {
      eyebrow: "Official Partner",
      title: "KBBA is backed by core education and business partners across Korea and Thailand",
      description:
        "This is the core network behind KBBA: the companies that support operations and the institutes that strengthen certification, curriculum quality, and long-term credibility.",
      partners: [
        {
          short: "BBG",
          name: "Blue Bridge Global",
          role: "Korea business bridge",
        },
        {
          short: "S.K.I",
          name: "Surgery Korea Info",
          role: "Thailand market partner",
        },
        {
          short: "ILI",
          name: "International License Institute",
          role: "Certification partner",
        },
        {
          short: "LEI",
          name: "Long Life Education Institute",
          role: "Lifelong learning partner",
        },
        {
          short: "KRIVET",
          name: "KRIVET",
          role: "Curriculum reference",
        },
      ],
    },
    hospitalGrid: {
      eyebrow: "Partner Network",
      title: "60+ partner hospitals",
      description:
        "Hospitals and clinics that collaborate with KBBA — scroll the strip or browse the full partner grid below.",
      featuredStrip: "Featured strip",
      fullGrid: "Full partner grid",
      partnerLogoAlt: "KBBA partner hospital logo",
    },
    testimonials: {
      eyebrow: "Voices & Stories",
      title: "Testimonial",
      description: "Hear from participants and partners of Korea Beauty Business Academy.",
      videos: [
        { id: "ajkBFCNCHmw", title: "KBBA testimonial video 1" },
        { id: "j6ZO8s0I81g", title: "KBBA testimonial video 2" },
        { id: "90crr8ymhKc", title: "KBBA testimonial video 3" },
      ],
      featuredStory: "Featured story",
      youtubeLabel: "YouTube — KBBA",
      openInYoutube: "Open in YouTube",
      reviewCardsEyebrow: "Review Cards",
      reviewCardsDescription: "Quick participant highlights from the KBBA network.",
      participantReview: "Participant Review",
      ownerLabel: "Owner",
      showReviewLabel: "Show review",
      reviews: [
        {
          name: "Arm Arinee",
          business: "Look at me by Arinee",
          imageAlt: "Arm Arinee from Look at me by Arinee",
          quote:
            "My interest in beauty and cosmetic surgery naturally grew into a side business helping people find trusted hospitals and skilled doctors in Korea.",
        },
        {
          name: "Margaret Langer",
          business: "Mar Pa Suay",
          imageAlt: "Margaret Langer from Mar Pa Suay",
          quote:
            "KBBA gave me a structured and legal path into the Korean surgery agency business, making client care smoother and more professional.",
        },
        {
          name: "Miew Kiranapat",
          business: "Queen Management",
          imageAlt: "Miew Kiranapat from Queen Management",
          quote:
            "With trusted guidance from S.K.I and the KBBA system, I could step confidently into Korean surgery consulting and work more smoothly.",
        },
        {
          name: "Kim Phakin",
          business: "Kim S.K.I",
          imageAlt: "Kim Phakin from Kim S.K.I",
          quote:
            "The KBBA system makes it easier to send clients with confidence while I continue managing my other businesses in Thailand.",
        },
        {
          name: "Pop Supaporn",
          business: "Pop S.K.I",
          imageAlt: "Pop Supaporn from Pop S.K.I",
          quote:
            "Working with S.K.I and KBBA turned my personal experience into a professional consulting path with stronger client planning and care.",
        },
      ],
    },
    academyIntro: {
      eyebrow: "Certification Path",
      title: "KOREA BEAUTY BUSINESS ACADEMY",
      subtitle: "Korea-focused beauty business training institute",
      editorialLeft: "Seoul Edition",
      editorialRight: "Beauty Business Journal",
      introParts: {
        brand: "KBBA",
        beforeHospitals:
          " is a training and support hub for launching beauty businesses, built through partnerships between leading institutes in South Korea and Thailand. We help you succeed in the international beauty industry by connecting your operations with ",
        hospitalCount: "60+",
        beforeExperience:
          " leading plastic surgery hospitals in Korea. You can start legally and move quickly—with hospital coordinator pathways aligned to expectations in Korea. With more than ",
        experienceYears: "10",
        afterExperience:
          " years of expertise in the Korean plastic surgery agency field, our intensive programmes are structured so you can operate without heavy extra capital. A dedicated support team backs beauty ventures in both Thailand and Korea.",
      },
      stats: [
        {
          value: "30,000++",
          label: "Thai travellers choosing Korean plastic surgery each year (industry scale)",
          imageAlt: "View from an airplane window, symbolising travel to Korea for medical care",
        },
        {
          value: "3,000++",
          label: "Estimated market demand for professional surgery agency services",
          imageAlt:
            "Doctor consulting with a patient in a clinic, representing demand for professional plastic surgery agency and coordination services",
        },
        {
          value: "60++",
          label: "Network access to leading Korean plastic surgery hospitals",
          imageAlt: "Bright modern hospital corridor, representing partner hospital network",
        },
        {
          value: "99%",
          label: "Strong track record supporting legal certification pathways for graduates",
          imageAlt: "Graduates celebrating with diplomas, symbolising certification success",
        },
      ],
      consultText:
        "Become a certified beauty consultant with strong earning potential — and earn your Korean hospital coordinator credentials with us.",
      consultCertificateAlt: "Hospital coordinator certificates",
      consultCta: "Ask on LINE — fit for you?",
      consultVisualAlt: "KBBA presenter visual",
    },
    courses: {
      eyebrow: "Programme Overview",
      title: "Our Course",
      description: "Programme summaries aligned with KBBA's official Our Course offering.",
      courseDetails: "Course details",
      items: [
        {
          name: "Compliant Korean plastic surgery agency programme",
          note:
            "For people starting an agency, working as a consultant, or in hospital / clinic plastic surgery roles.",
          price: "THB 59,000",
          imageAlt: "Business consultation and partner planning session",
        },
        {
          name: "Agency programme with a study tour in Korea",
          note:
            "For those who want an agency or consulting career plus hands-on observation experience at Korean hospitals.",
          price: "THB 99,000",
          imageAlt: "Study tour and partner hospital visit in Korea",
        },
        {
          name: "Skills training with Korean plastic surgeons",
          note:
            "For surgeons who want to sharpen techniques and learn approaches used by leading Korean specialists.",
          price: "THB 159,000",
          imageAlt: "Training with Korean plastic surgery specialists",
        },
      ],
    },
    faq: {
      regionAriaLabel: "Registration and consultation",
      eyebrow: "Common Questions",
      title: "FAQ",
      items: [
        {
          q: "What does KBBA offer clinics outside Korea?",
          a: "KBBA is a training hub and Thailand–Korea beauty business network: foundational courses, hospital partner introductions, and ongoing business support after graduation.",
        },
        {
          q: "How is KBBA different from a typical agency?",
          a: "Programmes are aligned with accredited institutes and Korean partners, with documentation support, interpreters, and client-care playbooks so you can launch without extra capital overhead.",
        },
        {
          q: "What benefits do graduates receive?",
          a: "Practical know-how, access to partner hospitals in the network, and continued support across operations, promotions, transfers, and interpreter teams.",
        },
        {
          q: "How long until we see results?",
          a: "It depends on your business plan and execution. Most teams spend the first phase on foundations and systems, then scale revenue and service capacity.",
        },
        {
          q: "Why is Korean plastic surgery agency work in demand?",
          a: "Market trends show sustained demand for Korean surgery services — a strong opportunity for operators who want to build a professional agency.",
        },
        {
          q: "Why invest in agency training?",
          a: "Agency work is specialised: service quality, coordination, and compliance all matter. Training reduces costly mistakes and improves long-term success.",
        },
        {
          q: "Why partner with KBBA specifically?",
          a: "KBBA combines accredited curricula, hospital partner access, and post-training systems so beginners can operate with structure and grow faster.",
        },
        {
          q: "How does KBBA work with Mabel Clinic after surgery?",
          a: "Partner clinics in Thailand help with follow-up, guidance, and continuity of care so clients feel supported when they return home.",
        },
        {
          q: "How does KBBA work with Hi' Seoul Clinic?",
          a: "KBBA coordinates with Thai partner clinics to cover aftercare when travellers return from Korea — smoother handoffs and greater confidence.",
        },
      ],
    },
  },
  ourCourse: {
    meta: {
      title: "OUR COURSE",
      description:
        "KBBA — compliant Korean plastic surgery agency training, Korea study tours, and surgeon skills programmes.",
    },
    hero: {
      eyebrow: "OUR COURSE",
      title: "KBBA programmes",
      subtitle:
        "Beauty-business training in partnership with South Korea's lifelong learning institutes and international licensing bodies.",
    },
    intro: {
      eyebrow: "KBBA",
      title: "Our Course",
      description:
        "KBBA partners with the International License Institute to offer hospital coordinator certification pathways so graduates can apply the knowledge to medical-service careers — including agency work, consulting, and hospital or aesthetic clinic roles.",
      cta: "Register online →",
    },
    whatWeDeliver: {
      eyebrow: "What we do",
      title: "What We Deliver",
      description:
        "Four focused outcomes designed for teams building Korea-connected beauty and surgery businesses.",
      cards: [
        {
          step: "01",
          body: "Comprehensive education in plastic surgery business operations and market strategies.",
        },
        {
          step: "02",
          body: "Post-training support for setup, compliance, and practical business launch.",
        },
        {
          step: "03",
          body: "Expansion into broader beauty business opportunities in the Korean market.",
        },
        {
          step: "04",
          body: "Surgeon-focused technique programmes led by experienced Korean specialists.",
        },
      ],
      badge: "KBBA",
    },
    combinedExperience: {
      eyebrow: "More than 10 years of",
      title: "COMBINED EXPERIENCE",
      description: "We have the know-how you need.",
    },
    courseBlock: {
      endorsedByHeading: "Endorsed by",
      certificatesHeading: "Certificates after completion",
      cta: "Details & register",
    },
    courses: [
      {
        id: "course-legal",
        titleMain: "Compliant Korean plastic surgery agency programme",
        titleSubtitle: "Korea Plastic Surgery Agency and Consultant Program",
        endorsed: [
          "International License Institute",
          "Long Life Education Institute, South Korea",
          "Curriculum aligned with South Korea Ministry of Health standards",
          "Blue Bridge Global Co., Ltd. (legally registered foreign patient attraction business in Korea, official collaboration with Gangnam Medical Tour Center)",
        ],
        certificates: [
          "Certificate — Korean plastic surgery consultant programme",
          "Hospital coordinator certificate",
          "Hospital coordinator licence ID (may be used when applying for hospital-level roles in Korea)",
        ],
      },
      {
        id: "course-trip",
        titleMain: "Agency programme — compliant track with Korea study tour",
        titleSubtitle: "Intensive Korea Plastic Surgery Agency and Consultant Program",
        endorsed: [
          "International License Institute",
          "Long Life Education Institute, South Korea",
          "Curriculum aligned with South Korea Ministry of Health standards",
          "Blue Bridge Global Co., Ltd. (legally registered foreign patient attraction business in Korea, official collaboration with Gangnam Medical Tour Center)",
        ],
        certificates: [
          "Certificate — Korean plastic surgery consultant programme",
          "Hospital coordinator certificate",
          "Hospital coordinator licence ID (may be used when applying for hospital-level roles in Korea)",
        ],
      },
      {
        id: "course-surgeon",
        titleMain: "Surgeon skills training with Korean specialists",
        titleSubtitle: "Korea Special Plastic Surgery Techniques Program For Doctor",
        endorsed: [
          "BIO Plastic Surgery Hospital",
          "Curriculum aligned with South Korea Ministry of Health standards",
          "Blue Bridge Global Co., Ltd. (legally registered foreign patient attraction business in Korea, official collaboration with Gangnam Medical Tour Center)",
        ],
        certificates: ["Certificate — Korean plastic surgery techniques training"],
      },
    ],
    businessSupport: {
      title: "Business support",
      description:
        "KBBA is not only a training institute—we stay with you after graduation so you can open for business with less upfront capital. Specialists help across licensing, advisory, campaigns, hospital ties, paperwork, transfers in Korea, and interpreter-led client care.",
      items: [
        {
          emoji: "🪪",
          title: "Compliant licensing",
          desc: "Legal permits and licensing pathways that match how Korea-facing agencies actually operate.",
        },
        {
          emoji: "🧭",
          title: "Business advisory",
          desc: "Strategic guidance on launching, scaling, and coordinating beauty and surgery-related ventures.",
        },
        {
          emoji: "✨",
          title: "Data & promotions",
          desc: "Campaign ideas, performance signals, and promotional support so your pipeline stays visible.",
        },
        {
          emoji: "🛟",
          title: "Operations support",
          desc: "A specialist team behind you for day-to-day questions, handoffs, and practical problem-solving.",
        },
        {
          emoji: "🏥",
          title: "Partner hospitals",
          desc: "Access and continuity across Korean partner clinics so introductions feel credible and consistent.",
        },
        {
          emoji: "📋",
          title: "Documentation",
          desc: "Contracts, forms, and paperwork organised so compliance and client care do not stall.",
        },
        {
          emoji: "🚐",
          title: "Transfers & mobility",
          desc: "Coordinated pick-ups, drops, and movement logistics for clients while they are in Korea.",
        },
        {
          emoji: "💬",
          title: "Interpreter care",
          desc: "Interpreter coverage and client-care touchpoints so language never blocks trust or safety.",
        },
      ],
    },
  },
  whoWeAre: {
    meta: {
      title: "WHO WE ARE",
      description:
        "KBBA — training and business support for Korea-connected beauty businesses. Partners: S.K.I, BBG, institutes and hospitals.",
    },
    hero: {
      eyebrow: "KBBA — KOREA BEAUTY BUSINESS ACADEMY",
      title: "WHO WE ARE",
      subtitle:
        "Training and business support for Thailand–Korea beauty and surgery ventures—with S.K.I, BBG in Korea, and a network of institutes and hospitals.",
    },
    summaryCards: [
      {
        title: "Focus",
        body: "Thailand–Korea beauty business and compliant agency operations.",
      },
      {
        title: "Partners",
        body: "Surgery Korea Info (S.K.I), Blue Bridge Global (BBG), institutes and hospitals.",
      },
      {
        title: "What you get",
        body: "Programmes from foundations to advanced tracks, plus launch and scale-up support.",
      },
    ],
    partnerships: {
      title: "Partnerships",
      description:
        "KBBA works officially with hospitals and clinics in the network plus Korean accreditation bodies so curricula and business support meet international expectations.",
      marqueeLogoAlt: "Partner logo",
    },
    academy: {
      eyebrow: "Korea Beauty Business Academy",
      title: "Korea Beauty Business Academy",
      description:
        "Three practical directions inside the KBBA ecosystem for teams building Korea-connected beauty and surgery businesses.",
      pillars: [
        {
          title: "Korean plastic surgery agency business",
          desc: "Structure and support to launch and scale a professional agency.",
          imageAlt:
            "Two professionals shaking hands in a bright office, representing trusted partnerships for Korea-facing agency business",
        },
        {
          title: "Beauty & aesthetics business",
          desc: "Connect services and networks between Thailand and Korea.",
          imageAlt:
            "Beauty products and cosmetics flat lay, representing aesthetics and beauty industry business",
        },
        {
          title: "Surgeon skills training",
          desc: "Technique programmes with top hospitals in South Korea.",
          imageAlt:
            "Sterile surgical environment and clinical focus, representing hands-on surgeon skills training",
        },
      ],
    },
    faculty: {
      eyebrow: "Expert speakers",
      title: "Meet our faculty",
      description:
        "Practitioners and educators who anchor KBBA programmes—from Korea-facing agency craft and coordinator pathways to digital growth and advanced surgical technique.",
      people: [
        {
          name: "May Kanyanat Sutpa",
          nameKo: "메이 카냐누트 수트파",
          role: "Founder & CEO, Surgery Korea Info (S.K.I)",
          body:
            "Executive with Surgery Korea Info (S.K.I), a Korea-focused plastic surgery information and agency business. She brings 10+ years of professional experience across the Korean plastic surgery market—bridging client expectations, hospital protocols, and compliant agency operations.",
          course: "Practical Korean plastic surgery consulting programme",
          tag: "@SKI.May",
          imageAlt: "May Kanyanat Sutpa — Surgery Korea Info",
        },
        {
          name: "Prof. Lee Eun-young",
          nameKo: "이은영 교수",
          role: "Hospital coordinator specialist",
          body:
            "Professor specialising in hospital operations and coordinator practice, aligned with the International License Institute and Korea’s lifelong learning pathways—grounding KBBA’s coordinator track in documentation, etiquette, and real ward realities.",
          course: "Hospital coordinator programme",
          tag: "Lee Eun-young",
          imageAlt: "Professor Lee Eun-young",
        },
        {
          name: "Sun Sathapon Wisakasat",
          nameKo: "선 사타폰 위사카사트",
          role: "Founder & CEO, online digital marketing",
          body:
            "Online marketing specialist for beauty and clinic brands: finding the right audiences, building content that carries a consultative tone, and engineering follow-up so campaigns actually close—without vanity metrics that waste ad spend.",
          course: "Digital marketing programme",
          tag: "Son Digital Marketing",
          imageAlt: "Sun Sathapon Wisakasat",
        },
        {
          name: "Dr. Cho In-chang",
          nameKo: "조인창 외과의",
          role: "President, BIO Plastic Surgery",
          body:
            "Plastic surgeon with 20+ years in practice. BIO Plastic Surgery has delivered structured surgical education for more than a decade—including delicate aesthetic work recognised at the highest public level, alongside technique programmes for practising surgeons.",
          course: "Surgical technique training for doctors",
          tag: "Cho In-chang",
          imageAlt: "Dr. Cho In-chang — BIO Plastic Surgery",
        },
      ],
    },
    officialPartners: {
      eyebrow: "Official partners",
      title: "Official partners",
      description:
        "A curated snapshot of our trusted network across institutes, clinics, and partner companies.",
      institutesHeading: "Institutes",
      hospitalsKoreaHeading: "Hospitals & Clinics in Korea",
      hospitalsThailandHeading: "Hospitals & Clinics in Thailand",
      companiesHeading: "Companies",
      morePartnersLabel: "more Korea partners in our network",
    },
  },
  review: {
    meta: {
      title: "REVIEW",
      description: "KBBA reviews and services — after-sales support and clinic partnerships.",
    },
    hero: {
      eyebrow: "REVIEW",
      title: "Reviews & services",
      subtitle: "Voices from participants and clinic partners — how KBBA supports you after training.",
    },
    participantReviewLabel: "Participant Review",
    clinicPartnerLabel: "Clinic Partner",
    visitClinic: "Visit the clinic",
    services: {
      eyebrow: "Our Service",
      title: "KBBA supports you end to end",
      description:
        "From fundamentals to ongoing operations without extra capital, plus interpreters so you can sell, market, and serve smoothly before, during, and after the trip — with Thai partner clinics when clients return home.",
      items: [
        {
          title: "SET UP Agency Business",
          body: "Foundational training and advisory so you can operate a compliant agency right after KBBA — without extra capital.",
        },
        {
          title: "Promotion & Service",
          body: "KBBA works with 60+ partner hospitals: monthly marketing support and interpreter teams while clients are in Korea.",
        },
        {
          title: "After Service",
          body: "KBBA partners with 2+ clinic brands (expanding) for after-sales care — suture removal, splints, or swelling treatments.",
        },
      ],
    },
    participantReviews: [
      {
        name: "Arm Arinee",
        role: "Owner",
        business: "Look at me by Arinee",
        imageAlt: "Arm Arinee from Look at me by Arinee",
        body:
          "A long-standing interest in beauty and cosmetic surgery led me to start a Korean surgery agency side business. I wanted to guide people around me toward trusted hospitals, skilled doctors, and better results.",
      },
      {
        name: "Margaret Langer",
        role: "Owner",
        business: "Mar Pa Suay",
        imageAlt: "Margaret Langer from Mar Pa Suay",
        body:
          "My work as a model and business owner connected me with many people and frequent beauty reviews in Thailand and Korea. KBBA taught me the legal, structured way to run a Korean surgery agency and made client care much smoother.",
      },
      {
        name: "Miew Kiranapat",
        role: "Owner",
        business: "Queen Management",
        imageAlt: "Miew Kiranapat from Queen Management",
        body:
          "Many people around me wanted trusted advice about self-care and surgery in Korea, and my long relationship with May at S.K.I gave me confidence to step in. With the KBBA system in place, the work is smoother and I can recommend it to anyone who wants to become a serious Korean surgery consultant.",
      },
      {
        name: "Kim Phakin",
        role: "Owner",
        business: "Kim S.K.I",
        imageAlt: "Kim Phakin from Kim S.K.I",
        body:
          "Because I travel to Korea often and care about self-management, people regularly asked me about beauty care and surgery there. Support from S.K.I and the KBBA system now lets me send clients confidently while still managing my other businesses in Thailand.",
      },
      {
        name: "Pop Supaporn",
        role: "Owner",
        business: "Pop S.K.I",
        imageAlt: "Pop Supaporn from Pop S.K.I",
        body:
          "After my first surgery in Korea with May at S.K.I, people kept noticing the change and asking for advice, which led me into consulting. Working with S.K.I and the KBBA system has made client planning and care both enjoyable and professional.",
      },
      {
        name: "Pim Thatsanan",
        role: "Owner",
        business: "Beauty Atelier",
        imageAlt: "Pim Thatsanan from Beauty Atelier",
        body:
          "I believe beauty should be shaped to each individual in the way that suits them best. Working with leading Korean hospitals and top surgeons lets me help clients pursue that ideal with more confidence.",
      },
    ],
    clinicPartners: [
      {
        name: "Hi' Seoul Clinic",
        imageAlt: "Hi' Seoul Clinic storefront with partners standing outside",
        body:
          "After caring for clients returning from Korea, we saw outcomes and smiles and chose to partner with May at S.K.I. Sending VIP clients to Korea becomes much easier when they know aftercare at home can support swelling, scars, and confidence.",
      },
      {
        name: "Mabel Clinic",
        imageAlt: "Mabel Clinic reception area",
        body:
          "Dr. Nut has served VIP dermatology clients for over 10 years and follows Korean techniques. Clients often return with concerns like bruising, redness, and scars, which led us to speak with May at S.K.I. and form a formal partnership. KBBA helps produce better-informed, higher-quality agencies and consultants so clients can feel safer throughout the process.",
      },
    ],
    gallery: {
      eyebrow: "Review Gallery",
      title: "Moments from training and partner visits",
      description:
        "A visual snapshot of certification, clinic visits, partner meetings, and real working moments across the KBBA network.",
      items: [
        { alt: "Group photo at Note Plastic Surgery" },
        { alt: "Visit to Note Plastic Surgery" },
        { alt: "Partner visit at Note Plastic Surgery" },
        { alt: "Partner meeting in clinic lobby" },
        { alt: "Meeting with BIO Plastic Surgery medical team" },
        { alt: "Consultation room visit with medical team" },
        { alt: "Certification milestone with Banobagi" },
        { alt: "KBBA certification documents" },
      ],
    },
  },
  blog: {
    meta: {
      title: "BLOG & NEWS",
      description:
        "KBBA news and articles — clinic partnerships, agency insights, and Korea beauty business updates.",
    },
    hero: {
      eyebrow: "BLOG & NEWS",
      title: "Articles & news",
      subtitle: "Partnerships, case studies, and perspectives on the Thailand–Korea beauty corridor.",
    },
    posts: [
      {
        title: "KBBA & Mabel Clinic — aftercare in Thailand after surgery in Korea",
        excerpt:
          "End-to-end service before and after the sale: Mabel Clinic helps patients after surgery with direct physician support.",
      },
      {
        title: "KBBA & Hi' Seoul Clinic — seamless aftercare when clients return",
        excerpt:
          "Comfort and outcomes come first. Hi' Seoul Clinic is a full-service Korean-style aesthetic clinic partner.",
      },
      {
        title: "Why is the Korean plastic surgery agency sector growing?",
        excerpt:
          "Korean government statistics show tens of thousands of medical travellers each year — among the highest globally.",
      },
      {
        title: "Why formal agency training matters",
        excerpt:
          "Agency work demands deep expertise; without enough experience it is hard to build a sustainable business.",
      },
      {
        title: "Why build your agency with KBBA",
        excerpt:
          "Operating in Korea requires the right licences for attracting foreign patients — KBBA aligns you with the legal framework.",
      },
    ],
  },
  startNow: {
    meta: {
      title: "START NOW",
      description: "How to register for KBBA training — steps and contact details.",
    },
    hero: {
      eyebrow: "START NOW",
      title: "How to register with KBBA",
      subtitle: "Register, complete your contract and training, then launch with our team behind you.",
    },
    contactBlock: {
      academyTitle: "KOREA BEAUTY BUSINESS ACADEMY",
      lineLabel: "LINE",
      facebookLabel: "Facebook",
    },
  },
};

export type Dictionary = typeof en;
