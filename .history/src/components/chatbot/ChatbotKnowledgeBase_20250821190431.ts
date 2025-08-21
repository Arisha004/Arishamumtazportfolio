// Arisha Mumtaz Portfolio Chatbot Knowledge Base
export interface KnowledgeItem {
  keywords: string[];
  response: string;
  category: 'skills' | 'contact' | 'experience' | 'services' | 'about' | 'general';
}

export const knowledgeBase: KnowledgeItem[] = [
  // About Arisha
  {
    keywords: ['who are you', 'about you', 'who is arisha', 'tell me about yourself', 'introduction'],
    response: "Hi! I'm Arisha Mumtaz, a passionate UI/UX Designer and Front-End Developer based in Karachi, Pakistan. I specialize in creating dynamic, user-friendly web interfaces with a focus on both functionality and visual appeal. I have over 500+ professional connections and love bringing creative ideas to life through code and design!",
    category: 'about'
  },

  // Skills & Technologies
  {
    keywords: ['skills', 'technologies', 'what can you do', 'expertise', 'programming languages', 'tech stack'],
    response: "My core technical skills include:\n\n🔹 **Frontend Development:** HTML5, CSS3, Bootstrap, JavaScript, jQuery\n🔹 **UI/UX Design:** Figma, Webflow, User Interface Design\n🔹 **Web Development:** Responsive design, Cross-browser compatibility\n🔹 **Creative Design:** T-shirt design, Visual branding\n🔹 **Deployment:** Webflow for seamless website deployment\n\nI focus on creating dynamic and user-friendly web interfaces that combine functionality with stunning visual appeal!",
    category: 'skills'
  },

  {
    keywords: ['html', 'css', 'javascript', 'bootstrap', 'jquery', 'frontend'],
    response: "Yes! I'm highly skilled in frontend technologies:\n\n✅ **HTML5** - Semantic markup and accessibility\n✅ **CSS3** - Advanced styling, animations, and responsive design\n✅ **JavaScript** - Interactive functionality and DOM manipulation\n✅ **Bootstrap** - Rapid responsive framework development\n✅ **jQuery** - Simplified JavaScript interactions\n\nI use these technologies to build modern, responsive websites that work perfectly across all devices!",
    category: 'skills'
  },

  {
    keywords: ['figma', 'webflow', 'ui', 'ux', 'design', 'user interface', 'user experience'],
    response: "Absolutely! I'm experienced in UI/UX design:\n\n🎨 **Figma** - Complete design systems, prototyping, and collaboration\n🚀 **Webflow** - No-code development and seamless deployment\n💡 **UI/UX Design** - User-centered design, wireframing, and visual design\n📱 **Responsive Design** - Mobile-first approach for all screen sizes\n\nI create designs that are not only beautiful but also provide excellent user experiences!",
    category: 'skills'
  },

  // Services & What I Offer
  {
    keywords: ['services', 'what do you offer', 'hire', 'work', 'projects', 'freelance'],
    response: "I offer comprehensive web development and design services:\n\n🌟 **Frontend Development** - Custom websites with HTML, CSS, JavaScript\n🎯 **UI/UX Design** - Complete design systems and user experiences\n📱 **Responsive Web Design** - Mobile-first, cross-device compatibility\n🚀 **Webflow Development** - No-code solutions with custom functionality\n🎨 **Creative Design** - T-shirt design and visual branding\n💼 **Full Project Lifecycle** - From concept to deployment\n\nI'm passionate about bringing your ideas to life with clean code and beautiful design!",
    category: 'services'
  },

  // Contact Information
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'get in touch', 'hire me'],
    response: "I'd love to connect with you! Here's how you can reach me:\n\n📧 **LinkedIn:** https://pk.linkedin.com/in/arisha-mumtaz (500+ professional connections)\n💼 **Location:** Karachi, Sindh, Pakistan\n🌐 **GitHub:** https://github.com/Arisha004\n\nFeel free to reach out for collaborations, projects, or just to say hello! I'm always excited to discuss new opportunities and creative projects.",
    category: 'contact'
  },

  {
    keywords: ['linkedin', 'social media', 'professional network'],
    response: "You can find me on LinkedIn at: https://pk.linkedin.com/in/arisha-mumtaz\n\nI have 500+ professional connections and regularly share updates about my projects and the latest in web development and design. Connect with me to stay updated on my work!",
    category: 'contact'
  },

  {
    keywords: ['github', 'code', 'repositories', 'projects'],
    response: "Check out my code and projects on GitHub: https://github.com/Arisha004\n\nYou'll find my portfolio repository and other development projects there. I believe in clean, well-documented code and love sharing my work with the community!",
    category: 'contact'
  },

  {
    keywords: ['upwork', 'freelance platform', 'freelancer'],
    response: "I'm available for freelance projects! While I maintain profiles on various platforms, the best way to reach me for freelance work is through my LinkedIn profile: https://pk.linkedin.com/in/arisha-mumtaz\n\nI'm always open to discussing new projects and collaborations!",
    category: 'contact'
  },

  {
    keywords: ['slack', 'communication', 'team collaboration'],
    response: "For team collaboration and project communication, I'm available on Slack! You can reach out to me via LinkedIn (https://pk.linkedin.com/in/arisha-mumtaz) to get my Slack details for project collaboration.",
    category: 'contact'
  },

  // Location & Availability
  {
    keywords: ['location', 'where are you', 'karachi', 'pakistan', 'timezone'],
    response: "I'm based in Karachi, Sindh, Pakistan! 🇵🇰\n\nThis puts me in the PKT (Pakistan Standard Time) timezone, which is great for collaborating with clients across Asia, the Middle East, and Europe. I'm available for both local and international projects!",
    category: 'about'
  },

// Experience & Background
{
  keywords: ['experience', 'background', 'work history', 'portfolio', 'career'],
  response: "I'm currently contributing as a UI/UX Designer and Frontend Developer at Ally Solutions, where I work on creating seamless, user-friendly web experiences. \n\nPreviously, I’ve been involved in several client-based projects where I designed and developed responsive websites, built interactive UIs, and deployed them using Webflow. My experience combines both **design** and **development**, giving me the ability to bring ideas from concept to functional products. \n\nSome highlights of my professional journey:\n\n💻 **Frontend Development** – HTML5, CSS3, JavaScript, Bootstrap, jQuery\n🎨 **UI/UX Design** – Figma prototypes, Webflow deployment, responsive design\n🚀 **Client Projects** – Delivering end-to-end solutions for businesses and startups\n📈 **Professional Growth** – Built a strong LinkedIn network of 500+ professionals\n\nI continue to expand my expertise while working on exciting projects that blend creativity and functionality!",
  category: 'experience'
}

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

  // If no exact keyword match, try partial matching
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
  return "I'd be happy to help you learn more about Arisha Mumtaz! You can ask me about her skills in frontend development (HTML, CSS, JavaScript, Bootstrap), UI/UX design (Figma, Webflow), her services, or how to contact her. What would you like to know?";
}