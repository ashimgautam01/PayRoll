import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import FeatureCard from "../components/FeatureCard";
import { features } from "../lib/constants/Constants";
import TestimonialsSection from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="py-20 text-center px-4 bg-gradient-to-br from-pink-50 to bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 md:m-10">
              Simplifying Employee Payroll Management
              <span className="relative">
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FF9500] opacity-50 rounded-full" />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Streamline your payroll process, manage employee salaries, and
              generate reports with ease. Our platform helps you efficiently
              handle all aspects of employee payroll management.
            </p>
            <Button
              size="lg"
              className="bg-[#00FF66] hover:bg-[#00FF80] hover:scale-105 text-black"
            >
              Get Started
            </Button>
          </div>
        </section>

        <section className="px-4 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <div className="text-center">
      <TestimonialsSection />
      </div>
    </div>
  );
};

export default Home;
