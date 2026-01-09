import React from 'react';

const PageSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 animate-pulse">
            {/* Hero Skeleton */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <div className="h-4 w-32 bg-base-content/10 rounded-full" />
                    <div className="h-16 w-full bg-base-content/10 rounded-3xl" />
                    <div className="h-10 w-2/3 bg-base-content/10 rounded-2xl" />
                    <div className="h-32 w-full bg-base-content/5 rounded-[3rem]" />
                    <div className="flex gap-4">
                        <div className="h-14 w-40 bg-primary/20 rounded-full" />
                        <div className="h-14 w-40 bg-base-content/10 rounded-full" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-[400px] h-[400px] bg-base-content/10 rounded-[4rem]" />
                </div>
            </div>

            {/* Bento Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
                <div className="md:col-span-8 bg-base-content/5 rounded-[3.5rem]" />
                <div className="md:col-span-4 bg-base-content/10 rounded-[3rem]" />
                <div className="md:col-span-4 bg-base-content/10 rounded-[3rem]" />
                <div className="md:col-span-8 bg-base-content/5 rounded-[3.5rem]" />
            </div>
        </div>
    );
};

export default PageSkeleton;