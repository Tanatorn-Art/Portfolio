'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, Linkedin, ExternalLink, Code, Zap, Users, Globe, ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(`hero`);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce SaaS Platform",
      description: "A comprehensive SaaS solution for online retailers with inventory management, payment processing, and real-time analytics dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      demo: "#",
      github: "#",
      status: "Production"
    },
    {
      title: "AI-Powered CRM System",
      description: "Intelligent customer relationship management platform with AI-driven insights, sales forecasting, and automated workflow optimization.",
      tech: ["React", "Python", "FastAPI", "TensorFlow", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      demo: "#",
      github: "#",
      status: "Beta"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Modern workspace platform enabling seamless team collaboration with live document editing, video calls, and project management features.",
      tech: ["Vue.js", "Node.js", "Socket.io", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      demo: "#",
      github: "#",
      status: "Development"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"] },
    { category: "SaaS Tools", items: ["Stripe", "Auth0", "SendGrid", "Analytics", "Monitoring"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            DevPortfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Hello, I&apos;m a Developer
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Specialized in building scalable SaaS applications with cutting-edge technologies.
              Creating solutions that drive business growth and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 px-8 py-4 rounded-full hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Full-Stack Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 5 years of experience in developing SaaS applications and web platforms,
                I specialize in creating high-performance, scalable systems that can handle millions of users
                and adapt to growing business needs.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m passionate about emerging technologies and love solving complex problems.
                I have extensive experience working in Agile environments and collaborating
                with cross-functional teams to deliver exceptional products.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <Code className="text-blue-400 mb-2" size={24} />
                  <h4 className="font-semibold">Clean Code</h4>
                  <p className="text-sm text-gray-400">Writing maintainable & readable code</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <Zap className="text-cyan-400 mb-2" size={24} />
                  <h4 className="font-semibold">Performance</h4>
                  <p className="text-sm text-gray-400">Optimizing for maximum efficiency</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <Users className="text-sky-400 mb-2" size={24} />
                  <h4 className="font-semibold">Teamwork</h4>
                  <p className="text-sm text-gray-400">Excellent collaboration skills</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <Globe className="text-teal-400 mb-2" size={24} />
                  <h4 className="font-semibold">Scalable</h4>
                  <p className="text-sm text-gray-400">Building systems that grow</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Developer"
                  className="w-full rounded-xl mb-4"
                />
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">Alex Johnson</h4>
                  <p className="text-blue-300 mb-4">Senior Full-Stack Developer</p>
                  <div className="flex justify-center space-x-4">
                    <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm">React Expert</span>
                    <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-sm">SaaS Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-300">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 delay-300"
                          style={{ width: `${85 + Math.random() * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-300">Ready to Build Something Amazing?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects.
                  Whether you need a full-stack developer for your SaaS application or want to discuss
                  technical challenges, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-400" size={20} />
                    <span>alex.johnson@example.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="text-gray-400" size={20} />
                    <span>github.com/alexjohnson</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-cyan-400" size={20} />
                    <span>linkedin.com/in/alexjohnson</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    onClick={() => alert('Message sent! (This is just a demo)')}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Alex Johnson. Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;