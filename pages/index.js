import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const posts = [
    {
      id: 1,
      title: 'Next.js 入门指南',
      excerpt: '学习 Next.js 的核心概念和最佳实践',
      date: '2026-01-10',
      category: '前端开发',
      readTime: '15 分钟'
    },
    {
      id: 2,
      title: 'React 性能优化技巧',
      excerpt: '深入了解 React 性能优化的各种方法',
      date: '2026-01-05',
      category: '前端开发',
      readTime: '12 分钟'
    },
    {
      id: 3,
      title: 'TypeScript 高级类型',
      excerpt: '掌握 TypeScript 高级类型的使用技巧',
      date: '2026-01-01',
      category: 'TypeScript',
      readTime: '18 分钟'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>我的技术博客</title>
        <meta name="description" content="分享前端开发、React、Next.js 等技术文章" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* 导航栏 */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">技术博客</span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/">
                <span className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  首页
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  关于我
                </span>
              </Link>
              <Link href="/articles">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  文章
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  联系
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 英雄区域 */}
        <section className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image 
                src="https://via.placeholder.com/150" 
                alt="作者头像" 
                width={64} 
                height={64} 
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            你好，我是一名前端开发者
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            专注于 React、Next.js 和现代前端技术，分享我的学习心得和开发经验
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              查看全部文章
            </a>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
            >
              了解更多
            </a>
          </div>
        </section>

        {/* 分类标签 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">热门分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '前端开发', count: 24, color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
              { name: 'React', count: 18, color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' },
              { name: 'Next.js', count: 12, color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300' },
              { name: 'TypeScript', count: 15, color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' }
            ].map((category) => (
              <div 
                key={category.name} 
                className={`${category.color} p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer`}
              >
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm opacity-75">{category.count} 篇文章</p>
              </div>
            ))}
          </div>
        </section>

        {/* 最新文章 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-3">•</span>
                    <span>{post.date}</span>
                    <span className="mx-3">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    <Link href={`/posts/${post.id}`}>
                      <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {post.title}
                      </span>
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <Link href={`/posts/${post.id}`}>
                    <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline">
                      阅读更多
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 关于我 */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30">
              <Image 
                src="https://via.placeholder.com/150" 
                alt="作者头像" 
                width={128} 
                height={128} 
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">关于我</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                我是一名热爱技术的前端开发者，拥有多年的开发经验。专注于构建高性能、用户友好的 Web 应用程序。
                喜欢学习新技术，分享开发经验，希望能通过博客帮助更多的开发者。
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🔗' },
                  { name: 'Twitter', icon: '🐦' },
                  { name: 'LinkedIn', icon: '💼' },
                  { name: '掘金', icon: '📝' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">技术博客</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                分享前端开发、React、Next.js 等技术文章
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">快速链接</h3>
              <ul className="space-y-2">
                {['首页', '关于我', '文章', '联系'].map((item) => (
                  <li key={item}>
                    <Link href="#">
                      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">热门分类</h3>
              <ul className="space-y-2">
                {['前端开发', 'React', 'Next.js', 'TypeScript'].map((category) => (
                  <li key={category}>
                    <Link href="#">
                      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors">
                        {category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">联系我</h3>
              <ul className="space-y-2">
                {[
                  { icon: '📧', text: 'email@example.com' },
                  { icon: '🐦', text: '@username' },
                  { icon: '🔗', text: 'github.com/username' }
                ].map((contact, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>{contact.icon}</span>
                    <span>{contact.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-300 text-sm">
            <p>© 2026 技术博客. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}