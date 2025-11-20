import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  sender: 'client' | 'freelancer';
  text: string;
  timestamp: string;
  isRead: boolean;
  attachment?: {
    type: 'image' | 'file';
    name: string;
    url: string;
  };
}

interface ChatInfo {
  orderId: string;
  service: string;
  freelancer: string;
  status: 'active' | 'completed' | 'disputed';
}

const Chat = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [chatInfo] = useState<ChatInfo>({
    orderId: orderId || '12345',
    service: 'Дизайн логотипа для вашего бренда',
    freelancer: 'Анна Иванова',
    status: 'active'
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'freelancer',
      text: 'Здравствуйте! Получила ваш заказ. Давайте обсудим детали проекта.',
      timestamp: '10:30',
      isRead: true
    },
    {
      id: 2,
      sender: 'client',
      text: 'Добрый день! Мне нужен логотип для кофейни "Утро". Хотелось бы что-то минималистичное.',
      timestamp: '10:32',
      isRead: true
    },
    {
      id: 3,
      sender: 'freelancer',
      text: 'Отлично! Какие цвета предпочитаете? Есть ли референсы?',
      timestamp: '10:35',
      isRead: true
    },
    {
      id: 4,
      sender: 'client',
      text: 'Коричневый и бежевый. Вот несколько примеров того, что нравится.',
      timestamp: '10:37',
      isRead: true,
      attachment: {
        type: 'image',
        name: 'references.jpg',
        url: '#'
      }
    },
    {
      id: 5,
      sender: 'freelancer',
      text: 'Понятно! Начну работу сегодня. Первые варианты отправлю завтра к обеду.',
      timestamp: '10:40',
      isRead: true
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: messages.length + 1,
      sender: 'client',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      isRead: false
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/orders')}>
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-purple-200">
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    АИ
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold">{chatInfo.freelancer}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-green-500 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Онлайн
                    </span>
                    <span className="text-xs text-gray-500">• Отвечает в течение часа</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                Заказ #{chatInfo.orderId}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{chatInfo.service}</h3>
                <p className="text-sm text-gray-600">Пакет: Стандарт • Срок: 2 дня • 8 000 ₽</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/service/1`)}
              >
                Подробнее
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="h-[calc(100vh-300px)] flex flex-col">
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[70%] ${message.sender === 'client' ? 'flex-row-reverse' : ''}`}>
                  {message.sender === 'freelancer' && (
                    <Avatar className="w-8 h-8 border-2 border-purple-200">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                        АИ
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'client'
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.attachment && (
                        <div className="mt-2 p-2 bg-white/10 rounded-lg flex items-center gap-2">
                          <Icon
                            name={message.attachment.type === 'image' ? 'Image' : 'FileText'}
                            size={16}
                          />
                          <span className="text-xs">{message.attachment.name}</span>
                        </div>
                      )}
                    </div>
                    <div className={`flex items-center gap-1 mt-1 text-xs text-gray-500 ${message.sender === 'client' ? 'justify-end' : ''}`}>
                      <span>{message.timestamp}</span>
                      {message.sender === 'client' && (
                        <Icon
                          name={message.isRead ? 'CheckCheck' : 'Check'}
                          size={14}
                          className={message.isRead ? 'text-purple-600' : 'text-gray-400'}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
              >
                <Icon name="Paperclip" size={20} />
              </Button>
              <Input
                placeholder="Напишите сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Enter для отправки, Shift+Enter для новой строки
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
