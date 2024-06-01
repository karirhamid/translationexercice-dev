import React from "react";

function TopBar() {
    return (
        <nav className="bg-gray-800">    
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                </div>
            </div>
            <div className="md:hidden" id="mobile-menu">
            </div>
        </nav>
    )
}

export default TopBar;