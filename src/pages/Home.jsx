import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import FeatureCard from "../components/FeatureCard";
import { features } from "../lib/constants/Constants";
import TestimonialsSection from "../assets/Testimonials";
const Home = () => {
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Report Issues with Ease
              <span className="relative">
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FF4500] opacity-50 rounded-full" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Raise your voice and help improve your community. Submit
              complaints regarding public services, infrastructure, or other
              metropolitan issues quickly and conveniently through our
              user-friendly platform.
            </p>
            <Button
              size="lg"
              className="bg-[#00FF66] hover:bg-[#00FF66]/90 text-black"
           
            >
              File a Complaint
            </Button>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  imagePath={feature.imagePath}
                  imageAlt={feature.imageAlt}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <TestimonialsSection />
    </div>
  );
};

export default Home;
