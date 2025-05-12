
import React from 'react';
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

const faqItems: FAQItem[] = [
  {
    question: "O que é exatamente esta Aula Magna?",
    answer: "A Aula Magna é uma sessão exclusiva online onde mostramos como clínicas e consultórios podem implementar um sistema automatizado de agendamentos e vendas usando Inteligência Artificial integrada ao WhatsApp. Durante a aula, compartilhamos estratégias práticas, demonstramos o sistema funcionando e oferecemos materiais complementares para implementação imediata."
  },
  {
    question: "Preciso ter conhecimento técnico para implementar o sistema?",
    answer: "Não! O sistema foi desenvolvido pensando justamente em profissionais de saúde que não têm tempo ou conhecimento técnico. Nossa solução é fácil de implementar, com tutoriais passo a passo e suporte para garantir que você consiga configurar tudo sem dificuldades."
  },
  {
    question: "Quanto tempo leva para ver resultados após implementar o sistema?",
    answer: "A maioria dos nossos clientes começa a ver resultados já na primeira semana após a implementação. Clínicas relatam um aumento médio de 30% nos agendamentos e redução de 70% no tempo gasto com marcação manual de consultas."
  },
  {
    question: "Se eu não gostar do conteúdo da Aula Magna, posso pedir reembolso?",
    answer: "Absolutamente! Oferecemos garantia de satisfação de 7 dias. Se você assistir à Aula Magna e sentir que não entregamos o valor prometido, basta enviar um email para suporte@yebatech.com.br solicitando o reembolso integral."
  },
  {
    question: "Como funciona o acesso ao conteúdo após a compra?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente um email com os dados de acesso à nossa Área de Membros. Lá, você encontrará a gravação da Aula Magna, materiais complementares e tutoriais detalhados para implementação."
  },
  {
    question: "Por quanto tempo terei acesso aos materiais?",
    answer: "Ao adquirir a Aula Magna, você terá acesso vitalício ao conteúdo. Isso significa que poderá revisitar os materiais quantas vezes quiser e até mesmo aproveitar atualizações futuras que fizermos no conteúdo."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-yebatech-lightText">Tire suas dúvidas sobre a Aula Magna e como ela pode transformar os processos do seu consultório ou clínica.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-yebatech-darkText hover:text-yebatech-blue">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-yebatech-lightText">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
