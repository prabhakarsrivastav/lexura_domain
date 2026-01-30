import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import heroAIValuation3D from "@/assets/hero-ai-valuation-3d.jpg";
import heroEscrow3D from "@/assets/hero-escrow-3d.jpg";
import heroFeatured3D from "@/assets/hero-featured-3d.jpg";
import heroFlipping3D from "@/assets/hero-flipping-3d.jpg";

// Custom icons for badges
import sparkleIcon from "@/assets/icons/sparkle-icon.png";
import securityIcon from "@/assets/icons/security-icon.png";
import revenueForecastIcon from "@/assets/icons/revenue-forecast.png";
import lightningIcon from "@/assets/icons/lightning-icon.png";

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2, key }: { value: string; duration?: number; key?: string | number }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Reset animation flag when value changes
    setHasAnimated(false);

    // Extract numeric value from string (e.g., "99.2%" -> 99.2, "5,000+" -> 5000, "2M+" -> 2)
    const numericMatch = value.match(/[\d,]+\.?\d*/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numericStr = numericMatch[0].replace(/,/g, '');
    let target = parseFloat(numericStr);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    // Small delay to trigger animation after component mounts
    const timer = setTimeout(() => {
      let currentValue = 0;
      const increment = target / (duration * 60); // 60 fps
      const hasDecimal = value.includes('.');
      const hasComma = value.includes(',');
      const hasPercent = value.includes('%');
      const hasPlus = value.includes('+');
      const hasM = value.includes('M');
      const hasETH = value.toLowerCase().includes('eth');

      const updateCounter = () => {
        currentValue += increment;

        if (currentValue >= target) {
          currentValue = target;
          setHasAnimated(true);
        }

        // Format the value
        let formatted = hasDecimal ? currentValue.toFixed(1) : Math.round(currentValue).toString();

        // Add commas
        if (hasComma) {
          formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        // Add suffixes
        if (hasM) formatted += 'M';
        if (hasPlus) formatted += '+';
        if (hasETH) formatted += ' ETH';
        if (hasPercent) formatted += '%';

        setDisplayValue(formatted);

        if (currentValue < target) {
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    }, 100);

    return () => clearTimeout(timer);
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

export const HomeHero = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Manual autoplay settings
  const AUTOPLAY_DELAY = 7000; // 8s (faster)
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Manual autoplay: advance when not hovered
  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (autoplayTimer.current) window.clearInterval(autoplayTimer.current);
      autoplayTimer.current = window.setInterval(() => {
        try {
          api.scrollNext();
        } catch (e) {
          // ignore if API not ready
        }
      }, AUTOPLAY_DELAY) as unknown as number;
    };

    const stopAutoplay = () => {
      if (autoplayTimer.current) {
        window.clearInterval(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    };

    if (!isHovered) startAutoplay();
    else stopAutoplay();

    return () => stopAutoplay();
  }, [api, isHovered]);

  const slides = [
    {
      badge: { icon: sparkleIcon, text: "AI-Powered", color: "bg-warning/10 text-warning" },
      title: "AI Domain Valuation",
      subtitle: "Get instant, accurate valuations powered by advanced machine learning algorithms",
      image: heroAIValuation3D,
      primaryCTA: { text: "Try AI Tools", onClick: () => navigate("/ai-name-generator") },
      secondaryCTA: { text: "View Demo", onClick: () => navigate("/ai-name-generator") },
      stats: [
        { value: "99.2%", label: "Accuracy Rate" },
        { value: "Instant", label: "Results" }
      ],
      gradient: "from-warning/5 via-background to-primary/5"
    },
    {
      badge: { icon: securityIcon, text: "100% Protected", color: "bg-success/10 text-success" },
      title: "Escrow Safety Guaranteed",
      subtitle: "Every transaction protected by smart contract escrow. Your funds stay secure until transfer completes.",
      image: heroEscrow3D,
      primaryCTA: { text: "Safe Trading", onClick: () => navigate("/domains?tab=web3") },
      secondaryCTA: { text: "How It Works", onClick: () => navigate("/consultancy") },
      stats: [
        { value: "0", label: "Fraud Cases" },
        { value: "100%", label: "Secured" }
      ],
      gradient: "from-success/5 via-background to-primary/5"
    },
    {
      badge: { icon: revenueForecastIcon, text: "Hot Deals", color: "bg-accent/10 text-accent" },
      title: "Featured Premium Domains",
      subtitle: "Hand-picked, high-value domains verified and ready for immediate transfer",
      image: heroFeatured3D,
      primaryCTA: { text: "Browse Featured", onClick: () => navigate("/domains?tab=web3") },
      secondaryCTA: { text: "All Domains", onClick: () => navigate("/domains?tab=web3") },
      stats: [
        { value: "500+", label: "Premium Domains" },
        { value: "Daily", label: "New Listings" }
      ],
      gradient: "from-accent/5 via-background to-success/5"
    },
    {
      badge: { icon: lightningIcon, text: "Start Now", color: "bg-primary/10 text-primary" },
      title: "Start Flipping Domains",
      subtitle: "Search, buy, and flip premium domains for profit. Your Web3 business starts here.",
      image: heroFlipping3D,
      primaryCTA: { text: "Get Started", onClick: () => navigate("/domains?tab=web3") },
      secondaryCTA: { text: "Learn How", onClick: () => navigate("/consultancy") },
      stats: [
        { value: "2M+ ETH", label: "Profit Generated" },
        { value: "5,000+", label: "Successful Flips" }
      ],
      gradient: "from-primary/5 via-background to-accent/5"
    }
  ];

  return (
    <section className="relative overflow-hidden w-full h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Grid Overlay from AI Outreach page */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <div
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="w-full h-full"
        >
          <CarouselContent className="h-screen bg-white">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <div className="relative overflow-hidden h-full w-full flex items-center justify-center">
                  <div className="container relative mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                      {/* Left Column - Content */}
                      <div className="space-y-4 md:space-y-6 z-10">
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          viewport={{ once: false, amount: 0.8 }}
                        >
                          <Badge className={`${slide.badge.color} px-4 py-2 text-sm font-semibold inline-flex items-center w-fit`}>
                            <img src={slide.badge.icon} alt="" className="w-4 h-4 mr-2 object-contain" />
                            {slide.badge.text}
                          </Badge>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: false, amount: 0.8 }}
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                          className="text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-xl"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: false, amount: 0.8 }}
                        >
                          {slide.subtitle}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                          className="flex flex-col sm:flex-row gap-3 pt-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: false, amount: 0.8 }}
                        >
                          <Button
                            size="lg"
                            className="h-12 md:h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                            onClick={slide.primaryCTA.onClick}
                          >
                            {slide.primaryCTA.text}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="h-12 md:h-14 px-8 text-base font-semibold rounded-md"
                            onClick={slide.secondaryCTA.onClick}
                          >
                            {slide.secondaryCTA.text}
                          </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                          className="grid grid-cols-2 gap-4 md:gap-6 pt-4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          viewport={{ once: false, amount: 0.8 }}
                        >
                          <div className="space-y-1">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                              <AnimatedCounter value={slide.stats[0].value} duration={2} />
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground">{slide.stats[0].label}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                              <AnimatedCounter value={slide.stats[1].value} duration={2} />
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground">{slide.stats[1].label}</div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Right Column - Image */}
                      <motion.div
                        className="hidden lg:flex relative items-center justify-center"
                        initial={{ opacity: 0, x: 50, scale: 0.95, rotateY: -15 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          rotateY: 0,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3,
                          type: "spring",
                          stiffness: 80,
                          damping: 20
                        }}
                        viewport={{ once: false, amount: 0.8 }}
                      >
                        <motion.div
                          className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 w-full aspect-[4/3] max-h-[500px]"
                          animate={{
                            y: [0, -8, 0],
                            rotateZ: [0, 0.5, 0, -0.5, 0],
                          }}
                          transition={{
                            y: {
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            },
                            rotateZ: {
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          whileHover={{
                            scale: 1.02,
                            rotateZ: 0,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <motion.img
                            src={slide.image}
                            alt={`${slide.title} - Premium Web3 domains marketplace`}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{
                              duration: 1.2,
                              ease: [0.43, 0.13, 0.23, 0.96]
                            }}
                            whileHover={{
                              scale: 1.08,
                              transition: {
                                duration: 0.6,
                                ease: "easeOut"
                              }
                            }}
                          />
                          {/* Animated overlay gradient */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"
                            initial={{ opacity: 0.7 }}
                            animate={{ opacity: [0.7, 0.5, 0.7] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />

                          {/* Subtle light reflection effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                            animate={{
                              opacity: [0, 0.3, 0],
                              x: [-100, 100]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Fixed at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-4 z-20">
            <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background" />

            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${current === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <CarouselNext className="relative right-0 translate-x-0 translate-y-0 h-12 w-12 bg-background/80 backdrop-blur-sm hover:bg-background" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
