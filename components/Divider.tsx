'use client';

export default function Divider() {
  return (
    <div 
      className="hero-divider"
      style={{
        height: '150px',
        background: 'linear-gradient(180deg, rgba(242,240,242,1) 0%, rgba(242,240,242,0.8) 50%, rgba(242,240,242,1) 100%)',
        width: '100%',
        position: 'relative',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #4E48EB, transparent)',
        }} 
      />
    </div>
  );
}

