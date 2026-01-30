import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  collection: string;
  isVideo?: boolean;
  creator?: string;
}

export const NFTCard = ({ id, name, image, price, collection, isVideo, creator }: NFTCardProps) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden card-hover cursor-pointer transition-all duration-300 hover:scale-[1.02]"
      onClick={() => navigate(`/nft/${id}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        {isVideo ? (
          <video 
            src={image} 
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart className={`h-4 w-4 ${liked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
        </button>
        {isVideo && (
          <Badge variant="secondary" className="absolute top-3 left-3">
            <Zap className="w-3 h-3 mr-1" />
            Video
          </Badge>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{collection}</span>
          </div>
          <h3 className="font-semibold text-foreground line-clamp-1">{name}</h3>
          {creator && (
            <p className="text-xs text-muted-foreground">by {creator}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="text-lg font-bold text-foreground">{price} ETH</p>
          </div>
          <Button 
            size="sm" 
            className="btn-gradient"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/nft/${id}`);
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};
