"use client";

import { useLang } from "../context/LangContext";
import { t } from "../data/ui";

interface SocialDynamicsProps {
  dynamics: {
    inGroups: string;
    oneOnOne: string;
    asAudience: string;
  };
  categoryColor: string;
}

export default function SocialDynamics({ dynamics, categoryColor }: SocialDynamicsProps) {
  const { lang } = useLang();

  const cards = [
    {
      key: "inGroups",
      icon: "👥",
      title: t("typeDetailInGroups", lang),
      content: dynamics.inGroups,
      gradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100"
    },
    {
      key: "oneOnOne",
      icon: "💬",
      title: t("typeDetailOneOnOne", lang),
      content: dynamics.oneOnOne,
      gradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100"
    },
    {
      key: "asAudience",
      icon: "👀",
      title: t("typeDetailAsAudience", lang),
      content: dynamics.asAudience,
      gradient: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100"
    }
  ];

  return (
    <section className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-6 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🎭</span>
        {t("typeDetailSocialDynamics", lang)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.key}
            className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-4 border ${card.borderColor}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-8 h-8 rounded-full ${card.iconBg} flex items-center justify-center text-lg`}>
                {card.icon}
              </span>
              <h3 className="font-semibold text-gray-800">{card.title}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed break-keep">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
