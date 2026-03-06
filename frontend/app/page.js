import React from "react";
import { ArrowRight, Star, Flame, Clock, Users } from "lucide-react";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

/* Example Data */

const SITE_STATS = [
  { val: "10K+", label: "recipes generated" },
  { val: "5K+", label: "active users" },
  { val: "95%", label: "ingredient match" },
  { val: "2M+", label: "ingredients scanned" },
];

const FEATURES = [
  {
    title: "AI Recipe Generator",
    description: "Upload a fridge photo and instantly get recipes.",
    limit: "FREE",
    icon: Flame,
  },
  {
    title: "Smart Ingredient Scan",
    description: "AI detects ingredients automatically.",
    limit: "PRO",
    icon: Star,
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Snap your fridge",
    desc: "Upload a photo of your fridge or ingredients.",
  },
  {
    step: "02",
    title: "AI scans ingredients",
    desc: "Our AI detects what ingredients you have.",
  },
  {
    step: "03",
    title: "Get recipes instantly",
    desc: "Receive personalized recipe suggestions.",
  },
];

/* Simple UI Components */

function Card({ children, className }) {
  return (
    <div className={`rounded-xl shadow-md border ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

function Badge({ children, className }) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded-md border font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

function PricingSection({ subscriptionTier }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6">Pricing</h2>

      <p className="text-lg text-gray-600 mb-6">
        Your current plan: <b>{subscriptionTier}</b>
      </p>

      <div className="flex justify-center gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-2">Free</h3>
          <p>Basic recipe generation</p>
        </Card>

        <Card className="p-6 border-orange-500">
          <h3 className="text-xl font-bold mb-2">Pro</h3>
          <p>Unlimited AI recipes</p>
        </Card>
      </div>
    </div>
  );
}

/* Main Page */

export default async function LandingPage() {
  const { has } = await auth();

  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">

      {/* HERO SECTION */}

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 text-center md:text-left">

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Turn your{" "}
              <span className="italic underline decoration-orange-600">
                leftovers
              </span>{" "}
              into masterpieces.
            </h1>

            <p className="text-xl text-stone-600 mb-8">
              Snap a photo of your fridge. We'll tell you what to cook.
            </p>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg"
            >
              Get Started <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-12 bg-black text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {SITE_STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold">{stat.val}</div>
              <p className="text-orange-400 text-sm">{stat.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURES */}

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Your Smart Kitchen
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;

              return (
                <Card key={i} className="p-6">

                  <div className="flex justify-between mb-4">
                    <Icon />
                    <Badge>{feature.limit}</Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600">
                    {feature.description}
                  </p>

                </Card>
              );
            })}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-12">
            Cook in 3 Steps
          </h2>

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div key={i} className="mb-10">

              <div className="text-orange-500 text-3xl font-bold">
                {step.step}
              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="text-gray-400">
                {step.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* PRICING */}

      <section className="py-24 px-4">
        <PricingSection subscriptionTier={subscriptionTier} />
      </section>

    </div>
  );
}