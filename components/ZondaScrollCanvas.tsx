"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface ZondaScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
}

export default function ZondaScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
}: ZondaScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();
                img.src = `${imageFolderPath}/${i}.jpg`;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === totalFrames) {
                        setLoaded(true);
                    }
                };
                imgArray.push(img);
            }
            setImages(imgArray);
        };

        loadImages();
    }, [totalFrames, imageFolderPath]);

    // Draw Function
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index] || !loaded) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        const dpr = window.devicePixelRatio || 1;
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Calculate Contain Fit (show full image, centered)
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider than image - fit to height
            drawHeight = height;
            drawWidth = height * imgRatio;
            offsetX = (width - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Canvas is taller than image - fit to width
            drawWidth = width;
            drawHeight = width / imgRatio;
            offsetX = 0;
            offsetY = (height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Resize Handler with Device Pixel Ratio
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement?.getBoundingClientRect();
            if (rect) {
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;

                // Scale context to ensure correct drawing size
                const ctx = canvas.getContext("2d");
                if (ctx) ctx.scale(dpr, dpr);

                // However, if we scale the context, our drawImage logic needs to be aware.
                // Actually simpler: Set canvas width/height to physical pixels.
                // Styles set to logical pixels (CSS).
                // My render logic uses canvas.width directly, so it draws in physical pixels.
                // This is fine and sharp.

                renderFrame(currentFrame);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [currentFrame, loaded]);

    // Sync Scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * (totalFrames - 1))
        );
        setCurrentFrame(frameIndex);
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial Render when loaded
    useEffect(() => {
        if (loaded) {
            renderFrame(currentFrame);
        }
    }, [loaded]);

    return (
        <div className="relative w-full h-full">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
                style={{ display: "block" }}
            />
            {/* Modern radial vignette with smooth transitions */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 90% 80% at 50% 50%, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(0,0,0,0.3) 60%,
                            rgba(0,0,0,0.7) 80%,
                            rgba(0,0,0,0.95) 100%
                        )
                    `,
                    mixBlendMode: 'normal'
                }}
            />
            {/* Subtle edge darkening for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(to right, 
                            rgba(0,0,0,0.9) 0%, 
                            transparent 8%, 
                            transparent 92%, 
                            rgba(0,0,0,0.9) 100%
                        )
                    `
                }}
            />
        </div>
    );
}
