// Arisha Mumtaz Portfolio Chatbot Knowledge Base
export interface KnowledgeItem {
  keywords: string[];
  response: string;
  category: 'skills' | 'contact' | 'experience' | 'services' | 'about' | 'general' | 'education' | 'portfolio';
}

export const knowledgeBase: KnowledgeItem[] = [
  // About Arisha
  {
    keywords: ['who are you', 'about you', 'anything','everything','who is arisha', 'tell me about yourself', 'introduction'],
    response: "Hi! I'm Arisha Mumtaz, a passionate Front-End Developer, UI/UX Designer, and Full-Stack Problem Solver based in Karachi, Pakistan. I specialize in building modern, user-friendly, and scalable applications by combining design and development. I build full-stack apps using **Replit, Lovable, and MGX** while solving real-world problems through structured implementation, testing, and debugging. Unlike a vibe coder, I approach projects with problem-solving, scalability, and user experience in mind.",
    category: 'about'
  },

  // Education
  {
    keywords: ['education', 'study', 'degree', 'university', 'aptech', 'szabist'],
    response: "My education background:\n\n🎓 **BSCS (Bachelor of Science in Computer Science)** from Szabist University\n📜 **Diploma in Information System Management** from Aptech\n\nThis blend of computer science fundamentals and applied systems training gives me a strong foundation for both development and design projects.",
    category: 'education'
  },

  // Skills & Technologies
  {
    keywords: ['skills', 'technologies', 'what can you do', 'expertise', 'programming languages', 'tech stack'],
    response: "My core technical skills include:\n\n🔹 **Frontend Development:** HTML5, CSS3, Bootstrap, JavaScript, jQuery\n🔹 **UI/UX Design:** Figma, Webflow, Responsive Design, Prototyping\n🔹 **Full-Stack Apps:** Building and deploying apps with Replit, Lovable, MGX\n🔹 **Creative Design:** T-shirt design, Visual branding, Marketing assets\n🔹 **Problem Solving:** Implementing, testing, and debugging real-world solutions\n\nI focus on building applications that are not just functional but also visually engaging and user-friendly.",
    category: 'skills'
  },

  {
    keywords: ['html', 'css', 'javascript', 'bootstrap', 'jquery', 'frontend'],
    response: "Yes! I'm skilled in **frontend development**:\n\n✅ HTML5 – Semantic markup and accessibility\n✅ CSS3 – Styling, animations, and responsive layouts\n✅ JavaScript – Interactivity and DOM manipulation\n✅ Bootstrap – Responsive frameworks for faster development\n✅ jQuery – Simplified DOM interactions\n\nThese are my tools for building modern, responsive, and interactive websites.",
    category: 'skills'
  },

  {
    keywords: ['figma', 'webflow', 'ui', 'ux', 'design', 'user interface', 'user experience'],
    response: "I’m experienced in **UI/UX design**:\n\n🎨 **Figma** – Prototyping, design systems, and wireframes\n🚀 **Webflow** – No-code development with custom styling and deployment\n📱 **Responsive Design** – Mobile-first and cross-device compatibility\n💡 **User Experience** – Creating designs that are intuitive and visually appealing\n\nMy goal is to merge creativity with usability.",
    category: 'skills'
  },

  // Services
  {
    keywords: ['services', 'what do you offer', 'hire', 'work', 'projects', 'freelance'],
    response: "I offer end-to-end design and development services:\n\n🌟 **Frontend Development** – HTML, CSS, JavaScript, Bootstrap\n🎯 **UI/UX Design** – Figma prototypes, Webflow design-to-deployment\n📱 **Responsive Websites** – Mobile-first, cross-device optimized\n🚀 **Full-Stack Apps** – Building apps with Replit, Lovable, MGX\n🎨 **Creative Design** – Branding, T-shirt design, product posts\n\nWhether it’s a landing page, full-stack app, or design system, I deliver high-quality solutions.",
    category: 'services'
  },

  // Experience
  {
    keywords: ['experience', 'background', 'work history', 'career'],
    response: "I’m currently working with **[Ally Solutions](https://www.allysolutions.ai/)** as a UI/UX Designer and Front-End Developer, where I contribute to collaborative projects, attend team meetings, and align on project goals.\n\nHighlights of my journey:\n💻 **Frontend Development** – HTML, CSS, JavaScript, Bootstrap, jQuery\n🎨 **UI/UX** – Figma design systems, Webflow deployment\n🚀 **Full-Stack** – Applications using Replit, Lovable, MGX\n🤝 **Teamwork** – Collaborated with cross-functional teams at Ally Solutions\n\nI also maintain 3 portfolios showcasing my work in development and design.",
    category: 'experience'
  },
  {
    keywords: ['slack', 'communication', 'team collaboration'],
    response: "For team collaboration and project communication, I'm available on Slack! You can reach out to me via LinkedIn (https://pk.linkedin.com/in/arisha-mumtaz) to get my Slack details for project collaboration.",
    category: 'contact'
  },

  // Pricing & Rates (General)
  {
    keywords: ['price', 'cost', 'rate', 'budget', 'pricing'],
    response: "I offer competitive rates based on project scope and requirements. Factors that influence pricing include:\n\n📋 **Project Complexity** - Simple landing page vs. complex web application\n⏱️ **Timeline** - Standard delivery vs. rush projects\n🎯 **Services** - Design only, development only, or full-service\n📱 **Features** - Responsive design, animations, custom functionality\n\nLet's discuss your specific needs! Contact me via LinkedIn: https://pk.linkedin.com/in/arisha-mumtaz for a personalized quote.",
    category: 'services'
  },

  // Default responses for unmatched queries
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! 👋 I'm Arisha's AI assistant. I'm here to tell you all about Arisha Mumtaz - her skills in frontend development, UI/UX design, and how you can get in touch with her. What would you like to know?",
    category: 'general'
  },

  {
    keywords: ['help', 'what can you tell me', 'information'],
    response: "I can help you learn about Arisha Mumtaz! I can tell you about:\n\n🔹 Her technical skills (HTML, CSS, JavaScript, Figma, Webflow)\n🔹 Services she offers (Frontend Development, UI/UX Design)\n🔹 How to contact her (LinkedIn, GitHub)\n🔹 Her background and experience\n🔹 Location and availability\n\nWhat specific information are you looking for?",
    category: 'general'
  },

  {
    keywords: ['thank you', 'thanks', 'appreciate'],
    response: "You're very welcome! 😊 If you have any more questions about Arisha's skills, experience, or how to get in touch with her, feel free to ask. Don't forget to connect with her on LinkedIn: https://pk.linkedin.com/in/arisha-mumtaz",
    category: 'general'
  }
];


  // Portfolios
  {
    keywords: ['portfolio','links', 'portfolio links', 'projects', 'samples', 'work'],
    response: "Here are my portfolio links:\n\n🌐 Development Portfolio 1:(https://arishadev.netlify.app/)\n🌐 Development Portfolio 2: (https://arishamumtaz01.netlify.app/)\n\n🎨 Design Portfolio:(https://arishas-portfolio-6a869d.webflow.io/)\n\nThese showcase my design skills, frontend projects, and end-to-end development.",
    category: 'portfolio'
  },

  // Contact
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'get in touch', 'hire me','github', 'linkedin'],
    response: "You can connect with me here:\n\n📧 LinkedIn: [My linkedIn](https://www.linkedin.com/in/arisha-mumtaz/)\n💼 GitHub: [My GitHub](https://github.com/Arisha004)\n🌐 Ally Solutions: [allysolutions.ai](https://www.allysolutions.ai/)\n📍 Location: Karachi, Pakistan\n\nI’d love to connect for collaborations, freelance work, or projects!",
    category: 'contact'
  },

  // Default responses
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello 👋! I’m Arisha’s portfolio assistant. I can tell you about her **skills, education, projects, teamwork, experience, or portfolios**. What would you like to know?",
    category: 'general'
  },
  {
    keywords: ['help', 'what can you tell me', 'information'],
    response: "I can share info about Arisha’s:\n\n🔹 Education (BSCS SZABIST, Aptech Diploma)\n🔹 Skills (Frontend, UI/UX, Full-Stack apps)\n🔹 Services (Web dev, design, branding)\n🔹 Experience (Ally Solutions + projects)\n🔹 Portfolios (3 portfolio links)\n🔹 Contact (LinkedIn, GitHub)\n\nWhat do you want to explore?",
    category: 'general'
  },
  {
    keywords: ['thank you', 'thanks', 'appreciate'],
    response: "You're welcome! 😊 Don’t forget to check out Arisha’s LinkedIn: [My LinkedIn](https://www.linkedin.com/in/arisha-mumtaz/) and her portfolios to see her work in action.",
    category: 'general'
  }
];

export function findBestMatch(userInput: string): KnowledgeItem | null {
  const input = userInput.toLowerCase();
  let bestMatch: KnowledgeItem | null = null;
  let maxMatches = 0;

  for (const item of knowledgeBase) {
    let matches = 0;
    for (const keyword of item.keywords) {
      if (input.includes(keyword.toLowerCase())) {
        matches++;
      }
    }
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = item;
    }
  }

  if (!bestMatch) {
    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        const keywordWords = keyword.toLowerCase().split(' ');
        const inputWords = input.split(' ');
        
        const commonWords = keywordWords.filter(word => 
          inputWords.some(inputWord => inputWord.includes(word) || word.includes(inputWord))
        );
        
        if (commonWords.length > 0 && commonWords.length >= keywordWords.length * 0.5) {
          return item;
        }
      }
    }
  }

  return bestMatch;
}

export function getDefaultResponse(): string {
  return "I’d be happy to help you learn more about Arisha Mumtaz! You can ask me about her **education (SZABIST, Aptech)**, **skills (Frontend, UI/UX, Full-Stack apps)**, **experience (Ally Solutions)**, or see her **portfolios**.";
}
