
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import { useToast } from '@/components/ui/use-toast';

const ThankYou = () => {
  const { toast } = useToast();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show success toast
    toast({
      title: "Pagamento confirmado!",
      description: "Sua compra foi processada com sucesso.",
      duration: 5000,
    });
    
    // Simulate redirection to WhatsApp
    const timer = setTimeout(() => {
      window.open('https://wa.me/5511987654321?text=Olá!%20Acabei%20de%20me%20inscrever%20na%20Aula%20Magna.%20Gostaria%20de%20receber%20mais%20informações.', '_blank');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container-custom py-8">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center">
            <h1 className="font-poppins font-bold text-xl md:text-2xl text-gradient">YEBATECH</h1>
          </Link>
        </div>
        
        <div className="max-w-2xl mx-auto flex-grow">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-yebatech-green/20 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-yebatech-green"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Obrigado pela sua compra!</h1>
            
            <p className="text-yebatech-lightText mb-8">
              Seu pagamento foi processado com sucesso. Enviamos um email com instruções de acesso para <strong>seu-email@example.com</strong>.
            </p>
            
            <div className="bg-yebatech-lightGreen p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4">Próximos passos:</h3>
              <ol className="space-y-3 text-left">
                <li className="flex items-start">
                  <div className="bg-yebatech-green text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-sm">1</span>
                  </div>
                  <span>Verifique seu email para obter suas credenciais de acesso à Área de Membros.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yebatech-green text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-sm">2</span>
                  </div>
                  <span>Você será redirecionado para nosso WhatsApp em alguns segundos para receber suporte adicional.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yebatech-green text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-sm">3</span>
                  </div>
                  <span>Acesse a Área de Membros abaixo para assistir à Aula Magna e baixar os materiais complementares.</span>
                </li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <CTAButton 
                text="ACESSAR ÁREA DE MEMBROS" 
                link="/area-membros"
                variant="secondary" 
                fullWidth
              />
              
              <div className="inline-block">
                <Link to="/" className="text-yebatech-blue hover:text-yebatech-blue/80 inline-flex items-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left mr-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                  Voltar para o início
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 py-6 mt-12 border-t border-gray-200">
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

export default ThankYou;
