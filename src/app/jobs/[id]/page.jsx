import React from "react";

const page = () => {
  return (
    <div className="flex gap-12 p-10 justify-around flex-col-reverse md:flex-row">
      <div className="md:w-2/5">
        <h1 className="text-4xl font-bold mt-3 text-[#1F2937]">Title</h1>
        <div>
          <h4 className="text-[#1F2937]">Role</h4>
          <p className="text-[#6B7280]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi
            ratione labore mollitia aliquam. Possimus molestiae error voluptatum
            quae, nihil dolore officia eveniet sint, rem, sequi laboriosam
            dolorem? Repudiandae, dolore!
          </p>
        </div>
        <div>
          <h4 className="text-[#1F2937]">Description</h4>
          <p className="text-[#6B7280]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi
            ratione labore mollitia aliquam. Possimus molestiae error voluptatum
            quae, nihil dolore officia eveniet sint, rem, sequi laboriosam
            dolorem? Repudiandae, dolore!
          </p>
        </div>
        <div>
          <h4 className="text-[#1F2937]">Responsibilities</h4>
          <p className="text-[#6B7280]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi
            ratione labore mollitia aliquam. Possimus molestiae error voluptatum
            quae, nihil dolore officia eveniet sint, rem, sequi laboriosam
            dolorem? Repudiandae, dolore!
          </p>
        </div>
        <div>
          <h4 className="text-[#1F2937]">Skills</h4>
          <p className="text-[#6B7280]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi
            ratione labore mollitia aliquam. Possimus molestiae error voluptatum
            quae, nihil dolore officia eveniet sint, rem, sequi laboriosam
            dolorem? Repudiandae, dolore!
          </p>
        </div>
        <div>
          <h4 className="text-[#1F2937]">Additional Information</h4>
          <p className="text-[#6B7280]">
            Opportunity to oversee customer support operations and ensure high
            levels of customer satisfaction
          </p>
        </div>
      </div>
      <div className="md:w-1/4 bg-[#fff] shadow-md h-fit py-10 rounded-md">
        <div className="w-[100px] h-[100px] bg-black rounded-full mx-auto" />
        <h3 className="text-[#1F2937] text-xl font-semibold text-center">
          Comany Name
        </h3>
        <div className="text-start mt-4 px-8">
          <h3 className="text-[#5a5f65] text-xl font-semibold ">
            24 August, 2024
          </h3>
          <h3 className="text-[#5a5f65] text-xl font-semibold ">
            London, UK / Remote friendly
          </h3>
          <h3 className="text-[#5a5f65] text-xl font-semibold ">
            $75K - $100K
          </h3>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 text-white px-16 py-2 rounded-3xl">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default page;
