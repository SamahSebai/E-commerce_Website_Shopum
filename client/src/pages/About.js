import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Shopum"}>
      <div className="row contactus ">
        <div className="col-md-5 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Shopum, your ultimate destination for all things fashion,
            beauty, and lifestyle! At Shopum, we're dedicated to bringing you
            the latest trends and products that inspire confidence, style, and
            well-being. With a curated selection of top-notch brands and a
            seamless shopping experience, we're committed to making your online
            shopping journey enjoyable and convenient. Whether you're seeking
            the perfect outfit, beauty essentials, or unique home decor, Shopum
            has something for everyone. Our mission is to empower you to express
            your individuality, so dive into our virtual aisles and discover
            your next favorite items. Shopum - where style meets convenience,
            all at your fingertips.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
