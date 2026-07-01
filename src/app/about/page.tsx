import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">Headscarf B2B</Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-indigo-600">Products</Link>
            <Link href="/about" className="text-indigo-600 font-semibold">About Us</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Headscarf B2B</h1>
        <div className="prose prose-indigo lg:prose-xl">
          <p>
            Founded in 2010, Headscarf B2B has been a leading manufacturer and wholesaler of premium headscarves. Our mission is to provide businesses with exceptional quality textiles that reflect elegance, comfort, and cultural heritage.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Craftsmanship</h2>
          <p>
            We work directly with artisan weavers and use advanced printing technologies to ensure every scarf meets our rigorous standards. From pure silk to eco-friendly cotton, our materials are sourced responsibly.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Partnership Approach</h2>
          <p>
            We don&apos;t just sell products; we build long-term relationships. Whether you are a boutique store or a large retailer, our team is dedicated to supporting your supply chain needs with flexibility and reliability.
          </p>
        </div>
      </main>
    </div>
  );
}
