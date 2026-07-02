import React, { useEffect, useRef } from 'react'

/**
 * Custom cursor: a glowing dot locked to the pointer and a ring with a rotating
 * green gradient that follows tightly (no visible lag). Over interactive
 * elements the dot tucks away and the ring expands into a reticle.
 *
 * - Only activates on fine-pointer devices (mouse/trackpad); touch is untouched.
 * - Single requestAnimationFrame loop, writing styles directly (no re-renders).
 */
const CursorFX = () => {
    const dotRef = useRef(null)
    const ringRef = useRef(null)

    useEffect(() => {
        // Skip entirely on touch / coarse pointers.
        if (!window.matchMedia('(pointer: fine)').matches) return

        const dot = dotRef.current
        const ring = ringRef.current

        document.documentElement.classList.add('cursor-fx-active')

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const ringPos = { ...mouse }
        let visible = false
        let hovering = false

        const interactiveSel =
            'a, button, input, textarea, select, label, [role="button"], [data-cursor="hover"]'

        const onMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            if (!visible) {
                visible = true
                dot.style.opacity = '1'
                ring.style.opacity = '1'
            }
        }
        const onLeave = () => {
            visible = false
            dot.style.opacity = '0'
            ring.style.opacity = '0'
        }
        const onDown = () => ring.classList.add('cursor-fx-down')
        const onUp = () => ring.classList.remove('cursor-fx-down')
        const onOver = (e) => {
            if (e.target.closest && e.target.closest(interactiveSel)) {
                hovering = true
                ring.classList.add('cursor-fx-hover')
                dot.classList.add('cursor-fx-hover')
            }
        }
        const onOut = (e) => {
            if (e.target.closest && e.target.closest(interactiveSel)) {
                hovering = false
                ring.classList.remove('cursor-fx-hover')
                dot.classList.remove('cursor-fx-hover')
            }
        }

        window.addEventListener('mousemove', onMove)
        document.addEventListener('mouseleave', onLeave)
        window.addEventListener('mousedown', onDown)
        window.addEventListener('mouseup', onUp)
        document.addEventListener('mouseover', onOver)
        document.addEventListener('mouseout', onOut)

        let raf
        let prev = performance.now()
        const loop = (now) => {
            const dt = Math.min((now - prev) / 16.67, 3) // frame-rate independent
            prev = now

            // Dot is locked to the pointer (zero lag).
            dot.style.transform =
                `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`

            // Ring follows very tightly — snappy, just enough smoothing to feel soft.
            ringPos.x += (mouse.x - ringPos.x) * Math.min(0.17 * dt, 1)
            ringPos.y += (mouse.y - ringPos.y) * Math.min(0.17 * dt, 1)
            ring.style.transform =
                `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.9 : 1})`

            raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseleave', onLeave)
            window.removeEventListener('mousedown', onDown)
            window.removeEventListener('mouseup', onUp)
            document.removeEventListener('mouseover', onOver)
            document.removeEventListener('mouseout', onOut)
            document.documentElement.classList.remove('cursor-fx-active')
        }
    }, [])

    return (
        <>
            <div ref={ringRef} className="cursor-fx-ring" aria-hidden="true" />
            <div ref={dotRef} className="cursor-fx-dot" aria-hidden="true" />
        </>
    )
}

export default CursorFX
