import React from "react";

type Props = {
  paragraph: string;
  quoteLogo?: string;
  logo: string;
  name: string;
  designation: string;
  ourProcess: any;
};

const Feedback = ({
  paragraph,
  quoteLogo,
  logo,
  name,
  designation,
  ourProcess,
}: Props) => {
  return (
    <>
      <div className="mx-10">
        <div className="mt-20 max-w-6xl mx-auto bg-slate-50  h-full rounded-t-md py-12 px-4 lg:px-0">
          <div className="max-w-4xl mx-auto flex lg:gap-8 flex-col-reverse lg:flex-row lg:items-start">
            <img className="hidden lg:block lg:pt-2" src={logo} alt="Logo" />
            <div className="w-full">
              <div className="flex lg:gap-8 items-center">
                <p className="font-plex-sans text-primary text-xl leading-8 font-semibold text-center lg:text-justify">
                  {paragraph}
                </p>
                {quoteLogo && (
                  <img
                    className="hidden lg:flex"
                    src={quoteLogo}
                    alt={quoteLogo ? "Quote" : ""}
                  />
                )}
              </div>

              <div className="mt-10 text-center lg:text-left">
                <img
                  className="block lg:hidden mx-auto"
                  src={logo}
                  alt="Logo"
                />
                <h3 className="font-helvetica text-primary font-bold">
                  {name}
                </h3>
                <p className="font-helvetica text-primary text-xs">
                  {designation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto bg-slate-50 h-full rounded-b-md border-t py-12 px-5 lg:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-8">
              {ourProcess.map((item: any) => (
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
