import React, { useRef, useEffect, useState } from 'react';

const VARIANTS = {
    'fade-up': {
        initial: { opacity: 0, transform: 'translateY(30px) scale(0.98)' },
        final: { opacity: 1, transform: 'translateY(0) scale(1)' },
    },
    'fade-right': {
        initial: { opacity: 0, transform: 'translateX(30px) scale(0.98)' },
        final: { opacity: 1, transform: 'translateX(0) scale(1)' },
    },
    'fade-left': {
        initial: { opacity: 0, transform: 'translateX(-30px) scale(0.98)' },
        final: { opacity: 1, transform: 'translateX(0) scale(1)' },
    },
    'zoom-in': {
        initial: { opacity: 0, transform: 'scale(0.95)' },
        final: { opacity: 1, transform: 'scale(1)' },
    },
    'fade': {
        initial: { opacity: 0, transform: 'translateY(0) scale(0.98)' },
        final: { opacity: 1, transform: 'translateY(0) scale(1)' },
    },
    };

    export default function AnimatedOnScroll({
    children,
    className = '',
    variant = 'fade-up',
    delay = 0,
    duration = 3000,
    once = true,
    style = {},
    ...props
    }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setVisible(true);
                if (once && el) obs.unobserve(el);
            }
            });
        },
        { threshold: 0.2 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [once]);

    const v = VARIANTS[variant] || VARIANTS['fade-up'];
    const transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;

    const combinedStyle = {
        transition,
        opacity: visible ? v.final.opacity : v.initial.opacity,
        transform: visible ? v.final.transform : v.initial.transform,
        willChange: 'opacity, transform',
        ...style,
    };

    return (
        <div ref={ref} className={className} style={combinedStyle} {...props}>
        {children}
        </div>
    );
}
