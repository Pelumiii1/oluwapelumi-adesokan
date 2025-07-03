"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import image from "."

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // GSAP Refs
  // const heroRef = useRef(null);
  // const aboutRef = useRef(null);
  // const skillsRef = useRef(null);
  // const projectsRef = useRef(null);
  // const contactRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    // const tl = gsap.timeline();
    // tl.from(".hero-title", {
    //   duration: 1.2,
    //   y: 100,
    //   opacity: 0,
    //   ease: "power3.out"
    // })
    // .from(".hero-subtitle", {
    //   duration: 1,
    //   y: 50,
    //   opacity: 0,
    //   ease: "power2.out"
    // }, "-=0.8")
    // .from(".hero-description", {
    //   duration: 1,
    //   y: 30,
    //   opacity: 0,
    //   ease: "power2.out"
    // }, "-=0.6")
    // .from(".hero-buttons", {
    //   duration: 0.8,
    //   y: 30,
    //   opacity: 0,
    //   ease: "power2.out"
    // }, "-=0.4");

    // Floating elements animation
    gsap.to(".floating-1", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".floating-2", {
      y: -25,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });

    gsap.to(".floating-3", {
      y: -15,
      duration: 3.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2,
    });

    // Section Animations on Scroll
    // About Section
    gsap.fromTo(
      ".about-content",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top bottom",
          end: "bottom 20%",
          toggleActions: "play none none",
        },
      }
    );

    gsap.fromTo(
      ".about-stats",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Skills Animation
    gsap.fromTo(
      ".skill-item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate skill bars
    gsap.fromTo(
      ".skill-progress",
      {
        width: "0%",
      },
      {
        width: (index, target) => target.getAttribute("data-width"),
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Projects Animation
    gsap.fromTo(
      ".project-card",
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Contact Animation
    gsap.fromTo(
      ".contact-info",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".contact-form",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section headings animation
    gsap.fromTo(
      ".section-heading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React.js", level: 92, color: "bg-blue-500" },
    { name: "Next.js", level: 90, color: "bg-gray-800" },
    { name: "TypeScript", level: 88, color: "bg-blue-600" },
    { name: "JavaScript (ES6+)", level: 95, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 93, color: "bg-cyan-500" },
    { name: "Redux/Zustand", level: 90, color: "bg-purple-500" },
    { name: "RESTful APIs", level: 90, color: "bg-green-500" },
    { name: "Jest Testing", level: 82, color: "bg-orange-500" },
    { name: "Vue.js", level: 78, color: "bg-emerald-500" },
    { name: "Node/Express", level: 70, color: "bg-red-500" },
    { name: "React Native", level: 70, color: "bg-green-500" },
  ];

  const projects = [
    {
      title: "CareLife Foundation",
      description:
        "Comprehensive charity website supporting child empowerment programs with responsive design and donation integration.",
      tech: ["React.js", "Next.js", "TailwindCSS", "API Integration"],
      image: "/carelife.png",
      github: "https://github.com/Pelumiii1/carelife-foundation",
      live: "https://carelife-foundation.vercel.app/",
    },
    {
      title: "AFO CyberSec",
      description:
        "Modern cybersecurity company website with advanced security features and comprehensive service showcase.",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      image: "afocybersec.png",
      github: "https://github.com/Pelumiii1/afocyber",
      live: "https://www.afocybersec.com/",
    },
    {
      title: "Skill2Rural Platform",
      description:
        "Educational platform bridging opportunities and transforming lives with comprehensive learning management system.",
      tech: ["Next.js", "TypeScript", "RESTful APIs", "Tanstack query"],
      image: "skill2rural.png",
      github: "https://github.com/pelumiii1/skill2rural",
      live: "https://skill2rural.org/",
    },
    {
      title: "Skill2Rural Admin Dashboard",
      description:
        "Comprehensive admin dashboard with analytics, user management, and real-time data visualization.",
      tech: ["Next.js", "Chart.js", "TypeScript", "Redux"],
      image: "skill2rural-admin.png",
      github: "https://github.com/pelumiii1/skill2rural-admin",
      live: "https://admin.skill2rural.org/",
    },
    {
      title: "Motopay Fintech App",
      description:
        "Scalable fintech platform with secure authentication, payment processing, and modern user interface.",
      tech: ["Next.js", "Redux", "TypeScript", "JWT Auth", "Redux Toolkit"],
      image: "motopay.png",
      github: "https://github.com/pelumiii1/motopay",
      live: "https://web-app.staging-api.motopayng.com/auth/login",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">
                Oluwapelumi Adesokan
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        activeSection === item
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                        activeSection === item
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Oluwapelumi Adesokan
            </h1>
            <p className="hero-subtitle text-xl sm:text-2xl lg:text-3xl text-blue-300 mb-8 font-light">
              Full-Stack Developer
            </p>
            <p className="hero-description text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              3+ years building scalable fintech platforms, high-performance web
              applications, and micro-frontends using React.js, Next.js, and
              TypeScript, with a solid background in backend development and a
              growing focus as an all-round software engineer.
            </p>
            <div className="hero-buttons space-x-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-1 absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full"></div>
          <div className="floating-2 absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full"></div>
          <div className="floating-3 absolute bottom-40 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-content space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Results-Driven Full-Stack Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Frontend Developer specializing in React.js and Next.js, with 3+
                years of experience building scalable fintech and enterprise
                solutions. At Motopay, I lead frontend development, delivering
                high-performance platforms that elevate user experience.
                Proficient in TypeScript, SEO optimization, and testing, I’ve
                achieved a 40% improvement in SEO performance and reduced bugs
                through clean, maintainable code. With a solid background in
                backend development and a growing focus as a full-stack software
                engineer, I bridge technical requirements with business goals to
                solve real-world problems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                A proactive Agile collaborator, I’ve contributed to projects
                across fintech, education, and corporate sectors. Committed to
                mentorship and open-source, I actively support Lagos’s tech
                community. Continuously learning, I stay ahead of emerging
                frontend trends to build innovative web applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Pelumiii1"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwapelumi-adesokan-45aa8617a/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="about-stats relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-6">
                  Professional Highlights
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Experience</span>
                    <span className="text-blue-400 font-semibold">
                      3+ Years
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-blue-400 font-semibold">6+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Current Role</span>
                    <span className="text-blue-400 font-semibold">
                      Freelancer
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-300">Education</span>
                    <span className="text-blue-400 font-semibold">
                      B.Sc Computer Science
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Location</span>
                    <span className="text-blue-400 font-semibold">
                      Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="skills-container grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className={`skill-progress h-3 rounded-full ${skill.color}`}
                    data-width={`${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="projects-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.live}
                      className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19a.75.75 0 00.75.75z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="contact-section py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="contact-info space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you&apos;re looking for a frontend developer
                  to join your team or need help building your next web
                  application, let&apos;s connect and discuss how we can work
                  together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">adesokanpelumi14@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V9a2 2 0 00-2-2H10a2 2 0 00-2 2v3.1M15 13l-3-3-3 3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Work Preference</p>
                    <p className="text-gray-300">Remote / Hybrid</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Project Discussion / Job Opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Oluwapelumi Adesokan. Built with Next.js, TailwindCSS & GSAP
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
