import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "../lib/constants/Constants";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? "fill-[#00FF66] text-[#00FF66]"
              : "fill-muted stroke-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

function Testimonial({ rating, content, author, location }) {
  return (
    <Card className="bg-white shadow-md rounded-lg">
      <CardContent className="pt-6">
        <StarRating rating={rating} />
        <p className="text-base/relaxed mb-4">{content}</p>
        <p className="text-sm text-muted-foreground">
          {author}, {location}
        </p>
      </CardContent>
    </Card>
  );
}

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Users love the ease of use and functionality
          </h2>
          <div className="flex items-center justify-center gap-2">
            <p className="text-xl">4.8 Based on over 900 user reviews in</p>
            <span className="font-semibold">G2 </span>
            <span>and</span>
            <span className="font-semibold"> Trustpilot</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto px-4 md:px-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
