# imaty | Portfolio

This repository contains the source code for the personal portfolio website of **imaty**. It is a modern, stylish, and fully responsive single-page portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js + TypeScript + Tailwind CSS**
- 🖥️ Single-page design (all sections on one page)
- 🎨 Modern, stylish, and responsive UI
- 🌙 Light/Dark mode toggle
- 👤 Profile, Skills, Projects, and Contact sections
- 🔗 Social links with icon switching based on theme
- 🚀 Ready for deployment (Vercel, Netlify, etc.)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open** [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Folder Structure

```
├── src/
│   ├── pages/           # Main page (index.tsx)
│   ├── components/      # React components (SectionTitle, ThemeToggle, ...)
│   └── styles/          # Global styles (Tailwind)
├── public/
│   ├── profile/         # Profile images
│   └── icons/           # Social/media icons
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## Customization
- Place your profile image in `public/profile/profile.png`.
- Update skills, projects, and social links directly in `src/pages/index.tsx`.
- Add or replace icons in `public/icons/` as needed.

## Author

**imaty**

---

For any questions or feedback, feel free to open an issue or contact via the links on the site.
※ 個人情報や外部リンクはダミー値を利用しています。
