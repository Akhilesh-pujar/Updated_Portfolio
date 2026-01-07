import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const DynamicSkyBackground = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    // Calculate time-based values
    const timeData = useMemo(() => {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const totalMinutes = hours * 60 + minutes;

        const sunriseMinutes = 6 * 60;
        const sunsetMinutes = 18 * 60;

        const isDaytime = totalMinutes >= sunriseMinutes && totalMinutes < sunsetMinutes;

        let sunProgress = 0;
        if (isDaytime) {
            sunProgress = (totalMinutes - sunriseMinutes) / (sunsetMinutes - sunriseMinutes);
        }

        let moonProgress = 0;
        if (!isDaytime) {
            if (totalMinutes >= sunsetMinutes) {
                moonProgress = (totalMinutes - sunsetMinutes) / (24 * 60 - sunsetMinutes + sunriseMinutes);
            } else {
                moonProgress = (totalMinutes + (24 * 60 - sunsetMinutes)) / (24 * 60 - sunsetMinutes + sunriseMinutes);
            }
        }

        const celestialX = isDaytime ? 5 + sunProgress * 90 : 5 + moonProgress * 90;
        const progress = isDaytime ? sunProgress : moonProgress;
        const celestialY = 70 - Math.sin(progress * Math.PI) * 55;

        let skyGradient;
        if (hours >= 5 && hours < 7) {
            skyGradient = "linear-gradient(180deg, #1a1a2e 0%, #4a3853 30%, #ff7e5f 70%, #feb47b 100%)";
        } else if (hours >= 7 && hours < 10) {
            skyGradient = "linear-gradient(180deg, #87CEEB 0%, #98D8C8 50%, #F7DC6F 100%)";
        } else if (hours >= 10 && hours < 16) {
            skyGradient = "linear-gradient(180deg, #4A90D9 0%, #87CEEB 50%, #B4D7E8 100%)";
        } else if (hours >= 16 && hours < 18) {
            skyGradient = "linear-gradient(180deg, #5D8AA8 0%, #F4A460 50%, #FF6B6B 100%)";
        } else if (hours >= 18 && hours < 20) {
            skyGradient = "linear-gradient(180deg, #2C3E50 0%, #E74C3C 30%, #F39C12 60%, #9B59B6 100%)";
        } else if (hours >= 20 && hours < 22) {
            skyGradient = "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)";
        } else {
            skyGradient = "linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)";
        }

        return { isDaytime, celestialX, celestialY, skyGradient, hours, sunProgress, moonProgress };
    }, [currentTime]);

    // Generate stars
    const stars = useMemo(() => {
        return Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 50,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 3,
        }));
    }, []);

    // Generate clouds
    const clouds = useMemo(() => {
        return Array.from({ length: 6 }, (_, i) => ({
            id: i,
            y: 8 + Math.random() * 25,
            scale: 0.6 + Math.random() * 0.6,
            duration: 80 + Math.random() * 60,
            delay: i * 15,
        }));
    }, []);

    // Generate birds (flocks)
    const birds = useMemo(() => {
        return Array.from({ length: 4 }, (_, i) => ({
            id: i,
            y: 15 + Math.random() * 30,
            duration: 20 + Math.random() * 15,
            delay: i * 8,
            size: 0.8 + Math.random() * 0.4,
        }));
    }, []);

    return (
        <div
            className="absolute inset-0 overflow-hidden transition-all duration-1000"
            style={{ background: timeData.skyGradient }}
        >
            {/* Stars (night) */}
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: timeData.isDaytime ? 0 : 1 }}
            >
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
                    />
                ))}
            </div>

            {/* Sun */}
            <motion.div
                className="absolute transition-opacity duration-1000"
                style={{
                    left: `${timeData.celestialX}%`,
                    top: `${timeData.celestialY}%`,
                    opacity: timeData.isDaytime ? 1 : 0,
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div
                    className="absolute rounded-full blur-xl"
                    style={{
                        width: 120, height: 120,
                        background: 'radial-gradient(circle, rgba(255, 200, 100, 0.6) 0%, transparent 70%)',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                <div
                    className="relative rounded-full"
                    style={{
                        width: 60, height: 60,
                        background: 'radial-gradient(circle at 30% 30%, #FFF7AE 0%, #FFD700 50%, #FFA500 100%)',
                        boxShadow: '0 0 40px rgba(255, 200, 50, 0.8), 0 0 80px rgba(255, 150, 50, 0.5)',
                    }}
                />
            </motion.div>

            {/* Moon */}
            <motion.div
                className="absolute transition-opacity duration-1000"
                style={{
                    left: `${timeData.celestialX}%`,
                    top: `${timeData.celestialY}%`,
                    opacity: timeData.isDaytime ? 0 : 1,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className="absolute rounded-full blur-lg"
                    style={{
                        width: 80, height: 80,
                        background: 'radial-gradient(circle, rgba(200, 220, 255, 0.4) 0%, transparent 70%)',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                <div
                    className="relative rounded-full"
                    style={{
                        width: 50, height: 50,
                        background: 'radial-gradient(circle at 65% 35%, #FFFACD 0%, #E8E8E8 50%, #C0C0C0 100%)',
                        boxShadow: '0 0 20px rgba(200, 220, 255, 0.6)',
                    }}
                >
                    <div className="absolute rounded-full bg-gray-300/30" style={{ width: 8, height: 8, top: '20%', left: '30%' }} />
                    <div className="absolute rounded-full bg-gray-300/20" style={{ width: 12, height: 12, top: '50%', left: '55%' }} />
                    <div className="absolute rounded-full bg-gray-300/25" style={{ width: 6, height: 6, top: '65%', left: '25%' }} />
                </div>
            </motion.div>

            {/* Clouds - using CSS animation instead of framer-motion for mixed units */}
            <div className="absolute inset-0" style={{ opacity: timeData.isDaytime ? 0.9 : 0.3 }}>
                {clouds.map((cloud) => (
                    <div
                        key={cloud.id}
                        className="absolute animate-cloud"
                        style={{
                            top: `${cloud.y}%`,
                            transform: `scale(${cloud.scale})`,
                            animationDuration: `${cloud.duration}s`,
                            animationDelay: `${cloud.delay}s`,
                        }}
                    >
                        <svg width="150" height="60" viewBox="0 0 150 60">
                            <ellipse cx="35" cy="40" rx="30" ry="18" fill="rgba(255,255,255,0.85)" />
                            <ellipse cx="70" cy="32" rx="38" ry="24" fill="rgba(255,255,255,0.95)" />
                            <ellipse cx="110" cy="40" rx="30" ry="18" fill="rgba(255,255,255,0.85)" />
                            <ellipse cx="55" cy="48" rx="25" ry="12" fill="rgba(255,255,255,0.75)" />
                            <ellipse cx="90" cy="48" rx="25" ry="12" fill="rgba(255,255,255,0.75)" />
                        </svg>
                    </div>
                ))}
            </div>

            {/* Flying Birds - using CSS animation */}
            <div className="absolute inset-0" style={{ opacity: timeData.isDaytime ? 1 : 0.3 }}>
                {birds.map((bird) => (
                    <div
                        key={bird.id}
                        className="absolute animate-fly-across"
                        style={{
                            top: `${bird.y}%`,
                            transform: `scale(${bird.size})`,
                            animationDuration: `${bird.duration}s`,
                            animationDelay: `${bird.delay}s`,
                        }}
                    >
                        {/* Bird flock (V formation) */}
                        <svg width="80" height="40" viewBox="0 0 80 40">
                            {/* Lead bird */}
                            <path
                                d="M40 20 L35 15 L40 18 L45 15 Z"
                                fill={timeData.isDaytime ? "#2D3748" : "#4A5568"}
                                className="animate-flap"
                            />
                            {/* Left follower */}
                            <path
                                d="M25 25 L20 20 L25 23 L30 20 Z"
                                fill={timeData.isDaytime ? "#2D3748" : "#4A5568"}
                                className="animate-flap"
                                style={{ animationDelay: '0.1s' }}
                            />
                            {/* Right follower */}
                            <path
                                d="M55 25 L50 20 L55 23 L60 20 Z"
                                fill={timeData.isDaytime ? "#2D3748" : "#4A5568"}
                                className="animate-flap"
                                style={{ animationDelay: '0.15s' }}
                            />
                            {/* Far left */}
                            <path
                                d="M12 30 L8 26 L12 28 L16 26 Z"
                                fill={timeData.isDaytime ? "#4A5568" : "#718096"}
                                className="animate-flap"
                                style={{ animationDelay: '0.2s' }}
                            />
                            {/* Far right */}
                            <path
                                d="M68 30 L64 26 L68 28 L72 26 Z"
                                fill={timeData.isDaytime ? "#4A5568" : "#718096"}
                                className="animate-flap"
                                style={{ animationDelay: '0.25s' }}
                            />
                        </svg>
                    </div>
                ))}
            </div>

            {/* Mountains - Back layer */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none" style={{ height: '40vh' }}>
                    <defs>
                        <linearGradient id="mountainBack" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={timeData.isDaytime ? "#5D6D7E" : "#1a1a2e"} />
                            <stop offset="100%" stopColor={timeData.isDaytime ? "#4A5568" : "#0d0d1a"} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,320 L0,200 L150,100 L300,180 L450,60 L600,140 L750,40 L900,120 L1050,80 L1200,160 L1350,100 L1440,140 L1440,320 Z"
                        fill="url(#mountainBack)"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                </svg>
            </div>

            {/* Mountains - Front layer */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none" style={{ height: '30vh' }}>
                    <defs>
                        <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={timeData.isDaytime ? "#2D3748" : "#0f0f1f"} />
                            <stop offset="100%" stopColor={timeData.isDaytime ? "#1A202C" : "#050510"} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,320 L0,220 L100,160 L200,200 L350,120 L500,180 L650,100 L800,160 L950,80 L1100,140 L1250,100 L1350,180 L1440,120 L1440,320 Z"
                        fill="url(#mountainFront)"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                    />
                </svg>
            </div>

            {/* Rolling Hills with Grass */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none" style={{ height: '22vh' }}>
                    <defs>
                        <linearGradient id="hillsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={timeData.isDaytime ? "#48BB78" : "#1a3d2e"} />
                            <stop offset="100%" stopColor={timeData.isDaytime ? "#276749" : "#0d1f17"} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,200 L0,120 Q180,60 360,100 Q540,140 720,80 Q900,40 1080,90 Q1260,130 1440,70 L1440,200 Z"
                        fill="url(#hillsGradient)"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </svg>
            </div>

            {/* Farmhouse */}
            <motion.div
                className="absolute"
                style={{ bottom: '18vh', left: '15%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <svg width="80" height="70" viewBox="0 0 80 70">
                    {/* House body */}
                    <rect x="15" y="35" width="50" height="35" fill={timeData.isDaytime ? "#8B4513" : "#3d2010"} />
                    {/* Roof */}
                    <polygon points="10,35 40,10 70,35" fill={timeData.isDaytime ? "#CD5C5C" : "#4a2020"} />
                    {/* Door */}
                    <rect x="32" y="50" width="16" height="20" fill={timeData.isDaytime ? "#654321" : "#2d1d10"} />
                    {/* Window left */}
                    <rect x="20" y="45" width="10" height="10" fill={timeData.hours >= 18 || timeData.hours < 6 ? "#FFD700" : "#87CEEB"} />
                    {/* Window right */}
                    <rect x="50" y="45" width="10" height="10" fill={timeData.hours >= 18 || timeData.hours < 6 ? "#FFD700" : "#87CEEB"} />
                    {/* Chimney */}
                    <rect x="55" y="15" width="8" height="20" fill={timeData.isDaytime ? "#696969" : "#2d2d2d"} />
                </svg>
                {/* Smoke (CSS animated) */}
                {(timeData.hours >= 18 || timeData.hours < 8) && (
                    <div className="absolute" style={{ top: '-10px', left: '58px' }}>
                        <div className="animate-smoke-1 w-3 h-3 rounded-full bg-gray-400/50 absolute" />
                        <div className="animate-smoke-2 w-4 h-4 rounded-full bg-gray-400/40 absolute" style={{ left: '5px' }} />
                    </div>
                )}
            </motion.div>

            {/* Windmill */}
            <motion.div
                className="absolute"
                style={{ bottom: '18vh', right: '20%' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
            >
                <svg width="60" height="80" viewBox="0 0 60 80">
                    {/* Tower */}
                    <polygon points="25,80 35,80 38,25 22,25" fill={timeData.isDaytime ? "#D2691E" : "#4a2810"} />
                    {/* Rotating blades */}
                    <g className="animate-spin-slow" style={{ transformOrigin: '30px 25px' }}>
                        <rect x="28" y="5" width="4" height="40" fill={timeData.isDaytime ? "#F5DEB3" : "#8B7355"} />
                        <rect x="10" y="23" width="40" height="4" fill={timeData.isDaytime ? "#F5DEB3" : "#8B7355"} />
                    </g>
                    {/* Center hub */}
                    <circle cx="30" cy="25" r="4" fill={timeData.isDaytime ? "#8B4513" : "#3d2010"} />
                </svg>
            </motion.div>

            {/* Animated Cow - CSS animation */}
            <div
                className="absolute animate-walk-cow"
                style={{ bottom: '12vh' }}
            >
                <svg width="50" height="40" viewBox="0 0 50 40">
                    {/* Body */}
                    <ellipse cx="25" cy="20" rx="18" ry="12" fill={timeData.isDaytime ? "#F5F5F5" : "#a0a0a0"} />
                    {/* Spots */}
                    <ellipse cx="18" cy="18" rx="5" ry="4" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} />
                    <ellipse cx="30" cy="22" rx="4" ry="3" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} />
                    {/* Head */}
                    <ellipse cx="45" cy="15" rx="8" ry="7" fill={timeData.isDaytime ? "#F5F5F5" : "#a0a0a0"} />
                    {/* Ears */}
                    <ellipse cx="40" cy="8" rx="3" ry="2" fill={timeData.isDaytime ? "#FFB6C1" : "#8b6b6b"} />
                    <ellipse cx="50" cy="8" rx="3" ry="2" fill={timeData.isDaytime ? "#FFB6C1" : "#8b6b6b"} />
                    {/* Eye */}
                    <circle cx="47" cy="13" r="2" fill="#2D2D2D" />
                    {/* Nose */}
                    <ellipse cx="50" cy="18" rx="3" ry="2" fill={timeData.isDaytime ? "#FFB6C1" : "#8b6b6b"} />
                    {/* Legs */}
                    <rect x="12" y="30" width="3" height="8" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-1" />
                    <rect x="20" y="30" width="3" height="8" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-2" />
                    <rect x="28" y="30" width="3" height="8" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-1" />
                    <rect x="35" y="30" width="3" height="8" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-2" />
                </svg>
            </div>

            {/* Animated Sheep - CSS animation */}
            <div
                className="absolute animate-walk-sheep"
                style={{ bottom: '13vh' }}
            >
                <svg width="40" height="30" viewBox="0 0 40 30">
                    {/* Fluffy body */}
                    <ellipse cx="20" cy="18" rx="15" ry="10" fill={timeData.isDaytime ? "#FFFAF0" : "#a0a0a0"} />
                    <circle cx="10" cy="15" r="5" fill={timeData.isDaytime ? "#FFFAF0" : "#a0a0a0"} />
                    <circle cx="30" cy="15" r="5" fill={timeData.isDaytime ? "#FFFAF0" : "#a0a0a0"} />
                    <circle cx="15" cy="12" r="4" fill={timeData.isDaytime ? "#FFFAF0" : "#a0a0a0"} />
                    <circle cx="25" cy="12" r="4" fill={timeData.isDaytime ? "#FFFAF0" : "#a0a0a0"} />
                    {/* Head */}
                    <ellipse cx="35" cy="12" rx="6" ry="5" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} />
                    {/* Eye */}
                    <circle cx="37" cy="11" r="1.5" fill="white" />
                    {/* Legs */}
                    <rect x="12" y="26" width="2" height="6" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-1" />
                    <rect x="18" y="26" width="2" height="6" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-2" />
                    <rect x="24" y="26" width="2" height="6" fill={timeData.isDaytime ? "#2D2D2D" : "#1a1a1a"} className="animate-leg-1" />
                </svg>
            </div>

            {/* Second Sheep */}
            <div
                className="absolute animate-walk-sheep-2"
                style={{ bottom: '11vh' }}
            >
                <svg width="35" height="25" viewBox="0 0 40 30">
                    <ellipse cx="20" cy="18" rx="15" ry="10" fill={timeData.isDaytime ? "#F0EAE0" : "#909090"} />
                    <circle cx="10" cy="15" r="5" fill={timeData.isDaytime ? "#F0EAE0" : "#909090"} />
                    <circle cx="30" cy="15" r="5" fill={timeData.isDaytime ? "#F0EAE0" : "#909090"} />
                    <ellipse cx="35" cy="12" rx="6" ry="5" fill={timeData.isDaytime ? "#3D3D3D" : "#252525"} />
                    <circle cx="37" cy="11" r="1.5" fill="white" />
                    <rect x="12" y="26" width="2" height="5" fill={timeData.isDaytime ? "#3D3D3D" : "#252525"} />
                    <rect x="18" y="26" width="2" height="5" fill={timeData.isDaytime ? "#3D3D3D" : "#252525"} />
                    <rect x="24" y="26" width="2" height="5" fill={timeData.isDaytime ? "#3D3D3D" : "#252525"} />
                </svg>
            </div>

            {/* Trees */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 150" className="w-full" preserveAspectRatio="none" style={{ height: '15vh' }}>
                    <defs>
                        <linearGradient id="treesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={timeData.isDaytime ? "#1A202C" : "#050510"} />
                            <stop offset="100%" stopColor={timeData.isDaytime ? "#0f1419" : "#020205"} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,150 L0,100 L20,100 L30,60 L40,100 L60,100 L70,50 L80,100 L100,100 L120,70 L140,100 L160,100 L180,40 L200,100 L220,100 L230,65 L240,100 L260,100 L280,55 L300,100 L320,100 L340,45 L360,100 L380,100 L400,60 L420,100 L440,100 L460,50 L480,100 L500,100 L520,70 L540,100 L560,100 L580,40 L600,100 L620,100 L640,55 L660,100 L680,100 L700,45 L720,100 L740,100 L760,65 L780,100 L800,100 L820,50 L840,100 L860,100 L880,60 L900,100 L920,100 L940,40 L960,100 L980,100 L1000,55 L1020,100 L1040,100 L1060,70 L1080,100 L1100,100 L1120,45 L1140,100 L1160,100 L1180,60 L1200,100 L1220,100 L1240,50 L1260,100 L1280,100 L1300,65 L1320,100 L1340,100 L1360,40 L1380,100 L1400,100 L1420,55 L1440,100 L1440,150 Z"
                        fill="url(#treesGradient)"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    />
                </svg>
            </div>

            {/* Ground */}
            <div
                className="absolute bottom-0 left-0 right-0 h-8"
                style={{
                    background: timeData.isDaytime
                        ? 'linear-gradient(180deg, #1A202C 0%, #0f1419 100%)'
                        : 'linear-gradient(180deg, #050510 0%, #020205 100%)',
                }}
            />

            {/* CSS Animations */}
            <style>{`
        @keyframes cloud-move {
          from { transform: translateX(-200px); }
          to { transform: translateX(100vw); }
        }
        .animate-cloud {
          animation: cloud-move linear infinite;
        }
        
        @keyframes fly-across {
          from { left: -100px; }
          to { left: 100%; }
        }
        .animate-fly-across {
          animation: fly-across linear infinite;
        }
        
        @keyframes flap {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.7); }
        }
        .animate-flap {
          animation: flap 0.3s ease-in-out infinite;
          transform-origin: center;
        }
        
        @keyframes walk-cow {
          0% { left: 10%; }
          50% { left: 30%; }
          100% { left: 10%; }
        }
        .animate-walk-cow {
          animation: walk-cow 40s ease-in-out infinite;
        }
        
        @keyframes walk-sheep {
          0% { left: 60%; }
          50% { left: 40%; }
          100% { left: 60%; }
        }
        .animate-walk-sheep {
          animation: walk-sheep 35s ease-in-out infinite;
        }
        
        @keyframes walk-sheep-2 {
          0% { left: 75%; }
          50% { left: 55%; }
          100% { left: 75%; }
        }
        .animate-walk-sheep-2 {
          animation: walk-sheep-2 42s ease-in-out infinite;
        }
        
        @keyframes leg-1 {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.8); }
        }
        .animate-leg-1 {
          animation: leg-1 0.5s ease-in-out infinite;
          transform-origin: top;
        }
        
        @keyframes leg-2 {
          0%, 100% { transform: scaleY(0.8); }
          50% { transform: scaleY(1); }
        }
        .animate-leg-2 {
          animation: leg-2 0.5s ease-in-out infinite;
          transform-origin: top;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes smoke-1 {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          100% { transform: translateY(-30px) scale(1.5); opacity: 0; }
        }
        .animate-smoke-1 {
          animation: smoke-1 2s ease-out infinite;
        }
        
        @keyframes smoke-2 {
          0% { transform: translateY(0) scale(1); opacity: 0.4; }
          100% { transform: translateY(-40px) scale(1.8); opacity: 0; }
        }
        .animate-smoke-2 {
          animation: smoke-2 2.5s ease-out infinite 0.5s;
        }
      `}</style>
        </div>
    );
};

export default DynamicSkyBackground;
