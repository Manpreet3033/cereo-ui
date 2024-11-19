import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    id: "item-1",
    question: "What is the capital of France?",
    answer:
      "The capital of France is Paris. It is known for its art, fashion, and iconic landmarks such as the Eiffel Tower and the Louvre Museum.",
  },
  {
    id: "item-2",
    question: "What is the largest planet in our solar system?",
    answer:
      "Jupiter is the largest planet in our solar system. It is a gas giant and is known for its Great Red Spot and many moons.",
  },
  {
    id: "item-3",
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer:
      "Harper Lee wrote 'To Kill a Mockingbird,' which was published in 1960. The novel is a classic of modern American literature and addresses racial injustice.",
  },
  {
    id: "item-4",
    question: "What is the square root of 64?",
    answer:
      "The square root of 64 is 8. This is because 8 multiplied by itself equals 64.",
  },
];

const AccordionFlatDemo = () => {
  return (
    <Accordion type="single" collapsible className="w-full" variant="flat">
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="font-bold">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionFlatDemo;
