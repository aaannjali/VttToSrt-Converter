import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Copyright info */}
        <div className="text-sm mb-4 md:mb-0">
          © 2024 Mcliq • Built with{' '}
          <Link href="https://generatepress.com" target="_blank" rel="noopener noreferrer" className="underline">
            GeneratePress
          </Link>
        </div>

        {/* Right side: Navigation links */}
        <div className="flex space-x-4">
          <Link href="/home" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/contact-us" className="hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/disclaimer" className="hover:text-gray-300">
            Disclaimer
          </Link>
          <Link href="/disclosure-policy" className="hover:text-gray-300">
            Disclosure Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-gray-300">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
