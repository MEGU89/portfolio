import './RaceElements.css'

// 3D Winning Flag
export const Flag3D = ({ className = '' }) => {
  return (
    <div className={`flag-3d-wrapper ${className}`} title="Start!">
      <div className="flag-3d-container">
        {/* Flag pole */}
        <div className="flag-pole"></div>
        {/* Flag fabric with checkered pattern */}
        <div className="flag-fabric">
          <div className="flag-pattern">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`flag-square ${i % 2 === (Math.floor(i/4) % 2) ? 'black' : 'white'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 3D Turtle
export const Turtle3D = ({ className = '' }) => {
  return (
    <div className={`turtle-3d-wrapper ${className}`} title="Slow and steady wins the race...">
      <div className="turtle-3d-container">
        {/* Shell */}
        <div className="turtle-shell">
          <div className="shell-pattern">
            <div className="shell-hex"></div>
            <div className="shell-hex"></div>
            <div className="shell-hex"></div>
            <div className="shell-hex"></div>
            <div className="shell-hex"></div>
            <div className="shell-hex"></div>
          </div>
        </div>
        {/* Head */}
        <div className="turtle-head">
          <div className="turtle-eye left"></div>
          <div className="turtle-eye right"></div>
        </div>
        {/* Legs */}
        <div className="turtle-leg front-left"></div>
        <div className="turtle-leg front-right"></div>
        <div className="turtle-leg back-left"></div>
        <div className="turtle-leg back-right"></div>
        {/* Tail */}
        <div className="turtle-tail"></div>
      </div>
      {/* Shadow */}
      <div className="turtle-shadow"></div>
    </div>
  )
}

// 3D Rabbit
export const Rabbit3D = ({ className = '' }) => {
  return (
    <div className={`rabbit-3d-wrapper ${className}`} title="Fast but easily distracted!">
      <div className="rabbit-3d-container">
        {/* Body */}
        <div className="rabbit-body"></div>
        {/* Head */}
        <div className="rabbit-head">
          {/* Ears */}
          <div className="rabbit-ear left"></div>
          <div className="rabbit-ear right"></div>
          {/* Face */}
          <div className="rabbit-face">
            <div className="rabbit-eye left"></div>
            <div className="rabbit-eye right"></div>
            <div className="rabbit-nose"></div>
            <div className="rabbit-whisker left"></div>
            <div className="rabbit-whisker right"></div>
          </div>
        </div>
        {/* Feet */}
        <div className="rabbit-foot left"></div>
        <div className="rabbit-foot right"></div>
        {/* Tail */}
        <div className="rabbit-tail"></div>
      </div>
      {/* Shadow */}
      <div className="rabbit-shadow"></div>
    </div>
  )
}

// Race Track
export const RaceTrack = ({ dots = 15 }) => {
  return (
    <div className="race-track-3d">
      {[...Array(dots)].map((_, i) => (
        <div 
          key={i} 
          className="track-dot-3d" 
          style={{ animationDelay: `${i * 0.1}s` }}
        ></div>
      ))}
    </div>
  )
}

// Complete Race Signature Component
export const RaceSignature = ({ size = 'lg' }) => {
  const sizeClass = size === 'sm' ? 'scale-50' : size === 'md' ? 'scale-75' : 'scale-100'
  
  return (
    <div className={`race-signature ${sizeClass}`}>
      <Flag3D />
      <Turtle3D className="mx-2" />
      <RaceTrack dots={12} />
      <Rabbit3D className="mx-2" />
    </div>
  )
}

export default RaceSignature
