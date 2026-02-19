export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source_code: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: 'Recompass',
    description:
      'A comprehensive AI-powered fitness app, which helps users track and spot trends in their caloric intake, also gives personalized recommendations based on their goals.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600',
    tags: ['TypeScript', 'Spring Boot', 'OpenRouter AI', 'H2 DB'],
    source_code: 'https://github.com/zoo-hair/Recompass',
    demo: 'https://recompass.netlify.app/insights',
  },
  {
    title: 'OfficeVerse',
    description:
      'A modern office management and workspace visualization platform designed to streamline team collaboration and resource tracking.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Phaser.js'],
    source_code: 'https://github.com/zoo-hair/OfficeVerse-',
    demo: 'https://officeverse.netlify.app/',
  },
  {
    title: 'Cyberpunk Noir Obsidian',
    description:
      'A high-contrast, neon-aesthetic theme for Obsidian.md designed for deep focus and a futuristic "noir" writing experience.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600',
    tags: ['CSS', 'Obsidian', 'UI/UX Design'],
    source_code: 'https://github.com/zoo-hair/Cyberpunk-Noir-theme-for-Obsidian',
    demo: 'https://github.com/zoo-hair/Cyberpunk-Noir-theme-for-Obsidian/releases',
  },
  {
    title: 'Whisper_shHHH',
    description:
      'A secure, desktop-focused messaging application built with a focus on privacy and minimalist design.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600',
    tags: ['Java', 'Swing', 'AES Encryption', 'Networking'],
    source_code: 'https://github.com/zoo-hair/Whisper_shHHH',
    demo: 'https://github.com/zoo-hair/Whisper_shHHH',
  },
];
