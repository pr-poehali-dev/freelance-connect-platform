import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

const ServiceDetail = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const service = {
    title: 'Дизайн логотипа для вашего бренда',
    description: 'Создам уникальный, запоминающийся логотип для вашего бизнеса. Работаю в современных стилях: минимализм, леттеринг, абстракция, геометрия. В стоимость входит 3 варианта на выбор, 2 правки и исходники в векторе.',
    category: 'Дизайн',
    rating: 4.9,
    reviews: 127,
    seller: {
      name: 'Анна Иванова',
      level: 'PRO',
      memberSince: '2022',
      completedOrders: 342,
      responseTime: '1 час',
      description: 'Профессиональный графический дизайнер с 8-летним опытом. Специализируюсь на создании фирменного стиля и брендинге. Работала с компаниями из России, Европы и США.'
    },
    packages: [
      {
        id: 'basic',
        name: 'Базовый',
        price: 3500,
        deliveryTime: '5 дней',
        features: ['1 вариант логотипа', '1 правка', 'PNG файлы', 'Базовая концепция']
      },
      {
        id: 'standard',
        name: 'Стандартный',
        price: 5000,
        deliveryTime: '3 дня',
        features: ['3 варианта логотипа', '2 правки', 'PNG + SVG файлы', 'Фирменные цвета', 'Руководство по использованию']
      },
      {
        id: 'premium',
        name: 'Премиум',
        price: 8500,
        deliveryTime: '2 дня',
        features: ['5 вариантов логотипа', 'Неограниченные правки', 'Все форматы (PNG, SVG, AI, PDF)', 'Полный брендбук', '3D мокапы', 'Исходники', 'Поддержка 30 дней']
      }
    ],
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ]
  };

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Михаил Петров',
      rating: 5,
      date: '15 янв 2024',
      text: 'Отличная работа! Анна создала именно то, что я представлял. Логотип получился стильным и современным. Быстро отвечала на сообщения и учла все пожелания. Рекомендую!',
      avatar: 'МП'
    },
    {
      id: 2,
      author: 'Елена Смирнова',
      rating: 5,
      date: '10 янв 2024',
      text: 'Профессиональный подход! Все сделано качественно и в срок. Очень довольна результатом, буду обращаться снова.',
      avatar: 'ЕС'
    },
    {
      id: 3,
      author: 'Дмитрий Козлов',
      rating: 4,
      date: '5 янв 2024',
      text: 'Хороший дизайнер, но немного затянулись сроки из-за правок. В целом результат устраивает.',
      avatar: 'ДК'
    },
    {
      id: 4,
      author: 'Ольга Новикова',
      rating: 5,
      date: '28 дек 2023',
      text: 'Прекрасная работа! Креативный подход и внимание к деталям. Логотип превзошел ожидания!',
      avatar: 'ОН'
    },
    {
      id: 5,
      author: 'Сергей Волков',
      rating: 5,
      date: '20 дек 2023',
      text: 'Рекомендую! Быстро, качественно, профессионально. Анна - настоящий профессионал своего дела.',
      avatar: 'СВ'
    }
  ];

  const selectedPkg = service.packages.find(p => p.id === selectedPackage) || service.packages[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FreelanceHub
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hidden md:flex">Войти</Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images Gallery */}
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Image" size={96} className="text-purple-300" />
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                  {service.category}
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-2 p-2 bg-gray-50">
                {service.images.map((_, idx) => (
                  <div key={idx} className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg cursor-pointer hover:scale-105 transition-transform" />
                ))}
              </div>
            </Card>

            {/* Service Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-lg">{service.rating}</span>
                        <span className="text-gray-600">({service.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="description">Описание</TabsTrigger>
                    <TabsTrigger value="reviews">Отзывы ({service.reviews})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="space-y-6 mt-6">
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-gray-800">О услуге</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-bold text-xl mb-4 text-gray-800">Что входит в работу:</h3>
                      <ul className="space-y-2">
                        {[
                          'Анализ целевой аудитории и конкурентов',
                          'Разработка концепции логотипа',
                          'Создание нескольких вариантов',
                          'Правки по вашим пожеланиям',
                          'Подготовка файлов в разных форматах',
                          'Рекомендации по использованию'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="CheckCircle2" className="text-green-500 mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="space-y-4 mt-6">
                    {reviews.map((review) => (
                      <Card key={review.id} className="border-l-4 border-l-purple-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="ring-2 ring-purple-200">
                              <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                                {review.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <p className="font-semibold text-gray-800">{review.author}</p>
                                  <p className="text-sm text-gray-500">{review.date}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, idx) => (
                                    <Icon
                                      key={idx}
                                      name="Star"
                                      size={16}
                                      className={idx < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 leading-relaxed">{review.text}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <h3 className="font-bold text-2xl text-gray-800">Об исполнителе</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="w-20 h-20 ring-4 ring-purple-200">
                    <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-2xl">
                      {service.seller.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-xl text-gray-800">{service.seller.name}</h4>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {service.seller.level}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{service.seller.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" className="text-purple-500" size={20} />
                        <div>
                          <p className="text-sm text-gray-500">На платформе</p>
                          <p className="font-semibold">{service.seller.memberSince}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-green-500" size={20} />
                        <div>
                          <p className="text-sm text-gray-500">Заказов</p>
                          <p className="font-semibold">{service.seller.completedOrders}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" className="text-blue-500" size={20} />
                        <div>
                          <p className="text-sm text-gray-500">Ответ</p>
                          <p className="font-semibold">{service.seller.responseTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={() => navigate(`/freelancer/${1}`)}>
                  Посмотреть профиль
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Order Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardHeader>
                  <h3 className="font-bold text-xl text-gray-800 mb-4">Выберите пакет</h3>
                  <Tabs value={selectedPackage} onValueChange={setSelectedPackage} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="basic" className="text-xs">Базовый</TabsTrigger>
                      <TabsTrigger value="standard" className="text-xs">Стандарт</TabsTrigger>
                      <TabsTrigger value="premium" className="text-xs">Премиум</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {selectedPkg.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Icon name="Clock" size={16} />
                      <span>Срок: {selectedPkg.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800 mb-3">В пакет входит:</p>
                    {selectedPkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg py-6">
                    Заказать сейчас
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Написать продавцу
                  </Button>

                  <div className="pt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={16} className="text-green-500" />
                      <span>Безопасная сделка</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="RefreshCw" size={16} className="text-blue-500" />
                      <span>Возврат средств при проблемах</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
