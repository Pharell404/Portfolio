import { useState } from 'react';

export default function App() {
  // Track which of the 7 pages is currently active
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects' | 'skills' | 'leadership' | 'impact' | 'contact'>('home');

  // Unified navigation links configuration
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Technical Stack' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'impact', label: 'Social Impact' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 1. FIXED NAVIGATION BAR (Ensures UI Consistency) */}
      <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="shrink-0 font-extrabold text-xl tracking-tight text-emerald-400">
              Pharell.Profile
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === link.id
                        ? 'bg-emerald-500/10 text-emerald-400 border-b-2 border-emerald-400 rounded-b-none'
                        : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. DYNAMIC MAIN CONTENT AREA (Switches based on active state) */}
      <main className="grow max-w-5xl w-full mx-auto px-4 py-12">
        
        {/* PAGE 1: HOME */}
        {currentPage === 'home' && (
          <section className="space-y-6 text-center md:text-left md:flex md:items-center md:space-x-12 py-12 animate-fadeIn">
            <div className="space-y-4 md:w-2/3">
              <div className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                Business Information Systems Specialist
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                Hi, I'm <span className="text-emerald-400">Pharell</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                Bridging the gap between robust database architectures, business systems engineering, and community-driven technology initiatives.
              </p>
              <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                <button onClick={() => setCurrentPage('projects')} className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
                  View My Work
                </button>
                <button onClick={() => setCurrentPage('contact')} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 font-medium px-6 py-3 rounded-lg transition-colors">
                  Get In Touch
                </button>
              </div>
            </div>
          </section>
        )}

        {/* PAGE 2: ABOUT ME */}
        {currentPage === 'about' && (
          <section className="space-y-6 max-w-3xl animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-white border-b-2 border-emerald-500 w-fit pb-2">Academic Journey</h2>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-400">Jaramogi Oginga Odinga University of Science and Technology</h3>
              <p className="text-slate-300 font-medium">Bachelor of Science in Business Information Systems (Third Year)</p>
              <p className="text-slate-400 leading-relaxed">
                Focusing on the intersections of operational frameworks, structural software design, and enterprise asset administration. Passionate about using technological platforms to streamline data workflows and drive community leadership transparency.
              </p>
            </div>
          </section>
        )}

        {/* PAGE 3: PROJECTS */}
        {currentPage === 'projects' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-white border-b-2 border-emerald-500 w-fit pb-2">Technical Implementations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 shadow-lg hover:border-slate-700 transition-all">
                <div className="text-xs font-mono text-emerald-400 bg-slate-800 px-2 py-1 rounded w-fit">Relational Databases</div>
                <h3 className="text-xl font-bold text-white">Normalized Database Management Systems</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Engineered optimized relational schemas utilizing MySQL and MariaDB server instances. Specialized in data integrity constraints, indexing, and structural normal forms to handle business records flawlessly.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3 shadow-lg hover:border-slate-700 transition-all">
                <div className="text-xs font-mono text-emerald-400 bg-slate-800 px-2 py-1 rounded w-fit">System Environments</div>
                <h3 className="text-xl font-bold text-white">Linux Administration Frameworks</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Configured custom services, managed system repositories, and performed task-driven directory management workflows using advanced Linux distribution terminals.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* PAGE 4: TECHNICAL STACK */}
        {currentPage === 'skills' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-white border-b-2 border-emerald-500 w-fit pb-2">Core Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['MySQL / MariaDB', 'Systems Analysis', 'Linux Administration', '.NET Framework', 'Git / Version Control', 'Project WBS Design', 'Trello Workflow Tracking', 'Data Normalization'].map((skill) => (
                <div key={skill} className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg text-center font-medium text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PAGE 5: LEADERSHIP */}
        {currentPage === 'leadership' && (
          <section className="space-y-6 max-w-3xl animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-white border-b-2 border-emerald-500 w-fit pb-2">Governance & Advocacy</h2>
            <div className="border-l-2 border-emerald-500 pl-6 space-y-8">
              <div className="relative space-y-2">
                <div className="absolute -left-7.75 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-slate-950"></div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Elected Representative</span>
                <h3 className="text-xl font-bold text-white">Student Congress Representative</h3>
                <p className="text-sm font-medium text-slate-400">School of Informatics and Innovative Systems</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Actively managing democratic student representation, ensuring operational clarity regarding institutional standing orders, and advocating for student welfare within university governance channels.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* PAGE 6: SOCIAL IMPACT */}
        {currentPage === 'impact' && (
          <section className="space-y-6 max-w-3xl animate-fadeIn">
            <h2 className="text-3xl font-extrabold text-white border-b-2 border-emerald-500 w-fit pb-2">Community & Social Impact</h2>
            <div className="grid gap-6">
              <div className="bg-linear-to-br from-slate-900 to-slate-900/60 border border-slate-800 p-6 rounded-xl space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Sauti Salama Youth Project</h3>
                  <span className="text-xs font-semibold px-2 py-1 text-emerald-400 bg-emerald-500/10 rounded border border-emerald-500/20">Mental Health Advocate</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Participated as a key layout designer and technical advisor for a dedicated campus framework designed to securely channel access to mental health guidance resources and student counseling networks.
                </p>
              </div>
            </div>
          </section>
        )}

       {/* PAGE 7: CONTACT */}
        {currentPage === 'contact' && (
          <section className="space-y-8 max-w-xl mx-auto animate-fadeIn">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-extrabold text-white">Let's Connect</h2>
              <p className="text-slate-400 text-sm">Have a systems project, governance inquiry, or structural question? Drop a message or find me online.</p>
              
              {/* SOCIAL HANDLES GRID */}
              <div className="space-y-4 pt-2">
                {/* Row 1: Professional Channels */}
                <div className="flex justify-center gap-4">
                  {/* LinkedIn SVG */}
                  <a 
                    href="https://linkedin.com/in/phenyleyare" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* Twitter / X SVG */}
                  <a 
                    href="https://twitter.com/5tar_404"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                    title="Twitter / X"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                 {/* Email SVG */}
                  <a 
                     href="https://mail.google.com/mail/?view=cm&fs=1&to=yarephenyle@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                     title="Email Direct"
                  >
                     <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                     <polyline points="22,6 12,13 2,6"></polyline>
                     </svg>
                  </a>

                  {/* Discord SVG */}
                  <a 
                    href="https://discord.com/users/pharell404" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                    title="Discord Community"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 127.14 96.36">
                      <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.95,54.65,1,77.53a105.73,105.73,0,0,0,32,16.29,79,79,0,0,0,6.85-11.15,68.42,68.42,0,0,1-10.75-5.13c.91-.66,1.8-1.34,2.65-2a75.58,75.58,0,0,0,71,0c.85.69,1.74,1.37,2.65,2a68.42,68.42,0,0,1-10.75,5.13,79.12,79.12,0,0,0,6.85,11.15,105.73,105.73,0,0,0,32-16.29C130.41,48.09,124.34,25.33,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5.14-12.67,11.41-12.67S53.92,46,53.86,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.38,40.35,84.69,40.35,96.16,46,96.1,53,91,65.69,84.69,65.69Z"/>
                    </svg>
                  </a>
                </div>

                {/* Row 2: Social & Community Channels */}
                <div className="flex justify-center gap-4">
                  {/* WhatsApp SVG */}
                  <a 
                    href="https://wa.me/254700240136" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                    title="WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.904-6.989-1.873-1.876-4.36-2.907-7.011-2.908-5.442 0-9.866 4.42-9.869 9.865-.001 1.751.469 3.461 1.358 4.977l-.988 3.606 3.726-.977zm11.367-7.384c-.33-.164-1.951-.963-2.251-1.072-.3-.109-.518-.164-.736.164-.218.327-.844 1.072-1.034 1.29-.19.218-.379.245-.71.081-.33-.164-1.393-.513-2.653-1.638-1.01-.901-1.694-2.013-1.892-2.34-.198-.328-.021-.505.143-.668.148-.147.33-.382.495-.573.165-.19.22-.328.33-.546.11-.218.055-.409-.027-.573-.082-.164-.736-1.774-1.009-2.43-.267-.641-.539-.553-.736-.563-.19-.01-.409-.01-.627-.01s-.573.082-.873.409c-.3.327-1.145 1.118-1.145 2.727s1.173 3.164 1.336 3.382c.164.218 2.307 3.522 5.59 4.943.78.339 1.39.541 1.865.692.784.249 1.497.214 2.061.13.629-.094 1.951-.798 2.224-1.528.273-.73.273-1.364.191-1.499-.081-.135-.3-.218-.63-.382z"/>
                    </svg>
                  </a>

                  {/* Instagram SVG */}
                  <a 
                    href="https://instagram.com/4.morning_star" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>

                  {/* TikTok Text */}
                  <a 
                    href="https://tiktok.com/@.star7149" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-md flex items-center justify-center"
                    title="TikTok"
                  >
                    <span className="text-xs font-black tracking-tighter px-0.5 select-none">TT</span>
                  </a>
                </div>
              </div>
            </div>

            {/* MESSAGE FORM */}
            <form onSubmit={(e) => e.preventDefault()} className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 shadow-xl">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Full Name</label>
                <input type="text" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
                <input type="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Message Body</label>
                <textarea rows={4} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-lg transition-colors shadow-lg shadow-emerald-500/10">
                Send Secure Message
              </button>
            </form>
          </section>
        )}

      </main>

      {/* 3. FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Pharell Yare. Built with Vite + React + Tailwind CSS.
      </footer>
    </div>
  );
}