
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image = "https://i.pravatar.cc/150",
  rating = 5
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md card-hover">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={i < rating ? "#FFD700" : "#E2E8F0"}
            stroke="#FFD700"
            strokeWidth="1"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-yebatech-darkText mb-6 italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-yebatech-blue"
        />
        <div>
          <h4 className="font-semibold text-yebatech-darkText">{author}</h4>
          <p className="text-sm text-yebatech-lightText">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
