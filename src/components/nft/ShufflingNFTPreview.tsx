import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const nftCollections = [
  {
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800",
    title: "Digital Art",
    category: "Art",
    price: "2.4 ETH",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800",
    title: "Abstract Dreams",
    category: "Abstract",
    price: "1.8 ETH",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    title: "Crypto Punk",
    category: "PFP",
    price: "3.2 ETH",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800",
    title: "Metaverse Land",
    category: "Gaming",
    price: "5.1 ETH",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800",
    title: "3D Sculpture",
    category: "3D Art",
    price: "2.7 ETH",
    color: "from-violet-500/20 to-purple-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    title: "Future City",
    category: "Photography",
    price: "1.5 ETH",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800",
    title: "Cyber Avatar",
    category: "Avatar",
    price: "4.2 ETH",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800",
    title: "Neon Genesis",
    category: "Collectible",
    price: "3.8 ETH",
    color: "from-pink-500/20 to-rose-500/20"
  },
];

export const ShufflingNFTPreview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {nftCollections.map((nft, index) => (
        <Card 
          key={index}
          className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl rounded-xl"
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src={nft.image}
              alt={nft.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${nft.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-sm font-semibold mb-1">Quick View</div>
                <div className="text-xs text-white/80">Click to explore</div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-sm truncate flex-1">{nft.title}</h4>
              <Badge variant="secondary" className="text-xs ml-2">{nft.category}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Floor Price</span>
              <span className="text-sm font-bold text-primary">{nft.price}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
