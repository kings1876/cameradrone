import React from 'react';

interface DroneGraphicProps {
  type: 'cinema-drone' | 'foldable-drone' | 'fpv-drone' | 'enterprise-uav' | 'dslr-gimbal' | 'action-cam' | 'controller' | 'battery';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DroneGraphic: React.FC<DroneGraphicProps> = ({ type, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-48 h-48',
    lg: 'w-full max-w-[360px] h-64',
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none overflow-hidden ${sizeClasses} ${className}`}>
      {/* Background ambient radar/aperture grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="85" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="#64748b" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="25" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>

      {type === 'cinema-drone' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          <defs>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="carbonArm" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="goldOptic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          {/* Carbon Fiber Arms */}
          <line x1="120" y1="100" x2="40" y2="40" stroke="url(#carbonArm)" strokeWidth="8" strokeLinecap="round" />
          <line x1="120" y1="100" x2="200" y2="40" stroke="url(#carbonArm)" strokeWidth="8" strokeLinecap="round" />
          <line x1="120" y1="100" x2="35" y2="160" stroke="url(#carbonArm)" strokeWidth="8" strokeLinecap="round" />
          <line x1="120" y1="100" x2="205" y2="160" stroke="url(#carbonArm)" strokeWidth="8" strokeLinecap="round" />

          {/* Motor Pods */}
          <circle cx="40" cy="40" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="200" cy="40" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="35" cy="160" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="205" cy="160" r="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />

          {/* Rotating Propellers (Stylized Aerodynamic Blur) */}
          <ellipse cx="40" cy="40" rx="32" ry="7" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" transform="rotate(-20 40 40)" />
          <ellipse cx="200" cy="40" rx="32" ry="7" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" transform="rotate(20 200 40)" />
          <ellipse cx="35" cy="160" rx="32" ry="7" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" transform="rotate(25 35 160)" />
          <ellipse cx="205" cy="160" rx="32" ry="7" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" transform="rotate(-25 205 160)" />

          {/* Central Aerodynamic Fuselage */}
          <polygon points="120,55 155,85 145,135 120,150 95,135 85,85" fill="url(#bodyGrad)" stroke="#475569" strokeWidth="2" />
          
          {/* Top Sensor & GPS Dome */}
          <rect x="112" y="70" width="16" height="18" rx="4" fill="#0b0f17" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="120" cy="79" r="3" fill="#38bdf8" />

          {/* 3-Axis 8K Cinema Gimbal Camera */}
          <circle cx="120" cy="115" r="18" fill="#020617" stroke="#334155" strokeWidth="3" />
          <circle cx="120" cy="115" r="12" fill="url(#goldOptic)" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="120" cy="115" r="6" fill="#020617" />
          <circle cx="118" cy="113" r="2" fill="#ffffff" opacity="0.8" />

          {/* Landing Gear Skids */}
          <path d="M 60 115 L 75 165 L 60 165" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 180 115 L 165 165 L 180 165" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Navigation LED beacons */}
          <circle cx="40" cy="40" r="2.5" fill="#38bdf8" />
          <circle cx="200" cy="40" r="2.5" fill="#38bdf8" />
          <circle cx="35" cy="160" r="2.5" fill="#ef4444" />
          <circle cx="205" cy="160" r="2.5" fill="#22c55e" />
        </svg>
      )}

      {type === 'foldable-drone' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          <defs>
            <linearGradient id="matteGray" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="opticLens" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          {/* Foldable Arms */}
          <path d="M 100 85 L 45 55" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
          <path d="M 140 85 L 195 55" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
          <path d="M 105 115 L 50 145" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
          <path d="M 135 115 L 190 145" stroke="#334155" strokeWidth="7" strokeLinecap="round" />

          {/* Rotors */}
          <ellipse cx="45" cy="55" rx="26" ry="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-15 45 55)" />
          <ellipse cx="195" cy="55" rx="26" ry="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(15 195 55)" />
          <ellipse cx="50" cy="145" rx="26" ry="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(20 50 145)" />
          <ellipse cx="190" cy="145" rx="26" ry="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(-20 190 145)" />

          {/* Motor Hubs */}
          <circle cx="45" cy="55" r="7" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="195" cy="55" r="7" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="50" cy="145" r="7" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="190" cy="145" r="7" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />

          {/* Sleek Compact Body */}
          <rect x="98" y="60" width="44" height="85" rx="14" fill="url(#matteGray)" stroke="#64748b" strokeWidth="1.5" />
          
          {/* Battery Status LEDs */}
          <circle cx="112" cy="125" r="1.5" fill="#22c55e" />
          <circle cx="117" cy="125" r="1.5" fill="#22c55e" />
          <circle cx="122" cy="125" r="1.5" fill="#22c55e" />
          <circle cx="127" cy="125" r="1.5" fill="#22c55e" />

          {/* Front Dual Obstacle Avoidance Sensors */}
          <circle cx="110" cy="68" r="3" fill="#020617" stroke="#38bdf8" strokeWidth="0.8" />
          <circle cx="130" cy="68" r="3" fill="#020617" stroke="#38bdf8" strokeWidth="0.8" />

          {/* 4K/60fps Stabilized Gimbal Camera */}
          <rect x="108" y="76" width="24" height="24" rx="6" fill="#020617" stroke="#475569" strokeWidth="1.5" />
          <circle cx="120" cy="88" r="7" fill="url(#opticLens)" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="120" cy="88" r="3" fill="#020617" />
          <circle cx="118" cy="86" r="1" fill="#ffffff" />
        </svg>
      )}

      {type === 'fpv-drone' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          {/* Aggressive X-Frame Carbon Structure */}
          <line x1="50" y1="50" x2="190" y2="150" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
          <line x1="190" y1="50" x2="50" y2="150" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
          <line x1="50" y1="50" x2="190" y2="150" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 6" />

          {/* Heavy Duty Brushless Motors */}
          <circle cx="50" cy="50" r="12" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="190" cy="50" r="12" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="50" cy="150" r="12" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="190" cy="150" r="12" fill="#020617" stroke="#f59e0b" strokeWidth="3" />

          {/* 3-Blade Racing Propellers */}
          <path d="M 50 50 L 25 35 M 50 50 L 75 35 M 50 50 L 50 80" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <path d="M 190 50 L 165 35 M 190 50 L 215 35 M 190 50 L 190 80" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <path d="M 50 150 L 25 135 M 50 150 L 75 135 M 50 150 L 50 180" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <path d="M 190 150 L 165 135 M 190 150 L 215 135 M 190 150 L 190 180" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />

          {/* Central Electronics Stack & Canopy */}
          <polygon points="120,65 145,85 140,125 120,135 100,125 95,85" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          {/* Tilted FPV Camera Module */}
          <rect x="110" y="70" width="20" height="24" rx="4" fill="#020617" stroke="#f59e0b" strokeWidth="1.5" transform="rotate(-10 120 82)" />
          <circle cx="120" cy="82" r="5" fill="#f59e0b" />
          {/* Cloverleaf High-Gain Antenna */}
          <line x1="120" y1="135" x2="120" y2="165" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="120" cy="168" r="6" fill="#ef4444" />
        </svg>
      )}

      {type === 'enterprise-uav' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          {/* Heavy Commercial Airframe */}
          <line x1="30" y1="45" x2="210" y2="45" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
          <line x1="30" y1="155" x2="210" y2="155" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
          <line x1="120" y1="45" x2="120" y2="155" stroke="#1e293b" strokeWidth="12" />

          {/* Dual RTK Antenna Domes on top */}
          <circle cx="85" cy="40" r="7" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="1.5" />
          <circle cx="155" cy="40" r="7" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="1.5" />

          {/* Quad Large Heavy-Lift Rotors */}
          <circle cx="30" cy="45" r="14" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="210" cy="45" r="14" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="30" cy="155" r="14" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="210" cy="155" r="14" fill="#020617" stroke="#f59e0b" strokeWidth="3" />

          {/* Dual Thermal / Optical Zoom Payload Bay */}
          <rect x="100" y="85" width="40" height="42" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <circle cx="112" cy="104" r="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="128" cy="104" r="5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
          <text x="120" y="122" fill="#94a3b8" fontSize="6" fontFamily="sans-serif" textAnchor="middle">HYBRID ZOOM</text>
        </svg>
      )}

      {type === 'dslr-gimbal' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          {/* 3-Axis Gimbal Cage Structure */}
          <path d="M 60 70 L 60 140 L 180 140 L 180 70" fill="none" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
          <line x1="120" y1="30" x2="120" y2="70" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
          
          {/* Brushless Gimbal Motors */}
          <circle cx="60" cy="105" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="180" cy="105" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="120" cy="50" r="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />

          {/* Full-Frame Digital SLR / Mirrorless Body */}
          <rect x="80" y="75" width="80" height="52" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <rect x="86" y="67" width="30" height="10" rx="3" fill="#0f172a" />
          
          {/* Professional Cine Lens Barrel */}
          <circle cx="120" cy="101" r="22" fill="#020617" stroke="#334155" strokeWidth="4" />
          <circle cx="120" cy="101" r="16" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="120" cy="101" r="9" fill="#0b0f17" />
          <circle cx="116" cy="97" r="3" fill="#ffffff" opacity="0.75" />
          
          {/* Focus Gear Teeth Indicator */}
          <circle cx="120" cy="101" r="24" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 3" />
        </svg>
      )}

      {type === 'action-cam' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          {/* Rugged Compact Frame */}
          <rect x="65" y="60" width="110" height="80" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          {/* Front Preview Screen */}
          <rect x="75" y="75" width="40" height="35" rx="4" fill="#0284c7" opacity="0.3" stroke="#0ea5e9" strokeWidth="1" />
          <text x="95" y="96" fill="#38bdf8" fontSize="8" fontFamily="sans-serif" textAnchor="middle">5.3K 60</text>
          
          {/* Ultra-Wide Lens Element */}
          <circle cx="140" cy="100" r="22" fill="#020617" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="140" cy="100" r="15" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
          <circle cx="140" cy="100" r="8" fill="#0284c7" />
          <circle cx="137" cy="97" r="2.5" fill="#ffffff" />
          
          {/* Record Status LED & Shutter Button */}
          <rect x="85" y="52" width="20" height="8" rx="2" fill="#ef4444" />
          <circle cx="78" cy="70" r="2.5" fill="#ef4444" />
        </svg>
      )}

      {type === 'controller' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          {/* Dual High-Gain Foldable Antennas */}
          <line x1="85" y1="60" x2="70" y2="25" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="155" y1="60" x2="170" y2="25" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />

          {/* Ergonomic Handheld Controller Body */}
          <polygon points="50,150 65,65 175,65 190,150 160,170 80,170" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />

          {/* 7-inch 1000-Nit Live Video Display */}
          <rect x="80" y="75" width="80" height="50" rx="4" fill="#0369a1" opacity="0.3" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M 85 100 Q 100 85 120 100 T 155 100" fill="none" stroke="#38bdf8" strokeWidth="1" />
          <text x="120" y="118" fill="#f8fafc" fontSize="7" fontFamily="sans-serif" textAnchor="middle">1080p 60fps · 15km</text>

          {/* Metal Precision Control Sticks */}
          <circle cx="68" cy="110" r="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="68" cy="110" r="3" fill="#f59e0b" />
          <circle cx="172" cy="110" r="10" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="172" cy="110" r="3" fill="#f59e0b" />

          {/* Emergency RTH Button */}
          <circle cx="120" cy="145" r="6" fill="#ef4444" stroke="#f8fafc" strokeWidth="1" />
          <text x="120" y="157" fill="#94a3b8" fontSize="5" fontFamily="sans-serif" textAnchor="middle">RTH</text>
        </svg>
      )}

      {type === 'battery' && (
        <svg viewBox="0 0 240 200" className="w-full h-full p-2 filter drop-shadow-lg">
          {/* Intelligent Flight Battery Pack */}
          <rect x="75" y="45" width="90" height="110" rx="10" fill="#0f172a" stroke="#475569" strokeWidth="3" />
          
          {/* Contact Terminal Pins */}
          <rect x="95" y="36" width="50" height="10" rx="3" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />

          {/* Circular Fuel Gauge Button */}
          <circle cx="120" cy="85" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <circle cx="120" cy="85" r="8" fill="#020617" />
          
          {/* 4 Green LED Charge Indicators */}
          <circle cx="106" cy="115" r="3" fill="#22c55e" />
          <circle cx="115" cy="115" r="3" fill="#22c55e" />
          <circle cx="125" cy="115" r="3" fill="#22c55e" />
          <circle cx="134" cy="115" r="3" fill="#22c55e" />

          {/* Specifications Print */}
          <text x="120" y="138" fill="#94a3b8" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">5000 mAh</text>
          <text x="120" y="148" fill="#64748b" fontSize="6" fontFamily="sans-serif" textAnchor="middle">SELF-HEATING LI-PO 4S</text>
        </svg>
      )}
    </div>
  );
};
