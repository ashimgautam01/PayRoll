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
    <Card className="bg-white">
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
    <section className="py-20">
      <div className="container ">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Users love the ease of use and functionality
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="">
            <p className="text-xl">4.8 Based on over 900 user reviews in</p>
            <span className="font-semibold">G2 </span>
            <span>and</span>
            
            <span className="font-semibold"> Trustpilot</span>
          
          </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 ml-10 mr-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
