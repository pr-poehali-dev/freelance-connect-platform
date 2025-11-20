import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  serviceId: number;
  title: string;
  package: 'basic' | 'standard' | 'premium';
  packageName: string;
  price: number;
  deliveryTime: string;
  seller: string;
  features: string[];
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      serviceId: 1,
      title: 'Дизайн логотипа для вашего бренда',
      package: 'standard',
      packageName: 'Стандарт',
      price: 8000,
      deliveryTime: '2 дня',
      seller: 'Анна Иванова',
      features: ['2 концепции', '5 правок', 'Исходники']
    },
    {
      id: 2,
      serviceId: 2,
      title: 'SEO-оптимизированный текст для сайта',
      package: 'basic',
      packageName: 'Базовый',
      price: 3000,
      deliveryTime: '2 дня',
      seller: 'Михаил Петров',
      features: ['До 5000 знаков', '2 правки']
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const serviceFee = Math.round(subtotal * 0.05);
  const total = subtotal + serviceFee - discount;

  const applyPromo = () => {
    if (promoCode === 'FIRST10') {
      setDiscount(Math.round(subtotal * 0.1));
    }
  };

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
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Корзина
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <Card className="p-12 text-center">
                <Icon name="ShoppingCart" size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Корзина пуста</h3>
                <p className="text-gray-500 mb-4">Добавьте услуги для оформления заказа</p>
                <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-purple-600 to-pink-600">
                  Смотреть услуги
                </Button>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 
                              className="font-semibold text-lg mb-1 cursor-pointer hover:text-purple-600"
                              onClick={() => navigate(`/service/${item.serviceId}`)}
                            >
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">от {item.seller}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Icon name="Trash2" size={18} />
                          </Button>
                        </div>

                        <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">
                          Пакет: {item.packageName}
                        </Badge>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-sm text-gray-600">
                              <Icon name="Check" size={16} className="text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Icon name="Clock" size={16} />
                            <span>Срок: {item.deliveryTime}</span>
                          </div>
                          <div className="text-2xl font-bold text-purple-600">
                            {item.price.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Услуги ({cartItems.length})</span>
                      <span className="font-semibold">{subtotal.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Сервисный сбор (5%)</span>
                      <span className="font-semibold">{serviceFee.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Скидка</span>
                        <span className="font-semibold">-{discount.toLocaleString('ru-RU')} ₽</span>
                      </div>
                    )}
                    <div className="border-t pt-2 flex justify-between text-lg font-bold">
                      <span>Всего</span>
                      <span className="text-purple-600">{total.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Промокод</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Введите промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button onClick={applyPromo} variant="outline">
                        Применить
                      </Button>
                    </div>
                    {promoCode && discount > 0 && (
                      <p className="text-xs text-green-600">✓ Промокод применен!</p>
                    )}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    size="lg"
                    onClick={() => navigate('/checkout')}
                  >
                    Перейти к оплате
                  </Button>

                  <div className="text-xs text-gray-500 text-center space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="Shield" size={14} />
                      <span>Безопасная оплата</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Icon name="RefreshCw" size={14} />
                      <span>Возврат средств в течение 14 дней</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
