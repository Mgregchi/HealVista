import pneumonia from "../../assets/Pneumonia.png";
import bpm from "../../assets/bpm.png";
import kidney from "../../assets/kidneys.png";
import doctor from "../../assets/male-doctor.png";
import ServiceCard from "./ServiceCard";

const ServicesCards = () => {
  const services = [
    { title: "Cardiology", imageUrl: bpm },
    { title: "Nephrology", imageUrl: pneumonia },
    { title: "General Medicine", imageUrl: doctor },
    { title: "Pulmanology", imageUrl: kidney },
  ];

  return (
    <div className="services__cards__container">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
};

export default ServicesCards;
