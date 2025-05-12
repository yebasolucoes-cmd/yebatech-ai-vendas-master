
import React from 'react';
import CountdownTimer from './CountdownTimer';
import CTAButton from './CTAButton';

const HeroSection: React.FC = () => {
  // Set countdown to 48 hours from now
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 48);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-white via-yebatech-lightGreen to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-yebatech-blue/10 text-yebatech-blue font-medium px-4 py-2 rounded-full text-sm mb-6">
            Vagas Limitadas • Inscrições Encerram em Breve
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Transforme sua Clínica em uma 
            <span className="text-gradient"> Máquina de Vendas no WhatsApp </span> 
            com IA em Poucas Horas
          </h1>
          
          <p className="text-lg md:text-xl text-yebatech-lightText mb-8 md:mb-10">
            Aula Magna exclusiva revela como clínicas e consultórios estão automatizando agendamentos e vendas usando Inteligência Artificial integrada ao WhatsApp.
          </p>
          
          <div className="mb-10">
            <CountdownTimer targetDate={targetDate} />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <CTAButton 
              text="QUERO ME INSCREVER AGORA" 
              link="/checkout" 
              variant="primary" 
              className="text-lg px-8 py-4"
            />
            <span className="text-yebatech-lightText">
              Apenas <span className="font-bold text-xl text-yebatech-darkText">R$ 97,00</span> • Vagas limitadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
