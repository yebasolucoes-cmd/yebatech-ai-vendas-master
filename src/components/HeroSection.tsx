
import React from 'react';
import CountdownTimer from './CountdownTimer';
import CTAButton from './CTAButton';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const HeroSection: React.FC = () => {
  // Set countdown to 48 hours from now
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 48);

  // WhatsApp API usage statistics data
  const whatsAppStats = [
    { name: 'Respostas Automáticas', value: 85 },
    { name: 'Tempo de Espera', value: 15 },
  ];
  
  const conversionStats = [
    { name: 'Agendamentos', value: 68 },
    { name: 'Vendas', value: 42 },
    { name: 'Retenção', value: 89 },
  ];
  
  const COLORS = ['#25D366', '#0A66C2', '#4267B2'];

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-white via-yebatech-lightGreen to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Automatize o Atendimento da sua Clínica com 
            <span className="text-gradient"> WhatsApp Cloud API e IA </span> 
            em Poucas Horas
          </h1>
          
          <p className="text-lg md:text-xl text-yebatech-lightText mb-8 md:mb-10">
            Aula Magna exclusiva revela como clínicas e consultórios estão automatizando agendamentos e vendas usando Inteligência Artificial integrada ao WhatsApp.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">Taxa de Resposta Automática</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={whatsAppStats}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {whatsAppStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-4 text-yebatech-lightText">
                85% das mensagens são respondidas automaticamente pela IA
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">Métricas de Conversão</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={conversionStats}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#25D366" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm mt-4 text-yebatech-lightText">
                Aumento médio de 68% em agendamentos após implementação
              </p>
            </div>
          </div>
          
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
              Apenas <span className="font-bold text-xl text-yebatech-darkText">R$ 97,00</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
