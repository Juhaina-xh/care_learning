import React from "react";
import NavigationRail from "@/components/NavigationRail";
import ListingPage from "@/app/outcomes/ListingPage";
import ProtectedRoute from "@/components/ProtectedRoute";

function CourseListing() {
  return (
    <ProtectedRoute>
      <main>
        <div className="container mx-auto pt-6">
          <div className="flex relative h-full">
            <NavigationRail />
            <div className="main-body flex-1">
              <h2 className="mb-3">Recommended Courses</h2>
              <ListingPage />
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}

export default CourseListing;
