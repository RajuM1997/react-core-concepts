import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("./Sdb.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      {services.map((service) => (
        <Service service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
