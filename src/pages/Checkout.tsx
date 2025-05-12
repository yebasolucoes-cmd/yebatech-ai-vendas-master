
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: ''
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      // Redirect to thank you page
      navigate('/obrigado');
    }, 2000);
  };
  
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center">
            <h1 className="font-poppins font-bold text-xl md:text-2xl text-gradient">YEBATECH</h1>
          </Link>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Informações Pessoais</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-yebatech-darkText mb-1">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-yebatech-darkText mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-yebatech-darkText mb-1">
                          Telefone/WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Informações de Pagamento</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-yebatech-darkText mb-1">
                          Número do Cartão
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-yebatech-darkText mb-1">
                          Nome no Cartão
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cardExpiry" className="block text-sm font-medium text-yebatech-darkText mb-1">
                            Validade
                          </label>
                          <input
                            type="text"
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            placeholder="MM/AA"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardCVV" className="block text-sm font-medium text-yebatech-darkText mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cardCVV"
                            name="cardCVV"
                            value={formData.cardCVV}
                            onChange={handleChange}
                            placeholder="123"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yebatech-blue focus:border-yebatech-blue"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-yebatech-green hover:bg-yebatech-green/90 text-white py-3 rounded-md font-medium transition-all disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </span>
                      ) : (
                        'FINALIZAR PAGAMENTO'
                      )}
                    </button>
                    
                    <div className="mt-4 flex justify-center items-center space-x-2 text-yebatech-lightText text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                      <span>Pagamento 100% seguro</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6">
                <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                
                <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="bg-yebatech-blue/10 w-16 h-16 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-yebatech-blue"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Aula Magna YEBATECH</h3>
                    <p className="text-yebatech-lightText mb-1">Automatização de Vendas e Agendamentos com IA</p>
                    <span className="text-yebatech-blue font-medium">Acesso Vitalício</span>
                  </div>
                </div>
                
                <div className="space-y-2 pb-6 border-b border-gray-100 mb-6">
                  <div className="flex justify-between">
                    <span className="text-yebatech-lightText">Preço original</span>
                    <span className="text-yebatech-lightText line-through">R$ 297,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yebatech-lightText">Desconto</span>
                    <span className="text-green-600">- R$ 200,00</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-lg font-semibold mb-6">
                  <span>Total</span>
                  <span>R$ 97,00</span>
                </div>
                
                <div className="bg-yebatech-lightGreen p-4 rounded-lg">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-yebatech-green mr-2 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span className="text-sm text-yebatech-darkText">
                      <strong>Garantia de 7 dias</strong> - Se não ficar satisfeito com o conteúdo, devolvemos seu dinheiro.
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold mb-4">Está incluso na sua compra:</h3>
                <ul className="space-y-3">
                  {[
                    "Acesso vitalício à Aula Magna",
                    "Arquivos e templates prontos para implementação",
                    "Guia completo em PDF",
                    "Certificado de participação",
                    "Acesso ao grupo exclusivo de suporte"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-yebatech-green mt-1 mr-2"><polyline points="20 6 9 17 4 12"/></svg>
                      <span className="text-yebatech-darkText">{item}</span>
                    </li>
                  ))}
                </ul>
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

export default Checkout;
