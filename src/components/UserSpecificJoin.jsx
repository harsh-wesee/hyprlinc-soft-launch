import influencer from "../images/influencerUpdated.png";
import brand from "../images/brandUpdated.png";
import agency from "../images/agencyUpdated.png";
import { motion } from "framer-motion";

const UserSpecificJoin = () => {
    const cardVariants = {
        hidden: { 
            y: 100, 
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const roles = [
        {
            icon: influencer,
            title: "For Influencer",
            description: "Discover and connect with influencers",
            link: "https://dashboard.hyprlinc.com/creatorsLogin"
        },
        {
            icon: brand,
            title: "For Brand",
            description: "Discover and connect with influencers",
            link: "https://dashboard.hyprlinc.com/brandsLogin"
        },
        {
            icon: agency,
            title: "For Agency",
            description: "Discover and connect with influencers",
            link: "https://dashboard.hyprlinc.com/agencyLogin"
        }
    ];

    return (
        <section
            id="Join as a influencer, brand and agency"
            className="px-4 py-16 md:px-14 md:py-28"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardVariants}
                            whileHover="hover"
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2, // Stagger delay for each card
                                ease: "easeOut"
                            }}
                            className="w-full max-w-xs h-56 rounded-xl bg-white border border-gray-100 hover:border-[#007AFF] shadow-xl py-8 flex flex-col items-center justify-center text-center"
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    src={role.icon}
                                    className="w-12 mb-4"
                                    alt={`${role.title} icon`}
                                />
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    {role.title}
                                </h2>
                                <p className="text-gray-600 mb-6 text-xs">
                                    {role.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => (window.location.href = role.link)}
                                    className="bg-gradient-to-r from-[#153885] to-[#007AFF] text-white rounded-2xl py-1 hover:bg-gray-600 transition text-sm w-32"
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserSpecificJoin;