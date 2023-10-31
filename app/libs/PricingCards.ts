interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 49,
        title: "Insightful Pro",
        benefits: [
            "Predictive lead scoring",
            "Automated content creation",
            "Personalized messaging at scale",
            "Customer retention tools",
        ],
        id: 1,
        oneliner: "AI-powered sales tools for focused revenue growth"
    },
    {
        price: 99,
        title: "Insightful Enterprise",
        benefits: [
            "Everything In Pro Tier, and:",
            "Data-driven recommendations",
            "Customizable sales workflows",
            "Real-time alerts and notifications",
        ],
        id: 2,
        oneliner: "Comprehensive sales optimization for accelerated revenue gains"
    },
]

export default pricingCards