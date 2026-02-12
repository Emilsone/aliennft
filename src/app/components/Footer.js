// src/app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 p-4 mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} NFT Alien. All rights reserved.</p>
    </footer>
  );
}
