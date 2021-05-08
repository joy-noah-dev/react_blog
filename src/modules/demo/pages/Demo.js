import React from 'react';
// import sections
import Hero from 'modules/home/components/Hero';
import FeaturesTiles from 'modules/home/components/FeaturesTiles';
import Testimonial from 'modules/home/components/Testimonial';
import FeaturesSplit from 'modules/home/components/FeaturesSplit';
import Cta from 'modules/home/components/Cta';



const Demo = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Demo;
