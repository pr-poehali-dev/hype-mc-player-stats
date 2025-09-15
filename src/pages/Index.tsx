import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const mockPlayers = [
  { id: 1, name: "ShadowWarrior", wins: 2847, kills: 8943, winRate: 89, avatar: "/placeholder.svg" },
  { id: 2, name: "DiamondCrusher", wins: 2634, kills: 8211, winRate: 87, avatar: "/placeholder.svg" },
  { id: 3, name: "NetherKing", wins: 2456, kills: 7889, winRate: 85, avatar: "/placeholder.svg" },
  { id: 4, name: "EnderSlayer", wins: 2234, kills: 7456, winRate: 83, avatar: "/placeholder.svg" },
  { id: 5, name: "CreeperHunter", wins: 2123, kills: 7234, winRate: 81, avatar: "/placeholder.svg" },
  { id: 6, name: "BlockMaster", wins: 1987, kills: 6876, winRate: 79, avatar: "/placeholder.svg" },
  { id: 7, name: "PvPLegend", wins: 1834, kills: 6543, winRate: 77, avatar: "/placeholder.svg" },
  { id: 8, name: "RedstoneWiz", wins: 1723, kills: 6234, winRate: 75, avatar: "/placeholder.svg" },
  { id: 9, name: "CraftMaster", wins: 1645, kills: 5987, winRate: 73, avatar: "/placeholder.svg" },
  { id: 10, name: "PixelWarrior", wins: 1567, kills: 5734, winRate: 71, avatar: "/placeholder.svg" },
];

const mockGuilds = [
  { id: 1, name: "DragonSlayers", members: 45, rating: 9850, color: "neon-green" },
  { id: 2, name: "SkyWarriors", members: 38, rating: 9234, color: "accent-orange" },
  { id: 3, name: "VoidCrusaders", members: 42, rating: 8876, color: "blue-400" },
  { id: 4, name: "NetherLords", members: 35, rating: 8543, color: "purple-400" },
  { id: 5, name: "DiamondElite", members: 29, rating: 8234, color: "cyan-400" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background dark transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-deep-blue via-midnight-blue to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-accent-orange/10 animate-pulse"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/img/c0c8eddc-bf9b-4281-99c6-ec8bb305b160.jpg" 
              alt="HypeMC Logo" 
              className="h-24 w-24 rounded-lg shadow-2xl border-2 border-neon-green/20"
            />
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-green to-accent-orange bg-clip-text text-transparent mb-6">
            HYPEMC STATS
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Отслеживай свою статистику BedWars и сражайся за топ рейтинга на лучшем сервере Minecraft
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-3xl font-orbitron font-bold text-neon-green">15,847</div>
              <div className="text-sm text-muted-foreground">Активных игроков</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-3xl font-orbitron font-bold text-accent-orange">2,456</div>
              <div className="text-sm text-muted-foreground">Игр сегодня</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
              <div className="text-3xl font-orbitron font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Top Players Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Trophy" className="h-8 w-8 text-neon-green" />
            <h2 className="font-orbitron text-3xl font-bold">Топ-10 игроков BedWars</h2>
          </div>
          
          <div className="grid gap-4">
            {mockPlayers.map((player, index) => (
              <Card key={player.id} className="hover:shadow-xl transition-all duration-300 hover:border-neon-green/30 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`
                        text-2xl font-orbitron font-bold w-12 h-12 rounded-full flex items-center justify-center
                        ${index === 0 ? 'bg-yellow-500 text-black' : ''}
                        ${index === 1 ? 'bg-gray-400 text-black' : ''}
                        ${index === 2 ? 'bg-amber-600 text-white' : ''}
                        ${index > 2 ? 'bg-card border border-border text-foreground' : ''}
                      `}>
                        {index + 1}
                      </div>
                      <Avatar className="h-12 w-12 border-2 border-neon-green/20">
                        <AvatarImage src={player.avatar} alt={player.name} />
                        <AvatarFallback className="bg-gradient-to-br from-neon-green to-accent-orange text-black font-bold">
                          {player.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-orbitron font-semibold text-lg group-hover:text-neon-green transition-colors">
                          {player.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Award" size={16} />
                            {player.wins.toLocaleString()} побед
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Sword" size={16} />
                            {player.kills.toLocaleString()} убийств
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-auto flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">Винрейт</div>
                        <Progress value={player.winRate} className="w-24" />
                      </div>
                      <Badge variant="secondary" className="bg-neon-green/10 text-neon-green border-neon-green/20">
                        {player.winRate}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guilds Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Shield" className="h-8 w-8 text-accent-orange" />
            <h2 className="font-orbitron text-3xl font-bold">Топ гильдии</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGuilds.map((guild, index) => (
              <Card key={guild.id} className="hover:shadow-xl transition-all duration-300 hover:border-accent-orange/30 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron text-xl group-hover:text-accent-orange transition-colors">
                      {guild.name}
                    </CardTitle>
                    <div className={`
                      text-lg font-orbitron font-bold w-8 h-8 rounded-full flex items-center justify-center text-xs
                      ${index === 0 ? 'bg-yellow-500 text-black' : ''}
                      ${index === 1 ? 'bg-gray-400 text-black' : ''}
                      ${index === 2 ? 'bg-amber-600 text-white' : ''}
                      ${index > 2 ? 'bg-card border border-border text-foreground' : ''}
                    `}>
                      {index + 1}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Users" size={16} />
                        Участников
                      </span>
                      <span className="font-semibold">{guild.members}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Star" size={16} />
                        Рейтинг
                      </span>
                      <Badge className="bg-gradient-to-r from-accent-orange to-neon-green text-black font-bold">
                        {guild.rating.toLocaleString()}
                      </Badge>
                    </div>
                    <div className="pt-2">
                      <Progress value={(guild.rating / 10000) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Game Stats Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Gamepad2" className="h-8 w-8 text-blue-400" />
            <h2 className="font-orbitron text-3xl font-bold">Статистика сервера</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" className="h-12 w-12 mx-auto mb-4 text-neon-green" />
                <div className="text-3xl font-orbitron font-bold text-neon-green mb-2">
                  147,892
                </div>
                <div className="text-muted-foreground">Всего игр</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Target" className="h-12 w-12 mx-auto mb-4 text-accent-orange" />
                <div className="text-3xl font-orbitron font-bold text-accent-orange mb-2">
                  892,134
                </div>
                <div className="text-muted-foreground">Всего убийств</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-orbitron font-bold text-blue-400 mb-2">
                  4.2m
                </div>
                <div className="text-muted-foreground">Время в игре</div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Icon name="Trophy" className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                <div className="text-3xl font-orbitron font-bold text-purple-400 mb-2">
                  28,456
                </div>
                <div className="text-muted-foreground">Побед в BedWars</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}