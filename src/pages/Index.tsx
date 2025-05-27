import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-lg">
          {/* Logo and Title Section */}
          <div className="space-y-4">
            <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/Capture d'écran 2025-05-24 222738.png" 
                alt="pamel.ai logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
              pamel.ai
            </h1>
            <p className="text-xl text-gray-600 mt-2 font-light">
              AI yoga coach
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 text-center">
        <p className="text-sm text-gray-400">
          © 2025 pamel.ai - Mindful technology for mindful living
        </p>
      </footer>
    </div>
  );
};

export default Index;
