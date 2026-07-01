import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-indigo-600 tracking-tight">Headscarf B2B</div>
            <div className="hidden sm:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
              <Link href="/products" className="text-gray-600 hover:text-indigo-600">Products</Link>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              Premium Headscarves for Your Business
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              High-quality fabrics, unique designs, and competitive wholesale prices. We provide the best headscarf solutions for retailers worldwide.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link href="/products" className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700">
                Browse Collection
              </Link>
              <Link href="/about" className="border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-indigo-100 rounded-full flex items-center justify-center">
               {/* Placeholder for Hero Image */}
               <span className="text-indigo-600 text-lg font-medium">Headscarf Visual</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Bulk Orders</h3>
              <p className="text-gray-600">Special pricing tiers for wholesale and enterprise clients.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Global Shipping</h3>
              <p className="text-gray-600">Reliable logistics network reaching over 50 countries.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Each piece is inspected to meet the highest textile standards.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-32 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2026 Headscarf B2B Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
