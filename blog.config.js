const BLOG = {
  title: '信哲', // 博客标题
  author: '信哲', // 作者
  email: 'i@zuolan.me', // 电子邮箱
  link: 'https://www.shintetu.com', // 博客链接
  newsletter: 'Notionic Weekly', // 每周简报名称
  description: 'Dream it. Chase it. Code it.', // 博客描述
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES'] 语言设置
  timezone: 'Asia/Shanghai', // 时区设置，参考 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  appearance: 'auto', // ['light', 'dark', 'auto'] 外观设置
  font: 'sans-serif', // ['sans-serif', 'serif'] 字体设置
  lightBackground: '#F6F8FA', // 亮色背景
  darkBackground: '#212936', // 暗色背景
  path: '', // 路径设置，除非部署在文件夹内，否则留空
  since: 2023, // 博客开始年份，留空则使用当前年份
  postsPerPage: 10, // 每页显示文章数
  sortByDate: true, // 按日期排序文章
  pagesShow: {
    newsletter: true, // 是否显示简报页面
    notes: true, // 是否显示笔记页面
    projects: true, // 是否显示项目页面
    contact: true, // 是否显示联系页面
    books: true, // 是否显示书籍页面
    friends: true // 是否显示朋友页面
  },
  showWeChatPay: false, // 是否显示微信支付
  previewImagesEnabled: true, // 是否启用预览图片
  autoCollapsedNavBar: false, // 自动折叠导航栏
  ogImageGenerateHost: 'og-zl.vercel.app', // 生成 OG 图片的链接
  defaultCover: '/cover.jpg', // 默认封面图片
  socialLink: {
    twitter: 'https://twitter.com/izuolan', // Twitter 链接
    github: 'https://github.com/izuolan', // GitHub 链接
    telegram: 'https://t.me/zuolan' // Telegram 链接
  },
  seo: {
    keywords: ['Notionic', 'Zuolan', 'Blog'], // SEO 关键词
    googleSiteVerification: '' // Google 网站验证代码
  },
  notionPageId: process.env.NOTION_PAGE_ID, // Notion 页面 ID
  notionSpacesId: process.env.NOTION_SPACES_ID, // Notion 空间 ID
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Notion 访问令牌
  notionDomain: 'izuolan.notion.site', // Notion 域名
  telegramToken: process.env.TELEGRAM_TOKEN, // Telegram 机器人令牌
  telegramChatId: '263895784', // Telegram 机器人聊天 ID
  telegramChannelUrl: 'https://channel.zuolan.me/', // Telegram 频道链接
  telegramChannelName: 'zuolan_me', // Telegram 频道名称
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB', // Craft 配置分享链接
  analytics: {
    provider: '', // 分析提供商，支持 Google Analytics、Ackee、Umami 和 Cloudflare Insights，填写 'ga' 或 'ackee' 或 'umami' 或 'cf'，留空则禁用
    ackeeConfig: {
      tracker: '', // Ackee 追踪器链接
      dataAckeeServer: '', // Ackee 数据服务器链接
      domainId: '' // Ackee 域名 ID
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Cloudflare Insights 脚本链接
      token: '' // Cloudflare Insights 令牌
    },
    gaConfig: {
      measurementId: '' // Google Analytics 测量 ID
    },
    umamiConfig: {
      scriptUrl: '', // Umami 脚本链接
      websiteId: '' // Umami 网站 ID
    }
  },
  comment: {
    // 评论插件提供商，支持 Utterances、Supacomments
    provider: '', // 如果不需要任何评论插件，请留空
    supaCommentsConfig: {
      supabaseUrl: '', // Supabase 实例链接
      supabaseAnonKey: '' // Supabase 匿名密钥
    },
    utterancesConfig: {
      repo: '' // Utterances 仓库
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // 区分开发和生产环境
}

// 导出配置对象
module.exports = BLOG
