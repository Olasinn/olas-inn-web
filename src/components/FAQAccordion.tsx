import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="rounded-none border px-6 shadow-soft"
          style={{ backgroundColor: '#f4efe5', borderColor: '#35459e' }}
        >
          <AccordionTrigger className="text-left font-sans font-medium text-primary hover:text-primary/80 py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="font-sans text-muted-foreground pb-5 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
