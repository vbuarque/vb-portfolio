import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Capacidade de criar designs de sites, aplicações web com foco na responsividade e experiência do usuário.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Developement",
    description:
      "Capacidade em desenvolver sites e aplicações web seguindo a risca os designs propostos pelo time de desenvolvimento.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development/Design",
    description:
      "Capacidade de criar designs com a melhor e mais atual UI/UX do mercado e desenvolver aplicativos mobile.",
  },
];

const Services = () => {
  return <section className="mb-12 xl:mb-36">
    <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">O que eu faço ?</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
            {servicesData.map((item, index) => {
                return <Card className='w-full max-w-[424px] h-[300px] flex flex-co pt-16 pb-10 justify-center items-center relative' key={index}>
                    <CardHeader className='text-primary absolute -top-[60px]'>
                        <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                    </CardHeader>
                    <CardContent className='text-center'>
                        <CardTitle className='mb-4'>
                            {item.title}
                        </CardTitle>
                        <CardDescription className='text-large'>
                            {item.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            })}
        </div>
    </div>
  </section>;
};

export default Services;
