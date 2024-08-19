import React from "react";

const Feedback = () => {
  const process = [
    {
      id: 1,
      icon: "/images/construction.png",
      alt: "Sports",
      title: "Sports",
      text: "Industry",
    },
    {
      id: 2,
      icon: "/images/duration.png",
      alt: "Duration",
      title: "4 months",
      text: "Duration",
    },
    {
      id: 3,
      icon: "/images/engineer.png",
      alt: "Engineers",
      title: "5 Engineers",
      text: "Team Size",
    },
    {
      id: 4,
      icon: "/images/technology.png",
      alt: "Technology",
      title: "Node JS, React Js",
      text: "Technology",
    },
  ];
  return (
    <>
      <div className="mx-10">
        <div className="mt-20 max-w-6xl mx-auto bg-slate-50  h-full rounded-t-md py-12 px-4 lg:px-0">
          <div className="max-w-4xl mx-auto flex lg:gap-8 flex-col-reverse lg:flex-row lg:items-start">
            <img
              className="hidden lg:block lg:pt-2"
              src="/images/works/impromek.png"
              alt="Impromek"
            />
            <div className="w-full">
              <div className="flex lg:gap-8 items-center">
                <p className="text-primary text-xl leading-8 font-semibold text-center lg:text-justify">
                  I find it comforting that they follow the schedule they
                  provided me with. It establishes trust between us.
                </p>
                <img
                  className="hidden lg:flex"
                  src="/images/quote.png"
                  alt="Quote"
                />
              </div>

              <div className="mt-10 text-center lg:text-left">
                <img
                  className="block lg:hidden mx-auto"
                  src="/images/works/impromek.png"
                  alt="Impromek"
                />
                <h3 className="text-primary font-bold">Gabriel Sotomayor</h3>
                <p className="text-xs">CEO, Impromek Ltd.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto bg-slate-50 h-full rounded-b-md border-t py-12 px-5 lg:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-8">
              {process.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-full flex flex-col items-center lg:items-start"
                >
                  <div className="mb-4">
                    <img src={item.icon} alt={item.alt} />
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
