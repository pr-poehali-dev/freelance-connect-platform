import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

interface Service {
  id: number;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

const FreelancerProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('services');

  const freelancer = {
    name: 'Анна Иванова',
    level: 'PRO',
    avatar: 'АИ',
    rating: 4.9,
    totalReviews: 127,
    completedOrders: 342,
    memberSince: 'Январь 2022',
    responseTime: '1 час',
    description: 'Профессиональный графический дизайнер с 8-летним опытом работы. Специализируюсь на создании фирменного стиля, брендинге и веб-дизайне. Работала с компаниями из России, Европы и США. Помогу воплотить вашу идею в жизнь!',
    skills: [
      { name: 'Adobe Photoshop', level: 95 },
      { name: 'Adobe Illustrator', level: 90 },
      { name: 'Figma', level: 88 },
      { name: 'Брендинг', level: 92 },
      { name: 'UI/UX дизайн', level: 85 },
    ],
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Английский', level: 'B2' },
    ],
    stats: {
      onTime: 98,
      repeatClients: 75,
      satisfaction: 96,
    }
  };

  const portfolio: PortfolioItem[] = [
    { id: 1, title: 'Логотип для IT-стартапа', image: '/placeholder.svg', category: 'Логотип' },
    { id: 2, title: 'Фирменный стиль кафе', image: '/placeholder.svg', category: 'Брендинг' },
    { id: 3, title: 'Дизайн мобильного приложения', image: '/placeholder.svg', category: 'UI/UX' },
    { id: 4, title: 'Упаковка косметики', image: '/placeholder.svg', category: 'Упаковка' },
    { id: 5, title: 'Иллюстрации для книги', image: '/placeholder.svg', category: 'Иллюстрация' },
    { id: 6, title: 'Веб-дизайн корпоративного сайта', image: '/placeholder.svg', category: 'Веб-дизайн' },
  ];

  const services: Service[] = [
    { id: 1, title: 'Дизайн логотипа для вашего бренда', price: 5000, rating: 4.9, reviews: 127 },
    { id: 2, title: 'Фирменный стиль под ключ', price: 15000, rating: 5.0, reviews: 45 },
    { id: 3, title: 'Дизайн визитной карточки', price: 2000, rating: 4.8, reviews: 89 },
    { id: 4, title: 'Разработка айдентики бренда', price: 25000, rating: 4.9, reviews: 32 },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Михаил Петров',
      rating: 5,
      date: '15 янв 2024',
      text: 'Отличная работа! Анна создала именно то, что я представлял. Логотип получился стильным и современным.',
      service: 'Дизайн логотипа'
    },
    {
      id: 2,
      author: 'Елена Смирнова',
      rating: 5,
      date: '10 янв 2024',
      text: 'Профессиональный подход! Все сделано качественно и в срок. Очень довольна результатом.',
      service: 'Фирменный стиль'
    },
    {
      id: 3,
      author: 'Дмитрий Козлов',
      rating: 4,
      date: '5 янв 2024',
      text: 'Хороший дизайнер, но немного затянулись сроки из-за правок. В целом результат устраивает.',
      service: 'Дизайн логотипа'
    },
  ];

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
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          <CardContent className="relative pt-0 pb-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-16 md:-mt-12">
              <Avatar className="w-32 h-32 ring-4 ring-white shadow-xl">
                <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white text-4xl">
                  {freelancer.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 pt-16 md:pt-0">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-800">{freelancer.name}</h1>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-3 py-1">
                      {freelancer.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={24} />
                    <span className="font-bold text-xl">{freelancer.rating}</span>
                    <span className="text-gray-600">({freelancer.totalReviews} отзывов)</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 max-w-3xl">{freelancer.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-green-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Заказов</p>
                      <p className="font-bold text-gray-800">{freelancer.completedOrders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-purple-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">На платформе</p>
                      <p className="font-bold text-gray-800">{freelancer.memberSince}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="text-blue-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Время ответа</p>
                      <p className="font-bold text-gray-800">{freelancer.responseTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-orange-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Повторные клиенты</p>
                      <p className="font-bold text-gray-800">{freelancer.stats.repeatClients}%</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Написать сообщение
                  </Button>
                  <Button variant="outline">
                    <Icon name="Heart" size={20} className="mr-2" />
                    В избранное
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="services">Услуги</TabsTrigger>
                <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>

              <TabsContent value="services" className="space-y-4">
                <div className="grid gap-4">
                  {services.map((service) => (
                    <Card key={service.id} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer" onClick={() => navigate('/service/1')}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold">{service.rating}</span>
                                <span className="text-gray-400 text-sm">({service.reviews})</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600 mb-1">от</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                              {service.price.toLocaleString('ru-RU')} ₽
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolio.map((item) => (
                    <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Image" size={64} className="text-purple-300" />
                        </div>
                        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                          {item.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="border-l-4 border-l-purple-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="ring-2 ring-purple-200">
                          <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                            {review.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-semibold text-gray-800">{review.author}</p>
                              <p className="text-sm text-gray-500">{review.date} • {review.service}</p>
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
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Stats Card */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold text-xl text-gray-800">Статистика</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Сдача в срок</span>
                      <span className="font-bold text-gray-800">{freelancer.stats.onTime}%</span>
                    </div>
                    <Progress value={freelancer.stats.onTime} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Повторные клиенты</span>
                      <span className="font-bold text-gray-800">{freelancer.stats.repeatClients}%</span>
                    </div>
                    <Progress value={freelancer.stats.repeatClients} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Удовлетворенность</span>
                      <span className="font-bold text-gray-800">{freelancer.stats.satisfaction}%</span>
                    </div>
                    <Progress value={freelancer.stats.satisfaction} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold text-xl text-gray-800">Навыки</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {freelancer.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">{skill.name}</span>
                        <span className="font-bold text-gray-800">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card>
                <CardHeader>
                  <h3 className="font-bold text-xl text-gray-800">Языки</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {freelancer.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Globe" className="text-purple-500" size={20} />
                        <span className="text-gray-700">{lang.name}</span>
                      </div>
                      <Badge variant="secondary">{lang.level}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
