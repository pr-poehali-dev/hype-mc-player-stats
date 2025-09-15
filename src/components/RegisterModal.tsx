import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface RegisterModalProps {
  children: React.ReactNode;
}

export default function RegisterModal({ children }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    telegram: "",
    vk: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOpen, setIsOpen] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Валидация никнейма
    if (!formData.username.trim()) {
      newErrors.username = "Никнейм обязателен";
    } else if (formData.username.length < 3) {
      newErrors.username = "Никнейм должен содержать минимум 3 символа";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = "Никнейм может содержать только буквы, цифры и подчеркивание";
    }

    // Валидация пароля
    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    // Подтверждение пароля
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    // Валидация Telegram (опционально)
    if (formData.telegram && !/^@[a-zA-Z0-9_]{5,}$/.test(formData.telegram)) {
      newErrors.telegram = "Telegram должен начинаться с @ и содержать минимум 5 символов";
    }

    // Валидация VK (опционально)
    if (formData.vk && !/^(https:\/\/)?(vk\.com\/)[a-zA-Z0-9_]+$/.test(formData.vk)) {
      newErrors.vk = "Введите корректную ссылку на профиль VK";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет отправка данных на сервер
      console.log("Данные для регистрации:", formData);
      
      // Показываем успешное сообщение
      alert("Регистрация успешна! Функция подключения к серверу скоро будет доступна.");
      
      // Сбрасываем форму и закрываем модальное окно
      setFormData({
        username: "",
        password: "",
        confirmPassword: "",
        telegram: "",
        vk: ""
      });
      setIsOpen(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Убираем ошибку при вводе
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border border-border/20 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="font-orbitron text-2xl text-center bg-gradient-to-r from-neon-green to-accent-orange bg-clip-text text-transparent">
            Регистрация на HypeMC
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Основные данные */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                Никнейм <span className="text-red-400">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  placeholder="Введите никнейм"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className={`pl-10 ${errors.username ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                />
                <Icon name="User" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.username && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.username}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Пароль <span className="text-red-400">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`pl-10 ${errors.password ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                />
                <Icon name="Lock" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.password && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Подтвердите пароль <span className="text-red-400">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Повторите пароль"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className={`pl-10 ${errors.confirmPassword ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                />
                <Icon name="Lock" className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Привязка соцсетей */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Link" className="h-4 w-4 text-muted-foreground" />
              <Label className="text-sm font-medium">Привязка соцсетей (опционально)</Label>
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="telegram" className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="Send" className="h-4 w-4" />
                  Telegram
                  <Badge variant="secondary" className="text-xs">Опционально</Badge>
                </Label>
                <Input
                  id="telegram"
                  type="text"
                  placeholder="@username"
                  value={formData.telegram}
                  onChange={(e) => handleInputChange("telegram", e.target.value)}
                  className={errors.telegram ? 'border-red-400 focus-visible:ring-red-400' : ''}
                />
                {errors.telegram && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <Icon name="AlertCircle" size={14} />
                    {errors.telegram}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="vk" className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="ExternalLink" className="h-4 w-4" />
                  VK
                  <Badge variant="secondary" className="text-xs">Опционально</Badge>
                </Label>
                <Input
                  id="vk"
                  type="text"
                  placeholder="vk.com/username"
                  value={formData.vk}
                  onChange={(e) => handleInputChange("vk", e.target.value)}
                  className={errors.vk ? 'border-red-400 focus-visible:ring-red-400' : ''}
                />
                {errors.vk && (
                  <p className="text-sm text-red-400 flex items-center gap-1">
                    <Icon name="AlertCircle" size={14} />
                    {errors.vk}
                  </p>
                )}
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Кнопки */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setIsOpen(false)}
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-neon-green to-accent-orange hover:from-neon-green/90 hover:to-accent-orange/90 text-black font-semibold"
            >
              <Icon name="UserPlus" className="mr-2 h-4 w-4" />
              Зарегистрироваться
            </Button>
          </div>

          {/* Информация */}
          <div className="text-xs text-muted-foreground text-center bg-muted/20 rounded-lg p-3">
            <Icon name="Info" className="inline mr-1 h-3 w-3" />
            Регистрация пока работает только на фронтенде. Подключение к серверу скоро!
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}