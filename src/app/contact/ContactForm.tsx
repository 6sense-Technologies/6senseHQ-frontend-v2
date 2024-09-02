"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import BuyerGuide from "../components/BuyerGuide";
import { buyerGuides, mistakes } from "@/data/propsData";
import Mistakes from "../components/Mistakes";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { CheckCircle } from "@phosphor-icons/react";
import { SIXSENSE_BACKEND } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type FormField = {
  name: string;
  email: string;
  companyWebsite: string;
  message: string;
  getNda: boolean;
  consent: boolean;
};

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({ message: "Valid email is required!" }),
  companyWebsite: z.string().optional(),
  message: z.string().optional(),
  getNda: z.boolean().optional(),
  consent: z.boolean(),
});

const ContactForm = () => {
  const [sentEmail, setSentEmail] = useState(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormField>({ resolver: zodResolver(ContactSchema) });

  const searchParams = useSearchParams();
  const source = searchParams.get("source") || "";
  const section = searchParams.get("section") || "";

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onsubmit = async (data: FormField) => {
    if (!executeRecaptcha) {
      console.error("Execute reCAPTCHA not available");
      return;
    }

    // Execute reCAPTCHA and get the token
    const recaptchaToken = await executeRecaptcha("contact_form_submission");

    try {
      //Verify reCAPTCHA token with backend
      const verifyRes = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        null,
        {
          headers: {
            "access-control-allow-origin": "*",
          },
        }
      );

      if (!verifyRes.data.success) {
        console.error("reCAPTCHA verification failed");
      }

      // Send email and event to backend
      const eventBody = {
        event_name: "contact_form_submission",
        contact_properties: {
          name: data.name,
          email: data.email,
          companyWebsite: data.companyWebsite,
          message: data.message,
          getNda: data.getNda,
          consent: data.consent,
        },
        event_properties: {
          source,
          section,
          recaptchaToken,
        },
      };

      const res = await axios.post(`${SIXSENSE_BACKEND}/events`, eventBody);

      if (res.status === 200) {
        console.log(res.data);
        reset();
        setSentEmail(true);

        setTimeout(() => setSentEmail(false), 5000);
      }
    } catch (error) {
      console.error(error);
      setSentEmail(false);
    }
  };

  return (
    <div className="">
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-10 md:gap-20">
          <div>
            <h1 className="max-w-lg text-4xl md:text-6xl md:leading-tight text-center md:text-left font-bold text-primary">
              Let&apos;s <span className="text-secondary">Discuss </span>Your
              Project
            </h1>
            <p className="max-w-xl font-plex-sans-thai opacity-80 pt-3 text-justify">
              Our representative will contact you within 24 hours, we will sign
              an NDA if needed to keep your ideas confidential and discuss the
              main requirements of the project. After that, our analysis and
              developers will carefully study them, and together we will come up
              the next move.
            </p>

            <div className="mt-6 md:mt-3 text-center md:text-left">
              <div>
                <p className="font-plex-sans-thai opacity-80">
                  Simply fill out the form or email us at
                </p>
                <p className="font-plex-sans-thai text-secondary font-bold max-w-sm">
                  <Link
                    className="border-b-2 border-secondary"
                    href={"mailto:hello@6sensehq.com"}
                  >
                    hello@6sensehq.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10">
              <div className="flex items-center gap-4">
                <img src="/images/contact/manager.svg" alt="Manager" />
                <div>
                  <h3 className="font-bold">Nick Jones</h3>
                  <p className="font-plex-sans-thai text-lightGray5 font-normal">
                    Sr. Project Manager
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <img src="/images/contact/top.svg" alt="Award" />
                </div>
                <div>
                  <img src="/images/contact/top.svg" alt="Award" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:mt-4">
            <form onSubmit={handleSubmit(onsubmit)} className="space-y-9">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="* Name"
                  className="px-4 pb-2 w-full outline-none border-b border-b-[#CAD2D6] placeholder:font-medium"
                />

                {errors && errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="* Business Email"
                  className="px-4 pb-2 w-full outline-none border-b border-b-[#CAD2D6] placeholder:font-medium"
                />
                {errors && errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("companyWebsite")}
                  type="text"
                  placeholder="Company Website"
                  className="px-4 pb-2 w-full outline-none border-b border-b-[#CAD2D6] placeholder:font-medium"
                />
              </div>
              <div>
                <textarea
                  {...register("message")}
                  rows={1}
                  placeholder="Message or question"
                  className="px-4 pb-2 w-full outline-none border-b border-b-[#CAD2D6] placeholder:font-medium"
                ></textarea>
              </div>
              <div className="font-plex-sans-thai text-lightGray5 space-y-2">
                <div className="flex gap-2">
                  <div>
                    <input
                      {...register("getNda")}
                      className="accent-secondary w-4 h-4 mt-1"
                      id="nda"
                      type="checkbox"
                    />{" "}
                  </div>
                  <label htmlFor="nda">Get an NDA</label>
                </div>
                <div>
                  <div className="flex gap-2">
                    <div>
                      <input
                        {...register("consent")}
                        className="accent-secondary w-4 h-4 mt-1"
                        id="consent"
                        type="checkbox"
                        checked
                      />{" "}
                    </div>
                    <div className="max-w-md">
                      <label htmlFor="consent">
                        I consent to 6sense processing my personal data
                        according the{" "}
                        <Link href={"/privacy-policy"}>
                          <span className="font-plex-sans-thai text-secondary underline">
                            Privacy Policy
                          </span>
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Button
                  text="Send Message"
                  className="font-plex-sans-thai w-full lg:w-[250px] bg-secondary text-white font-bold py-[14px] px-4 text-sm"
                />

                {sentEmail && (
                  <p className="absolute top-16 text-secondary font-medium flex items-center gap-1">
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="my-10">
        <BuyerGuide
          coloredPartTitle="Buyers Guide"
          regularTitle="for Developing Custom Software"
          imageSrc="/images/buyersguide.png"
          icon="/images/tick.svg"
          alt="Tick"
          guides={buyerGuides}
        />
      </div>

      <div className="my-10">
        <Mistakes
          coloredPartTitle="10 Mistakes"
          regularTitle=" You Should Avoid While Developing Custom Software"
          icon="/images/tick.svg"
          alt="Icon"
          imageSrc="/images/10mistakes.png"
          mistakes={mistakes}
        />
      </div>

      <div className="my-10">
        <BuyerGuide
          coloredPartTitle="How to Keep"
          regularTitle="Your Custom Software Development Cost Under Control?"
          imageSrc="/images/buyersguide.png"
          icon="/images/tick.svg"
          alt="Tick"
          guides={buyerGuides}
        />
      </div>
    </div>
  );
};

export default ContactForm;
