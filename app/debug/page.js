import Image from 'next/image';

export default function DebugPage() {
  // Define the image paths to test
  const imagePaths = [
    '/price 01.png',
    '/price 02.png',
    '/price 3.png',
    '/images/price 01.png',
    '/images/price 02.png',
    '/images/price 3.png',
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Loading Debug Page</h1>
      <p className="mb-6">This page tests loading the pricing images from different paths.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagePaths.map((path, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow">
            <h2 className="text-lg font-semibold mb-2">Test Image {index + 1}</h2>
            <p className="text-sm mb-4 font-mono break-all">{path}</p>
            <div className="h-[300px] bg-gray-100 rounded flex items-center justify-center relative">
              <Image 
                src={path}
                alt={`Test image ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold mb-2">Debug Information</h2>
        <ul className="list-disc pl-5">
          <li>Server time: {new Date().toISOString()}</li>
          <li>Image paths are relative to the public directory</li>
          <li>If images don&apos;t appear, check file names and paths</li>
        </ul>
      </div>
    </div>
  );
} 