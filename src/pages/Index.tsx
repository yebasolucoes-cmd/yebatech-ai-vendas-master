
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import CountdownTimer from '@/components/CountdownTimer';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import CTAButton from '@/components/CTAButton';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  // Set countdown to 48 hours from now
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 48);

  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Sobre a Aula Section */}
      <section id="sobre" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yebatech-lightGreen rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yebatech-blue/20 rounded-full -z-10"></div>
                <div className="bg-yebatech-blue p-3 rounded-2xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                    alt="Médica usando inteligência artificial" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">O Que Você Vai Aprender Na Aula Magna</h2>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Como montar um fluxo automatizado de atendimento no WhatsApp usando IA",
                  "Técnicas para aumentar a taxa de conversão de consultas em 67%",
                  "Como reduzir em até 80% o tempo gasto com tarefas administrativas",
                  "Estratégias para reativar pacientes antigos de forma automática",
                  "Template pronto para implementação imediata em sua clínica"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-yebatech-green/20 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-yebatech-green"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-yebatech-darkText">{item}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton 
                text="QUERO GARANTIR MINHA VAGA" 
                link="/checkout"
                variant="primary" 
                className="mb-4"
              />
              
              <p className="text-yebatech-lightText text-sm italic">
                *Ao se inscrever hoje, você ganha acesso vitalício à Aula Magna e materiais complementares.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Demo Section */}
      <section className="section-padding bg-yebatech-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Veja o Sistema em Ação</h2>
              <p className="text-white/90 mb-6">
                Nosso sistema de IA integrado ao WhatsApp automatiza todo o processo de agendamento e follow-up de pacientes, liberando tempo para você focar no que realmente importa: o atendimento e cuidado com seus pacientes.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <span className="text-white/90">Fácil integração com seu sistema atual</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <span className="text-white/90">Compatível com qualquer tamanho de clínica</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/20 p-1.5 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <span className="text-white/90">Implementação em menos de 48 horas</span>
                </div>
              </div>
              <CTAButton 
                text="GARANTIR MINHA VAGA" 
                link="/checkout"
                variant="outline" 
                className="border-white text-white hover:bg-white/20"
              />
            </div>
            
            <div className="relative flex justify-center">
              <div className="bg-white rounded-xl p-3 shadow-xl max-w-xs">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 bg-yebatech-green rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold">Atendente Virtual</p>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                      <p className="text-sm">Olá! Sou a assistente virtual da Clínica Med+. Como posso ajudar hoje?</p>
                    </div>
                    
                    <div className="bg-yebatech-blue text-white p-3 rounded-lg rounded-tr-none shadow-sm ml-auto max-w-[80%]">
                      <p className="text-sm">Quero marcar uma consulta</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                      <p className="text-sm">Claro! Vamos agendar sua consulta. Qual especialidade você precisa?</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded text-center">Dermatologia</button>
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded text-center">Ortopedia</button>
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded text-center">Cardiologia</button>
                        <button className="text-xs bg-gray-100 hover:bg-gray-200 p-2 rounded text-center">Clinico Geral</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white rounded-full border border-gray-200 px-3 py-1">
                    <input type="text" placeholder="Digite sua mensagem..." className="text-xs flex-1 border-0 focus:ring-0 p-1" />
                    <button className="text-yebatech-green">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-yebatech-lightText">Veja como nossa solução tem ajudado clínicas e consultórios a transformarem seu atendimento.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Testimonial 
              author="Dr. Ricardo Santos"
              role="Clínica Ortopédica"
              quote="Após implementar o sistema, vi uma redução de 65% nas faltas de pacientes e um aumento de 40% nos agendamentos. O ROI foi impressionante."
              rating={5}
              image="https://i.pravatar.cc/150?img=11"
            />
            
            <Testimonial 
              author="Dra. Ana Martins"
              role="Dermatologista"
              quote="Minha secretária consegue focar em tarefas mais importantes agora que o sistema cuida dos agendamentos. Pacientes adoram a praticidade!"
              rating={5}
              image="https://i.pravatar.cc/150?img=5"
            />
            
            <Testimonial 
              author="Dr. Paulo Mendes"
              role="Clínica Odontológica"
              quote="Em apenas 2 semanas usando o sistema, conseguimos recuperar pacientes antigos e preencher horários que ficavam vazios. Muito satisfeito!"
              rating={4}
              image="https://i.pravatar.cc/150?img=15"
            />
          </div>
        </div>
      </section>
      
      {/* Offer Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yebatech-blue to-blue-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12">
                <div className="text-center">
                  <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-6">
                    Oferta Especial • Por Tempo Limitado
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Garanta Sua Vaga Na Aula Magna
                  </h2>
                  
                  <p className="text-white/90 mb-8">
                    Transforme o atendimento da sua clínica com nossa solução de IA integrada ao WhatsApp. Inscreva-se agora:
                  </p>
                  
                  <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white text-lg">Aula Magna + Materiais</span>
                      <div className="text-right">
                        <span className="text-white/60 line-through text-lg">R$ 297,00</span>
                        <br />
                        <span className="text-white text-2xl font-bold">R$ 97,00</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {[
                        "Acesso vitalício à gravação da Aula Magna",
                        "Templates prontos para implementação",
                        "Guia passo a passo para configurar o sistema",
                        "Acesso ao grupo de suporte exclusivo",
                        "Bônus: E-book \"Retenção de Pacientes com IA\""
                      ].map((item, index) => (
                        <li key={index} className="flex items-start text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-yebatech-green mt-1 mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <p className="text-white/90 text-sm mb-4">
                        Inscrições encerram em:
                      </p>
                      
                      <CountdownTimer targetDate={targetDate} className="mb-6" />
                      
                      <CTAButton 
                        text="GARANTIR MINHA VAGA AGORA" 
                        link="/checkout"
                        variant="primary" 
                        fullWidth
                        className="text-lg py-4"
                      />
                      
                      <div className="mt-4 flex justify-center items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check mr-1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                        <span className="text-xs">Garantia de 7 dias ou seu dinheiro de volta</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Final CTA Section */}
      <section className="section-padding bg-yebatech-lightGreen">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto Para Transformar Sua Clínica?
          </h2>
          <p className="text-yebatech-lightText max-w-3xl mx-auto mb-8">
            Não perca a oportunidade de descobrir como a IA pode automatizar os processos da sua clínica, aumentar agendamentos e melhorar a experiência dos seus pacientes.
          </p>
          <CTAButton 
            text="SIM, QUERO ME INSCREVER AGORA!" 
            link="/checkout"
            variant="primary" 
            className="text-lg py-3 px-8"
          />
          <p className="text-sm text-yebatech-lightText mt-4">
            Vagas limitadas • Pagamento 100% seguro
          </p>
        </div>
      </section>
      
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
