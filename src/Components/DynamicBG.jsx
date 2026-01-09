import React, { memo } from 'react';

// Ultra-lightweight static background - no JS animations for best performance
const DynamicBG = memo(() => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-base-100 pointer-events-none">
            {/* Static linear blobs - CSS only, no animations */}
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />

            {/* Simple dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-linear(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
});

DynamicBG.displayName = 'DynamicBG';

export default DynamicBG;