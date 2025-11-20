import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Order {
  id: string;
  service: string;
  freelancer: string;
  price: number;
  status: 'active' | 'completed' | 'cancelled';
  deadline: string;
  createdAt: string;
  hasNewMessages: boolean;
  progress: number;
}

const Orders = () => {
  const navigate = useNavigate();

  const [orders] = useState<Order[]>([
    {
      id: '12345',
      service: 'Дизайн логотипа для вашего бренда',
      freelancer: 'Анна Иванова',
      price: 8000,
      status: 'active',
      deadline: '25 ноября 2025',
      createdAt: '20 ноября 2025',
      hasNewMessages: true,
      progress: 60
    },
    {
      id: '12344',
      service: 'SEO-оптимизированный текст для сайта',
      freelancer: 'Михаил Петров',
      price: 3000,
      status: 'completed',
      deadline: '18 ноября 2025',
      createdAt: '15 ноября 2025',
      hasNewMessages: false,
      progress: 100
    },
    {
      id: '12343',
      service: 'Настройка рекламы в Яндекс.Директ',
      freelancer: 'Елена Сидорова',
      price: 15000,
      status: 'active',
      deadline: '28 ноября 2025',
      createdAt: '18 ноября 2025',
      hasNewMessages: false,
      progress: 30
    }
  ]);

  const getStatusBadge = (status: Order['status']) => {
    const styles = {
      active: 'bg-blue-100 text-blue-700 border-blue-200',
      completed: 'bg-green-100 text-green-700 border-green-200',
      cancelled: 'bg-red-100 text-red-700 border-red-200'
    };

    const labels = {
      active: 'В работе',
      completed: 'Завершён',
      cancelled: 'Отменён'
    };

    return (
      <Badge className={`${styles[status]} border`}>
        {labels[status]}
      </Badge>
    );
  };

  const filterOrders = (status?: Order['status']) => {
    if (!status) return orders;
    return orders.filter(order => order.status === status);
  };

  const renderOrderCard = (order: Order) => (
    <Card key={order.id} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="w-12 h-12 border-2 border-purple-200">
            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              {order.freelancer.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg mb-1">{order.service}</h3>
                <p className="text-sm text-gray-600">Исполнитель: {order.freelancer}</p>
              </div>
              {getStatusBadge(order.status)}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 text-sm">
              <div>
                <p className="text-gray-500">Заказ №</p>
                <p className="font-semibold">#{order.id}</p>
              </div>
              <div>
                <p className="text-gray-500">Стоимость</p>
                <p className="font-semibold text-purple-600">{order.price.toLocaleString('ru-RU')} ₽</p>
              </div>
              <div>
                <p className="text-gray-500">Создан</p>
                <p className="font-semibold">{order.createdAt}</p>
              </div>
              <div>
                <p className="text-gray-500">Срок сдачи</p>
                <p className="font-semibold">{order.deadline}</p>
              </div>
            </div>

            {order.status === 'active' && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Прогресс выполнения</span>
                  <span className="font-semibold">{order.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                    style={{ width: `${order.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/chat/${order.id}`)}
                className="relative"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Чат
                {order.hasNewMessages && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/service/1`)}
              >
                <Icon name="Eye" size={16} className="mr-2" />
                Детали
              </Button>
              {order.status === 'completed' && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-600 border-purple-200 hover:bg-purple-50"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать файлы
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FreelanceHub
              </span>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Мои заказы
          </h1>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-purple-600 to-pink-600">
            <Icon name="Plus" size={20} className="mr-2" />
            Новый заказ
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 gap-2">
            <TabsTrigger value="all">
              Все ({orders.length})
            </TabsTrigger>
            <TabsTrigger value="active">
              В работе ({filterOrders('active').length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Завершённые ({filterOrders('completed').length})
            </TabsTrigger>
            <TabsTrigger value="cancelled">
              Отменённые ({filterOrders('cancelled').length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {orders.map(renderOrderCard)}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {filterOrders('active').map(renderOrderCard)}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {filterOrders('completed').map(renderOrderCard)}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-4">
            {filterOrders('cancelled').length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="Package" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Нет отменённых заказов</h3>
                <p className="text-gray-500">У вас пока нет отменённых заказов</p>
              </Card>
            ) : (
              filterOrders('cancelled').map(renderOrderCard)
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Orders;
