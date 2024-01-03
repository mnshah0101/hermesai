import React from "react";
import Link from "next/link";

const PortfolioComponent = () => {
  // Replace with URLs of your portfolio websites & the image URLs
  const portfolioWebsites = [
    {
      url: "https://facultysenateofvirginia.org",
      image: "/img/fsva_image.png",
    },
   {
      url: "https://counsia.com",
      image: "/img/counsia_image.png",
    },
    {
      url: "https://opsmpro.com",
      image: "/img/opsm_image.png",
    }
  ];

  return (
    <div className="mt-16 pt-10">
      <h2 className="text-gradient my-12 py-12 text-5xl md:text-5xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center">Our Portfolio</h2>
      {portfolioWebsites.map((website, index) => {
        return (
          <div key={index} style={{ margin: "10px" }}>
            <Link href={website.url}>
                <img
                  src={website.image}
                  alt={`Screenshot of ${website.url}`}
                  style={{ width: "100%", height: "auto" }}
                />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioComponent;