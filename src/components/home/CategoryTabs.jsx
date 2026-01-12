import {
  Home,
  Bath,
  Sofa,
  BedDouble,
  Umbrella,
} from "lucide-react";

const tabs = [
  { name: "Kitchen", icon: Home },
  { name: "Bathroom", icon: Bath },
  { name: "Living Room", icon: Sofa },
  { name: "Bedroom", icon: BedDouble },
  { name: "Outdoor", icon: Umbrella },
];

export default function CategoryTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 mb-10">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.name;

        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className="flex flex-col items-center gap-2 focus:outline-none"
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center border transition-all
                ${
                  isActive
                    ? "bg-yellow-400 border-yellow-400 shadow-md"
                    : "bg-white border-gray-300"
                }`}
            >
              <Icon
                className={`w-8 h-8 ${
                  isActive ? "text-black" : "text-gray-600"
                }`}
              />
            </div>

            <span className="text-sm font-medium">
              {tab.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
