import React from "react";

const About = () => {
  const team = [
    {
      name: "Harriet Clarkson",
      role: "Marketing Head",
      img: "/images/team1.jpg",
      quote:
        "Harriet has been in the advertising industry since the early days and has re-invented herself and kept pace with the changes in an ever-changing industry.",
    },
    {
      name: "Andy Garcia",
      role: "Creative Director",
      img: "/images/team2.jpg",
      quote:
        "They creatively reach their desired market and get results. It's always fun working with their team. As a video editor, it’s great to get the infusion of new ideas.",
    },
    {
      name: "Joe Trident",
      role: "Media Manager",
      img: "/images/team3.jpg",
      quote:
        "We attained success through his long-term media relationships and sponsorship track record. Joe’s expertise has driven steady growth in our projects.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* --- Heading Section --- */}
      <section className="text-center py-16 px-6 bg-white shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          About <span className="text-red-500">TwinCart</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          TwinCart is an innovative online shopping platform designed to make
          your experience faster, smarter, and more personalized. Our mission is
          to bridge technology and convenience, offering customers seamless
          shopping with curated product recommendations and a user-friendly
          interface.
        </p>
      </section>

      {/* --- Mission Section --- */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          Our mission is to create a platform where innovation meets simplicity.
          We aim to provide a seamless and secure online shopping experience
          that connects customers with quality products, reliable service, and
          unbeatable deals — all in one place.
        </p>
      </section>

      {/* --- Vision Section --- */}
      <section className="py-12 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
          Our vision is to become a leading e-commerce brand recognized for
          customer trust, innovation, and sustainability. We envision TwinCart
          as more than just a shopping site — a digital ecosystem that empowers
          both consumers and sellers alike.
        </p>
      </section>

      {/* --- Meet Our Team --- */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our <span className="text-red-500">Team</span>
        </h2>

        {/* Team Cards - FLEX layout */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 w-full sm:w-[320px] text-center"
            >
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md -mt-14 mb-4"
              />

              {/* Quote */}
              <div className="flex flex-col items-center">
                <span className="text-orange-500 text-3xl leading-none mb-2">“</span>
                <p className="text-gray-600 italic text-sm mb-4">
                  {member.quote}
                </p>
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto text-sm">
          Our TwinCart team is comprised of savvy entrepreneurs, marketers, and
          developers who bring their years of experience together to help
          businesses grow successfully and deliver exceptional experiences to
          our users.
        </p>
      </section>
    </div>
  );
};

export default About;
