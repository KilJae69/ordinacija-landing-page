import {
//  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ClipboardList, Calendar, Clock, CloudUpload } from "lucide-react";
import LottieComponent from "./shared/LottieComponent";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";

export default function FeatureCards() {
  const features = [
    {
      title: "Upravljanje pacijentima 🏥",
      description:
        "Sigurno upravljajte i pristupajte podacima pacijenata pomoću intuitivnog i jednostavnog digitalnog sistema.",
      icon: ClipboardList,
      iconColor: "text-blue-600",
      gradient: "from-blue-50 to-blue-100",
      conicGradient:
        "conic-gradient(rgba(59, 130, 246, 0.4) 0deg, rgba(96, 165, 250, 0.4) 60deg, transparent 100deg)",
      shape:
        "after:content-[''] after:absolute after:right-4 after:top-4 after:w-24 after:h-24 after:bg-blue-100/50 after:rounded-full after:-z-10 after:blur-xl",
      lottie: "/animations/patients.json",
      shapeSrc:"/hospital-bg-shape.svg"
    },
    {
      title: "Interaktivni kalendar 📅",
      description:
        "Efikasno organizujte termine i upravljajte rasporedom vaše klinike u stvarnom vremenu.",
      icon: Calendar,
      iconColor: "text-green-600",
      gradient: "from-green-50 to-green-100",
      conicGradient:
        "conic-gradient(rgba(34, 197, 94, 0.4) 0deg, rgba(74, 222, 128, 0.4) 60deg, transparent 100deg)",
      shape:
        "after:content-[''] after:absolute after:right-8 after:top-8 after:w-20 after:h-20 after:bg-green-100/50 after:rotate-45 after:-z-10 after:blur-xl",
      lottie: "/animations/calendar.json",
      shapeSrc:"/stopwatch-bg-shape.svg"
    },
    {
      title: "Historija posjeta ⏳",
      description:
        "Pratite i analizirajte historiju pregleda pacijenata kroz individualni pregled za svakog pacijenta.",
      icon: Clock,
      iconColor: "text-purple-600",
      gradient: "from-purple-50 to-purple-100",
      conicGradient:
        "conic-gradient(rgba(168, 85, 247, 0.4) 0deg, rgba(192, 132, 252, 0.4) 60deg, transparent 100deg)",
      shape:
        "after:content-[''] after:absolute after:right-6 after:top-6 after:w-24 after:h-16 after:bg-purple-100/50 after:rounded-lg after:-z-10 after:blur-xl after:-rotate-12",
        lottie: "/animations/history.json",
    shapeSrc:"/report-bg-shape.svg"
    },
    {
      title: "Sigurno čuvanje podataka 🔐",
      description:
        "Svi podaci vaše klinike su sigurno pohranjeni u oblaku i mogu se lako oporaviti u slučaju gubitka ili oštećenja.",
      icon: CloudUpload,
      iconColor: "text-orange-600",
      gradient: "from-orange-50 to-orange-100",
      conicGradient:
        "conic-gradient(rgba(249, 115, 22, 0.4) 0deg, rgba(251, 146, 60, 0.4) 60deg, transparent 100deg)",
      shape:
        "after:content-[''] after:absolute after:right-4 after:top-4 after:w-20 after:h-20 after:bg-orange-100/50 after:rounded-full after:-z-10 after:blur-xl after:scale-y-75",
        lottie: "/animations/cloud.json",
        shapeSrc:"/medical-sign-bg-shape.svg"
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-12">
        <FadeInStagger>

        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
        {features.map((feature, index) => (
        
                
          <FadeIn
            key={index}
            className={`relative card-wrapper p-[3px] shadow-xl bg-white -z-10 overflow-hidden max-w-[500px] mx-auto w-full bg-gradient-to-br ${feature.gradient} ${feature.shape}`}
            style={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ["--conic-gradient" as any]: feature.conicGradient, // Fix TypeScript error
            }}
            >
            <div
              className={`bg-gradient-to-br size-full z-10 relative rounded-2xl ${feature.gradient} `}
              >
              <Image
                src={feature.shapeSrc}
                className="absolute -z-10 opacity-10 -right-8 -top-4 -rotate-[25deg]"
                alt="shape"
                width={150}
                height={150}
                />
              <CardHeader className="relative z-10">
                <div className="h-12 w-12  rounded-full bg-white shadow-sm p-2.5 mb-4">
                  <feature.icon
                    className={`w-full h-full  ${feature.iconColor}`}
                    />
                </div>
                <CardTitle
                  className={`text-xl font-semibold ${feature.iconColor}`}
                  >
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-md">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* <DynamicLottieComponent path="/animations/hero-lottie.json" /> */}
                <div className={`h-[200px] relative ${index === 1   && "scale-[1.2] md:scale-100 md:translate-y-10 lg:translate-y-0"} ${index === 2   && "scale-[1.4] md:translate-y-10 lg:translate-y-0"}`}>
                  <LottieComponent path={feature.lottie || ""} />
                </div>
              </CardContent>
            </div>
          </FadeIn>
                   
        ))}
      </div>
      </FadeInStagger>
    </div>
  );
}
