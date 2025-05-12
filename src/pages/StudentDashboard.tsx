
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentDashboard = () => {
  // Mock data - in a real implementation, this would come from Supabase
  const [user, setUser] = useState({
    name: "João da Silva",
    email: "joao@example.com",
    points: 30,
    progress: 40, // percentage of course completion
  });
  
  // Mock course data
  const lessons = [
    {
      id: 1,
      title: "Introdução à Automação de Clínicas com IA",
      duration: "32:15",
      completed: true,
      points: 10,
      materials: [
        { name: "Guia de Implementação.pdf", type: "pdf", size: "3.2 MB" },
        { name: "Slides da Aula.pdf", type: "pdf", size: "1.8 MB" }
      ]
    },
    {
      id: 2,
      title: "Configurando o ChatBot para WhatsApp",
      duration: "45:40",
      completed: true,
      points: 10,
      materials: [
        { name: "Template de Fluxos.zip", type: "zip", size: "8.5 MB" },
        { name: "Guia de Configuração.pdf", type: "pdf", size: "2.1 MB" }
      ]
    },
    {
      id: 3,
      title: "Criando Fluxos de Agendamento Automatizados",
      duration: "38:22",
      completed: true,
      points: 10,
      materials: [
        { name: "Exemplos de Fluxos.pdf", type: "pdf", size: "4.3 MB" },
        { name: "Planilha de Acompanhamento.xlsx", type: "xlsx", size: "1.4 MB" }
      ]
    },
    {
      id: 4,
      title: "Estratégias de Follow-up e Reativação",
      duration: "29:17",
      completed: false,
      points: 10,
      materials: [
        { name: "Modelos de Mensagens.pdf", type: "pdf", size: "2.6 MB" }
      ]
    },
    {
      id: 5,
      title: "Relatórios e Métricas de Conversão",
      duration: "26:55",
      completed: false,
      points: 10,
      materials: [
        { name: "Dashboard de Métricas.xlsx", type: "xlsx", size: "1.9 MB" },
        { name: "Guia de Análise.pdf", type: "pdf", size: "2.4 MB" }
      ]
    }
  ];
  
  // Badges/achievements data
  const badges = [
    { id: 1, name: "Primeiro Passo", description: "Assistiu à primeira aula", unlocked: true, icon: "medal" },
    { id: 2, name: "Em Progresso", description: "Completou 50% do curso", unlocked: false, icon: "medal" },
    { id: 3, name: "Especialista", description: "Completou 100% do curso", unlocked: false, icon: "medal" },
    { id: 4, name: "Praticante", description: "Baixou todos os materiais", unlocked: false, icon: "medal" }
  ];
  
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to handle marking a lesson as completed
  const markAsCompleted = (lessonId: number) => {
    // In a real app, this would update the database
    console.log(`Marked lesson ${lessonId} as completed`);
  };
  
  // Function to download a material
  const downloadMaterial = (lessonId: number, materialName: string) => {
    // In a real app, this would trigger a download
    console.log(`Downloading ${materialName} from lesson ${lessonId}`);
  };

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
                  <span className="text-sm font-medium">JS</span>
                </div>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              
              <Link to="/" className="text-yebatech-lightText hover:text-yebatech-darkText transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container-custom py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">Bem-vindo, {user.name}!</h1>
              <p className="text-yebatech-lightText">Continue seu aprendizado na Aula Magna.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="bg-yebatech-lightGreen rounded-full px-3 py-1 flex items-center text-yebatech-green font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal mr-1"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                <span>{user.points} pontos</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Seu progresso</span>
              <span className="text-sm text-yebatech-lightText">{user.progress}% concluído</span>
            </div>
            <Progress value={user.progress} className="h-2" />
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="aulas">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="aulas">Minhas Aulas</TabsTrigger>
            <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
            <TabsTrigger value="suporte">Suporte</TabsTrigger>
          </TabsList>
          
          {/* Lessons Tab */}
          <TabsContent value="aulas">
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Conteúdo do Curso</h2>
                <p className="text-yebatech-lightText text-sm">5 aulas • 2h 52min no total</p>
              </div>
              
              <div className="divide-y divide-gray-100">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-yebatech-blue/10 rounded-full flex items-center justify-center mr-4">
                            {lesson.completed ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-yebatech-blue"><polyline points="20 6 9 17 4 12"/></svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-yebatech-blue"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-lg mb-1">{lesson.title}</h3>
                            <div className="flex items-center text-sm text-yebatech-lightText mb-3">
                              <span className="flex items-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                {lesson.duration}
                              </span>
                              <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal mr-1"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                                {lesson.points} pontos
                              </span>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium mb-1">Materiais complementares</h4>
                              {lesson.materials.map((material, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 rounded-md p-2">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3 bg-gray-100 text-yebatech-darkText font-bold text-xs">
                                      {material.type.toUpperCase()}
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium">{material.name}</p>
                                      <p className="text-xs text-yebatech-lightText">{material.size}</p>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => downloadMaterial(lesson.id, material.name)}
                                    className="text-yebatech-blue hover:text-yebatech-blue/80 transition-colors text-sm flex items-center"
                                  >
                                    <span>Download</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download ml-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-center items-center md:border-l md:border-gray-100 md:pl-6">
                        <Link 
                          to={`/aula/${lesson.id}`}
                          className="w-full bg-yebatech-blue hover:bg-yebatech-blue/90 text-white py-2 px-4 rounded-md font-medium transition-all text-center mb-3"
                        >
                          {lesson.completed ? 'Reassistir Aula' : 'Assistir Aula'}
                        </Link>
                        
                        {!lesson.completed && (
                          <button 
                            onClick={() => markAsCompleted(lesson.id)}
                            className="w-full border border-yebatech-green text-yebatech-green hover:bg-yebatech-green/10 py-2 px-4 rounded-md font-medium transition-all text-center flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-1"><polyline points="20 6 9 17 4 12"/></svg>
                            Marcar como Concluída
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {/* Achievements Tab */}
          <TabsContent value="conquistas">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Minhas Conquistas</h2>
                <p className="text-yebatech-lightText">Complete as aulas para desbloquear todas as conquistas.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {badges.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`border ${badge.unlocked ? 'border-yebatech-green/30 bg-yebatech-lightGreen' : 'border-gray-200 bg-gray-50'} rounded-lg p-4 text-center`}
                  >
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${badge.unlocked ? 'bg-yebatech-green/20' : 'bg-gray-200'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${badge.unlocked ? 'medal' : 'medal'} ${badge.unlocked ? 'text-yebatech-green' : 'text-gray-400'}`}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                    </div>
                    <h3 className={`font-medium ${badge.unlocked ? 'text-yebatech-darkText' : 'text-gray-400'}`}>{badge.name}</h3>
                    <p className={`text-sm ${badge.unlocked ? 'text-yebatech-lightText' : 'text-gray-400'}`}>{badge.description}</p>
                    {badge.unlocked && (
                      <Badge className="mt-2 bg-yebatech-green">Desbloqueado</Badge>
                    )}
                  </div>
                ))}
              </div>
              
              {user.progress === 100 && (
                <div className="mt-8 text-center">
                  <button className="bg-yebatech-blue hover:bg-yebatech-blue/90 text-white py-3 px-6 rounded-md font-medium transition-all inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    Gerar Certificado
                  </button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {/* Support Tab */}
          <TabsContent value="suporte">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Suporte</h2>
                <p className="text-yebatech-lightText">Precisa de ajuda? Estamos aqui para te auxiliar.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yebatech-green/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-yebatech-green"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    </div>
                    <h3 className="font-medium">WhatsApp</h3>
                  </div>
                  <p className="text-yebatech-lightText text-sm mb-4">Envie uma mensagem e receba ajuda imediata da nossa equipe de suporte.</p>
                  <a 
                    href="https://wa.me/5511987654321?text=Olá!%20Sou%20aluno%20da%20Aula%20Magna%20e%20preciso%20de%20ajuda."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yebatech-green hover:bg-yebatech-green/90 text-white py-2 px-4 rounded-md font-medium transition-all inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    Enviar Mensagem
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yebatech-blue/20 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-yebatech-blue"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <h3 className="font-medium">E-mail</h3>
                  </div>
                  <p className="text-yebatech-lightText text-sm mb-4">Envie suas dúvidas por e-mail e responderemos em até 24 horas.</p>
                  <a 
                    href="mailto:suporte@yebatech.com.br"
                    className="border border-yebatech-blue text-yebatech-blue hover:bg-yebatech-blue/10 py-2 px-4 rounded-md font-medium transition-all inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    Enviar E-mail
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Como posso baixar os materiais complementares?</h4>
                    <p className="text-yebatech-lightText text-sm">Clique no botão "Download" ao lado de cada material na página da aula.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Por quanto tempo terei acesso ao conteúdo?</h4>
                    <p className="text-yebatech-lightText text-sm">O acesso é vitalício! Você poderá acessar o conteúdo sempre que quiser.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Como faço para obter meu certificado?</h4>
                    <p className="text-yebatech-lightText text-sm">Complete todas as aulas do curso e o botão para gerar o certificado será liberado na aba "Conquistas".</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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

export default StudentDashboard;
