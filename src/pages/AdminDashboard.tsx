
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  // Mock data for admin dashboard
  const [stats, setStats] = useState({
    totalStudents: 127,
    activeStudents: 98,
    completedLessons: 342,
    totalSales: 'R$ 12.319,00'
  });
  
  // Mock students data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "João da Silva",
      email: "joao@example.com",
      progress: 80,
      lastActive: "2023-11-28",
      status: "active"
    },
    {
      id: 2,
      name: "Maria Oliveira",
      email: "maria@example.com",
      progress: 60,
      lastActive: "2023-11-27",
      status: "active"
    },
    {
      id: 3,
      name: "Carlos Santos",
      email: "carlos@example.com",
      progress: 100,
      lastActive: "2023-11-26",
      status: "completed"
    },
    {
      id: 4,
      name: "Ana Pereira",
      email: "ana@example.com",
      progress: 40,
      lastActive: "2023-11-20",
      status: "inactive"
    },
    {
      id: 5,
      name: "Roberto Costa",
      email: "roberto@example.com",
      progress: 0,
      lastActive: "2023-11-15",
      status: "inactive"
    }
  ]);
  
  // Mock lessons data
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Introdução à Automação de Clínicas com IA",
      duration: "32:15",
      views: 98,
      completions: 76
    },
    {
      id: 2,
      title: "Configurando o ChatBot para WhatsApp",
      duration: "45:40",
      views: 87,
      completions: 65
    },
    {
      id: 3,
      title: "Criando Fluxos de Agendamento Automatizados",
      duration: "38:22",
      views: 79,
      completions: 62
    },
    {
      id: 4,
      title: "Estratégias de Follow-up e Reativação",
      duration: "29:17",
      views: 68,
      completions: 59
    },
    {
      id: 5,
      title: "Relatórios e Métricas de Conversão",
      duration: "26:55",
      views: 64,
      completions: 54
    }
  ]);
  
  // State for new lesson form
  const [newLesson, setNewLesson] = useState({
    title: "",
    videoUrl: "",
    description: ""
  });
  
  // Function to handle form submission
  const handleSubmitLesson = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New lesson data:", newLesson);
    // In a real app, this would save the lesson to Supabase
    alert("Lesson created successfully!");
    setNewLesson({
      title: "",
      videoUrl: "",
      description: ""
    });
  };
  
  // Function to handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real app, this would upload files to Supabase storage
    console.log("File uploaded:", e.target.files);
  };
  
  // Function to handle sending notification
  const handleSendNotification = () => {
    // In a real app, this would send a notification to all students
    console.log("Sending notification to all students");
    alert("Notification sent to all students!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <h1 className="font-poppins font-bold text-xl text-gradient">YEBATECH</h1>
              <Badge className="ml-2 bg-yebatech-blue">Admin</Badge>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yebatech-blue rounded-full flex items-center justify-center text-white mr-2">
                  <span className="text-sm font-medium">AD</span>
                </div>
                <span className="text-sm font-medium">Admin</span>
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
        {/* Dashboard Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold mb-6">Dashboard Administrativo</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-yebatech-lightGreen rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yebatech-lightText">Total de Alunos</p>
                  <p className="text-2xl font-bold text-yebatech-darkText">{stats.totalStudents}</p>
                </div>
                <div className="w-10 h-10 bg-yebatech-green/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-yebatech-green"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-full bg-yebatech-green/20 rounded-full h-1.5">
                  <div className="bg-yebatech-green h-1.5 rounded-full" style={{ width: `${(stats.activeStudents/stats.totalStudents)*100}%` }}></div>
                </div>
                <span className="text-xs text-yebatech-lightText ml-2">{Math.round((stats.activeStudents/stats.totalStudents)*100)}% ativos</span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-400">Alunos Ativos</p>
                  <p className="text-2xl font-bold text-blue-700">{stats.activeStudents}</p>
                </div>
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
                </div>
              </div>
              <p className="text-xs text-blue-400 mt-4">Últimos 30 dias</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-400">Aulas Concluídas</p>
                  <p className="text-2xl font-bold text-purple-700">{stats.completedLessons}</p>
                </div>
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-purple-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
              </div>
              <p className="text-xs text-purple-400 mt-4">Total acumulado</p>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-400">Vendas Totais</p>
                  <p className="text-2xl font-bold text-amber-700">{stats.totalSales}</p>
                </div>
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign text-amber-600"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
              </div>
              <p className="text-xs text-amber-400 mt-4">Faturamento total</p>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <Tabs defaultValue="students">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="students">Alunos</TabsTrigger>
            <TabsTrigger value="lessons">Aulas</TabsTrigger>
            <TabsTrigger value="content">Adicionar Conteúdo</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>
          
          {/* Students Tab */}
          <TabsContent value="students">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h2 className="text-lg font-semibold">Lista de Alunos</h2>
                  <p className="text-yebatech-lightText text-sm">Gerencie os alunos da plataforma</p>
                </div>
                
                <div className="mt-4 sm:mt-0 flex">
                  <Input 
                    type="text" 
                    placeholder="Pesquisar aluno..." 
                    className="w-full sm:w-auto focus-visible:ring-yebatech-blue"
                  />
                  <Button className="ml-2 bg-yebatech-blue hover:bg-yebatech-blue/90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Nome</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">E-mail</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Progresso</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Último acesso</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Status</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-yebatech-blue/20 rounded-full flex items-center justify-center text-yebatech-blue mr-3">
                              {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm">
                          {student.email}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center">
                            <Progress value={student.progress} className="h-2 w-24 mr-2" />
                            <span className="text-xs">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm text-yebatech-lightText">
                          {new Date(student.lastActive).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <Badge className={
                            student.status === 'active' ? 'bg-green-500' : 
                            student.status === 'completed' ? 'bg-blue-500' : 
                            'bg-gray-500'
                          }>
                            {
                              student.status === 'active' ? 'Ativo' : 
                              student.status === 'completed' ? 'Completo' : 
                              'Inativo'
                            }
                          </Badge>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                <p className="text-sm text-yebatech-lightText">Mostrando 5 de {stats.totalStudents} alunos</p>
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <span className="sr-only">Página anterior</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-yebatech-blue text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <span className="sr-only">Próxima página</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Lessons Tab */}
          <TabsContent value="lessons">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold mb-1">Aulas Disponíveis</h2>
                <p className="text-yebatech-lightText text-sm">Gerencie as aulas da plataforma</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Título</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Duração</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Visualizações</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Conclusões</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Taxa</th>
                      <th className="py-3 px-6 text-left text-xs font-medium text-yebatech-lightText uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {lessons.map((lesson) => (
                      <tr key={lesson.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-yebatech-blue/10 rounded-full flex items-center justify-center mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-yebatech-blue"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <span className="font-medium">{lesson.title}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm">
                          {lesson.duration}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm">
                          {lesson.views}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm">
                          {lesson.completions}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <div className="flex items-center">
                            <Progress value={(lesson.completions/lesson.views)*100} className="h-2 w-24 mr-2" />
                            <span className="text-xs">{Math.round((lesson.completions/lesson.views)*100)}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          {/* Add Content Tab */}
          <TabsContent value="content">
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold mb-1">Adicionar Nova Aula</h2>
                <p className="text-yebatech-lightText text-sm">Crie e publique novas aulas para os alunos</p>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmitLesson}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="mb-1 block">Título da Aula</Label>
                      <Input 
                        id="title" 
                        value={newLesson.title}
                        onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                        placeholder="Ex: Introdução à Automação de Clínicas" 
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="videoUrl" className="mb-1 block">URL do Vídeo</Label>
                      <Input 
                        id="videoUrl" 
                        value={newLesson.videoUrl}
                        onChange={(e) => setNewLesson({...newLesson, videoUrl: e.target.value})}
                        placeholder="Ex: https://www.youtube.com/embed/..." 
                        className="w-full"
                        required
                      />
                      <p className="text-xs text-yebatech-lightText mt-1">Cole o link do YouTube ou Vimeo (formato embed)</p>
                    </div>
                    
                    <div>
                      <Label htmlFor="description" className="mb-1 block">Descrição da Aula</Label>
                      <textarea 
                        id="description" 
                        value={newLesson.description}
                        onChange={(e) => setNewLesson({...newLesson, description: e.target.value})}
                        placeholder="Descreva o conteúdo desta aula..." 
                        className="w-full min-h-[120px] flex rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="materials" className="mb-1 block">Materiais Complementares</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload mx-auto text-yebatech-lightText"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                        <p className="mt-2 text-sm text-yebatech-lightText">Arraste e solte arquivos aqui ou</p>
                        <Input 
                          id="materials" 
                          type="file" 
                          multiple
                          onChange={handleFileUpload}
                          className="hidden" 
                        />
                        <Label 
                          htmlFor="materials" 
                          className="mt-2 inline-block cursor-pointer text-yebatech-blue hover:text-yebatech-blue/80"
                        >
                          selecione arquivos
                        </Label>
                        <p className="mt-1 text-xs text-yebatech-lightText">PDF, DOC, XLS, PPT, ZIP até 10MB</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="bg-yebatech-blue hover:bg-yebatech-blue/90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus mr-2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        Publicar Aula
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <div className="bg-white rounded-xl shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold mb-1">Enviar Notificação</h2>
                <p className="text-yebatech-lightText text-sm">Comunique todos os alunos com mensagens importantes</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="notificationTitle" className="mb-1 block">Título da Notificação</Label>
                    <Input 
                      id="notificationTitle" 
                      placeholder="Ex: Nova aula disponível!" 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="notificationMessage" className="mb-1 block">Mensagem</Label>
                    <textarea 
                      id="notificationMessage" 
                      placeholder="Digite sua mensagem para os alunos..." 
                      className="w-full min-h-[120px] flex rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="sendEmail" 
                      className="w-4 h-4 text-yebatech-blue border-gray-300 rounded focus:ring-yebatech-blue" 
                    />
                    <Label htmlFor="sendEmail" className="ml-2">Enviar também por e-mail</Label>
                  </div>
                  
                  <div className="pt-4">
                    <Button onClick={handleSendNotification} className="bg-yebatech-green hover:bg-yebatech-green/90">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell mr-2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                      Enviar Notificação
                    </Button>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <h3 className="font-medium mb-4">Notificações Anteriores</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Nova aula disponível!</h4>
                            <p className="text-sm text-yebatech-lightText">Enviada em 27/11/2023</p>
                          </div>
                          <Badge className="bg-green-500">Enviada</Badge>
                        </div>
                        <p className="mt-2 text-sm">Acabamos de publicar uma nova aula sobre estratégias avançadas de follow-up. Confira agora!</p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Materiais complementares atualizados</h4>
                            <p className="text-sm text-yebatech-lightText">Enviada em 20/11/2023</p>
                          </div>
                          <Badge className="bg-green-500">Enviada</Badge>
                        </div>
                        <p className="mt-2 text-sm">Adicionamos novos templates e planilhas nas aulas 2 e 3. Acesse para baixar!</p>
                      </div>
                    </div>
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
              &copy; {new Date().getFullYear()} YEBATECH. Painel de Administração.
            </p>
            <p className="text-sm text-yebatech-lightText">
              Versão 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
