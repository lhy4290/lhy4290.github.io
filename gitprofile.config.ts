// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lhy4290', // 你的 GitHub 帳號
  },
  /**
   * 因為你的儲存庫名稱是 lhy4290.github.io，
   * 這裡必須設定為 '/'，網頁才能正常解析！
   */
  base: '/',
  projects: {
    github: {
      display: true, // 自動顯示 GitHub 專案
      header: 'Github Projects',
      mode: 'automatic', // 自動抓取
      automatic: {
        sortBy: 'updated', // 改為依據最後更新時間排序，讓新專案排前面
        limit: 10, // 畫面上最多顯示幾個專案
        exclude: {
          forks: false, 
          projects: ['mywebsitematerial', 'Kaggle', '104-Community-Data-Analysis', 'lhy4290', 'lhy4290.github.io'], // 這裡可以填入你不想顯示在首頁的專案名稱
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'My Projects',
      // 如果目前沒有非 GitHub 的外部專案，保持空陣列 [] 就不會顯示這區塊
      projects: [],
    },
  },
  seo: { 
    title: 'Portfolio of Heng-Yu Liu', 
    description: 'Finance and Information Management Student | Data Analysis Portfolio', 
    imageURL: '' 
  },
  social: {
    linkedin: 'heng-yu-liu', // 填入你的 LinkedIn 網址 ID
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '', // 如果有其他個人網站可以放這
    phone: '',
    email: 'iris.liu4290@gmail.com', // 可以填入你的聯絡信箱
  },
  resume: {
    fileUrl: '', // 留空會自動隱藏「下載履歷」按鈕，之後有 PDF 履歷可以上傳雲端後貼過來
  },
  skills: [
    'Python',
    'Pandas',
    'HTML',
    'JavaScript',
    'Data Analysis',
    'Data Visualization',
    'Power BI',
    'Markdown',
    'Finance & Information Management',
  ],
  experiences: [
    // 如果目前想先隱藏工作經驗，可以把整段刪除或留空。以下為預設範本，可自行修改：
    {
      company: '104 Corporation',
      position: 'Social Marketing Data Analysis',
      from: '2024-07',
      to: '2025-07',
      companyLink: 'https://www.instagram.com/104student/',
    },
    {
      company: 'UNIQLO',
      position: 'Employer Branding',
      from: '2024-10',
      to: '2025-05',
      companyLink: 'https://www.fastretailing.com/employment/zh_cht/about/tw/brands.html',
    },
    {
      company: 'UNIQLO',
      position: 'Employer Branding',
      from: '2024-10',
      to: '2025-05',
      companyLink: 'https://www.fastretailing.com/employment/zh_cht/about/tw/brands.html',
    },
  ],
  certifications: [
    {
      name: 'IBM',
      body: 'IBM Data Science',
      body: 'IBM AI Developer (GenAI Apps)',
      body: 'IBM Data Analyst',
    },// 證照、語言檢定（例如未來考取的 IELTS 分數）可以寫在這裡
    {
      name: 'Google',
      body: 'Google AI',
      body: 'Google Data Analytics',
      body: 'Google Project Management (Agile)',
      body: 'Google Digital Marketing',
    },
    {
      name: 'Microsoft',
      body: 'Microsoft Power BI (PL-300)',
    },
    {
      name: 'Meta',
      body: 'Meta Data Analyst',
    },
    {
      name: 'NVIDIA',
      body: 'NVIDIA Networking',
    },
  ],
  educations: [
    {
      institution: 'National Taipei University of Technology (NTUT)',
      degree: 'Finance and Information Management',
      from: '2023',
      to: '2027',
    },
  ],
  publications: [], // 論文發表，沒有的話保持空陣列
  blog: {
    source: 'dev', 
    username: '', // 留空會隱藏部落格區塊
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi', // 預設的極簡風格

    disableSwitch: false, // 允許訪客切換黑夜/白天模式
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    // 支援的主題清單
    themes: [
      'light',
      'dark',
      'cupcake',
      'emerald',
      'corporate',
      'retro',
      'cyberpunk',
      'lofi',
      'dracula',
      'nord',
      'sunset',
    ],
  },

  // 頁尾
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
