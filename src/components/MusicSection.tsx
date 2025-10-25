import { Card, CardContent } from "@/components/ui/card";

const MusicSection = () => {
  return (
    <section id="music" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-solar">Our Sound</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the energy. Listen to our latest releases and discover the cosmic soundscape we're creating.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Spotify Embed Example */}
          <Card className="overflow-hidden group hover:glow-solar transition-smooth animate-fade-in-scale">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          {/* YouTube Embed Example */}
          <Card className="overflow-hidden group hover:glow-cosmic transition-smooth animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <iframe
                  width="100%"
                  height="352"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "12px" }}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
