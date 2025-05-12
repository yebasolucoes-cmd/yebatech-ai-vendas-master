
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const LessonView = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [completed, setCompleted] = useState(false);
  
  // Mock lesson data - in a real implementation, this would be fetched from Supabase
  const [lesson, setLesson] = useState({
    id: parseInt(lessonId || "1"),
    title: "Introdução à Automação de Clínicas com IA",
    duration: "32:15",
    completed: false,
    description: "Nesta aula, você aprenderá os fundamentos da automação de agendamentos e vendas para clínicas e consultórios usando inteligência artificial integrada ao WhatsApp.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder - replace with actual video
    materials: [
      { name: "Guia de Implementação.pdf", type: "pdf", size: "3.2 MB" },
      { name: "Slides da Aula.pdf", type: "pdf", size: "1.8 MB" }
    ],
    nextLessonId: 2
  });
  
  // Mock user data
  const [user, setUser] = useState({
    name: "João da Silva",
    points: 30,
    progress: 40, // percentage of course completion
  });
  
  useEffect(() => {
    // Fetch lesson data based on lessonId
    // This is a placeholder. In a real app, you would fetch data from Supabase
    console.log(`Fetching data for lesson ${lessonId}`);
    window.scrollTo(0, 0);
  }, [lessonId]);
  
  const markAsCompleted = () => {
    // In a real app, this would update the database
    setCompleted(true);
    setUser(prev => ({
      ...prev,
      points: prev.points + 10,
      progress: Math.min(prev.progress + 20, 100) // 20% per lesson, max 100%
    }));
    console.log(`Marked lesson ${lessonId} as completed`);
  };
  
  const downloadMaterial = (materialName: string) => {
    // In a real app, this would trigger a download
    console.log(`Downloading ${materialName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link to="/area-membros" className="flex items-center">
              <h1 className="font-poppins font-bold text-xl text-gradient">YEBATECH</h1>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="bg-yebatech-lightGreen rounded-full px-3 py-1 flex items-center text-yebatech-green font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal mr-1"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                <span>{user.points} pontos</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yebatech-blue rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-sm font-medium">JS</span>
                </div>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container-custom py-8">
        {/* Lesson Navigation */}
        <div className="mb-6">
          <Link to="/area-membros" className="text-yebatech-blue hover:text-yebatech-blue/80 transition-colors inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left mr-1"><path d="m15 18-6-6 6-6"/></svg>
            Voltar para Dashboard
          </Link>
        </div>
        
        {/* Lesson Title and Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
          
          <div className="flex items-center text-sm text-yebatech-lightText mb-6">
            <span className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {lesson.duration}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-medal mr-1"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              10 pontos
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Seu progresso no curso</span>
              <span className="text-sm text-yebatech-lightText">{user.progress}% concluído</span>
            </div>
            <Progress value={user.progress} className="h-2" />
          </div>
        </div>
        
        {/* Video Player */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="aspect-video bg-black relative">
            <iframe 
              src={lesson.videoUrl} 
              title={lesson.title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-3">Sobre esta aula</h2>
            <p className="text-yebatech-lightText mb-6">
              {lesson.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {!completed && (
                <button 
                  onClick={markAsCompleted}
                  className="bg-yebatech-green hover:bg-yebatech-green/90 text-white py-2 px-6 rounded-md font-medium transition-all inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                  Marcar como Concluída
                </button>
              )}
              
              {completed && lesson.nextLessonId && (
                <Link 
                  to={`/aula/${lesson.nextLessonId}`}
                  className="bg-yebatech-blue hover:bg-yebatech-blue/90 text-white py-2 px-6 rounded-md font-medium transition-all inline-flex items-center"
                >
                  Próxima Aula
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Materials */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Materiais complementares</h2>
          
          <div className="space-y-3">
            {lesson.materials.map((material, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 rounded-md p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center mr-3 bg-gray-100 text-yebatech-darkText font-bold text-xs">
                    {material.type.toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium">{material.name}</p>
                    <p className="text-xs text-yebatech-lightText">{material.size}</p>
                  </div>
                </div>
                <button 
                  onClick={() => downloadMaterial(material.name)}
                  className="text-yebatech-blue hover:text-yebatech-blue/80 transition-colors flex items-center"
                >
                  <span>Download</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download ml-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </button>
              </div>
            ))}
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

export default LessonView;
