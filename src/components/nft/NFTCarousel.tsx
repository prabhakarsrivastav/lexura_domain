import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FeaturedNFT {
  id: string;
  name: string;
  image: string;
  price: number;
  collection: string;
  isFeatured?: boolean;
}

interface NFTCarouselProps {
  nfts: FeaturedNFT[];
}

export const NFTCarousel = ({ nfts }: NFTCarouselProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary fill-primary" />
          <h2 className="text-2xl font-bold gradient-text">Featured NFTs</h2>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {nfts.map((nft) => (
            <CarouselItem key={nft.id} className="md:basis-1/2 lg:basis-1/3">
              <div 
                className="glass-card rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                onClick={() => navigate(`/nft/${nft.id}`)}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-full object-cover"
                  />
                  {nft.isFeatured && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{nft.collection}</p>
                    <h3 className="text-xl font-bold text-foreground">{nft.name}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Current Price</p>
                      <p className="text-2xl font-bold text-foreground">{nft.price} ETH</p>
                    </div>
                    <Button className="btn-gradient">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};
