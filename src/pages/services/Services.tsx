import { FaHeart, FaAmbulance, FaBaby } from "react-icons/fa";
import ServiceCard from "@/components/ui/ServiceCard";

function Services() {
  const services = [
    {
      id: 1,
      title: "Cardiology",
      description:
        "Expert cardiac care with advanced diagnostic equipment and specialized physicians to treat heart conditions, manage cardiovascular health, and provide emergency cardiac interventions.",
      icon: <FaHeart />,
    },
    {
      id: 2,
      title: "Emergency Care",
      description:
        "24/7 emergency services with trauma specialists and critical care teams ready to respond to urgent medical situations and save lives with rapid treatment protocols.",
      icon: <FaAmbulance />,
    },
    {
      id: 3,
      title: "Pediatrics",
      description:
        "Specialized care for infants and children with compassionate pediatricians and child-friendly facilities ensuring optimal health and development for young patients.",
      icon: <FaBaby />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide comprehensive healthcare services with state-of-the-art
            facilities and experienced medical professionals dedicated to your
            well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
