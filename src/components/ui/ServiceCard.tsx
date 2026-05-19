import type { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

function ServiceCard({ title, description, icon, className = "" }: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="flex justify-center mb-4 text-5xl text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
