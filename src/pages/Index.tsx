import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  seller: {
    name: string;
    level: string;
  };
  deliveryTime: string;
}

const categories = [
  { name: 'Дизайн', icon: 'Palette', color: 'from-purple-500 to-pink-500' },
  { name: 'Тексты', icon: 'FileText', color: 'from-blue-500 to-cyan-500' },
  { name: 'Маркетинг', icon: 'TrendingUp', color: 'from-orange-500 to-red-500' },
  { name: 'Программирование', icon: 'Code', color: 'from-green-500 to-emerald-500' },
  { name: 'Реклама', icon: 'Megaphone', color: 'from-yellow-500 to-orange-500' },
  { name: 'Переводы', icon: 'Languages', color: 'from-indigo-500 to-purple-500' },
];

const mockServices: Service[] = [
  {
    id: 1,
    title: 'Дизайн логотипа для вашего бренда',
    description: 'Создам уникальный логотип с 3 вариантами на выбор',
    price: 5000,
    rating: 4.9,
    reviews: 127,
    category: 'Дизайн',
    seller: { name: 'Анна Иванова', level: 'PRO' },
    deliveryTime: '3 дня'
  },
  {
    id: 2,
    title: 'SEO-оптимизированный текст для сайта',
    description: 'Напишу продающий текст до 5000 знаков',
    price: 3000,
    rating: 5.0,
    reviews: 89,
    category: 'Тексты',
    seller: { name: 'Дмитрий Петров', level: 'TOP' },
    deliveryTime: '2 дня'
  },
  {
    id: 3,
    title: 'Настройка таргетированной рекламы',
    description: 'Настрою рекламу в VK и Яндекс.Директ',
    price: 7500,
    rating: 4.8,
    reviews: 54,
    category: 'Реклама',
    seller: { name: 'Елена Смирнова', level: 'PRO' },
    deliveryTime: '1 день'
  },
  {
    id: 4,
    title: 'Разработка landing page на React',
    description: 'Создам современный лендинг с адаптивным дизайном',
    price: 15000,
    rating: 4.9,
    reviews: 42,
    category: 'Программирование',
    seller: { name: 'Максим Кузнецов', level: 'TOP' },
    deliveryTime: '5 дней'
  },
  {
    id: 5,
    title: 'SMM-продвижение в социальных сетях',
    description: 'Месяц ведения аккаунта с контент-планом',
    price: 12000,
    rating: 4.7,
    reviews: 76,
    category: 'Маркетинг',
    seller: { name: 'София Волкова', level: 'PRO' },
    deliveryTime: '30 дней'
  },
  {
    id: 6,
    title: 'Перевод с английского на русский',
    description: 'Качественный перевод текста до 10000 знаков',
    price: 2500,
    rating: 5.0,
    reviews: 112,
    category: 'Переводы',
    seller: { name: 'Ольга Новикова', level: 'TOP' },
    deliveryTime: '1 день'
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FreelanceHub
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Услуги</a>
              <a href="#freelancers" className="text-gray-700 hover:text-purple-600 transition-colors">Фрилансеры</a>
              <a href="#how" className="text-gray-700 hover:text-purple-600 transition-colors">Как работает</a>
              <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors">Блог</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="hidden md:flex">Войти</Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight animate-fade-in">
            Найди профессионалов для любой задачи
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Тысячи фрилансеров готовы помочь с дизайном, текстами, программированием и маркетингом
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12 animate-scale-in">
            <div className="flex gap-2 p-2 bg-white rounded-2xl shadow-xl border border-purple-100">
              <Input
                type="text"
                placeholder="Что вам нужно сделать?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 text-lg"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8">
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {categories.map((category, idx) => (
              <Card
                key={category.name}
                className="cursor-pointer hover:scale-105 transition-transform duration-300 border-2 hover:border-purple-300 group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} className="text-white" size={28} />
                  </div>
                  <p className="font-semibold text-gray-800">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {selectedCategory === 'Все' ? 'Популярные услуги' : selectedCategory}
            </h2>
            {selectedCategory !== 'Все' && (
              <Button variant="ghost" onClick={() => setSelectedCategory('Все')}>
                Показать все
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden border-2 border-transparent hover:border-purple-200">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                  <div className="w-full h-full flex items-center justify-center">
                    <Icon name="Image" size={64} className="text-purple-300" />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                    {service.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="ring-2 ring-purple-200">
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                        {service.seller.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{service.seller.name}</p>
                      <Badge variant="secondary" className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        {service.seller.level}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2">
                    {service.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} className="text-purple-500" />
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="text-sm text-gray-600">от</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {service.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Почему выбирают нас?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Shield', title: 'Безопасные сделки', desc: 'Гарантия возврата средств и защита от мошенничества' },
              { icon: 'MessageSquare', title: 'Удобный чат', desc: 'Общайтесь с исполнителями прямо на платформе' },
              { icon: 'Award', title: 'Проверенные профи', desc: 'Система рейтингов и реальные отзывы клиентов' },
              { icon: 'Zap', title: 'Быстрый старт', desc: 'Начните работу за 5 минут, подходит новичкам' },
            ].map((feature, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 border-0 overflow-hidden relative">
            <CardContent className="relative z-10 text-center py-16 px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам довольных клиентов и фрилансеров уже сегодня
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                  Найти исполнителя
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                  Стать фрилансером
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">FreelanceHub</span>
              </div>
              <p className="text-gray-400">Платформа для фриланса нового поколения</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Тексты</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Программирование</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 FreelanceHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
