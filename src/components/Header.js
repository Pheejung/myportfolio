import React, { useState, useEffect } from 'react';
import "./components.css";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('main');
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 'light';
        } catch (e) { return 'light'; }
    });

    useEffect(() => {
        const ids = ['main', 'about', 'career', 'project', 'skill', 'contact'];
        const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
        if (!sections.length) return;

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

        sections.forEach(s => obs.observe(s));
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        // Apply theme to document element for CSS variables
        try {
            document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }, [theme]);

    return (
        <header className="header">
            <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <a href="#main" className="nav-logo">
                    <div style={{fontWeight:800}}>HEEJUNG</div>
                    <div className="small muted">Frontend Developer</div>
                </a>

                <nav className={`nav ${open ? 'open' : ''}`}>
                    <a href="#main" className={`menu-item ${active === 'main' ? 'active' : ''}`} onClick={() => setOpen(false)}>Home</a>
                    <a href="#about" className={`menu-item ${active === 'about' ? 'active' : ''}`} onClick={() => setOpen(false)}>About</a>
                    <a href="#career" className={`menu-item ${active === 'career' ? 'active' : ''}`} onClick={() => setOpen(false)}>Career</a>
                    <a href="#project" className={`menu-item ${active === 'project' ? 'active' : ''}`} onClick={() => setOpen(false)}>Project</a>
                    <a href="#skill" className={`menu-item ${active === 'skill' ? 'active' : ''}`} onClick={() => setOpen(false)}>Skill</a>
                    <a href="#contact" className={`menu-item ${active === 'contact' ? 'active' : ''}`} onClick={() => setOpen(false)}>Contact</a>
                </nav>

                <button className={`hamburger cp`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>
                <button
                    className="theme-toggle cp"
                    aria-label="Toggle theme"
                    title="Toggle theme"
                    onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                >
                    {theme === 'dark' ? '🌞' : '🌙'}
                </button>
            </div>
        </header>
    );
};

export default Header;