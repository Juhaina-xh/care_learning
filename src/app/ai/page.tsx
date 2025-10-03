import NavigationRail from "@/components/NavigationRail";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AIPage() {
  return (
    <ProtectedRoute>
      <main>
        <div className="container mx-auto pt-6">
          <div className="flex relative h-full">
            <NavigationRail />
            <div className="main-body flex-1 p-6">
              <h1 className="text-2xl font-bold mb-4">🤖 AI Page</h1>
              <p>This is the AI Tools section content.</p>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
