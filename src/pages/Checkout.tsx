import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [agreed, setAgreed] = useState(false);

  const total = 12100;

  const handlePayment = () => {
    if (!agreed) {
      alert('Примите условия для продолжения');
      return;
    }
    alert('Оплата прошла успешно! Заказ оформлен.');
    navigate('/orders');
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
            <Button variant="ghost" onClick={() => navigate('/cart')}>
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад в корзину
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Оформление заказа
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} />
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Имя *</Label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label>Фамилия *</Label>
                    <Input placeholder="Ваша фамилия" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input type="email" placeholder="example@mail.com" />
                </div>
                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={24} />
                  Способ оплаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Icon name="CreditCard" size={20} />
                      <div>
                        <div className="font-semibold">Банковская карта</div>
                        <div className="text-xs text-gray-500">Visa, MasterCard, МИР</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="yandex" id="yandex" />
                    <Label htmlFor="yandex" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Icon name="Wallet" size={20} />
                      <div>
                        <div className="font-semibold">ЮMoney</div>
                        <div className="text-xs text-gray-500">Электронный кошелёк</div>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="sbp" id="sbp" />
                    <Label htmlFor="sbp" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Icon name="Smartphone" size={20} />
                      <div>
                        <div className="font-semibold">СБП</div>
                        <div className="text-xs text-gray-500">Система быстрых платежей</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label>Номер карты *</Label>
                      <Input placeholder="0000 0000 0000 0000" maxLength={19} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Срок действия *</Label>
                        <Input placeholder="MM/YY" maxLength={5} />
                      </div>
                      <div className="space-y-2">
                        <Label>CVV *</Label>
                        <Input placeholder="123" maxLength={3} type="password" />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
              <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                Я согласен с{' '}
                <a href="#" className="text-purple-600 hover:underline">
                  условиями использования
                </a>{' '}
                и{' '}
                <a href="#" className="text-purple-600 hover:underline">
                  политикой конфиденциальности
                </a>
              </label>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 pb-4 border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Услуги (2)</span>
                    <span className="font-semibold">11 000 ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Сервисный сбор</span>
                    <span className="font-semibold">550 ₽</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Скидка FIRST10</span>
                    <span className="font-semibold">-1 100 ₽</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold">
                  <span>Итого к оплате</span>
                  <span className="text-purple-600">{total.toLocaleString('ru-RU')} ₽</span>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  size="lg"
                  onClick={handlePayment}
                  disabled={!agreed}
                >
                  Оплатить {total.toLocaleString('ru-RU')} ₽
                </Button>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Icon name="Shield" size={16} className="text-green-500" />
                    <span>Защита покупателя: возврат средств в течение 14 дней</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Icon name="Lock" size={16} className="text-green-500" />
                    <span>Безопасная оплата через защищённое соединение</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Icon name="Clock" size={16} className="text-green-500" />
                    <span>Средства передаются продавцу после выполнения работы</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
