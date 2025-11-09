import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Recommendation {
  id: number;
  title: string;
  category: string;
  match: number;
  image: string;
  description: string;
  tags: string[];
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('recommendations');
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const userProfile = {
    name: 'Александр Иванов',
    email: 'alex@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    interests: ['Технологии', 'Музыка', 'Путешествия', 'Фотография', 'Спорт'],
    activityScore: 85,
  };

  const recommendations: Recommendation[] = [
    {
      id: 1,
      title: 'Современная архитектура',
      category: 'Фотография',
      match: 95,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400',
      description: 'Коллекция потрясающих архитектурных фотографий',
      tags: ['архитектура', 'дизайн', 'город'],
    },
    {
      id: 2,
      title: 'Электронная музыка 2024',
      category: 'Музыка',
      match: 88,
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
      description: 'Лучшие треки электронной музыки этого года',
      tags: ['электроника', 'техно', 'диджей'],
    },
    {
      id: 3,
      title: 'Горные маршруты',
      category: 'Путешествия',
      match: 92,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      description: 'Невероятные походы в горы для опытных путешественников',
      tags: ['горы', 'треккинг', 'приключения'],
    },
    {
      id: 4,
      title: 'Тренды в технологиях',
      category: 'Технологии',
      match: 90,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
      description: 'Последние новости из мира искусственного интеллекта',
      tags: ['AI', 'инновации', 'будущее'],
    },
    {
      id: 5,
      title: 'Фитнес для начинающих',
      category: 'Спорт',
      match: 78,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
      description: 'Простые упражнения для старта активного образа жизни',
      tags: ['фитнес', 'здоровье', 'тренировки'],
    },
    {
      id: 6,
      title: 'Уличная фотография',
      category: 'Фотография',
      match: 85,
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400',
      description: 'Искусство запечатления моментов городской жизни',
      tags: ['стрит', 'репортаж', 'люди'],
    },
  ];

  const statsData = [
    { category: 'Фотография', value: 35, color: 'from-purple-500 to-pink-500' },
    { category: 'Музыка', value: 25, color: 'from-blue-500 to-purple-500' },
    { category: 'Путешествия', value: 20, color: 'from-cyan-500 to-blue-500' },
    { category: 'Технологии', value: 15, color: 'from-orange-500 to-red-500' },
    { category: 'Спорт', value: 5, color: 'from-green-500 to-emerald-500' },
  ];

  const handleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold gradient-text mb-2">RecoMind</h1>
          <p className="text-muted-foreground text-lg">
            Персонализированные рекомендации на основе ваших предпочтений
          </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-card">
            <TabsTrigger value="profile" className="data-[state=active]:gradient-purple">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="data-[state=active]:gradient-purple">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Рекомендации
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:gradient-purple">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Статистика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 animate-slide-up">
            <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20 ring-4 ring-primary/30">
                    <AvatarImage src={userProfile.avatar} />
                    <AvatarFallback>АИ</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{userProfile.name}</CardTitle>
                    <CardDescription className="text-base">{userProfile.email}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Активность</span>
                    <span className="text-sm font-bold gradient-text">{userProfile.activityScore}%</span>
                  </div>
                  <Progress value={userProfile.activityScore} className="h-3" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Ваши интересы</h3>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="px-4 py-2 text-sm gradient-purple border-0 hover:scale-105 transition-transform"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full gradient-purple text-white hover:opacity-90 transition-opacity">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настроить предпочтения
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Недавняя активность
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Просмотрено 15 рекомендаций', 'Добавлено 3 новых интереса', 'Оценено 8 материалов'].map(
                  (activity, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Icon name="CheckCircle2" size={16} className="text-primary" />
                      <span className="text-sm">{activity}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((rec, index) => (
                <Card
                  key={rec.id}
                  className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="gradient-purple border-0 text-white font-bold">
                        {rec.match}% совпадение
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-black/50 text-white border-0">
                        {rec.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{rec.title}</CardTitle>
                    <CardDescription>{rec.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {rec.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={likedItems.includes(rec.id) ? 'default' : 'outline'}
                        className={`flex-1 ${
                          likedItems.includes(rec.id)
                            ? 'gradient-purple text-white'
                            : 'hover:gradient-purple hover:text-white'
                        }`}
                        onClick={() => handleLike(rec.id)}
                      >
                        <Icon
                          name={likedItems.includes(rec.id) ? 'Heart' : 'Heart'}
                          size={16}
                          className="mr-2"
                        />
                        {likedItems.includes(rec.id) ? 'Нравится' : 'Оценить'}
                      </Button>
                      <Button variant="outline" size="icon" className="hover:gradient-blue-purple hover:text-white">
                        <Icon name="Share2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" size={20} />
                    Распределение интересов
                  </CardTitle>
                  <CardDescription>Процентное соотношение ваших предпочтений</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {statsData.map((stat) => (
                    <div key={stat.category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{stat.category}</span>
                        <span className="text-sm font-bold gradient-text">{stat.value}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-500`}
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={20} />
                    Статистика за неделю
                  </CardTitle>
                  <CardDescription>Ваша активность за последние 7 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Просмотров', value: '142', icon: 'Eye' },
                      { label: 'Оценок', value: '38', icon: 'Heart' },
                      { label: 'Сохранений', value: '24', icon: 'Bookmark' },
                      { label: 'Репостов', value: '12', icon: 'Share2' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="p-4 bg-gradient-to-br from-card to-muted/30 rounded-lg text-center space-y-2"
                      >
                        <Icon name={stat.icon as any} size={24} className="mx-auto text-primary" />
                        <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Динамика активности
                  </CardTitle>
                  <CardDescription>График вашей активности по дням</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between gap-2 h-64">
                    {[65, 72, 45, 88, 92, 78, 95].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex items-end justify-center h-full">
                          <div
                            className="w-full bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg hover:scale-105 transition-transform cursor-pointer"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
