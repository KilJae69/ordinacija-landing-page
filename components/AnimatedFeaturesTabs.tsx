"use client";

import type React from "react";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Calendar,
  Users,
  FileText,
  CreditCard,
  Clock,
  Lock,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Smart Scheduling",
    description:
      "Efficiently manage appointments with our intuitive calendar system.",
    image: "/ordinacija-kalendar.png",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Patient Management",
    description:
      "Easily organize and access patient information in one centralized location.",
    image: "/ordinacija-kalendar.png",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Digital Records",
    description:
      "Securely store and manage electronic health records for streamlined care.",
    image: "/ordinacija-kalendar.png",
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "Integrated Billing",
    description:
      "Simplify your financial processes with our integrated billing system.",
    image: "/ordinacija-kalendar.png",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Time-Saving Automation",
    description: "Automate routine tasks to focus more on patient care.",
    image: "/ordinacija-kalendar.png",
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Data Security",
    description:
      "Ensure patient data privacy with our advanced security measures.",
    image: "/ordinacija-kalendar.png",
  },
];

const AnimatedFeaturesTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className=" w-full px-4">
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
        className="flex flex-col md:flex-row"
      >
        <TabList className="flex flex-col space-y-2 md:w-1/3 md:pr-8">
          {features.map((feature, index) => (
            <Tab
              key={index}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors duration-300 focus:outline-none ${
                selectedTab === index
                  ? "bg-primary-accent text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                {feature.icon}
                <span className="ml-3 font-semibold ">{feature.title}</span>
              </m.div>
            </Tab>
          ))}
        </TabList>
        <div className=" mt-8 md:mt-0 md:w-2/3 ">
         
          {features.map((feature, index) => (
            <TabPanel  key={index}>
              <AnimatePresence mode="wait">
                {selectedTab === index && (
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-white via-green-50 to-green-100  rounded-lg shadow-lg  gap-8"
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-4 text-gradient-accent">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {feature.description}
                      </p>
                    </div>
                    <m.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full min-h-[300px] lg:min-h-[500px] "
                    >
                      <Image
                        src={feature.image || "/ordinacija-kalendar.png"}
                        alt={feature.title}
                        fill
                        className="rounded-lg shadow-md  size-full object-cover object-left-top"
                        sizes="(min-width: 1540px) 1003px, (min-width: 1280px) 832px, (min-width: 1120px) 677px, (min-width: 780px) calc(55.94vw + 63px), (min-width: 480px) calc(100vw - 32px), calc(13.13vw + 368px)"
                      />
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default AnimatedFeaturesTab;
