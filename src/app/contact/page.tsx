"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

const accordionItems: AccordionItem[] = [
  {
    title: "Customers",
    content:
      "Support & enquiries For questions, bugs and suggestions contact us "
  },
  {
    title: "Brokers",
    content:
      "Browse FAQs, video demos, and support documentation by logging into the Broker Portal and navigating to Support",
  },
  {
    title: "Lenders",
    content:
      "For general enquiries contact us at",
  },
  {
    title: "General",
    content:
      "For general enquiries contact us at",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  console.log(openIndex);

  return (

<div className="contact-section">
  <div className="contact-wrapper">
    <div className="content-container">
      <div className="contact-info">
        <div>
          <div className="contact-header">
            <Image
              src="/envelope-middle.webp"
              height={100}
              width={100}
              alt="envelop"
              className="contact-icon"
            />
            <span className="contact-title">Contact us</span>
          </div>
          <div>
            <p>
              Want to get in touch with us? Sure! Let us know below what
              you're looking for and we'll get back to you.
            </p>
          </div>
          <div className="address-section">
            <h2 className="address-title">Address</h2>
            <p>Brookfield Place, 10 Carrington St, Sydney NSW 2000</p>
          </div>
        </div>

        <div>
          <Image
            src="/ques-middle.webp"
            height={400}
            width={400}
            alt="question image"
            className="question-image"
          />
        </div>
      </div>

      <div className="accordion-container">
        {accordionItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <ChevronDown
                className={`accordion-icon ${
                  openIndex === index ? "rotated" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div
                id={`accordion-content-${index}`}
                className="accordion-content"
                role="region"
                aria-labelledby={`accordion-header-${index}`}
              >
                <p className="accordion-text">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  );
}
