
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MembersArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // For a real implementation, we'd check auth status here
  
  // Mock lesson data
  const lessons = [
    {
      id: 1,
      title: "Introdução à Automação de Clínicas com IA",
      duration: "32:15",
      isCompleted: false
    },
    {
      id: 2,
      title: "Configurando o ChatBot para WhatsApp",
      duration: "45:40",
      isCompleted: false
    },
    {
      id: 3,
      title: "Criando Fluxos de Agendamento Automatizados",
      duration: "38:22",
      isCompleted: false
    },
    {
      id: 4,
      title: "Estratégias de Follow-up e Reativação",
      duration: "29:17",
      isCompleted: false
    },
    {
      id: 5,
      title: "Relatórios e Métricas de Conversão",
      duration: "26:55",
      isCompleted: false
    }
  ];
  
  // Mock material data
  const materials = [
    {
      id: 1,
      title: "Guia Completo de Implementação (PDF)",
      fileType: "pdf",
      size: "3.2 MB"
    },
    {
      id: 2,
      title: "Templates de Fluxos Prontos (ZIP)",
      fileType: "zip",
      size: "8.5 MB"
    },
    {
      id: 3,
      title: "Planilha de Acompanhamento de Resultados",
      fileType: "xlsx",
      size: "1.4 MB"
    },
    {
      id: 4,
      title: "E-book: Retenção de Pacientes com IA",
      fileType: "pdf",
      size: "2.8 MB"
    }
  ];
  
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If we were implementing login, this would be replaced with a real login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block">
                <h1 className="font-poppins font-bold text-3xl text-gradient">YEBATECH</h1>
              </Link>
              <h2 className="text-2xl font-bold mt-8 mb-2">Área de Membros</h2>
              <p className="text-yebatech-lightText">Digite suas credenciais para acessar</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yebatech-darkText mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-yebatech-darkText mb-1">
                      Senha
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                    />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 text-yebatech-blue border-gray-300 rounded focus:ring-yebatech-blue"
                      />
                      <label htmlFor="remember" className="ml-2 text-yebatech-lightText">
                        Lembrar-me
                      </label>
                    </div>
                    
                    <a href="#" className="text-yebatech-blue hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(true)}
                    className="w-full bg-yebatech-blue hover:bg-yebatech-blue/90 text-white py-2 rounded-md font-medium transition-all"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <h1 className="font-poppins font-bold text-xl text-gradient">YEBATECH</h1>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yebatech-blue rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium">João da Silva</span>
              </div>
              
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-yebatech-lightText hover:text-yebatech-darkText transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Aula Magna: Automação para Clínicas</h1>
          <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">ACESSO VITALÍCIO</span>
        </div>
        
        {/* Featured Video */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="aspect-video bg-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <p className="text-white mt-4 text-lg font-medium">
                  Reproduzir Aula Magna
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Introdução à Automação de Clínicas com IA</h2>
            <p className="text-yebatech-lightText">
              Nesta aula, você aprenderá os fundamentos da automação de agendamentos e vendas para clínicas e consultórios usando inteligência artificial integrada ao WhatsApp.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <span className="inline-flex items-center text-sm text-yebatech-lightText">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                32:15 minutos
              </span>
              <span className="inline-flex items-center text-sm text-yebatech-lightText">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar mr-1"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                Adicionado em 15/05/2023
              </span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="lessons">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="lessons">Aulas</TabsTrigger>
            <TabsTrigger value="materials">Materiais</TabsTrigger>
          </TabsList>
          
          {/* Lessons Tab */}
          <TabsContent value="lessons">
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Conteúdo do Curso</h2>
                <p className="text-yebatech-lightText text-sm">5 aulas • 2h 52min no total</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-yebatech-blue/10 rounded-full flex items-center justify-center mr-4">
                        {lesson.isCompleted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-yebatech-blue"><polyline points="20 6 9 17 4 12"/></svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-yebatech-blue"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <span className="text-sm text-yebatech-lightText">{lesson.duration}</span>
                      </div>
                    </div>
                    
                    <button className="text-yebatech-blue hover:text-yebatech-blue/80 transition-colors">
                      {lesson.isCompleted ? 'Reassistir' : 'Assistir'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Materials Tab */}
          <TabsContent value="materials">
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Materiais Complementares</h2>
                <p className="text-yebatech-lightText text-sm">4 arquivos para download</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {materials.map((material) => (
                  <div key={material.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-gray-100 text-yebatech-darkText font-bold text-xs">
                        {material.fileType.toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-medium">{material.title}</h3>
                        <span className="text-sm text-yebatech-lightText">{material.size}</span>
                      </div>
                    </div>
                    
                    <button className="text-yebatech-blue hover:text-yebatech-blue/80 transition-colors flex items-center">
                      <span>Download</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download ml-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Support Section */}
        <div className="bg-yebatech-lightGreen rounded-xl p-6 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-1">Precisa de ajuda?</h3>
              <p className="text-yebatech-lightText">Estamos aqui para ajudar você com qualquer dúvida sobre a implementação.</p>
            </div>
            
            <a 
              href="https://wa.me/5511987654321?text=Olá!%20Sou%20aluno%20da%20Aula%20Magna%20e%20preciso%20de%20ajuda."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yebatech-green hover:bg-yebatech-green/90 text-white py-2 px-6 rounded-md inline-flex items-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Suporte via WhatsApp
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <div className="bg-white py-6 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-yebatech-lightText mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} YEBATECH. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-yebatech-lightText hover:text-yebatech-blue">Termos de Uso</Link>
              <Link to="#" className="text-sm text-yebatech-lightText hover:text-yebatech-blue">Política de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersArea;
