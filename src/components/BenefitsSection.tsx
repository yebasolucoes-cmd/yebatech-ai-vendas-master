
import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md card-hover">
      <div className="bg-yebatech-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-yebatech-lightText">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Agendamentos Automáticos",
      description: "Automatize todo o processo de agendamento, deixando a IA cuidar das marcações e confirmações de consultas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check text-yebatech-blue"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
      )
    },
    {
      title: "Atendimento 24/7",
      description: "Ofereça atendimento automatizado 24 horas por dia, 7 dias por semana, sem precisar estar online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-yebatech-blue"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
      title: "Redução de Custos",
      description: "Reduza custos com secretariado e recepção, eliminando tarefas administrativas repetitivas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-piggy-bank text-yebatech-blue"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h0"/></svg>
      )
    },
    {
      title: "Aumento de Conversão",
      description: "Aumente significativamente suas taxas de conversão com follow-ups automáticos e mensagens personalizadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-yebatech-blue"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
      )
    },
    {
      title: "Integração com WhatsApp",
      description: "Aproveite o canal mais utilizado pelos seus pacientes para comunicação rápida e eficiente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-yebatech-blue"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      )
    },
    {
      title: "Dados e Relatórios",
      description: "Tenha acesso a relatórios completos sobre agendamentos, conversões e desempenho do seu sistema.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-4 text-yebatech-blue"><path d="M3 3v18h18"/><path d="M7 16v-4"/><path d="M11 16v-8"/><path d="M15 16v-4"/><path d="M19 16V8"/></svg>
      )
    }
  ];

  return (
    <section id="beneficios" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios Para Sua Clínica</h2>
          <p className="text-yebatech-lightText">Descubra como nossa solução de IA pode transformar o dia a dia do seu consultório, gerando mais resultados com menos esforço.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              title={benefit.title} 
              description={benefit.description} 
              icon={benefit.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
