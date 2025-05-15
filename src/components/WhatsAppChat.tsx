
import React from 'react';
import { MessageCircle, Send } from "lucide-react";

const WhatsAppChat: React.FC = () => {
  const messages = [
    { 
      sender: 'bot', 
      content: 'Olá! Seja bem-vinda à Clínica Hialo Restruturações do Dr. Ariel Camargo. Como posso ajudar hoje?', 
      time: '14:23'
    },
    { 
      sender: 'user', 
      content: 'Olá! Gostaria de saber mais sobre tratamentos para afinar o rosto.', 
      time: '14:24' 
    },
    { 
      sender: 'bot', 
      content: 'Claro, Aurora! O Dr. Ariel Camargo é especialista em harmonização facial e oferece diversos procedimentos para definição do contorno facial. Você já conhece algum procedimento específico ou gostaria de informações gerais?', 
      time: '14:24' 
    },
    { 
      sender: 'user', 
      content: 'Quero saber quais procedimentos são recomendados para o meu caso. Tenho o rosto um pouco redondo e gostaria de definir mais.', 
      time: '14:26' 
    },
    { 
      sender: 'bot', 
      content: 'Para definição do contorno facial, o Dr. Ariel geralmente recomenda uma combinação de procedimentos:\n\n1. Aplicação de toxina botulínica no masseter (músculo da mandíbula)\n2. Preenchimento com ácido hialurônico no mento (queixo)\n3. Bioestimuladores de colágeno\n\nGostaria de agendar uma avaliação com o Dr. Ariel?', 
      time: '14:27' 
    },
    { 
      sender: 'user', 
      content: 'Sim! Quanto custa a consulta de avaliação?', 
      time: '14:28' 
    },
    { 
      sender: 'bot', 
      content: 'Ótimo! A consulta de avaliação tem o valor de R$ 150,00, mas este valor é totalmente revertido caso você realize algum dos procedimentos dentro de 30 dias. Temos horários disponíveis na próxima semana. Qual seria o melhor dia para você?', 
      time: '14:29' 
    }
  ];

  return (
    <div className="bg-[#F0F2F5] rounded-xl overflow-hidden shadow-xl max-w-sm w-full">
      {/* WhatsApp header */}
      <div className="bg-[#128C7E] text-white p-3 flex items-center">
        <div className="bg-white/20 p-1.5 rounded-full mr-3">
          <MessageCircle size={18} />
        </div>
        <div>
          <p className="font-medium text-sm">Hialo Restruturações</p>
          <p className="text-xs text-white/80">Dr. Ariel Camargo</p>
        </div>
      </div>
      
      {/* Chat background */}
      <div 
        className="p-3 h-[420px] overflow-y-auto bg-[#E5DDD5] bg-opacity-90"
        style={{
          backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk4RDdGODY0RTY4MTFFREEyQkNCMzYzN0Q5OEI4ODMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk4RDdGODc0RTY4MTFFREEyQkNCMzYzN0Q5OEI4ODMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOThEN0Y4NDRFNjgxMUVEQTJCQ0IzNjM3RDk4Qjg4MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOThEN0Y4NTRFNjgxMUVEQTJCQ0IzNjM3RDk4Qjg4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvaydBYAAACSSURBVHjaYvz//z8DFsAEpa0xhOGKTDWYiMgCWSAOyAqMRNsP1MFEmAPHzoLYTDAeCsANY2JgpBDAt59gZgL0YNiP7mViBRgpYTTaBzAMyG4/AwFfET2a4QoYydHPRJgbKA6G0WgfwDAgizcYKfA1E7mmAYvUqPdHgw3iBuJygkGHdnB2gYKRiWoFHTAFNLKiw+hoDQgwABJhcZnk53JMAAAAAElFTkSuQmCC')"
        }}
      >
        <div className="space-y-3">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-2.5 rounded-lg relative shadow-sm ${
                  message.sender === 'user' 
                    ? 'bg-[#DCF8C6] rounded-tr-none' 
                    : 'bg-white rounded-tl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <span className="text-[10px] text-gray-500 block text-right mt-1">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Message input */}
      <div className="bg-[#F0F2F5] p-2.5 flex items-center">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          className="flex-1 bg-white text-sm border-0 rounded-full px-4 py-2 focus:ring-1 focus:ring-[#128C7E] focus:outline-none"
        />
        <button className="ml-2 bg-[#128C7E] text-white rounded-full p-2">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;
