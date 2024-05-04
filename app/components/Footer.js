import React from 'react'

const Footer = () => {
    return (
        <div class="w-full flex bg-background-secondary items-center justify-center py-6">
            <a href="https://finedinemenu.com?utm_source=mobile_menu&amp;utm_content=miami-nusr-et-steakhouse">
                <div class="w-full flex space-x-1.5">
                    <span class="text-sm font-semibold text-gray-400 order-first">Powered by</span>
                    <img src="/assets/footer-logo.svg" alt="finedine" />
                </div>
            </a>
        </div>
    )
}

export default Footer