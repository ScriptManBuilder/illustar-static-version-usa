// Course types and interfaces
export interface CourseSpecifications {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  video?: string; // Optional video preview
  videos?: string[]; // Multiple course videos for premium courses
  description: string;
  detailedDescription: string;
  category: string;
  features: string[];
  specifications: CourseSpecifications;
  inStock: boolean;
}

// Helper function to get course image with fallback
export const getProductImage = (productId: number, imageIndex: number = 1): string => {
  // Используем единое изображение для всех курсов
  return `/images/pic_post_5.jpg`;
};

// Helper function to get all available images for a course
export const getProductImages = (productId: number): string[] => {
  // Для всех курсов используем автогенерацию из видео
  return [getProductImage(productId)];
};

// Helper function to get course video preview
export const getProductVideo = (productId: number): string | undefined => {
  if (productId === 1) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (1).mp4";
  }
  if (productId === 2) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (2).mp4";
  }
  if (productId === 3) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (3).mp4";
  }
  if (productId === 4) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (4).mp4";
  }
  if (productId === 5) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (5).mp4";
  }
  if (productId === 6) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (6).mp4";
  }
  if (productId === 7) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (7).mp4";
  }
  if (productId === 8) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (8).mp4";
  }
  if (productId === 9) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (9).mp4";
  }
  if (productId === 10) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (10).mp4";
  }
  if (productId === 11) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (11).mp4";
  }
  if (productId === 12) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (12).mp4";
  }
  if (productId === 13) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4";
  }
  if (productId === 14) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (14).mp4";
  }
  if (productId === 15) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (15).mp4";
  }
  if (productId === 16) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (16).mp4";
  }
  if (productId === 17) {
    return "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (17).mp4";
  }
  return undefined;
};

// Helper function to get course videos (for premium courses with multiple videos)
export const getProductVideos = (productId: number): string[] | undefined => {
  // Courses 5-7: 2 videos each
  if (productId === 5) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (12).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4"
    ];
  }
  if (productId === 6) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (14).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (15).mp4"
    ];
  }
  if (productId === 7) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (17).mp4"
    ];
  }
  
  // Courses 8-10: 3 videos each
  if (productId === 8) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (18).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (19).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (20).mp4"
    ];
  }
  if (productId === 9) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (1).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (2).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (3).mp4"
    ];
  }
  if (productId === 10) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (4).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (5).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (6).mp4"
    ];
  }
  
  // Course 11: 4 videos
  if (productId === 11) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (7).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (8).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (9).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (10).mp4"
    ];
  }
  
  // Course 12: 4 videos
  if (productId === 12) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (11).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (12).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (14).mp4"
    ];
  }
  
  // Course 13: 4 videos
  if (productId === 13) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (15).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (16).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (17).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (18).mp4"
    ];
  }
  
  // Course 14: 4 videos
  if (productId === 14) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (20).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (1).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (2).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (3).mp4"
    ];
  }
  
  // Course 15: 5 videos
  if (productId === 15) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (5).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (6).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (7).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (8).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (9).mp4"
    ];
  }
  
  // Course 16: 5 videos
  if (productId === 16) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (11).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (12).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (13).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (14).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (15).mp4"
    ];
  }
  
  // Course 17: 5 videos
  if (productId === 17) {
    return [
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (16).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (17).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (18).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (19).mp4",
      "/videos/Color Light Illustration Masterclass Drawing from Real Life Iva (20).mp4"
    ];
  }
  
  return undefined;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Illustration Starter Course",
    price: 1.00,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Perfect starting point: basic illustration concepts, tools introduction, and your first digital drawing.",
    detailedDescription: "Begin your illustration journey with this affordable starter course. Learn the absolute basics of digital illustration, get familiar with drawing tools, and create your first digital artwork. Ideal for complete beginners.",
    category: "Beginner Starter",
    features: [
      "5 minutes of starter content",
      "Tool introduction",
      "First digital drawing",
      "Basic concepts overview",
      "Beginner-friendly approach"
    ],
    specifications: {
      "Duration": "5 minutes",
      "Level": "Absolute Beginner",
      "Language": "English",
      "Topics": "Tools, basic concepts",
      "Access": "3 months",
      "Certificate": "Starter badge"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Introduction to Digital Illustration",
    price: 1.95,
    image: getProductImage(1),
    images: getProductImages(1),
    video: getProductVideo(1),
    description: "Learn digital illustration basics: color meaning, symbolism, and visual communication fundamentals.",
    detailedDescription: "Master the foundations of digital illustration with essential topics including color theory, color meaning and symbolism, visual communication principles, and basic illustration techniques. Perfect starting point for aspiring digital artists.",
    category: "Illustration Basics",
    features: [
      "7 minutes of foundational content",
      "Color theory fundamentals",
      "Visual communication principles",
      "Digital art introduction",
      "Illustration basics and techniques"
    ],
    specifications: {
      "Duration": "7 minutes",
      "Level": "Complete Beginner",
      "Language": "English",
      "Topics": "Color theory, visual communication",
      "Access": "6 months",
      "Certificate": "Basic completion badge"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Color Theory & Color Schemes Mastery",
    price: 6.99,
    image: getProductImage(3),
    images: getProductImages(3),
    video: getProductVideo(3),
    description: "Master color schemes, saturation, and color relationships for stunning digital illustrations.",
    detailedDescription: "Deep dive into professional color theory including color schemes, saturation techniques, and color relationships. Learn to create harmonious color palettes and understand how colors work together in digital illustration.",
    category: "Color Theory",
    features: [
      "8 minutes of color theory training",
      "Color scheme creation",
      "Saturation mastery",
      "Color harmony techniques",
      "Professional palette creation"
    ],
    specifications: {
      "Duration": "8 minutes",
      "Level": "Beginner",
      "Topics": "Color schemes, saturation, harmony",
      "Skills": "Palette creation, color mixing",
      "Access": "8 months",
      "Support": "Community forum access"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Visual Communication in Art",
    price: 9.99,
    image: getProductImage(4),
    images: getProductImages(4),
    video: getProductVideo(4),
    description: "Learn visual storytelling, communication principles, and how to convey messages through illustration.",
    detailedDescription: "Master visual communication in art with comprehensive training on storytelling through illustration, visual narrative techniques, and effective communication principles. Learn to create illustrations that speak to your audience.",
    category: "Visual Communication",
    features: [
      "10 minutes of communication training",
      "Visual storytelling techniques",
      "Narrative illustration methods",
      "Message conveyance strategies",
      "Practical communication exercises"
    ],
    specifications: {
      "Duration": "10 minutes",
      "Level": "Beginner",
      "Topics": "Visual storytelling, communication",
      "Practice": "Multiple illustration exercises",
      "Access": "10 months",
      "Bonus": "Visual communication guide"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Color and Emotions in Illustration",
    price: 19.99,
    image: getProductImage(5),
    images: getProductImages(5),
    video: getProductVideo(5),
    description: "Master the emotional impact of color in art, learn color psychology and storytelling through color.",
    detailedDescription: "Explore the deep connection between color and emotions in illustration. Learn color psychology, emotional color palettes, and how to use color to tell compelling stories and evoke specific feelings in your artwork.",
    category: "Color Psychology",
    features: [
      "12 minutes of emotional color training",
      "Color psychology principles",
      "Emotional palette creation",
      "Storytelling through color",
      "Practical emotion projects"
    ],
    specifications: {
      "Duration": "12 minutes",
      "Level": "Intermediate",
      "Topics": "Color psychology, emotions, storytelling",
      "Projects": "Multiple emotional illustration projects",
      "Access": "8 months",
      "Bonus": "Color emotion reference guide"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Light Sources & Lighting Techniques",
    price: 29.99,
    image: getProductImage(6),
    images: getProductImages(6),
    video: getProductVideo(6),
    videos: getProductVideos(6),
    description: "Master different light sources and professional lighting techniques for realistic illustrations.",
    detailedDescription: "Advance your illustration skills with comprehensive lighting training. This course includes 2 detailed video modules covering various light sources, neutral diffused light, and professional lighting techniques used by illustration masters.",
    category: "Lighting Techniques",
    features: [
      "2 comprehensive video modules",
      "15 minutes of lighting training",
      "Multiple light source techniques",
      "Neutral diffused light mastery",
      "Professional lighting patterns",
      "Real-world lighting applications"
    ],
    specifications: {
      "Duration": "15 minutes",
      "Videos": "2 comprehensive modules",
      "Level": "Advanced",
      "Topics": "Light sources, diffused lighting, techniques",
      "Projects": "Multiple lighting illustration projects",
      "Access": "10 months",
      "Bonus": "Professional lighting guide"
    },
    inStock: true
  },
  {
    id: 7,
    name: "Direct Sunlight & Natural Light in Art",
    price: 39.99,
    image: getProductImage(7),
    images: getProductImages(7),
    video: getProductVideo(7),
    videos: getProductVideos(7),
    description: "Learn to capture and render direct sunlight and natural lighting effects in your illustrations.",
    detailedDescription: "Master natural lighting with comprehensive training on direct sunlight effects and natural light rendering. This course includes 2 detailed video modules covering sunlight techniques and natural lighting applications in professional illustration.",
    category: "Natural Lighting",
    features: [
      "2 detailed video modules",
      "18 minutes of sunlight training",
      "Direct sunlight mastery",
      "Natural light rendering",
      "Outdoor scene lighting",
      "Professional sunlight techniques"
    ],
    specifications: {
      "Duration": "18 minutes",
      "Videos": "2 detailed modules",
      "Level": "Intermediate",
      "Lighting": "Direct sunlight, natural effects",
      "Tools": "Digital illustration software",
      "Access": "12 months",
      "Support": "Lighting reference guide"
    },
    inStock: true
  },
  {
    id: 8,
    name: "Window Light & Interior Lighting Mastery",
    price: 49.99,
    image: getProductImage(8),
    images: getProductImages(8),
    video: getProductVideo(8),
    videos: getProductVideos(8),
    description: "Master window lighting and interior lighting effects for atmospheric illustration scenes.",
    detailedDescription: "Enter the world of interior lighting with comprehensive window light training. This course includes 2 comprehensive video modules covering window lighting techniques, interior atmosphere creation, and ambient lighting for dramatic illustration effects.",
    category: "Interior Lighting",
    features: [
      "2 comprehensive video modules",
      "22 minutes of interior lighting",
      "Window light mastery",
      "Atmospheric effects",
      "Interior scene lighting",
      "Ambient lighting techniques"
    ],
    specifications: {
      "Duration": "22 minutes",
      "Videos": "2 comprehensive modules",
      "Level": "Intermediate",
      "Lighting": "Window light, interior ambiance",
      "Projects": "Complete interior scene illustrations",
      "Access": "12 months",
      "Bonus": "Interior lighting guide"
    },
    inStock: true
  },
  {
    id: 9,
    name: "Reflected Light & Advanced Lighting Techniques",
    price: 59.99,
    image: getProductImage(9),
    images: getProductImages(9),
    video: getProductVideo(9),
    videos: getProductVideos(9),
    description: "Master reflected light principles and advanced lighting techniques for professional illustrations.",
    detailedDescription: "Advance your lighting skills with comprehensive reflected light training and advanced techniques. This course includes 3 detailed video modules covering reflected light principles, advanced lighting setups, and professional lighting demonstrations for masterful illustrations.",
    category: "Advanced Lighting",
    features: [
      "3 detailed video modules",
      "25 minutes of advanced lighting",
      "Reflected light mastery",
      "Professional demonstrations",
      "Advanced lighting setups",
      "Light reflection techniques"
    ],
    specifications: {
      "Duration": "25 minutes",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Topics": "Reflected light, advanced techniques, demos",
      "Techniques": "15+ lighting methods",
      "Access": "12 months",
      "Bonus": "Advanced lighting reference"
    },
    inStock: true
  },
  {
    id: 10,
    name: "Night Light & Atmospheric Illustration",
    price: 69.99,
    image: getProductImage(10),
    images: getProductImages(10),
    video: getProductVideo(10),
    videos: getProductVideos(10),
    description: "Learn night lighting effects, atmospheric illustration, and mood creation through darkness and light.",
    detailedDescription: "Master night lighting and atmospheric effects with comprehensive training. This premium course includes 3 comprehensive video modules covering night scene lighting, atmospheric mood creation, and dramatic lighting techniques for compelling nighttime illustrations.",
    category: "Night Lighting",
    features: [
      "3 comprehensive video modules",
      "28 minutes of night lighting training",
      "Atmospheric effect mastery",
      "Night scene composition",
      "Mood creation techniques",
      "Professional nighttime illustrations"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "3 comprehensive modules",
      "Level": "Advanced",
      "Lighting": "Night effects, atmospheric mood",
      "Projects": "3 complete nighttime illustration projects",
      "Access": "15 months",
      "Bonus": "Night lighting reference collection"
    },
    inStock: true
  },
  {
    id: 11,
    name: "Candle Light & Warm Lighting Mastery",
    price: 79.99,
    image: getProductImage(11),
    images: getProductImages(11),
    video: getProductVideo(11),
    videos: getProductVideos(11),
    description: "Master candle lighting effects and warm lighting techniques for intimate and cozy illustrations.",
    detailedDescription: "Master intimate lighting with comprehensive candle light training. This premium course includes 3 detailed video modules covering candle lighting effects, warm lighting techniques, and creating intimate atmospheric scenes for professional-quality illustrations.",
    category: "Warm Lighting",
    features: [
      "3 detailed video modules",
      "32 minutes of warm lighting training",
      "Candle light effect mastery",
      "Intimate scene creation",
      "Warm color temperature techniques",
      "Cozy atmosphere illustration"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "3 detailed modules",
      "Level": "Advanced",
      "Lighting": "Candle effects, warm atmosphere",
      "Features": "Intimate scenes, cozy illustrations",
      "Access": "15 months",
      "Bonus": "Warm lighting temperature guide"
    },
    inStock: true
  },
  {
    id: 12,
    name: "Complete Color & Light Illustration Mastery",
    price: 89.99,
    image: getProductImage(12),
    images: getProductImages(12),
    video: getProductVideo(12),
    videos: getProductVideos(12),
    description: "Master all aspects of color and light in illustration with comprehensive training covering every lighting scenario and color technique.",
    detailedDescription: "Reach illustration mastery with complete color and light training. This premium course includes 4 comprehensive video modules covering every aspect of color theory, all lighting scenarios, and professional illustration techniques used by industry masters.",
    category: "Complete Mastery",
    features: [
      "4 comprehensive video modules",
      "35 minutes of expert instruction",
      "Complete color & light mastery",
      "All lighting scenarios covered",
      "Professional illustration techniques",
      "Industry-standard workflows"
    ],
    specifications: {
      "Duration": "35 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Expert",
      "Concepts": "All color theory, all lighting types",
      "Practices": "Professional workflows, industry standards",
      "Access": "18 months",
      "Bonus": "Complete illustration mastery toolkit"
    },
    inStock: true
  },
  {
    id: 13,
    name: "Advanced Character Design & Anatomy",
    price: 99.99,
    image: getProductImage(13),
    images: getProductImages(13),
    video: getProductVideo(13),
    videos: getProductVideos(13),
    description: "Master character design with advanced anatomy, proportions, expressions, and dynamic poses for professional character illustration.",
    detailedDescription: "Elevate your character illustration skills with comprehensive training in human anatomy, character proportions, facial expressions, body language, and dynamic posing. Learn professional techniques used in animation, games, and concept art industries.",
    category: "Character Design",
    features: [
      "4 detailed video modules",
      "24 minutes of expert training",
      "Full anatomy breakdown",
      "Character expression mastery",
      "Dynamic pose techniques",
      "Professional character workflows"
    ],
    specifications: {
      "Duration": "24 minutes",
      "Videos": "4 detailed modules",
      "Level": "Advanced",
      "Topics": "Anatomy, proportions, expressions, poses",
      "Skills": "Character design, anatomical accuracy",
      "Access": "20 months",
      "Bonus": "Anatomy reference library"
    },
    inStock: true
  },
  {
    id: 14,
    name: "Digital Painting Techniques Pro",
    price: 109.99,
    image: getProductImage(14),
    images: getProductImages(14),
    video: getProductVideo(14),
    videos: getProductVideos(14),
    description: "Learn professional digital painting techniques including brushwork, textures, layering, and advanced rendering methods.",
    detailedDescription: "Master digital painting with professional techniques covering custom brush creation, texture painting, advanced layering strategies, and rendering methods used by industry professionals. Transform your digital artwork to professional quality.",
    category: "Digital Painting",
    features: [
      "4 comprehensive modules",
      "28 minutes of painting mastery",
      "Custom brush techniques",
      "Texture painting methods",
      "Advanced layering strategies",
      "Professional rendering workflows"
    ],
    specifications: {
      "Duration": "28 minutes",
      "Videos": "4 comprehensive modules",
      "Level": "Professional",
      "Topics": "Brushwork, textures, rendering",
      "Tools": "Custom brushes, advanced techniques",
      "Access": "22 months",
      "Bonus": "Professional brush pack"
    },
    inStock: true
  },
  {
    id: 15,
    name: "Environment & Landscape Illustration Mastery",
    price: 119.99,
    image: getProductImage(15),
    images: getProductImages(15),
    video: getProductVideo(15),
    videos: getProductVideos(15),
    description: "Create stunning environments and landscapes with advanced perspective, atmospheric depth, and natural elements illustration.",
    detailedDescription: "Master environment and landscape illustration with comprehensive training in advanced perspective techniques, atmospheric perspective, natural elements rendering, and environment storytelling. Create breathtaking landscapes and immersive environments.",
    category: "Environment Design",
    features: [
      "5 detailed video modules",
      "32 minutes of environment training",
      "Advanced perspective mastery",
      "Atmospheric depth techniques",
      "Natural elements rendering",
      "Environment storytelling methods"
    ],
    specifications: {
      "Duration": "32 minutes",
      "Videos": "5 detailed modules",
      "Level": "Professional",
      "Topics": "Perspective, atmosphere, landscapes",
      "Skills": "Environment design, natural rendering",
      "Access": "24 months",
      "Bonus": "Environment reference pack"
    },
    inStock: true
  },
  {
    id: 16,
    name: "Concept Art & Visual Development Complete",
    price: 129.99,
    image: getProductImage(16),
    images: getProductImages(16),
    video: getProductVideo(16),
    videos: getProductVideos(16),
    description: "Professional concept art training covering ideation, visual development, production design, and portfolio-ready artwork creation.",
    detailedDescription: "Become a professional concept artist with complete training in ideation techniques, visual development workflows, production design principles, and portfolio creation. Learn the exact methods used in film, game, and animation studios.",
    category: "Concept Art",
    features: [
      "5 comprehensive modules",
      "36 minutes of expert instruction",
      "Professional ideation techniques",
      "Visual development workflows",
      "Production design principles",
      "Portfolio creation strategies"
    ],
    specifications: {
      "Duration": "36 minutes",
      "Videos": "5 comprehensive modules",
      "Level": "Professional",
      "Topics": "Concept art, visual dev, production design",
      "Skills": "Ideation, portfolio creation",
      "Access": "24 months",
      "Bonus": "Concept art portfolio template"
    },
    inStock: true
  },
  {
    id: 17,
    name: "Professional Illustration Master Bundle",
    price: 139.99,
    image: getProductImage(17),
    images: getProductImages(17),
    video: getProductVideo(17),
    videos: getProductVideos(17),
    description: "The ultimate professional bundle covering all advanced techniques, business strategies, and industry secrets for successful illustration career.",
    detailedDescription: "Achieve complete illustration mastery with this comprehensive professional bundle. Includes 8 detailed modules covering advanced techniques, professional workflows, business strategies, client management, and all the industry secrets used by top illustrators worldwide.",
    category: "Professional Master Bundle",
    features: [
      "5 comprehensive modules",
      "40 minutes of expert training",
      "Complete professional toolkit",
      "Business & career strategies",
      "Industry insider techniques",
      "Lifetime professional support"
    ],
    specifications: {
      "Duration": "40 minutes",
      "Videos": "5 comprehensive modules",
      "Level": "Master Professional",
      "Topics": "All advanced techniques, business, career",
      "Skills": "Complete mastery, professional success",
      "Access": "Lifetime access",
      "Bonus": "Complete professional resource library"
    },
    inStock: true
  }
];
