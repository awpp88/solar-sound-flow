import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music2 } from "lucide-react";

const artists = [
  {
    name: "Luna Nova",
    monthlyListeners: "2.4M",
    spotifyUrl: "https://open.spotify.com/artist/example1",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
  },
  {
    name: "Cosmic Ray",
    monthlyListeners: "1.8M",
    spotifyUrl: "https://open.spotify.com/artist/example2",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop"
  },
  {
    name: "Solar Flare",
    monthlyListeners: "3.2M",
    spotifyUrl: "https://open.spotify.com/artist/example3",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"
  },
  {
    name: "Nebula Dreams",
    monthlyListeners: "1.5M",
    spotifyUrl: "https://open.spotify.com/artist/example4",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop"
  },
  {
    name: "Stardust Collective",
    monthlyListeners: "2.1M",
    spotifyUrl: "https://open.spotify.com/artist/example5",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop"
  },
  {
    name: "Eclipse Beats",
    monthlyListeners: "1.9M",
    spotifyUrl: "https://open.spotify.com/artist/example6",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop"
  }
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gradient-solar">Our Artists</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the cosmic talents shaping the future of sound. Independent energy in every beat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {artists.map((artist, index) => (
              <Card 
                key={artist.name}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:glow-solar transition-smooth hover:scale-105 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 relative -mt-20">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {artist.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Monthly Listeners</p>
                        <p className="text-xl font-bold text-primary">{artist.monthlyListeners}</p>
                      </div>
                      
                      <a 
                        href={artist.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full transition-smooth group/spotify"
                        aria-label={`Listen to ${artist.name} on Spotify`}
                      >
                        <Music2 className="h-6 w-6 text-primary transition-smooth group-hover/spotify:scale-110" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Artists;
