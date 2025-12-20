import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-amber-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">Gagan<span className="text-amber-500">News</span></h2>
                <p className="text-amber-200/80 max-w-sm">
                    A platform dedicated to sharing knowledge about Web Development, Technology, and Startups. Built with React & Tailwind.
                </p>
                <div className="flex gap-4 mt-6">
                    <Facebook className="hover:text-amber-400 cursor-pointer" />
                    <Twitter className="hover:text-amber-400 cursor-pointer" />
                    <Instagram className="hover:text-amber-400 cursor-pointer" />
                    <Linkedin className="hover:text-amber-400 cursor-pointer" />
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2 text-amber-200/70">
                    <li className="hover:text-white cursor-pointer">About Us</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                    <li className="hover:text-white cursor-pointer">Advertise</li>
                    <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Subscribe</h4>
                <p className="text-sm text-amber-200/70 mb-4">Get the latest news directly to your inbox.</p>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded bg-amber-900/50 border border-amber-800 text-white placeholder-amber-400/50 focus:outline-none focus:border-amber-500" />
            </div>
        </div>

        <div className="border-t border-amber-900 pt-8 text-center text-amber-200/50 text-sm">
            © 2025 Gagan Nagar. All Rights Reserved. Made in Indore.
        </div>
      </div>
    </footer>
  )
}

export default Footer