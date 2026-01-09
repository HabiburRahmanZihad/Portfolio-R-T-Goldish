import React from "react";
import { Link, useRouteError } from "react-router";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* Error Icon */}
                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                        <AlertTriangle size={48} className="text-primary" />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-8xl font-black text-primary mb-4">404</h1>

                {/* Error Message */}
                <h2 className="text-2xl font-bold text-base-content mb-4">
                    Page Not Found
                </h2>
                <p className="text-base-content/60 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Error Details (Development) */}
                {error?.statusText || error?.message ? (
                    <p className="text-sm text-base-content/40 mb-8 font-mono bg-base-200 p-3 rounded-lg">
                        {error.statusText || error.message}
                    </p>
                ) : null}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-content font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-base-content/10 font-bold hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
