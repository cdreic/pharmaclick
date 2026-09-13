// ==========================================================================
// 1. GLOBAL INITIALIZATION & SMOOTH SCROLLING
// ==========================================================================

document.documentElement.style.scrollBehavior = "smooth";

document.addEventListener("DOMContentLoaded", () => {
    const subMenus = document.querySelectorAll('.nav-links a');
    subMenus.forEach(menuItem => {
        const checkWord = menuItem.textContent.trim().toLowerCase();
        if (checkWord === 'services') menuItem.setAttribute('href', '#services');
        if (checkWord === 'about') menuItem.setAttribute('href', '#about');
    });
});

// ==========================================================================
// 2. MEDICINE DATABASE & CATEGORY STATE MANAGEMENT
// ==========================================================================

const medicineDatabase = {
    "advil": {
        id: "advil",
        name: "Advil",
        price: 9.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr18uwZ8RXPBU8kiNTOXaYjlLK7xCq0CH_uw8Tq9hEYA&s=10",
        description: "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and relieve mild-to-moderate pain, inflammation, or swelling."
    },
    "biogesic": {
        id: "biogesic",
        name: "Biogesic (Paracetamol 500mg)",
        price: 4.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10",
        description: "Relieves fever, headache, and body aches associated with colds and flu."
    },
    "centrum advance": {
        id: "centrum advance",
        name: "Centrum Advance",
        price: 18.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10",
        description: "Daily multivitamin supplement formulated to help support immune system, energy levels, and overall health."
    },
    "dilzem": {
        id: "dilzem",
        name: "Dilzem",
        price: 24.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALMUsY-Y80EnAwnMcc9-4iVoSNyq2nqIStic2iYRWlg&s=10",
        description: "Used to treat high blood pressure and prevent chest pain (angina) by relaxing blood vessels."
    },
    "excedrin": {
        id: "excedrin",
        name: "Excedrin",
        price: 12.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbri2UvlZT-POfXPa7e1qvo0Y-Ff4bztSSLaa480tWCA&s",
        description: "Pain reliever formulated for effective relief from severe headaches, migraines, and minor aches."
    },
    "enervon-c": {
        id: "enervon-c",
        name: "Enervon-C (Multivitamins + Vitamin C)",
        price: 7.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10",
        description: "Daily multivitamin with Vitamin B-complex and Vitamin C to boost energy and immunity."
    },
    "conzace": {
        id: "conzace",
        name: "Conzace (Multivitamins + Minerals)",
        price: 14.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10",
        description: "High-potency formulation of Zinc, Vitamin A, C, and E for skin health and immune defense."
    },
    "immunpro": {
        id: "immunpro",
        name: "ImmunPro (Sodium Ascorbate + Zinc)",
        price: 8.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10",
        description: "Non-acidic Vitamin C combined with Zinc using ZincPlus technology for absorption."
    },
    "centrum complete": {
        id: "centrum complete",
        name: "Centrum Complete",
        price: 12.00,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10",
        description: "Comprehensive multivitamin and mineral supplement supporting overall vital organs and vitality."
    },
    "ascorbic acid": {
        id: "ascorbic acid",
        name: "Ascorbic Acid (Generic 500mg Vitamin C)",
        price: 2.50,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10",
        description: "Basic Vitamin C supplement used to treat and prevent Vitamin C deficiency."
    }
};

const categoryMedicines = {
    "cold & flu": [
        {
            id: "biogesic",
            name: "Biogesic (Paracetamol 500mg)",
            price: 4.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10",
            description: "Relieves fever, headache, and body aches associated with colds and flu."
        },
        {
            id: "neozep forte",
            name: "Neozep Forte",
            price: 6.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWY_FqpOTiMnhHEtBjENuJuerXaLLrsTk7oUWiU7a7ag&s=10",
            description: "Formulated to relieve nasal congestion, runny nose, sneezing, and fever."
        },
        {
            id: "decolgen forte",
            name: "Decolgen Forte",
            price: 6.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24JojEbi-3UP-dIozzWe9yavrXibIhjouaCZ6BtgXfQ&s=10",
            description: "Treats clogged nose, post-nasal drip, headache, and fever from upper respiratory tract infections."
        },
        {
            id: "bioflu",
            name: "Bioflu",
            price: 8.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtBYEKgpmLCemcDUuT4aqJHFZzGirno3IkqFA1U2Reg&s",
            description: "Multi-symptom relief for fever, body aches, clogged nose, and cough from colds."
        },
        {
            id: "solmux",
            name: "Solmux (Carbocisteine 500mg)",
            price: 12.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGRiZKK5WQVqRu3EyXjHB7reiT7IEX3zVZIpKFxMh-A&s=10",
            description: "A mucolytic that thins and loosens thick phlegm in respiratory tract infections."
        },
        {
            id: "robitussin dm",
            name: "Robitussin DM",
            price: 160.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vbuPGQU8rRPDQvcXuOh0Z0_HPn3boDOXq27ppv9_vA&s=10",
            description: "Cough syrup that suppresses dry coughs while loosening bronchial secretions."
        },
        {
            id: "strepsils",
            name: "Strepsils (Honey & Lemon)",
            price: 75.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrj6qDW0gDUoSBSYcyIcngq65E9vmygrX_X25asl7xbQ&s=10",
            description: "Medicated lozenges that soothe sore throat pain and minor mouth irritation."
        },
        {
            id: "vicks vaporub",
            name: "Vicks Vaporub",
            price: 70.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEH1JeNWI9WwEHvvmbJNkBlHU_WnL9eEwvmfiHNo5rxg&s=10",
            description: "Topical ointment that provides vapors to clear chest congestion and ease coughing."
        },
        {
            id: "kremil-s cold",
            name: "Kremil-S Cold",
            price: 7.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwP7OVw4sp2XLIbgUJJD7P95IXqnXitbOBn-faut6ng&s=10",
            description: "Decongestant and pain reliever combination for sinus symptoms and body aches."
        },
        {
            id: "fluimucil",
            name: "Fluimucil (Acetylcysteine 600mg)",
            price: 42.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyQJLh0vIkjgVsyoCNPbdVDEa3E6jANRh2_UbjoXcdw&s",
            description: "Dissolves thick mucus and phlegm associated with severe respiratory congestion."
        }
    ],
    "pain relief": [
        {
            id: "ibuprofen-generic",
            name: "Ibuprofen (Generic 200mg/400mg)",
            price: 5.25,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRGjomCnRDiXAIJIUhAi73J9TXCEr0MP0BCo5iAPshw&s",
            description: "A non-steroidal anti-inflammatory drug (NSAID) for toothache, cramps, and muscular pain."
        },
        {
            id: "mefenamic-acid-generic",
            name: "Mefenamic Acid (Generic 500mg)",
            price: 6.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5Yn8BKbTk2tmU8pC3g9gdHpjBrycd7d8xy6jpzJ4BQ&s=10",
            description: "Frequently used for acute pain such as dental pain, post-surgical pain, and dysmenorrhea."
        },
        {
            id: "medicol-advance",
            name: "Medicol Advance (Ibuprofen 200mg Liquid Gel)",
            price: 8.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozJauFZn4sg0vYBZvT_kD8PDfSz2i5YfuX_vZ4mTmpQ&s=10",
            description: "Fast-absorbing liquid gel formulation for quick relief from severe headaches and body aches."
        },
        {
            id: "alaxan-fr",
            name: "Alaxan FR (Ibuprofen + Paracetamol)",
            price: 9.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYTDqAq9DtAursH4nF_dcwT8rmk0KFh91RykL9TeNWA&s=10",
            description: "Combines an anti-inflammatory and pain reliever for fast relief from joint and muscle pain."
        },
        {
            id: "salonpas-medicated-patch",
            name: "Salonpas Medicated Patch",
            price: 40.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJVbvc3tb9hx6pORgDUoYXwLCY8zfRJ4AdMMYjRyIVA&s=10",
            description: "External analgesic patch applied to skin to relieve mild to moderate muscle strains and arthritis."
        },
        {
            id: "efficascent-oil",
            name: "Efficascent Oil (Extra Strength)",
            price: 45.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHRDym5zhrzLuK-BESu3vCIR5aTL1MKYbdc3lIHeUIw&s=10",
            description: "Counter-irritant liniment applied topically for back pain, muscle cramps, and joint stiffening."
        },
        {
            id: "naproxen-sodium-flanax",
            name: "Naproxen Sodium (Flanax 275mg)",
            price: 18.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--NiACj-XsOAPJtJbpdAN6CyyyjU6vI1qSAOtTJRskg&s=10",
            description: "Long-lasting NSAID effective for tendonitis, gout flare-ups, and severe joint inflammation."
        },
        {
            id: "dolfenal",
            name: "Dolfenal (Mefenamic Acid 500mg)",
            price: 22.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QIEqqG0Cw6qWQvzTbvUgyE2Gdgy8Dqfeq956b0OSDA&s=10",
            description: "Premium brand mefenamic acid tailored for intense pain relief."
        },
        {
            id: "tramadol-generic",
            name: "Tramadol (Generic 50mg - Rx)",
            price: 12.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKu2meu3VeEa8cR4-uGtk-fcq0H4RB4PT6zihD4aKCGw&s=10",
            description: "Prescription-only opioid analgesic used for moderate to severe pain management."
        },
        {
            id: "voltaren-emulgel",
            name: "Voltaren Emulgel (Diclofenac Diethylamine)",
            price: 320.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs248jJ1AdZjaiuB-YA0NlIk2O_uC7OZliwKFXxlXVg&s",
            description: "Topical anti-inflammatory gel that penetrates deep into joints to relieve localized pain."
        }
    ],
    "vitamins": [
        {
            id: "enervon-c",
            name: "Enervon-C (Multivitamins + Vitamin C)",
            price: 7.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xg5kuwsy2y8koPJ14Bj8G2K2puuzPVHR9aWwPb5r4A&s=10",
            description: "Daily multivitamin with Vitamin B-complex and Vitamin C to boost energy and immunity."
        },
        {
            id: "conzace",
            name: "Conzace (Multivitamins + Minerals)",
            price: 14.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFg7dpXE6WejZTTCzUG_l1cl26evvlnf6MJSmh4qnaA&s=10",
            description: "High-potency formulation of Zinc, Vitamin A, C, and E for skin health and immune defense."
        },
        {
            id: "immunpro",
            name: "ImmunPro (Sodium Ascorbate + Zinc)",
            price: 8.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2VTC64Oak3UDefdsGzjA1C9ni4LtPExd37xsBu6mcw&s=10",
            description: "Non-acidic Vitamin C combined with Zinc using ZincPlus technology for absorption."
        },
        {
            id: "centrum complete",
            name: "Centrum Complete",
            price: 12.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRq_tKvp7wAeqganQt_yyBbqitDa802f_w3LTTfR3eQ&s",
            description: "Comprehensive multivitamin and mineral supplement supporting overall vital organs and vitality."
        },
        {
            id: "ascorbic acid",
            name: "Ascorbic Acid (Generic 500mg Vitamin C)",
            price: 2.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAkfoIDWmevjKHWpFzz54goxSL313j5qj7p3b5eDnfQ&s=10",
            description: "Basic Vitamin C supplement used to treat and prevent Vitamin C deficiency."
        },
        {
            id: "neurobion",
            name: "Neurobion (Vitamin B1 + B6 + B12)",
            price: 19.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPls4sJDC13x1PkjW8vtpYb2sw2C_y8GQPCmcFrp0k4w&s=10",
            description: "High-dose B-complex formulation designed to treat nerve damage, numbness, and tingling."
        },
        {
            id: "myra e",
            name: "Myra E (Vitamin E 400 IU)",
            price: 13.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_T1cKDBlkjCte1C0Bn7IG9ASpx7e6QhKB9z-CtYK9Q&s=10",
            description: "Antioxidant supplement that helps protect cells from damage and promotes healthy skin."
        },
        {
            id: "revicon forte",
            name: "Revicon Forte",
            price: 7.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhejezmcm3gN7S-W2mttPkuo1DmPH25_5XkFbC9tutA&s=10",
            description: "Multivitamin containing essential minerals and amino acids to help combat physical fatigue."
        },
        {
            id: "caltrate plus",
            name: "Caltrate Plus (Calcium + Vitamin D3)",
            price: 10.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl38LtuIM80Qva5ywV27VKpNClk2KKHZ3yemSqafYpxw&s=10",
            description: "Calcium supplement fortified with Vitamin D3 to improve bone density and prevent osteoporosis."
        },
        {
            id: "propan tlc syrup",
            name: "Propan TLC Syrup",
            price: 180.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5oY-5_pbIzTptV4TR5RCxrmIlRVnk-2lZWydPT7Ds_g&s=10",
            description: "Multivitamin syrup for children infused with Lysine and Taurine to stimulate appetite and growth."
        }
    ],
    "first aid": [
        {
            id: "70-isopropyl-alcohol",
            name: "70% Isopropyl Alcohol (Rhea / Green Cross)",
            price: 45.00,
            image: "https://shopsuki.ph/cdn/shop/files/4800067130100_800x.jpg?v=1717495669",
            description: "Antiseptic and disinfectant for sanitizing hands and cleansing minor surface wounds."
        },
        {
            id: "povidone-iodine-betadine",
            name: "Povidone-Iodine (Betadine 10% Solution)",
            price: 85.00,
            image: "https://gba5gyv2.cdn.imgeng.in/images/default-source/ph/products/wound-care/betadine-wound-solution.jpg",
            description: "Topical microbicidal solution applied to cuts, grazes, and burns to prevent bacterial infection."
        },
        {
            id: "hydrogen-peroxide",
            name: "Hydrogen Peroxide (Agua Oxigenada 3%)",
            price: 25.00,
            image: "https://cdn11.bigcommerce.com/s-dmb1ykvg7m/images/stencil/1280x1280/products/35695/4390/027012__15820.1593673458.jpg?c=2",
            description: "Cleansing agent used to flush out dirt and dead tissue from fresh skin abrasions."
        },
        {
            id: "band-aid-strips",
            name: "Band-Aid Plastic Strips",
            price: 2.50,
            image: "https://images.ctfassets.net/th7up0brotb1/2yEXjEwi3c1Dj1gIny3f8e/c7495a1b395041e640956d13fbaa83a4/bab_381370045311_band_aid_band_aid_tru_stay_plastic_assorted_30ct_000_1-en-us",
            description: "Sterile adhesive bandage designed to protect small cuts and scrapes from dirt and germs."
        },
        {
            id: "gauze-bandage-roll",
            name: "Gauze Bandage (2 inches x 5 yards)",
            price: 15.00,
            image: "https://static.wixstatic.com/media/728b95_9704633f8ed0402b9fa6750b4ef4fac9~mv2.png/v1/fill/w_434,h_297,al_c,lg_1,q_85,enc_avif,quality_auto/728b95_9704633f8ed0402b9fa6750b4ef4fac9~mv2.png",
            description: "Non-stick absorbent dressing used to wrap and secure larger wounds or dressings."
        },
        {
            id: "micropore-surgical-tape",
            name: "Micropore Surgical Tape",
            price: 45.00,
            image: "https://goldenhorsemedicalsupplies.com/cdn/shop/products/MP1-3_530x@2x.jpg?v=1502341885",
            description: "Hypoallergenic paper tape used to firmly secure gauze pads without irritating skin."
        },
        {
            id: "burnshield-silver-sulfadiazine",
            name: "Burnshield / Burn Ointment (Silver Sulfadiazine)",
            price: 120.00,
            image: "https://tgp.com.ph/wp-content/uploads/2026/07/100502_3-1-600x600.jpg",
            description: "Topical cream applied to first and second-degree burns to soothe skin and prevent infection."
        },
        {
            id: "petroleum-jelly-vaseline",
            name: "Petroleum Jelly (Vaseline Original)",
            price: 60.00,
            image: "https://www.alphafirstaid.com.au/Images/ProductImages/Original/99158.jpg",
            description: "Occlusive ointment that protects minor skin scrapes, chafing, and burns by locking in moisture."
        },
        {
            id: "sterile-cotton-balls",
            name: "Sequest Extra Sterile Cotton Balls",
            price: 35.00,
            image: "https://www.joysonpl.com/wp-content/uploads/2021/09/Joycare-Cotton-Balls-Sterile-1.jpg",
            description: "Absorbent cotton balls used for applying antiseptics or cleaning around wound edges."
        },
        {
            id: "ammonia-inhalant-surgical-spirit",
            name: "Surgical Spirit / Ammonia Inhalant",
            price: 20.00,
            image: "http://shopsuki.ph/cdn/shop/files/RheaAromaticSpiritOfAmmonia15mlA_1024x.jpg?v=1720785858",
            description: "Respiratory stimulant used to revive individuals suffering from lightheadedness or fainting spells."
        }
    ],
    "personal care": [
        {
            id: "cetaphil-gentle-skin-cleanser",
            name: "Cetaphil Gentle Skin Cleanser",
            price: 220.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7H2zC_kU_Xj19d7B8qdtRtjY5-KJ_-QBjhi5e7xR6w&s",
            description: "Soap-free, non-comedogenic daily cleanser suitable for sensitive and dry skin types."
        },
        {
            id: "lactacyd-feminine-wash",
            name: "Lactacyd Feminine Wash",
            price: 80.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMZbj1nFTQ9MDkxR30ejmgAg2gHlVXEnA0gEZpcTMSwg&s=10",
            description: "Dermatologically tested intimate wash formulated with natural milk extracts to maintain pH balance."
        },
        {
            id: "betadine-feminine-wash",
            name: "Betadine Feminine Wash (Povidone-Iodine 7.5%)",
            price: 140.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZt4O6N4x5hTRvuEaVLfXfMQYWM0f-Ym9l-EgXSxabA&s=10",
            description: "Medicated wash used 2-3 times a week to treat red spots, itchiness, and odor in intimate areas."
        },
        {
            id: "driclor-antiperspirant-roll-on",
            name: "Driclor Antiperspirant Roll-On",
            price: 890.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEDiJ05cr8PZJajV5VjBh32uNjCn2OsUORKBtnk55Kw&s=10",
            description: "Clinical-strength antiperspirant solution designed to treat excessive sweating (hyperhidrosis)."
        },
        {
            id: "elysian-canesten-antifungal-cream",
            name: "Elysian / Canesten Antifungal Cream (Clotrimazole)",
            price: 210.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqaDg-1XBwJFs1R3tphBd7IT7pjfPjU1HGOP2yYMK6A&s",
            description: "Topical antifungal cream used to treat ringworm, athlete's foot, and jock itch."
        },
        {
            id: "listerine-antiseptic-mouthwash",
            name: "Listerine Antiseptic Mouthwash",
            price: 110.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E-nM-LXxrf7MhE4KjxbHW7qXm4AbnQYUExTzl47POQ&s=10",
            description: "Kills up to 99% of oral bacteria that cause bad breath, plaque, and gingivitis."
        },
        {
            id: "nizoral-shampoo",
            name: "Nizoral Shampoo (Ketoconazole 2%)",
            price: 180.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxs_8T_CIwAISGlrUcMJJ4-LxQFKOK7pk55xgAyIJSlA&s=10",
            description: "Medicated anti-dandruff shampoo designed to treat severe flaking and seborrheic dermatitis."
        },
        {
            id: "physiogel-daily-moisture-therapy-cream",
            name: "Physiogel Daily Moisture Therapy Cream",
            price: 650.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZhZWWm5XL4NVR9hYiTvuieSK1GMRcsGVp8zBSgd4rA&s=10",
            description: "Deeply hydrating cream that restores the skin’s natural moisture barrier for dry, sensitive skin."
        },
        {
            id: "sulfur-soap-dr-s-wongs",
            name: "Sulfur Soap (Dr. S. Wong's)",
            price: 42.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6VwOZhyEVbm38b7miWAlwTcgarculUK23_AIVdQTcA&s",
            description: "Medicated soap containing sulfur and aloe vera to treat acne, pimples, and minor skin infections."
        },
        {
            id: "lucas-papaw-ointment",
            name: "Lucas' Papaw Ointment",
            price: 380.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhstdcb-BsBpTb4DBYxZ324Y9I6LnxAM3EsNjyuTa0Q&s=10",
            description: "Multipurpose ointment used as a lip balm, skin moisturizer, and treatment for chapped skin."
        }
    ],

    "allergy": [
        {
            id: "cetirizine-generic",
            name: "Cetirizine (Alerta / Generic 10mg)",
            price: 5.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXuqjtZ_iVtR1DSZP01kmfC-dmXwVmiBcj_0ilMcOjkwl4l1Bnkvrc3dx&s=10",
            description: "Second-generation antihistamine for allergic rhinitis, sneezing, watery eyes, and hives."
        },
        {
            id: "loratadine-claritin",
            name: "Loratadine (Claritin 10mg)",
            price: 35.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVJMwSzcSqw_hbLGev0lAP_eev8AbHIC5Zys4ZXAkcCAX1iGVxmlOZvh_&s=10",
            description: "Non-drowsy antihistamine that provides 24-hour relief from seasonal allergy symptoms."
        },
        {
            id: "iterax-hydroxyzine",
            name: "Iterax (Hydroxyzine 25mg - Rx)",
            price: 22.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDDdRE1gnh0zdk-6rClGRPVLJRcA2pBdgfuY52-fbsr1fH9YiZD6FKQZb&s=10",
            description: "Sedating antihistamine used for severe skin itching, urticaria, and anxiety-induced allergies."
        },
        {
            id: "virlix-cetirizine",
            name: "Virlix (Cetirizine HCl 10mg)",
            price: 36.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooMKlguR-_zX96QEQN0ZCXsdOAlbiEXRX5NlYEWqElve_gGNLTYoC0gK5&s=10",
            description: "Brand-name cetirizine known for rapid action against skin allergies and hay fever."
        },
        {
            id: "fexofenadine-telfast",
            name: "Fexofenadine (Telfast 180mg)",
            price: 55.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFw9OB0Wl9c2aUk0K2khvbMbGAxTdAD-G4Q8t6d6s2A6Q3rIhecVaouEI&s=10",
            description: "High-strength, non-drowsy antihistamine for persistent chronic idiopathic urticaria."
        },
        {
            id: "flixonase-nasal-spray",
            name: "Flixonase / Avamys Nasal Spray (Fluticasone - Rx)",
            price: 780.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNq6CUPiqnN_R8zWiN4myQ82oNNlFtR_ZCdJZTBfmAO9ZCokdhTcfCO-w&s=10",
            description: "Corticosteroid nasal spray used daily to reduce inflammation from severe nasal allergies."
        },
        {
            id: "allercet-cetirizine",
            name: "Allercet (Cetirizine 10mg)",
            price: 15.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2LcGXfQkYPL484O4m9nvdFW9xbCEJkRBMWiJXl0hSNVFncfZWoE5JwI7&s=10",
            description: "Commonly prescribed local brand for quick relief from allergic rhinitis symptoms."
        },
        {
            id: "diphenhydramine-benadryl",
            name: "Diphenhydramine (Benadryl 25mg/50mg)",
            price: 10.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KbVa8ZmjFcK1hZmSG3mhLRPfQ-3ra8CW7-sxhPQeXLN7Dk7Zutr1gR0&s=10",
            description: "First-generation antihistamine used for acute allergic reactions and motion sickness."
        },
        {
            id: "celestamine-tablet",
            name: "Celestamine (Betamethasone + Dexchlorpheniramine)",
            price: 28.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBXHXpuJym2klKQdDH7UCKS4HM1Gb5EFFzEy1IdWqCwXvkf9Yi7lODm5-6&s=10",
            description: "Combination steroid-antihistamine tablet for severe inflammatory allergic conditions."
        },
        {
            id: "eye-mo-allergy",
            name: "Eye Mo Allergy Drops",
            price: 135.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KtxLjAkv9c2SRiuknjLPoWaT4drAwGRRz5jIOysaFh_BB1_u_ukBUt0&s=10",
            description: "Ophthalmic solution formulated to relieve red, itchy, and irritated eyes caused by airborne allergens."
        }
    ],

    "digestive health": [
        {
            id: "kremil-s",
            name: "Kremil-S (Aluminum Hydroxide + Magnesium Hydroxide + Simeticone)",
            price: 7.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBIFWTSCyvacMmcu74t_HLhaKAXDP9FoH7xHwYxipJju65Cdms1NSrxo_&s=10",
            description: "Chewing tablet that neutralizes excess stomach acid and relieves heartburn and hyperacidity."
        },
        {
            id: "gaviscon-double-action",
            name: "Gaviscon Double Action (10ml)",
            price: 32.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ95G5eE5aqjNA17a1Dxwtb5EEC_j-axpNq_ATWoteLU5nQw2Yiv1DHI&s=10",
            description: "Forms a protective barrier over stomach contents to prevent acid reflux and heartburn."
        },
        {
            id: "diatabs",
            name: "Diatabs (Loperamide 2mg)",
            price: 7.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh0fr_ZO9fTLY4SseIn5HL6faIzmDIPWxqbZ477ZDF0t95vzp3iJAWR28&s=10",
            description: "Anti-motility medication that slows down gut movement to treat acute diarrhea."
        },
        {
            id: "erceflora",
            name: "Erceflora (Bacillus clausii 5ml)",
            price: 52.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PEcwmPrIeTZchWLwKTKpCd6pvhrSZXC2kElgS59Q5tlk05ShmqM_O73s&s=10",
            description: "Liquid probiotic vial that restores intestinal bacterial flora balance during diarrhea or antibiotic use."
        },
        {
            id: "hydrite",
            name: "Hydrite (Oral Rehydration Salts - ORS)",
            price: 18.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0xxrSFjve3q-l6soGlnWKFmxaJnhRluWE5MDTe4EhTtT0fRS4Fjk7EY&s=10",
            description: "Dissolvable powder packet that replaces essential fluids and electrolytes lost during diarrhea or vomiting."
        },
        {
            id: "dulcolax",
            name: "Dulcolax (Bisacodyl 5mg)",
            price: 10.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUx-zWZ_nzCZbm18WTBIklSkzj0w-1Feo2EtZOiV7V1lcwdz8KMO3VB8A&s=10",
            description: "Stimulant laxative providing dependable overnight relief from occasional constipation."
        },
        {
            id: "buscopan",
            name: "Buscopan (Hyoscine N-butylbromide 10mg)",
            price: 16.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_1JYVYOTBXU-5QSYSwbo6li9OSikzaA60lrjDUH1Q-8D4JD-DKormJE&s=10",
            description: "Antispasmodic medication that targets abdominal cramps, spasms, and stomach pain."
        },
        {
            id: "omeprazole",
            name: "Omeprazole (Generic 20mg - Rx)",
            price: 13.50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNra2B3F0q6_y9qQEtuOZbVE5LdE3mfiqZ8A9e19Z7YB0MEw5fNs8pL8&s=10",
            description: "Proton pump inhibitor (PPI) that decreases stomach acid production to heal ulcers and GERD."
        },
        {
            id: "plasil",
            name: "Plasil (Metoclopramide 10mg - Rx)",
            price: 11.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qKnOHn3Qn48Wx7iYNmNazP-e__w3UzeZuCQsoHbNkToRmgi8hCOib2SH&s=10",
            description: "Prokinetic agent used to manage severe nausea, vomiting, and delayed gastric emptying."
        },
        {
            id: "senokot",
            name: "Sennosides (Senokot)",
            price: 9.00,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBIUNlazw2i7a2tSZ2Ct63EaBGtuBMS7jrJBDFiK9TcHNfzUUTBc6z7JX&s=10",
            description: "Natural vegetable laxative that gently stimulates bowel movements to relieve constipation."
        }
    ]
};

// Make sure every medicine in every category is immediately looked-up-able
// (by id) via medicineDatabase, not just the ones a category screen has
// happened to render. This is what openMedicineModal() reads from, so
// without this, clicking a search result for a medicine whose category
// was never opened would silently fail to open the modal.
Object.values(categoryMedicines).forEach(list => {
    list.forEach(med => {
        medicineDatabase[med.id] = med;
    });
});

function hideAllModals() {
    const loginModal = document.getElementById("login-page");
    const signupModal = document.getElementById("signup-page");
    const adminLoginModal = document.getElementById("admin-login-page");

    if (loginModal) loginModal.style.display = "none";
    if (signupModal) signupModal.style.display = "none";
    if (adminLoginModal) adminLoginModal.style.display = "none";
}

let currentSelectedProduct = null;
let currentQuantity = 1;

function selectCategory(categoryName) {
    const key = categoryName.toLowerCase().trim();
    const container = document.getElementById("medicine-container");
    if (!container) return;

    const items = categoryMedicines[key];
    if (!items) return;

    // Clear main container and recreate the 2 layers
    container.innerHTML = `
        <div class="medicine-row medicine-layer-1" id="layer-1"></div>
        <div class="medicine-row medicine-layer-2" id="layer-2"></div>
    `;

    const layer1 = document.getElementById("layer-1");
    const layer2 = document.getElementById("layer-2");

    // Split items into 2 layers (half in Layer 1, half in Layer 2)
    const splitIndex = Math.ceil(items.length / 2);

    items.forEach((med, index) => {
        medicineDatabase[med.id] = med;

        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("onclick", `openMedicineModal('${med.id}')`);

        card.innerHTML = `
            <div class="product-img-box">
                <img src="${med.image}" alt="${med.name}">
            </div>
            <h3 class="product-name">${med.name}</h3>
            <span class="product-price">₱ ${med.price.toFixed(2)}</span>
            <div class="product-actions" onclick="event.stopPropagation();">
                <button class="wishlist-btn${isWishlisted(med.id) ? ' active' : ''}" data-wishlist-id="${med.id}" aria-label="Add to Wishlist" onclick="toggleWishlist('${med.id}', event)">${isWishlisted(med.id) ? '♥' : '♡'}</button>
                <button class="add-cart-btn" onclick="openMedicineModal('${med.id}')">Add to Cart</button>
            </div>
        `;

        if (index < splitIndex) {
            layer1.appendChild(card);
        } else {
            layer2.appendChild(card);
        }
    });
}

function openMedicineModal(productKey) {
    const key = productKey.toLowerCase().trim();
    const product = medicineDatabase[key];

    if (!product) return;

    currentSelectedProduct = product;
    currentQuantity = 1;

    let overlay = document.getElementById("medicine-modal-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "medicine-modal-overlay";
        overlay.className = "medicine-modal-overlay";
        document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
        <div class="medicine-modal-card">
            <button class="modal-close-btn" onclick="closeMedicineModal()">&times;</button>
            <div class="modal-image-wrapper">
                <img src="${product.image}" alt="${product.name}" id="modal-product-img">
            </div>
            <div class="modal-details">
                <h2 class="modal-product-title">${product.name}</h2>
                <div class="modal-price" id="modal-product-price">₱ ${product.price.toFixed(2)}</div>
                <p class="modal-description">${product.description}</p>
                
                <div class="modal-quantity-row">
                    <span class="qty-label">Quantity</span>
                    <div class="qty-control-group">
                        <button class="qty-btn" onclick="updateQuantity(-1)">−</button>
                        <span class="qty-display" id="modal-qty-val">1</span>
                        <button class="qty-btn" onclick="updateQuantity(1)">+</button>
                    </div>
                </div>

                <button class="modal-add-cart-btn" onclick="confirmAddToCart()">
                    Add to Cart • <span id="modal-total-price">₱ ${product.price.toFixed(2)}</span>
                </button>
            </div>
        </div>
    `;

    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeMedicineModal() {
    const overlay = document.getElementById("medicine-modal-overlay");
    if (overlay) {
        overlay.style.display = "none";
    }
    document.body.style.overflow = "";
}

function updateQuantity(change) {
    if (!currentSelectedProduct) return;
    
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1;

    const qtyDisplay = document.getElementById("modal-qty-val");
    const totalPriceDisplay = document.getElementById("modal-total-price");

    if (qtyDisplay) qtyDisplay.textContent = currentQuantity;
    if (totalPriceDisplay) {
        const total = currentSelectedProduct.price * currentQuantity;
        totalPriceDisplay.textContent = `₱ ${total.toFixed(2)}`;
    }
}

function confirmAddToCart() {
    if (!currentSelectedProduct) return;
    addToCart(currentSelectedProduct, currentQuantity);
    showCartToast(`Added ${currentQuantity}x ${currentSelectedProduct.name} to your cart!`);
    closeMedicineModal();
}

// ==========================================================================
// 3. MODAL & NAVIGATION CONTROLS
// ==========================================================================

function showSignup() {
    closeLogin();
    closeAdminLogin();
    const signupModal = document.getElementById("signup-page");
    if (signupModal) signupModal.style.display = "flex";

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'none';
}

function closeSignup() {
    const signupModal = document.getElementById("signup-page");
    if (signupModal) signupModal.style.display = "none";

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'flex';
}

function showLogin() {
    closeSignup();
    closeAdminLogin();
    const loginModal = document.getElementById("login-page");
    if (loginModal) loginModal.style.display = "flex";

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'none';
}

function closeLogin() {
    const loginModal = document.getElementById("login-page");
    if (loginModal) loginModal.style.display = "none";

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'flex';
}

function showAdminLogin() {
    closeLogin();
    closeSignup();
    const adminModal = document.getElementById("admin-login-page");
    if (adminModal) adminModal.style.display = "flex";

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'none';
}

function closeAdminLogin() {
    const adminModal = document.getElementById("admin-login-page");
    if (adminModal) adminModal.style.display = "none";

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'flex';
}

function togglePasswordVisibility(fieldId, toggleIconId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.type = field.type === "password" ? "text" : "password";
    }
}


function validateUsername() {
    const userField = document.getElementById('username-field');
    const infoTag = document.getElementById('username-status');
    
    if (!userField || !infoTag) return;

    const userValue = userField.value.trim();

    if (userValue.length === 0) {
        infoTag.textContent = "It needs to be 5 characters or above";
        infoTag.style.color = "#705862";
    } else if (userValue.length < 5) {
        infoTag.textContent = "❌ Too short! Must be 5 characters or above";
        infoTag.style.color = "#ff4d4d";
    } else {
        infoTag.textContent = "✓ Username requirement met";
        infoTag.style.color = "#2e7d32";
    }
}

function checkPasswordStrength() {
    const passField = document.getElementById('password-field');
    const progressIndicator = document.getElementById('strength-bar');
    const metricStatusText = document.getElementById('password-status');
    
    if (!passField || !progressIndicator || !metricStatusText) return;

    const passValue = passField.value;
    let strengthPoints = 0;

    if (passValue.length === 0) {
        progressIndicator.style.width = "0%";
        metricStatusText.textContent = "Password strength: Enter password";
        metricStatusText.style.color = "#705862";
        return;
    }

    if (passValue.length >= 6) strengthPoints++;
    if (passValue.length >= 10) strengthPoints++;
    if (/[A-Z]/.test(passValue)) strengthPoints++;
    if (/[0-9]/.test(passValue) || /[^A-Za-z0-9]/.test(passValue)) strengthPoints++;

    if (strengthPoints <= 1) {
        progressIndicator.style.width = "25%";
        progressIndicator.style.background = "#ff4d4d";
        metricStatusText.textContent = "Password strength: Weak ⚠️";
        metricStatusText.style.color = "#ff4d4d";
    } else if (strengthPoints === 2 || strengthPoints === 3) {
        progressIndicator.style.width = "60%";
        progressIndicator.style.background = "#ffa726";
        metricStatusText.textContent = "Password strength: Medium ⚡";
        metricStatusText.style.color = "#e65100";
    } else {
        progressIndicator.style.width = "100%";
        progressIndicator.style.background = "#4caf50";
        metricStatusText.textContent = "Password strength: Strong 💪";
        metricStatusText.style.color = "#2e7d32";
    }
}

function checkPasswordMatch() {
    const passField = document.getElementById('password-field');
    const repeatField = document.getElementById('repeat-password-field');
    const validationOutputText = document.getElementById('match-status');

    if (!passField || !repeatField || !validationOutputText) return;

    const keyString = passField.value;
    const checkString = repeatField.value;

    if (checkString.length === 0) {
        validationOutputText.textContent = "Please re-enter your password";
        validationOutputText.style.color = "#705862";
        return;
    }

    if (keyString === checkString) {
        validationOutputText.textContent = "✓ Passwords match successfully";
        validationOutputText.style.color = "#2e7d32";
    } else {
        validationOutputText.textContent = "❌ Incorrect repeat-password";
        validationOutputText.style.color = "#ff4d4d";
    }
}

// ==========================================================================
// 5. SIGN UP & LOG IN DATA HANDLING
// ==========================================================================

function executeSignup() {
    const userElem = document.getElementById("username-field");
    const passElem = document.getElementById("password-field");
    const repeatElem = document.getElementById("repeat-password-field");

    if (!userElem || !passElem || !repeatElem) return;

    const username = userElem.value.trim();
    const password = passElem.value;
    const repeatPassword = repeatElem.value;

    if (username.length < 5) {
        alert("Please fulfill the username requirements (at least 5 characters).");
        return;
    }
    if (password === "") {
        alert("Please enter a password.");
        return;
    }
    if (password !== repeatPassword) {
        alert("Your repeated password does not match.");
        return;
    }

    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);

    alert("Registration successful! Transporting to Login...");

    userElem.value = "";
    passElem.value = "";
    repeatElem.value = "";

    closeSignup();
    showHome();
    showLogin();
}

function executeLoginValidation() {
    const userField = document.getElementById('login-username-field');
    const passField = document.getElementById('login-password-field');
    const errorAlertContainer = document.getElementById('login-error-message');

    if (!userField || !passField) return;

    const inputUser = userField.value.trim();
    const inputPass = passField.value;

    const storedUser = localStorage.getItem("registeredUsername");
    const storedPass = localStorage.getItem("registeredPassword");

    const isValidSavedUser = (inputUser === storedUser && inputPass === storedPass && storedUser !== null);
    const isValidAdminUser = (inputUser === "admin" && inputPass === "admin123");

    if (isValidSavedUser || isValidAdminUser) {
        if (errorAlertContainer) errorAlertContainer.style.display = "none";
        
        const mainElem = document.querySelector('main');
        if (mainElem) mainElem.style.display = 'none';

        closeSignup();
        closeLogin();

        const landingNavbar = document.querySelector('.navbar');
        if (landingNavbar) landingNavbar.style.display = 'none';

        let mainPage = document.getElementById('main-page');
        if (!mainPage) {
            mainPage = document.createElement('div');
            mainPage.id = 'main-page';
            document.body.appendChild(mainPage);
        }
        mainPage.style.display = 'block';

        const currentUser = localStorage.getItem('registeredUsername') || localStorage.getItem('username') || (inputUser === "admin" ? "admin" : null);

        mainPage.innerHTML = `
        <div class="main-page-wrapper">

        <!-- ================= PERMANENT SIDEBAR ================= -->
        <aside class="permanent-sidebar" aria-label="Main navigation">

            <div class="sidebar-account">
                <div class="sidebar-account-avatar">👤</div>
                <div class="sidebar-account-info">
                    <strong>${currentUser}</strong>
                    <button class="sidebar-logout" onclick="logoutUser()">Log Out</button>
                </div>
            </div>

            <nav class="permanent-sidebar-nav">
                <a href="javascript:void(0);" onclick="showMedicinePage()">
                    <span>Medicines</span>
                    <span class="sidebar-arrow">&gt;</span>
                </a>
                <a href="javascript:void(0);" onclick="showMainHotPage()">
                    <span>Hot Deals</span>
                    <span class="sidebar-arrow">&gt;</span>
                </a>
                <a href="javascript:void(0);" onclick="showMainSalePage()">
                    <span>On Sale</span>
                    <span class="sidebar-arrow">&gt;</span>
                </a>
            </nav>

        </aside>

        <!-- ================= MAIN CONTENT AREA (pushed right of sidebar) ================= -->
        <div class="main-content-area">

            <header class="main-navbar">
                <div class="main-nav-left">
                
                    
                    <a href="javascript:void(0);" class="main-logo">
                        <div class="main-medical-logo">
                            <div class="horiz"></div>
                            <div class="vert"></div>
                            <span>+</span>
                        </div>
                        <span class="logo-text">PharmaClick</span>
                    </a>

                    <button class="nav-icon-btn book-btn" aria-label="Medicine Dictionary" onclick="showDictionaryPage()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                            <line x1="12" y1="6" x2="16" y2="6"/>
                            <line x1="12" y1="10" x2="16" y2="10"/>
                        </svg>
                    </button>
                </div>

                <div class="main-nav-center">
                    <div class="search-bar-wrapper" id="search-bar-wrapper">
                        <input type="text" id="main-search-input" placeholder="Search medicine, vitamins, etc..."
                            autocomplete="off"
                            oninput="handleSearchInput(this.value)"
                            onfocus="handleSearchFocus()"
                            onkeydown="handleSearchKeydown(event)">
                        <button class="search-btn" aria-label="Search" onclick="executeSearch()">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <circle cx="11" cy="11" r="8"/>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </button>
                        <div class="search-dropdown" id="search-dropdown" style="display: none;"></div>
                    </div>

                    <button class="nav-icon-btn location-btn" aria-label="Location" onclick="showTrackOrderPage()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </button>
                </div>

                <div class="main-nav-right">
                    <button class="nav-icon-btn action-btn" id="wishlist-icon-btn" aria-label="Wishlist" onclick="showWishlistPage()" style="position: relative;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span class="cart-badge" id="wishlist-badge-count" style="display: none;">0</span>
                    </button>

                    <button class="nav-icon-btn action-btn" id="cart-icon-btn" aria-label="Cart" onclick="toggleCartPopup(event)" style="position: relative;">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 6h-2.57l-1.86-3.72A1 1 0 0 0 12.68 1.7L12 2l-.68-.3a1 1 0 0 0-.89.58L8.57 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2.62L13.31 6H10.7L12 3.38z"/>
                        </svg>
                        <span class="cart-badge" id="cart-badge-count" style="display: none;">0</span>
                    </button>

                    <button class="nav-icon-btn action-btn" aria-label="Store" onclick="showMedicinePage()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
                        </svg>
                    </button>
                </div>
            </header>

            <!-- ================= CART POPUP (shown/hidden via toggleCartPopup) ================= -->
            <div id="cart-popup-overlay" class="cart-popup-overlay" style="display: none;" onclick="if(event.target===this) closeCartPopup();">
                <div class="cart-popup-panel" id="cart-popup-panel"></div>
            </div>

            <div class="market-main-content">
                <div class="banner-slider" id="banner-slider">
                    <div class="banner-slider-track" id="banner-slider-track">
                        <div class="banner-slide"><img src="images/banner-1.jpg" alt="Pharmacy aisle" draggable="false"></div>
                        <div class="banner-slide"><img src="images/banner-2.jpg" alt="Pharmaceutical medicine" draggable="false"></div>
                        <div class="banner-slide"><img src="images/banner-3.jpg" alt="Online pharmacy" draggable="false"></div>
                    </div>
                    <div class="slider-dots" id="banner-slider-dots">
                        <span class="dot active" onclick="goToBannerSlide(0)"></span>
                        <span class="dot" onclick="goToBannerSlide(1)"></span>
                        <span class="dot" onclick="goToBannerSlide(2)"></span>
                    </div>
                </div>

                <div class="dashboard-content">
                    <section class="recent-searches-section" id="recent-searches-section" style="display: none;">
                        <div class="recent-searches-header">
                            <h2 class="section-title" style="margin-bottom: 0;">Recent Searches</h2>
                            <button class="clear-history-btn" onclick="clearAllSearchHistory()">Clear all</button>
                        </div>
                        <div class="recent-searches-bar" id="recent-searches-bar"></div>
                    </section>

                    <section class="categories-section">
                        <h2 class="section-title">Categories</h2>
                        <div class="categories-scroll-wrapper">
                            <div class="categories-container" id="categories-container">
                                <div class="category-card" onclick="selectCategory('cold & flu')">
                                    <span class="category-title">Cold & Flu</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/3181/3181810.png">
                                    </div>
                                </div>
                                <div class="category-card" onclick="selectCategory('pain relief')">
                                    <span class="category-title">Pain Relief</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/4357/4357852.png" alt="Pain Relief">
                                    </div>
                                </div>
                                <div class="category-card" onclick="selectCategory('vitamins')">
                                    <span class="category-title">Vitamins</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/10504/10504796.png" alt="Vitamins">
                                    </div>
                                </div>
                                <div class="category-card" onclick="selectCategory('first aid')">
                                    <span class="category-title">First Aid</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2760/2760491.png" alt="First Aid">
                                    </div>
                                </div>
                                <div class="category-card" onclick="selectCategory('personal care')">
                                    <span class="category-title">Personal Care</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/15765/15765387.png" alt="Personal Care">
                                    </div>
                                </div>
                                <div class="category-card" onclick="selectCategory('allergy')">
                                    <span class="category-title">Allergy</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/5289/5289318.png" alt="Allergy">
                                    </div>
                                </div>
                                <div class="category-card" onclick="selectCategory('digestive health')">
                                    <span class="category-title">Digestive Health</span>
                                    <div class="category-icon-box">
                                        <img src="https://cdn-icons-png.flaticon.com/128/17306/17306571.png" alt="Digestive Health">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="medicine-section" id="browse-medicine-section">
                        <div class="recent-searches-header">
                            <h2 class="section-title" id="browse-medicine-title" style="margin-bottom: 0;">Browse Medicine</h2>
                            <button class="clear-history-btn" id="clear-search-btn" onclick="clearSearchResults()" style="display: none;">✕ Clear search</button>
                        </div>
                        <div class="medicine-scroll-wrapper">
                            <div class="medicine-container" id="medicine-container">
                                <!-- Layer 1: First batch of medicines -->
                                <div class="medicine-row medicine-layer-1">
                                    <div class="product-card" onclick="openMedicineModal('advil')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr18uwZ8RXPBU8kiNTOXaYjlLK7xCq0CH_uw8Tq9hEYA&s=10" alt="Advil">
                                        </div>
                                        <h3 class="product-name">Advil</h3>
                                        <span class="product-price">₱ 9.00</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="advil" aria-label="Add to Wishlist" onclick="toggleWishlist('advil', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('advil')">Add to Cart</button>
                                        </div>
                                    </div>

                                    <div class="product-card" onclick="openMedicineModal('biogesic')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10" alt="Biogesic">
                                        </div>
                                        <h3 class="product-name">Biogesic</h3>
                                        <span class="product-price">₱ 4.50</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="biogesic" aria-label="Add to Wishlist" onclick="toggleWishlist('biogesic', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('biogesic')">Add to Cart</button>
                                        </div>
                                    </div>

                                    <div class="product-card" onclick="openMedicineModal('centrum advance')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10" alt="Centrum Advance">
                                        </div>
                                        <h3 class="product-name">Centrum Advance</h3>
                                        <span class="product-price">₱ 18.00</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="centrum advance" aria-label="Add to Wishlist" onclick="toggleWishlist('centrum advance', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('centrum advance')">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Layer 2: Remaining medicines -->
                                <div class="medicine-row medicine-layer-2">
                                    <div class="product-card" onclick="openMedicineModal('dilzem')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALMUsY-Y80EnAwnMcc9-4iVoSNyq2nqIStic2iYRWlg&s=10" alt="Dilzem">
                                        </div>
                                        <h3 class="product-name">Dilzem</h3>
                                        <span class="product-price">₱ 24.50</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="dilzem" aria-label="Add to Wishlist" onclick="toggleWishlist('dilzem', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('dilzem')">Add to Cart</button>
                                        </div>
                                    </div>

                                    <div class="product-card" onclick="openMedicineModal('excedrin')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbri2UvlZT-POfXPa7e1qvo0Y-Ff4bztSSLaa480tWCA&s" alt="Excedrin">
                                        </div>
                                        <h3 class="product-name">Excedrin</h3>
                                        <span class="product-price">₱ 12.00</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="excedrin" aria-label="Add to Wishlist" onclick="toggleWishlist('excedrin', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('excedrin')">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <!-- ================= HOT DEALS PAGE (hidden until "Hot Deals" is clicked) ================= -->
            <div id="main-hot-page" class="market-main-content" style="display: none;">
                <div class="dashboard-content">
                    <section class="medicine-section">
                        <h2 class="section-title">Hot Deals</h2>
                        <div class="medicine-scroll-wrapper">
                            <div class="medicine-container">
                                <div class="medicine-row">
                                    <div class="product-card" onclick="openMedicineModal('advil')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr18uwZ8RXPBU8kiNTOXaYjlLK7xCq0CH_uw8Tq9hEYA&s=10" alt="Advil">
                                        </div>
                                        <h3 class="product-name">Advil</h3>
                                        <span class="product-price">₱ 9.00</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="advil" aria-label="Add to Wishlist" onclick="toggleWishlist('advil', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('advil')">Add to Cart</button>
                                        </div>
                                    </div>

                                    <div class="product-card" onclick="openMedicineModal('excedrin')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbri2UvlZT-POfXPa7e1qvo0Y-Ff4bztSSLaa480tWCA&s" alt="Excedrin">
                                        </div>
                                        <h3 class="product-name">Excedrin</h3>
                                        <span class="product-price">₱ 12.00</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="excedrin" aria-label="Add to Wishlist" onclick="toggleWishlist('excedrin', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('excedrin')">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <!-- ================= ON SALE PAGE (hidden until "On Sale" is clicked) ================= -->
            <div id="main-sale-page" class="market-main-content" style="display: none;">
                <div class="dashboard-content">
                    <section class="medicine-section">
                        <h2 class="section-title">On Sale</h2>
                        <div class="medicine-scroll-wrapper">
                            <div class="medicine-container">
                                <div class="medicine-row">
                                    <div class="product-card" onclick="openMedicineModal('biogesic')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10" alt="Biogesic">
                                        </div>
                                        <h3 class="product-name">Biogesic</h3>
                                        <span class="product-price">₱ 4.50</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="biogesic" aria-label="Add to Wishlist" onclick="toggleWishlist('biogesic', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('biogesic')">Add to Cart</button>
                                        </div>
                                    </div>

                                    <div class="product-card" onclick="openMedicineModal('dilzem')">
                                        <div class="product-img-box">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALMUsY-Y80EnAwnMcc9-4iVoSNyq2nqIStic2iYRWlg&s=10" alt="Dilzem">
                                        </div>
                                        <h3 class="product-name">Dilzem</h3>
                                        <span class="product-price">₱ 24.50</span>
                                        <div class="product-actions" onclick="event.stopPropagation();">
                                            <button class="wishlist-btn" data-wishlist-id="dilzem" aria-label="Add to Wishlist" onclick="toggleWishlist('dilzem', event)">♡</button>
                                            <button class="add-cart-btn" onclick="openMedicineModal('dilzem')">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <!-- ================= PURCHASE PAGE (shown when a cart item is clicked) ================= -->
            <div id="purchase-page" class="market-main-content" style="display: none;">
                <div class="dashboard-content" id="purchase-page-content"></div>
            </div>

            <!-- ================= WISHLIST PAGE (shown via the heart icon in the nav) ================= -->
            <div id="wishlist-page" class="market-main-content" style="display: none;">
                <div class="dashboard-content">
                    <section class="medicine-section">
                        <h2 class="section-title">My Wishlist</h2>
                        <div class="medicine-scroll-wrapper">
                            <div class="medicine-container" id="wishlist-container">
                                <!-- Rendered dynamically via renderWishlistPage() -->
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <!-- ================= MEDICINE DICTIONARY PAGE (shown via the book icon in the nav) ================= -->
            <div id="main-dictionary-page" class="market-main-content" style="display: none;">
                <div class="dashboard-content">
                    <section class="medicine-section">
                        <div class="dictionary-page-header">
                            <span class="dictionary-eyebrow">Medicine Reference</span>
                            <h2 class="section-title" style="margin-bottom: 8px;">Medicine Dictionary</h2>
                            <p class="dictionary-disclaimer">Prices are estimates in Philippine Pesos (₱) and may vary by pharmacy. Always consult a physician or pharmacist before starting any new medication, especially for Rx (prescription-required) items.</p>
                        </div>

                        <div id="dictionary-container"></div>

                        <div class="dictionary-tips-card">
                            <h3>⚠️ Key Purchasing Tips</h3>
                            <ul>
                                <li><strong>Rx Symbol (🔒):</strong> Items designated as Rx require a valid prescription from a licensed physician before purchase at pharmacies.</li>
                                <li><strong>Generics vs. Brands:</strong> Generic alternatives contain the exact same active ingredients as brand-name versions but are often significantly cheaper.</li>
                                <li><strong>Storage:</strong> Keep liquids, probiotic vials, and softgels in a cool, dry place away from direct heat or sunlight.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <!-- ================= TRACK ORDER PAGE (shown via the location icon in the nav) ================= -->
            <div id="track-order-page" class="market-main-content" style="display: none;">
                <div class="dashboard-content" id="track-order-content"></div>
            </div>

        </div>
        <!-- /main-content-area -->

        </div>
        <!-- /main-page-wrapper -->
        `;

        loadCart();
        loadWishlist();
        loadSearchHistory();
        renderRecentSearchesBar();
        captureDefaultMedicineHTML();
        renderDictionaryPage();
        initPrescriptionChat('user');
        initBannerSlider();

        document.body.style.background = "#ffffff";
        document.body.style.margin = "0";
    } else {
        if (errorAlertContainer) {
            errorAlertContainer.style.display = "block";
        }
        passField.value = "";
    }
}

// ==========================================================================
// HOME BANNER IMAGE SLIDER (auto-swipes every 1 minute; draggable by mouse/touch)
// ==========================================================================
let bannerSlideIndex = 0;
let bannerSlideCount = 0;
let bannerAutoTimer = null;
let bannerDragState = null;

function initBannerSlider() {
    const track = document.getElementById('banner-slider-track');
    const dotsWrap = document.getElementById('banner-slider-dots');
    if (!track || !dotsWrap) return;

    bannerSlideCount = track.querySelectorAll('.banner-slide').length;
    bannerSlideIndex = 0;
    applyBannerSliderPosition(false);

    // Reset any previous listeners by cloning the track node
    const freshTrack = track.cloneNode(true);
    track.parentNode.replaceChild(freshTrack, track);
    const newTrack = document.getElementById('banner-slider-track');

    // --- Mouse drag support ---
    newTrack.addEventListener('mousedown', bannerDragStart);
    window.addEventListener('mousemove', bannerDragMove);
    window.addEventListener('mouseup', bannerDragEnd);

    // --- Touch drag support (mobile) ---
    newTrack.addEventListener('touchstart', bannerDragStart, { passive: true });
    window.addEventListener('touchmove', bannerDragMove, { passive: false });
    window.addEventListener('touchend', bannerDragEnd);

    startBannerAutoSwipe();
}

function startBannerAutoSwipe() {
    if (bannerAutoTimer) clearInterval(bannerAutoTimer);
    bannerAutoTimer = setInterval(() => {
        bannerSlideIndex = (bannerSlideIndex + 1) % bannerSlideCount;
        applyBannerSliderPosition(true);
    }, 60000); // once every 1 minute
}

function applyBannerSliderPosition(animate) {
    const track = document.getElementById('banner-slider-track');
    const dotsWrap = document.getElementById('banner-slider-dots');
    if (!track) return;
    track.style.transition = animate ? 'transform 0.5s ease' : 'none';
    track.style.transform = `translateX(-${bannerSlideIndex * 100}%)`;
    if (dotsWrap) {
        dotsWrap.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === bannerSlideIndex);
        });
    }
}

function goToBannerSlide(index) {
    bannerSlideIndex = index;
    applyBannerSliderPosition(true);
    startBannerAutoSwipe(); // reset the 1-minute timer after a manual jump
}

function bannerDragStart(e) {
    const track = document.getElementById('banner-slider-track');
    if (!track) return;
    const point = e.touches ? e.touches[0] : e;
    bannerDragState = { startX: point.clientX, currentX: 0, width: track.parentElement.offsetWidth };
    track.classList.add('dragging');
}

function bannerDragMove(e) {
    if (!bannerDragState) return;
    const track = document.getElementById('banner-slider-track');
    if (!track) return;
    const point = e.touches ? e.touches[0] : e;
    if (e.touches) e.preventDefault();
    bannerDragState.currentX = point.clientX - bannerDragState.startX;
    const baseOffset = -bannerSlideIndex * bannerDragState.width;
    track.style.transform = `translateX(${baseOffset + bannerDragState.currentX}px)`;
}

function bannerDragEnd() {
    if (!bannerDragState) return;
    const track = document.getElementById('banner-slider-track');
    const dragDistance = bannerDragState.currentX;
    const threshold = bannerDragState.width * 0.15;

    if (dragDistance < -threshold && bannerSlideIndex < bannerSlideCount - 1) {
        bannerSlideIndex++;
    } else if (dragDistance > threshold && bannerSlideIndex > 0) {
        bannerSlideIndex--;
    }

    if (track) track.classList.remove('dragging');
    bannerDragState = null;
    applyBannerSliderPosition(true);
    startBannerAutoSwipe(); // reset the 1-minute timer after a manual drag
}

function logoutUser() {
    // Session-only logout — the saved account (registeredUsername /
    // registeredPassword) is kept so the user doesn't have to sign up again.
    location.reload();
}


function executeAdminLogin() {
    const userField = document.getElementById('admin-username-field');
    const passField = document.getElementById('admin-password-field');
    const errorAlertContainer = document.getElementById('admin-login-error-message');

    if (!userField || !passField) return;

    const inputUser = userField.value.trim();
    const inputPass = passField.value;

    if (inputUser === "admin" && inputPass === "admin123") {
        if (errorAlertContainer) errorAlertContainer.style.display = "none";
        
        // Hide initial main page elements and overlays
        const mainElem = document.querySelector('main');
        if (mainElem) mainElem.style.display = 'none';

        closeAdminLogin();

        const landingNavbar = document.querySelector('.navbar');
        if (landingNavbar) landingNavbar.style.display = 'none';

        // Show Admin Page (the real dashboard markup already in index.html —
        // do NOT overwrite it with a fake copy here, that was destroying the
        // sidebar and its Orders button on every login)
        const adminPage = document.getElementById('admin-page');
        if (adminPage) {
            adminPage.style.display = 'flex';
        }

        initPrescriptionChat('admin');
        showAdminDashboard();
    } else {
        if (errorAlertContainer) {
            errorAlertContainer.style.display = "block";
        }
    }
}

function logoutAdmin() {
    const adminPage = document.getElementById('admin-page');
    if (adminPage) adminPage.style.display = 'none';

    const mainElem = document.querySelector('main');
    if (mainElem) mainElem.style.display = 'block';

    hidePrescriptionChat();

    // Return to main user view (also restores the navbar)
    showHome();
}

// ==========================================================================
// ADMIN DASHBOARD CONTROLS (Dark Mode & Metric Filters)
// ==========================================================================

// 1. Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}

// 2. Metric Data Store
const metricData = {
    invites: { daily: "42", monthly: "1,245", yearly: "14,890" },
    orders: { daily: "280", monthly: "8,430", yearly: "101,160" },
    customers: { daily: "15", monthly: "3,120", yearly: "37,440" }
};

// 3. Dropdown Menu Toggle
function toggleMetricDropdown(dropdownId) {
    // Close other open dropdowns first
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id !== dropdownId) menu.style.display = "none";
    });

    const menu = document.getElementById(dropdownId);
    if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
}

// 4. Update Metric Value & Period
function updateMetric(type, period) {
    const countElem = document.getElementById(`${type}-count`);
    const periodElem = document.getElementById(`${type}-period`);

    if (countElem && metricData[type][period]) {
        countElem.textContent = metricData[type][period];
    }

    if (periodElem) {
        const periodText = period.charAt(0).toUpperCase() + period.slice(1);
        periodElem.textContent = `${periodText} Period`;
    }

    // Hide dropdown after selection
    const dropdown = document.getElementById(`${type}-dropdown`);
    if (dropdown) dropdown.style.display = "none";
}

// Close dropdowns when clicking anywhere outside
document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("three-dots-btn")) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = "none";
        });
    }
});

// ==========================================================================
// SALES ANALYTICS & TOP SELLING DASHBOARD LOGIC
// ==========================================================================

const salesAnalyticsData = {
    monthly: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        values: [12000, 19000, 15000, 28000, 22000, 34000, 31000, 42000, 39000, 48000, 52000, 61000]
    },
    daily: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        values: [2400, 1800, 3200, 2900, 4500, 5800, 4100]
    },
    yearly: {
        labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
        values: [180000, 250000, 310000, 420000, 510000, 680000]
    }
};

const topSellingData = {
    monthly: [
        { name: "Biogesic 500mg", sales: "2,450 units", price: "₱ 11,025", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10" },
        { name: "Centrum Advance", sales: "1,820 units", price: "₱ 32,760", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10" },
        { name: "Enervon-C", sales: "1,540 units", price: "₱ 11,550", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xg5kuwsy2y8koPJ14Bj8G2K2puuzPVHR9aWwPb5r4A&s=10" },
        { name: "Advil 200mg", sales: "1,210 units", price: "₱ 10,890", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr18uwZ8RXPBU8kiNTOXaYjlLK7xCq0CH_uw8Tq9hEYA&s=10" }
    ],
    daily: [
        { name: "Biogesic 500mg", sales: "180 units", price: "₱ 810", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10" },
        { name: "Bioflu", sales: "130 units", price: "₱ 1,105", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtBYEKgpmLCemcDUuT4aqJHFZzGirno3IkqFA1U2Reg&s" },
        { name: "Medicol Advance", sales: "95 units", price: "₱ 760", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSozJauFZn4sg0vYBZvT_kD8PDfSz2i5YfuX_vZ4mTmpQ&s=10" }
    ],
    yearly: [
        { name: "Centrum Advance", sales: "24,500 units", price: "₱ 441,000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4qQJffe9TWNaPO8G_odSEFGXSMWcNPjkEZdg_IKQQw&s=10" },
        { name: "Biogesic 500mg", sales: "21,000 units", price: "₱ 94,500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bWfzlsj_U8EaXwTe1DG0E2OE-qfqX6C_qCIH5n6nrQ&s=10" },
        { name: "Conzace", sales: "18,200 units", price: "₱ 254,800", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFg7dpXE6WejZTTCzUG_l1cl26evvlnf6MJSmh4qnaA&s=10" }
    ]
};

let currentAnalyticsScale = 1;

function renderSalesAnalytics(period = 'monthly') {
    const data = salesAnalyticsData[period];
    if (!data) return;

    const linePath = document.getElementById('sales-line');
    const areaPath = document.getElementById('sales-area');
    const pointsGroup = document.getElementById('sales-points');
    const xLabelsGroup = document.getElementById('sales-x-labels');

    if (!linePath || !areaPath || !pointsGroup || !xLabelsGroup) return;

    pointsGroup.innerHTML = '';
    xLabelsGroup.innerHTML = '';

    const width = 540;
    const height = 150;
    const startX = 50;
    const startY = 30;

    const maxVal = Math.max(...data.values) * 1.15;
    const stepX = width / (data.values.length - 1);

    let pathD = '';
    let points = [];

    data.values.forEach((val, idx) => {
        const x = startX + idx * stepX;
        const y = startY + height - (val / maxVal) * height;
        points.push({ x, y, val, label: data.labels[idx] });

        if (idx === 0) {
            pathD += `M ${x} ${y}`;
        } else {
            const prevX = points[idx - 1].x;
            const prevY = points[idx - 1].y;
            const cp1X = prevX + (x - prevX) / 2;
            const cp2X = prevX + (x - prevX) / 2;
            pathD += ` C ${cp1X} ${prevY}, ${cp2X} ${y}, ${x} ${y}`;
        }

        // Draw X-Axis Label
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', 205);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#888');
        text.setAttribute('font-size', '11');
        text.setAttribute('font-weight', '600');
        text.textContent = data.labels[idx];
        xLabelsGroup.appendChild(text);
    });

    linePath.setAttribute('d', pathD);

    const firstX = points[0].x;
    const lastX = points[points.length - 1].x;
    const areaD = `${pathD} L ${lastX} ${startY + height} L ${firstX} ${startY + height} Z`;
    areaPath.setAttribute('d', areaD);

    // Draw interactive points for hover tooltips
    points.forEach((pt) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', pt.x);
        circle.setAttribute('cy', pt.y);
        circle.setAttribute('r', '4.5');
        circle.setAttribute('fill', '#e91e63');
        circle.setAttribute('class', 'analytics-dot');

        circle.addEventListener('mouseenter', (e) => showAnalyticsTooltip(e, pt));
        circle.addEventListener('mouseleave', hideAnalyticsTooltip);

        pointsGroup.appendChild(circle);
    });
}

function showAnalyticsTooltip(e, point) {
    const tooltip = document.getElementById('sales-tooltip');
    const valSpan = document.getElementById('tooltip-val');
    const viewport = document.getElementById('analytics-viewport');
    
    if (!tooltip || !valSpan || !viewport) return;

    valSpan.textContent = `${point.label}: ₱${point.val.toLocaleString()}`;
    tooltip.style.display = 'block';

    const rect = viewport.getBoundingClientRect();
    const svgPt = document.getElementById('sales-svg').createSVGPoint();
    svgPt.x = point.x;
    svgPt.y = point.y;

    // Position tooltip over point relative to container
    const xPct = (point.x / 600) * 100;
    const yPct = (point.y / 240) * 100;

    tooltip.style.left = `${xPct}%`;
    tooltip.style.top = `${yPct}%`;
}

function hideAnalyticsTooltip() {
    const tooltip = document.getElementById('sales-tooltip');
    if (tooltip) tooltip.style.display = 'none';
}

function zoomAnalytics(factor) {
    currentAnalyticsScale *= factor;
    if (currentAnalyticsScale < 0.6) currentAnalyticsScale = 0.6;
    if (currentAnalyticsScale > 2.5) currentAnalyticsScale = 2.5;

    const wrapper = document.getElementById('analytics-chart-wrapper');
    if (wrapper) {
        wrapper.style.transform = `scale(${currentAnalyticsScale})`;
    }
}

function resetZoomAnalytics() {
    currentAnalyticsScale = 1;
    const wrapper = document.getElementById('analytics-chart-wrapper');
    if (wrapper) {
        wrapper.style.transform = `scale(1)`;
    }
}

function updateSalesAnalyticsPeriod(period) {
    renderSalesAnalytics(period);
    const dropdown = document.getElementById('sales-analytics-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

function renderTopSelling(period = 'monthly') {
    const list = document.getElementById('top-selling-list');
    const data = topSellingData[period] || topSellingData['monthly'];
    if (!list) return;

    list.innerHTML = '';
    data.forEach((item) => {
        const div = document.createElement('div');
        div.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 6px 0;';
        div.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <img src="${item.img}" alt="${item.name}" style="width: 42px; height: 42px; border-radius: 8px; object-fit: cover; border: 1px solid rgba(0,0,0,0.06);">
                <div>
                    <div class="product-item-name" style="font-size: 14px; font-weight: 700; color: #212121;">${item.name}</div>
                    <div class="product-item-sub" style="font-size: 12px; color: #888;">${item.sales}</div>
                </div>
            </div>
            <div style="font-size: 14px; font-weight: 700; color: #e91e63;">${item.price}</div>
        `;
        list.appendChild(div);
    });
}

function updateTopSellingPeriod(period) {
    renderTopSelling(period);
    const dropdown = document.getElementById('top-selling-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

// Initialize charts on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderSalesAnalytics('monthly');
    renderTopSelling('monthly');
});

// ==========================================================================
// STORE ORDERS & PAYMENTS STATE MANAGEMENT
// ==========================================================================

let systemOrders = [
    { id: "ORD-1001", customer: "Hernandez", products: "Advil x2", total: 18.00, status: "Completed", date: new Date(Date.now() - 3 * 86400000).toISOString(), contact: "09171234567", email: "demo@pharmaclick.com", address: "123 Rizal St, Naga City", items: [{ name: "Advil", image: "https://cdn-icons-png.flaticon.com/128/2913/2913961.png", quantity: 2, price: 9.00 }] },
    { id: "ORD-1002", customer: "Jael", products: "Biogesic x5", total: 22.50, status: "Pending", date: new Date(Date.now() - 1 * 86400000).toISOString(), contact: "09281234567", email: "jael@pharmaclick.com", address: "45 Magsaysay Ave, Naga City", items: [{ name: "Biogesic", image: "https://cdn-icons-png.flaticon.com/128/2913/2913961.png", quantity: 5, price: 4.50 }] },
    { id: "ORD-1003", customer: "Bien", products: "Centrum Advance x1", total: 18.00, status: "Failed", date: new Date(Date.now() - 5 * 86400000).toISOString(), contact: "09391234567", email: "bien@pharmaclick.com", address: "78 Panganiban Dr, Naga City", items: [{ name: "Centrum Advance", image: "https://cdn-icons-png.flaticon.com/128/2913/2913961.png", quantity: 1, price: 18.00 }] }
];

// Call this global function when a customer purchases items from the main page.
// Returns the new order's ID so the checkout flow can show it to the user.
function triggerPurchaseFromMainPage(customerName, productListText, totalAmount, contact, email, itemsSnapshot, address) {
    const newOrder = {
        id: "ORD-" + Math.floor(1000 + Math.random() * 9000),
        customer: customerName || "Guest User",
        products: productListText || "Medicine Item",
        total: parseFloat(totalAmount) || 0.00,
        status: "Completed", // Default successful checkout
        date: new Date().toISOString(),
        contact: (contact || "").trim(),
        email: (email || "").trim(),
        address: (address || "").trim(),
        items: Array.isArray(itemsSnapshot) ? itemsSnapshot : []
    };

    systemOrders.unshift(newOrder); // Add to beginning of orders list
    updateDashboardStoreMetrics();
    return newOrder.id;
}

// Recalculates metrics and updates dashboard visuals
function updateDashboardStoreMetrics() {
    let completedTotal = 0, completedCount = 0;
    let pendingTotal = 0, pendingCount = 0;
    let failedTotal = 0, failedCount = 0;

    systemOrders.forEach(order => {
        if (order.status === "Completed") {
            completedTotal += order.total;
            completedCount++;
        } else if (order.status === "Pending") {
            pendingTotal += order.total;
            pendingCount++;
        } else if (order.status === "Failed") {
            failedTotal += order.total;
            failedCount++;
        }
    });

    // Update payment metric cards
    const completedValEl = document.getElementById("completed-payments-val");
    const completedCntEl = document.getElementById("completed-payments-count");
    const pendingValEl = document.getElementById("pending-payments-val");
    const pendingCntEl = document.getElementById("pending-payments-count");
    const failedValEl = document.getElementById("failed-payments-val");
    const failedCntEl = document.getElementById("failed-payments-count");

    if (completedValEl) completedValEl.textContent = `₱${completedTotal.toFixed(2)}`;
    if (completedCntEl) completedCntEl.textContent = `${completedCount} orders completed`;
    if (pendingValEl) pendingValEl.textContent = `₱${pendingTotal.toFixed(2)}`;
    if (pendingCntEl) pendingCntEl.textContent = `${pendingCount} orders pending`;
    if (failedValEl) failedValEl.textContent = `₱${failedTotal.toFixed(2)}`;
    if (failedCntEl) failedCntEl.textContent = `${failedCount} orders failed`;

    // Refresh orders table (Dashboard) and Recent Sales table (Sales page) —
    // both read from the same systemOrders array, so a purchase on the main
    // page instantly shows up in both places.
    renderLatestOrdersTable();
    renderRecentSalesTable();
    renderPaymentListTable();
}

// Renders latest orders into the dashboard table
function renderLatestOrdersTable() {
    const tbody = document.getElementById("latest-orders-tbody");
    if (!tbody) return;

    if (systemOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: #888;">No recent orders recorded.</td></tr>`;
        return;
    }

    tbody.innerHTML = systemOrders.map((order, index) => {
        let badgeStyle = "";
        if (order.status === "Completed") badgeStyle = "background: #fce4ec; color: #c2185b;";
        else if (order.status === "Pending") badgeStyle = "background: #fff8e1; color: #f57f17;";
        else badgeStyle = "background: #ffebee; color: #c62828;";

        return `
            <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px; font-weight: bold; color: #d81b60;">${order.id}</td>
                <td style="padding: 12px; color: #333;">${order.customer}</td>
                <td style="padding: 12px; color: #666;">${order.products}</td>
                <td style="padding: 12px; font-weight: bold; color: #333;">₱${order.total.toFixed(2)}</td>
                <td style="padding: 12px;">
                    <span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; ${badgeStyle}">
                        ${order.status}
                    </span>
                </td>
                <td style="padding: 12px;">
                    <select onchange="changeOrderStatus(${index}, this.value)" style="padding: 4px 8px; border-radius: 6px; border: 1px solid #e0e0e0; font-size: 12px; cursor: pointer; color: #333;">
                        <option value="Completed" ${order.status === 'Completed' ? 'selected' : ''}>Completed</option>
                        <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Failed" ${order.status === 'Failed' ? 'selected' : ''}>Failed</option>
                    </select>
                </td>
            </tr>
        `;
    }).join("");
}

// Renders the same order data into the Sales page's "Recent Sales" table
// (copied from renderLatestOrdersTable, just targeting a different tbody).
function renderRecentSalesTable() {
    const tbody = document.getElementById("recent-sales-tbody");
    if (!tbody) return;

    if (systemOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: #888;">No recent orders recorded.</td></tr>`;
        return;
    }

    tbody.innerHTML = systemOrders.map((order, index) => {
        let badgeStyle = "";
        if (order.status === "Completed") badgeStyle = "background: #fce4ec; color: #c2185b;";
        else if (order.status === "Pending") badgeStyle = "background: #fff8e1; color: #f57f17;";
        else badgeStyle = "background: #ffebee; color: #c62828;";

        return `
            <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px; font-weight: bold; color: #d81b60;">${order.id}</td>
                <td style="padding: 12px; color: #333;">${order.customer}</td>
                <td style="padding: 12px; color: #666;">${order.products}</td>
                <td style="padding: 12px; font-weight: bold; color: #333;">₱${order.total.toFixed(2)}</td>
                <td style="padding: 12px;">
                    <span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; ${badgeStyle}">
                        ${order.status}
                    </span>
                </td>
                <td style="padding: 12px;">
                    <select onchange="changeOrderStatus(${index}, this.value)" style="padding: 4px 8px; border-radius: 6px; border: 1px solid #e0e0e0; font-size: 12px; cursor: pointer; color: #333;">
                        <option value="Completed" ${order.status === 'Completed' ? 'selected' : ''}>Completed</option>
                        <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                        <option value="Failed" ${order.status === 'Failed' ? 'selected' : ''}>Failed</option>
                    </select>
                </td>
            </tr>
        `;
    }).join("");
}

// Allows direct status updating from the dashboard table
function changeOrderStatus(orderIndex, newStatus) {
    if (systemOrders[orderIndex]) {
        systemOrders[orderIndex].status = newStatus;
        updateDashboardStoreMetrics();
    }
}

// Initialize state on script load
document.addEventListener("DOMContentLoaded", () => {
    updateDashboardStoreMetrics();
});

// ==========================================================================
// SALES METRICS DATA & DROPDOWN UPDATE LOGIC
// ==========================================================================

const salesMetricsData = {
    antibiotics: {
        daily: "12",
        monthly: "342",
        yearly: "4,105"
    },
    profits: {
        daily: "₱1,850.00",
        monthly: "₱45,210.00",
        yearly: "₱542,500.00"
    },
    cost: {
        daily: "₱750.00",
        monthly: "₱18,750.00",
        yearly: "₱225,000.00"
    },
    aov: {
        daily: "₱310.00",
        monthly: "₱350.00",
        yearly: "₱385.00"
    }
};

function updateSalesMetric(metricKey, period) {
    const countElement = document.getElementById(`${metricKey}-count`);
    const periodElement = document.getElementById(`${metricKey}-period`);
    const dropdownElement = document.getElementById(`${metricKey}-dropdown`);

    if (countElement && salesMetricsData[metricKey] && salesMetricsData[metricKey][period]) {
        countElement.textContent = salesMetricsData[metricKey][period];
    }

    if (periodElement) {
        const periodText = period.charAt(0).toUpperCase() + period.slice(1) + " Period";
        periodElement.textContent = periodText;
    }

    if (dropdownElement) {
        dropdownElement.style.display = "none";
    }
}

// Hides every admin page view and returns handles used by each show* function.
function getAdminViews() {
    return {
        dashboardView: document.querySelector('#admin-page main .admin-topbar + div'),
        salesView: document.getElementById('admin-sales-view'),
        ordersView: document.getElementById('admin-orders-view'),
        productsView: document.getElementById('admin-products-view'),
        paymentsView: document.getElementById('admin-payments-view'),
        topbarTitle: document.querySelector('.admin-topbar h1')
    };
}

function hideAllAdminViews() {
    const v = getAdminViews();
    if (v.dashboardView) v.dashboardView.style.display = 'none';
    if (v.salesView) v.salesView.style.display = 'none';
    if (v.ordersView) v.ordersView.style.display = 'none';
    if (v.productsView) v.productsView.style.display = 'none';
    if (v.paymentsView) v.paymentsView.style.display = 'none';
    return v;
}

// Toggles the highlighted state on the sidebar links to match the active page.
function setActiveSidebarLink(linkId) {
    document.querySelectorAll('.admin-sidebar-menu .sidebar-item').forEach(link => {
        link.classList.remove('active');
        link.style.background = 'transparent';
        link.style.color = '#a2a3b7';
    });
    const activeLink = document.getElementById(linkId);
    if (activeLink) {
        activeLink.classList.add('active');
        activeLink.style.background = '#2b2b40';
        activeLink.style.color = '#fff';
    }
}

function showAdminSales() {
    const v = hideAllAdminViews();
    if (v.salesView) v.salesView.style.display = 'block';
    if (v.topbarTitle) v.topbarTitle.textContent = 'Sales Overview';
    setActiveSidebarLink('sidebar-sales-link');

    // Make sure Recent Sales shows the latest orders the moment the page opens
    renderRecentSalesTable();
}

function showAdminDashboard() {
    const v = hideAllAdminViews();
    if (v.dashboardView) v.dashboardView.style.display = 'block';
    if (v.topbarTitle) v.topbarTitle.textContent = 'Dashboard';
    setActiveSidebarLink('sidebar-dashboard-link');
}

function showAdminOrders() {
    const v = hideAllAdminViews();
    if (v.ordersView) v.ordersView.style.display = 'block';
    if (v.topbarTitle) v.topbarTitle.textContent = 'Orders';
    setActiveSidebarLink('sidebar-orders-link');

    renderOrderListTable();
}

function showAdminProducts() {
    const v = hideAllAdminViews();
    if (v.productsView) v.productsView.style.display = 'block';
    if (v.topbarTitle) v.topbarTitle.textContent = 'Products';
    setActiveSidebarLink('sidebar-products-link');

    renderProductCategoryCards('monthly');
    renderProductListTable();
}

function showAdminPayments() {
    const v = hideAllAdminViews();
    if (v.paymentsView) v.paymentsView.style.display = 'block';
    if (v.topbarTitle) v.topbarTitle.textContent = 'Payments';
    setActiveSidebarLink('sidebar-payments-link');

    renderPaymentListTable();
}

// Fills the Order List table on the admin Orders page from systemOrders
// (the same store shared with the Dashboard and Sales tables).
function renderOrderListTable() {
    const tbody = document.getElementById('order-list-tbody');
    if (!tbody) return;

    if (systemOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 20px; color: #888;">No orders recorded.</td></tr>`;
        return;
    }

    tbody.innerHTML = systemOrders.map(order => {
        let statusStyle = "";
        if (order.status === "Completed") statusStyle = "background: #fce4ec; color: #c2185b;";
        else if (order.status === "Pending") statusStyle = "background: #fff8e1; color: #f57f17;";
        else statusStyle = "background: #ffebee; color: #c62828;";

        const paymentStatus = order.status === "Completed" ? "Paid" : order.status === "Pending" ? "Unpaid" : "Failed";
        const orderDate = new Date(order.date).toLocaleDateString();

        return `
            <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px; font-weight: bold; color: #d81b60;">${order.id}</td>
                <td style="padding: 12px; color: #333;">${order.customer}</td>
                <td style="padding: 12px; color: #666;">${orderDate}</td>
                <td style="padding: 12px; color: #666;">${order.products}</td>
                <td style="padding: 12px; font-weight: bold; color: #333;">₱${order.total.toFixed(2)}</td>
                <td style="padding: 12px; color: #333;">${paymentStatus}</td>
                <td style="padding: 12px;">
                    <span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; ${statusStyle}">${order.status}</span>
                </td>
                <td style="padding: 12px; color: #bbb; font-size: 12px;">—</td>
            </tr>
        `;
    }).join('');
}

// ==========================================================================
// PRODUCTS PAGE: SUMMARY CARDS, CATEGORY CARDS & PRODUCT LIST
// ==========================================================================

// Daily/Monthly/Yearly figures for the 3 top summary cards.
const productSummaryData = {
    'total-products': { daily: "18,940", monthly: "20,120", yearly: "24,760" },
    'low-stock': { daily: "95", monthly: "120", yearly: "310" },
    'out-of-stock': { daily: "60", monthly: "80", yearly: "205" }
};

function updateProductMetric(type, period) {
    const countElem = document.getElementById(`${type}-count`);
    if (countElem && productSummaryData[type] && productSummaryData[type][period]) {
        countElem.textContent = productSummaryData[type][period];
    }
    const dropdown = document.getElementById(`${type}-dropdown`);
    if (dropdown) dropdown.style.display = 'none';
}

// Category cards: count + trend for each period. First entry renders as the
// featured (highlighted) card, matching the Antibiotics tile in the design.
const productCategoryData = [
    { key: 'antibiotics', name: 'Antibiotics', icon: '💊', featured: true,
        daily: { count: "35", trend: "+2%", up: true }, monthly: { count: "200", trend: "+3%", up: true }, yearly: { count: "2,340", trend: "+8%", up: true } },
    { key: 'pain-relievers', name: 'Pain Relievers', icon: '🩹',
        daily: { count: "9", trend: "+0.4%", up: false }, monthly: { count: "70", trend: "+0.6%", up: false }, yearly: { count: "860", trend: "+1.2%", up: true } },
    { key: 'vitamins', name: 'Vitamins & Supplements', icon: '🧴',
        daily: { count: "12", trend: "+8%", up: true }, monthly: { count: "90", trend: "+10%", up: true }, yearly: { count: "1,050", trend: "+14%", up: true } },
    { key: 'antiviral', name: 'Antiviral Drugs', icon: '🧬',
        daily: { count: "8", trend: "+1%", up: false }, monthly: { count: "75", trend: "+2%", up: false }, yearly: { count: "890", trend: "+5%", up: true } },
    { key: 'diabetes', name: 'Diabetes Care', icon: '💉',
        daily: { count: "4", trend: "+10%", up: true }, monthly: { count: "30", trend: "+10%", up: true }, yearly: { count: "365", trend: "+12%", up: true } },
    { key: 'respiratory', name: 'Respiratory Medicines', icon: '🫁',
        daily: { count: "7", trend: "+10%", up: true }, monthly: { count: "60", trend: "+10%", up: true }, yearly: { count: "720", trend: "+9%", up: true } },
    { key: 'allergy', name: 'Allergy Medication', icon: '🤧',
        daily: { count: "10", trend: "+10%", up: true }, monthly: { count: "80", trend: "+10%", up: true }, yearly: { count: "960", trend: "+11%", up: true } },
    { key: 'cardiovascular', name: 'Cardiovascular', icon: '❤️',
        daily: { count: "5", trend: "+10%", up: true }, monthly: { count: "40", trend: "+10%", up: true }, yearly: { count: "480", trend: "+13%", up: true } }
];

function renderProductCategoryCards(period = 'monthly') {
    const grid = document.getElementById('product-category-grid');
    if (!grid) return;

    grid.innerHTML = productCategoryData.map(cat => {
        const data = cat[period];
        const arrow = data.up ? '↑' : '↓';
        const dropdownId = `${cat.key}-dropdown`;

        if (cat.featured) {
            return `
                <div class="metric-card-featured" style="background: linear-gradient(135deg, #4facfe 0%, #3b8ef0 100%); color: #fff; padding: 24px; border-radius: 12px; position: relative; box-shadow: 0 8px 20px rgba(59,142,240,0.25);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 15px; font-weight: 700;">${cat.name}</span>
                        <button class="three-dots-btn" onclick="toggleMetricDropdown('${dropdownId}')" style="background: none; border: none; font-size: 20px; cursor: pointer; color: #fff;">⋮</button>
                    </div>
                    <div class="dropdown-menu" id="${dropdownId}" style="display: none; position: absolute; right: 20px; top: 50px; background: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10; color: #333;">
                        <div onclick="updateProductCategoryPeriod('${cat.key}', 'daily')" style="padding: 8px 16px; cursor: pointer; font-size: 13px;">Daily</div>
                        <div onclick="updateProductCategoryPeriod('${cat.key}', 'monthly')" style="padding: 8px 16px; cursor: pointer; font-size: 13px;">Monthly</div>
                        <div onclick="updateProductCategoryPeriod('${cat.key}', 'yearly')" style="padding: 8px 16px; cursor: pointer; font-size: 13px;">Yearly</div>
                    </div>
                    <h2 style="font-size: 34px; margin: 18px 0 14px 0;">${data.count}</h2>
                    <span style="background: rgba(255,255,255,0.25); padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">${arrow} ${data.trend} Since Last Week</span>
                </div>
            `;
        }

        const trendColor = data.up ? '#2e7d32' : '#c62828';
        const trendBg = data.up ? '#e6f4ea' : '#fdecea';

        return `
            <div class="metric-card" style="background: #ffffff; padding: 24px; border-radius: 12px; position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 15px; font-weight: 700; color: #212121;" class="card-heading">${cat.name}</span>
                    <button class="three-dots-btn" onclick="toggleMetricDropdown('${dropdownId}')" style="background: none; border: none; font-size: 20px; cursor: pointer; color: #888;">⋮</button>
                </div>
                <div class="dropdown-menu" id="${dropdownId}" style="display: none; position: absolute; right: 20px; top: 50px; background: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 10;">
                    <div onclick="updateProductCategoryPeriod('${cat.key}', 'daily')" style="padding: 8px 16px; cursor: pointer; font-size: 13px;">Daily</div>
                    <div onclick="updateProductCategoryPeriod('${cat.key}', 'monthly')" style="padding: 8px 16px; cursor: pointer; font-size: 13px;">Monthly</div>
                    <div onclick="updateProductCategoryPeriod('${cat.key}', 'yearly')" style="padding: 8px 16px; cursor: pointer; font-size: 13px;">Yearly</div>
                </div>
                <h2 style="font-size: 30px; margin: 16px 0 12px 0; color: #212121;">${data.count}</h2>
                <span style="background: ${trendBg}; color: ${trendColor}; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700;">${arrow} ${data.trend}</span>
                <span style="font-size: 12px; color: #888; margin-left: 6px;">Since Last Week</span>
            </div>
        `;
    }).join('');
}

// Re-renders every category card for the chosen period (keeps all cards in sync).
let currentProductPeriod = 'monthly';
function updateProductCategoryPeriod(categoryKey, period) {
    currentProductPeriod = period;
    renderProductCategoryCards(period);
}

// Underlying inventory rows for the Product List table at the bottom of the page.
const productsList = [
    { id: "PRD-0001", name: "Amoxicillin 500mg", category: "Antibiotics", stock: 420, price: 8.50 },
    { id: "PRD-0002", name: "Biogesic 500mg", category: "Pain Relievers", stock: 15, price: 4.50 },
    { id: "PRD-0003", name: "Centrum Advance", category: "Vitamins & Supplements", stock: 260, price: 18.00 },
    { id: "PRD-0004", name: "Tamiflu 75mg", category: "Antiviral Drugs", stock: 0, price: 32.00 },
    { id: "PRD-0005", name: "Metformin 500mg", category: "Diabetes Care", stock: 180, price: 6.20 },
    { id: "PRD-0006", name: "Ventolin Inhaler", category: "Respiratory Medicines", stock: 8, price: 15.75 },
    { id: "PRD-0007", name: "Cetirizine 10mg", category: "Allergy Medication", stock: 95, price: 3.10 },
    { id: "PRD-0008", name: "Atorvastatin 20mg", category: "Cardiovascular", stock: 0, price: 9.90 }
];

function renderProductListTable() {
    const tbody = document.getElementById('product-list-tbody');
    if (!tbody) return;

    if (productsList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px; color: #888;">No products recorded.</td></tr>`;
        return;
    }

    tbody.innerHTML = productsList.map(p => {
        let status = "In Stock", style = "background: #e6f4ea; color: #2e7d32;";
        if (p.stock === 0) { status = "Out of Stock"; style = "background: #fdecea; color: #c62828;"; }
        else if (p.stock <= 20) { status = "Low Stock"; style = "background: #fff8e1; color: #f57f17;"; }

        return `
            <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px; font-weight: bold; color: #d81b60;">${p.id}</td>
                <td style="padding: 12px; color: #333;">${p.name}</td>
                <td style="padding: 12px; color: #666;">${p.category}</td>
                <td style="padding: 12px; color: #666;">${p.stock}</td>
                <td style="padding: 12px; font-weight: bold; color: #333;">₱${p.price.toFixed(2)}</td>
                <td style="padding: 12px;"><span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; ${style}">${status}</span></td>
            </tr>
        `;
    }).join('');
}

// ==========================================================================
// PAYMENTS PAGE: SUMMARY CARDS & PAYMENT LIST TABLE
// ==========================================================================

const paymentSummaryData = {
    'completed-payment': {
        daily: { revenue: "$3,200", count: "28" },
        monthly: { revenue: "$25,000", count: "200" },
        yearly: { revenue: "$298,000", count: "2,410" }
    },
    'pending-payment': {
        daily: { revenue: "$1,100", count: "6" },
        monthly: { revenue: "$10,000", count: "40" },
        yearly: { revenue: "$118,000", count: "480" }
    },
    'failed-payment': {
        daily: { revenue: "$300", count: "1" },
        monthly: { revenue: "$5,000", count: "5" },
        yearly: { revenue: "$52,000", count: "58" }
    }
};

function updatePaymentMetric(type, period) {
    const data = paymentSummaryData[type] && paymentSummaryData[type][period];
    if (!data) return;

    const revenueElem = document.getElementById(`${type}-revenue`);
    const countElem = document.getElementById(`${type}-count`);
    if (revenueElem) revenueElem.textContent = `Revenue: ${data.revenue}`;
    if (countElem) countElem.textContent = data.count;

    const dropdown = document.getElementById(`${type}-dropdown`);
    if (dropdown) dropdown.style.display = 'none';
}

// Maps an order status to the label shown in the Payment Lists "Order Status" column.
function paymentStatusLabel(status) {
    if (status === "Completed") return { text: "Completed", style: "background: #e6f4ea; color: #2e7d32;" };
    if (status === "Pending") return { text: "Pending", style: "background: #fff8e1; color: #f57f17;" };
    if (status === "Failed") return { text: "In progress", style: "background: #fff3cd; color: #b8860b;" };
    return { text: status, style: "background: #eee; color: #666;" };
}

// Payment Lists reuses the shared systemOrders array (same data source as
// Dashboard/Sales/Orders) so a purchase on the main page shows up here too.
function renderPaymentListTable() {
    const tbody = document.getElementById('payment-list-tbody');
    if (!tbody) return;

    const searchInput = document.getElementById('payment-search-input');
    const entriesSelect = document.getElementById('payment-entries-select');
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const limit = entriesSelect ? parseInt(entriesSelect.value, 10) : 10;

    let rows = systemOrders.map((order, index) => ({
        ...order,
        transactionId: `#TX${121 + index}`
    }));

    if (searchTerm) {
        rows = rows.filter(o =>
            o.customer.toLowerCase().includes(searchTerm) ||
            o.id.toLowerCase().includes(searchTerm) ||
            o.products.toLowerCase().includes(searchTerm)
        );
    }

    rows = rows.slice(0, limit);

    if (rows.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 20px; color: #888;">No matching payments found.</td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(order => {
        const badge = paymentStatusLabel(order.status);
        const orderDate = new Date(order.date).toLocaleDateString();

        return `
            <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px; font-weight: bold; color: #d81b60;">${order.id}</td>
                <td style="padding: 12px; color: #333;">${order.customer}</td>
                <td style="padding: 12px; color: #666;">${orderDate}</td>
                <td style="padding: 12px; color: #666;">${order.products}</td>
                <td style="padding: 12px; font-weight: bold; color: #333;">₱${order.total.toFixed(2)}</td>
                <td style="padding: 12px; color: #666;">${order.transactionId}</td>
                <td style="padding: 12px;">
                    <span style="padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; ${badge.style}">${badge.text}</span>
                </td>
                <td style="padding: 12px; white-space: nowrap;">
                    <span style="cursor: pointer; margin-right: 10px;" title="View">👁️</span>
                    <span style="cursor: pointer; margin-right: 10px;" title="Delete" onclick="deletePaymentEntry('${order.id}')">🗑️</span>
                    <span style="cursor: pointer;" title="Share">↗️</span>
                </td>
            </tr>
        `;
    }).join('');
}

// Removes a single order from the shared store (also reflects on the
// Dashboard, Sales and Orders tables since they all read from systemOrders).
function deletePaymentEntry(orderId) {
    const idx = systemOrders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    systemOrders.splice(idx, 1);
    updateDashboardStoreMetrics();
    renderPaymentListTable();
}

// ==========================================================================
// UPDATED DARK MODE TOGGLE (Ensures text switches properly for Light/Dark Mode)
// ==========================================================================

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-theme');
    const adminMain = document.querySelector('.admin-content-area');
    const topbar = document.querySelector('.admin-topbar');
    const topbarTitle = document.querySelector('.admin-topbar h1');
    const cards = document.querySelectorAll('.metric-card, .analytics-card, .top-selling-card, .latest-orders-card');
    const headings = document.querySelectorAll('.metric-card h2, .card-heading');
    const dropdowns = document.querySelectorAll('.dropdown-menu');

    if (isDark) {
        if (adminMain) adminMain.style.backgroundColor = '#151521';
        if (topbar) {
            topbar.style.backgroundColor = '#1e1e2d';
            topbar.style.borderColor = '#2b2b40';
        }
        if (topbarTitle) topbarTitle.style.color = '#ffffff';

        cards.forEach(card => {
            card.style.backgroundColor = '#1e1e2d';
            card.style.color = '#ffffff';
        });

        headings.forEach(heading => {
            heading.style.color = '#ffffff';
        });

        dropdowns.forEach(dropdown => {
            dropdown.style.backgroundColor = '#2b2b40';
            dropdown.style.color = '#ffffff';
            dropdown.style.borderColor = '#3f3f5a';
        });
    } else {
        if (adminMain) adminMain.style.backgroundColor = '#f4f6f9';
        if (topbar) {
            topbar.style.backgroundColor = '#ffffff';
            topbar.style.borderColor = '#eef2f5';
        }
        if (topbarTitle) topbarTitle.style.color = '#212121';

        cards.forEach(card => {
            card.style.backgroundColor = '#ffffff';
            card.style.color = '#212121';
        });

        headings.forEach(heading => {
            heading.style.color = '#212121';
        });

        dropdowns.forEach(dropdown => {
            dropdown.style.backgroundColor = '#ffffff';
            dropdown.style.color = '#212121';
            dropdown.style.borderColor = '#ddd';
        });
    }
}

// ==========================================================================
// HOT PAGE NAVIGATION CONTROLLER
// ==========================================================================

/**
 * Displays the Hot Deals page and hides main page content sections.
 */
function showHotPage() {
    // Hide all main content sections (Home, Services, About, etc.)
    const mainSections = document.querySelectorAll('main > section');
    mainSections.forEach(section => {
        section.style.display = 'none';
    });

    // Hide Admin Page Dashboard if open
    const adminPage = document.getElementById('admin-page');
    if (adminPage) {
        adminPage.style.display = 'none';
    }

    // Display the Hot Deals Page
    const hotPage = document.getElementById('hot-page');
    if (hotPage) {
        hotPage.style.display = 'block';
    }

    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Returns user back to the main landing sections (Home).
 */
function showHome() {
    closeAllOverlays();
    const mainSections = document.querySelectorAll('main > section');
    mainSections.forEach(section => {
        if (
            section.id !== 'hot-page' && 
            section.id !== 'login-page' && 
            section.id !== 'signup-page' && 
            section.id !== 'admin-login-page'
        ) {
            // The hero section (#home) is a flex layout for centering its
            // content; forcing it to 'block' is what broke/overlapped the
            // navbar and hero text after logout.
            section.style.display = (section.id === 'home') ? 'flex' : 'block';
        } else {
            section.style.display = 'none';
        }
    });

    const adminPage = document.getElementById('admin-page');
    if (adminPage) {
        adminPage.style.display = 'none';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// PERMANENT SIDEBAR NAVIGATION (Medicines / Hot Deals / On Sale)
// Switches between the three panels inside the logged-in store page.
// ==========================================================================

// Central registry of every top-level "page" inside main-content-area, so
// each show*Page() function can hide all of them and reveal just one
// without repeating (and risking missing) an element lookup each time.
function getMainPageSections() {
    const mainPage = document.getElementById('main-page');
    return {
        market: mainPage ? mainPage.querySelector('.market-main-content') : null,
        hotPage: document.getElementById('main-hot-page'),
        salePage: document.getElementById('main-sale-page'),
        purchasePage: document.getElementById('purchase-page'),
        wishlistPage: document.getElementById('wishlist-page'),
        dictionaryPage: document.getElementById('main-dictionary-page'),
        trackOrderPage: document.getElementById('track-order-page')
    };
}

// Safety net: any full-screen overlay (Add to Cart modal, Cart popup,
// search dropdown) MUST be force-closed whenever the user navigates to a
// different page. Leaving one open in the background is what caused the
// "everything shows a pointer cursor but nothing is clickable" bug — the
// overlay was still sitting on top of the whole viewport intercepting
// every click, even though its content was no longer visible.
function closeAllOverlays() {
    const medModal = document.getElementById('medicine-modal-overlay');
    if (medModal) medModal.style.display = 'none';

    const cartPopup = document.getElementById('cart-popup-overlay');
    if (cartPopup) cartPopup.style.display = 'none';

    const searchDropdown = document.getElementById('search-dropdown');
    if (searchDropdown) searchDropdown.style.display = 'none';

    document.body.style.overflow = '';
}

// Extra safety net: pressing Escape anywhere always forces every overlay
// closed, so a stuck overlay never permanently blocks the page.
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllOverlays();
});

function hideAllMainPageSections() {
    closeAllOverlays();
    const sections = getMainPageSections();
    Object.values(sections).forEach(el => { if (el) el.style.display = 'none'; });
    return sections;
}

function showMedicinePage() {
    const sections = hideAllMainPageSections();
    if (sections.market) sections.market.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDictionaryPage() {
    const sections = hideAllMainPageSections();
    if (sections.dictionaryPage) sections.dictionaryPage.style.display = 'block';
    renderDictionaryPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainHotPage() {
    const sections = hideAllMainPageSections();
    if (sections.hotPage) sections.hotPage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainSalePage() {
    const sections = hideAllMainPageSections();
    if (sections.salePage) sections.salePage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPurchasePageContainer() {
    const sections = hideAllMainPageSections();
    if (sections.purchasePage) sections.purchasePage.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showWishlistPage() {
    const sections = hideAllMainPageSections();
    if (sections.wishlistPage) sections.wishlistPage.style.display = 'block';
    renderWishlistPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTrackOrderPage() {
    const sections = hideAllMainPageSections();
    closeCartPopup();
    if (sections.trackOrderPage) sections.trackOrderPage.style.display = 'block';
    renderTrackOrderLookup();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function logoutUser() {

    // NOTE: We intentionally do NOT remove 'registeredUsername' /
    // 'registeredPassword' here. Those represent the saved account,
    // not the active session — deleting them on logout was wiping
    // the user's account and forcing them to sign up again every time.

    const mainPage =
        document.getElementById('main-page');

    const mainElem =
        document.querySelector('main');

    const landingNavbar =
        document.querySelector('.navbar');

    if (mainPage) {
        mainPage.style.display = 'none';
    }

    if (mainElem) {
        mainElem.style.display = 'block';
    }

    if (landingNavbar) {
        landingNavbar.style.display = 'flex';
    }

    hidePrescriptionChat();

    showHome();
}

// ==========================================================================
// SHOPPING CART SYSTEM (persisted to localStorage, synced across pages)
// ==========================================================================

let cartItems = [];

function loadCart() {
    try {
        cartItems = JSON.parse(localStorage.getItem('pharmaclickCart')) || [];
    } catch (e) {
        cartItems = [];
    }
    updateCartBadge();
}

function saveCart() {
    localStorage.setItem('pharmaclickCart', JSON.stringify(cartItems));
    updateCartBadge();
}

function addToCart(product, quantity) {
    quantity = quantity || 1;
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    saveCart();
    // If the cart popup happens to be open, keep it in sync live.
    const popup = document.getElementById('cart-popup-overlay');
    if (popup && popup.style.display === 'flex') {
        renderCartPopup();
    }
}

function removeFromCart(productId, evt) {
    if (evt) evt.stopPropagation();
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCart();
    renderCartPopup();
}

function updateCartItemQty(productId, change, evt) {
    if (evt) evt.stopPropagation();
    const item = cartItems.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity < 1) {
        cartItems = cartItems.filter(i => i.id !== productId);
    }
    saveCart();
    renderCartPopup();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge-count');
    if (!badge) return;
    const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);
    if (totalCount > 0) {
        badge.textContent = totalCount > 99 ? '99+' : totalCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function showCartToast(message) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cart-toast';
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window._cartToastTimer);
    window._cartToastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
        showCartToast('Please fill out all fields before sending.');
        return;
    }

    // No backend wired up yet - simulate a successful send for now.
    showCartToast(`Thanks, ${name.split(' ')[0]}! Your message has been sent.`);
    document.getElementById('contact-form').reset();
}

function toggleCartPopup(evt) {
    if (evt) evt.stopPropagation();
    const overlay = document.getElementById('cart-popup-overlay');
    if (!overlay) return;
    if (overlay.style.display === 'flex') {
        closeCartPopup();
    } else {
        renderCartPopup();
        overlay.style.display = 'flex';
    }
}

function closeCartPopup() {
    const overlay = document.getElementById('cart-popup-overlay');
    if (overlay) overlay.style.display = 'none';
}

function renderCartPopup() {
    const panel = document.getElementById('cart-popup-panel');
    if (!panel) return;

    if (cartItems.length === 0) {
        panel.innerHTML = `
            <div class="cart-popup-header">
                <h3>Your Cart</h3>
                <button class="modal-close-btn" onclick="closeCartPopup()" style="position: static; font-size: 22px;">&times;</button>
            </div>
            <div class="cart-empty-state">
                <span style="font-size: 40px;">🛍️</span>
                <p>Your cart is empty.</p>
                <p style="font-size: 12.5px; color: #9a8590;">Add medicines from the store to see them here.</p>
            </div>
        `;
        return;
    }

    const rowsHtml = cartItems.map(item => `
        <div class="cart-item-row" onclick="goToPurchaseFromCart('${item.id}')">
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-unit-price">₱ ${item.price.toFixed(2)} each</span>
                <div class="cart-item-qty-row" onclick="event.stopPropagation();">
                    <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1, event)">−</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1, event)">+</button>
                </div>
            </div>
            <div class="cart-item-right">
                <span class="cart-item-subtotal">₱ ${(item.price * item.quantity).toFixed(2)}</span>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}', event)" aria-label="Remove">✕</button>
            </div>
        </div>
    `).join('');

    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

    panel.innerHTML = `
        <div class="cart-popup-header">
            <h3>Your Cart</h3>
            <button class="modal-close-btn" onclick="closeCartPopup()" style="position: static; font-size: 22px;">&times;</button>
        </div>
        <div class="cart-items-list">
            ${rowsHtml}
        </div>
        <div class="cart-popup-footer">
            <div class="cart-total-row">
                <span>Total</span>
                <span>₱ ${total.toFixed(2)}</span>
            </div>
            <button class="modal-add-cart-btn" onclick="checkoutAllCart()">Checkout All Items</button>
        </div>
    `;
}

function goToPurchaseFromCart(productId) {
    const item = cartItems.find(i => i.id === productId);
    if (!item) return;
    closeCartPopup();
    openPurchasePage([item]);
}

function checkoutAllCart() {
    if (cartItems.length === 0) return;
    closeCartPopup();
    openPurchasePage(cartItems.slice());
}

// ==========================================================================
// WISHLIST SYSTEM (persisted to localStorage, synced across pages)
// ==========================================================================

let wishlistItems = [];

function loadWishlist() {
    try {
        wishlistItems = JSON.parse(localStorage.getItem('pharmaclickWishlist')) || [];
    } catch (e) {
        wishlistItems = [];
    }
    updateWishlistBadge();
    syncWishlistButtons();
}

function saveWishlist() {
    localStorage.setItem('pharmaclickWishlist', JSON.stringify(wishlistItems));
    updateWishlistBadge();
}

function isWishlisted(productId) {
    return wishlistItems.some(item => item.id === productId);
}

// Toggles a product in/out of the wishlist. Works from any product card on
// any page (Browse Medicine, Hot Deals, On Sale, search results, or the
// Wishlist page itself) since every wishlist-btn carries the product id.
function toggleWishlist(productId, evt) {
    if (evt) evt.stopPropagation();

    const key = productId.toLowerCase().trim();

    if (isWishlisted(key)) {
        wishlistItems = wishlistItems.filter(item => item.id !== key);
    } else {
        const product = medicineDatabase[key] || buildSearchIndex().find(m => m.id === key);
        if (!product) return;
        wishlistItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description
        });
    }

    saveWishlist();
    syncWishlistButtons();

    const wishlistPage = document.getElementById('wishlist-page');
    if (wishlistPage && wishlistPage.style.display !== 'none') {
        renderWishlistPage();
    }
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge-count');
    if (!badge) return;
    const totalCount = wishlistItems.length;
    if (totalCount > 0) {
        badge.textContent = totalCount > 99 ? '99+' : totalCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// Finds every wishlist-btn currently in the DOM (Browse Medicine, Hot
// Deals, On Sale, search results, Wishlist page — wherever they appear)
// and marks it filled/red if that product is wishlisted, hollow otherwise.
function syncWishlistButtons() {
    document.querySelectorAll('.wishlist-btn[data-wishlist-id]').forEach(btn => {
        const id = btn.getAttribute('data-wishlist-id');
        if (isWishlisted(id)) {
            btn.classList.add('active');
            btn.textContent = '♥';
        } else {
            btn.classList.remove('active');
            btn.textContent = '♡';
        }
    });
}

function renderWishlistPage() {
    const container = document.getElementById('wishlist-container');
    if (!container) return;

    if (wishlistItems.length === 0) {
        container.innerHTML = `
            <p style="padding: 40px 20px; color: #888; text-align: center; width: 100%;">
                Your wishlist is empty. Tap the ♡ on any medicine to save it here.
            </p>
        `;
        return;
    }

    container.innerHTML = `<div class="medicine-row" id="wishlist-row"></div>`;
    const row = document.getElementById('wishlist-row');

    wishlistItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('onclick', `openMedicineModal('${item.id}')`);
        card.innerHTML = `
            <div class="product-img-box">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3 class="product-name">${item.name}</h3>
            <span class="product-price">₱ ${item.price.toFixed(2)}</span>
            <div class="product-actions" onclick="event.stopPropagation();">
                <button class="wishlist-btn active" data-wishlist-id="${item.id}" aria-label="Remove from Wishlist" onclick="toggleWishlist('${item.id}', event)">♥</button>
                <button class="add-cart-btn" onclick="openMedicineModal('${item.id}')">Add to Cart</button>
            </div>
        `;
        row.appendChild(card);
    });
}

// Close the cart popup / search dropdown when clicking anywhere else
document.addEventListener('click', (evt) => {
    const cartOverlay = document.getElementById('cart-popup-overlay');
    const cartBtn = document.getElementById('cart-icon-btn');
    if (cartOverlay && cartOverlay.style.display === 'flex') {
        if (!cartOverlay.contains(evt.target) && evt.target !== cartBtn && !(cartBtn && cartBtn.contains(evt.target))) {
            closeCartPopup();
        }
    }

    const searchWrapper = document.getElementById('search-bar-wrapper');
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown && dropdown.style.display !== 'none') {
        if (searchWrapper && !searchWrapper.contains(evt.target)) {
            dropdown.style.display = 'none';
        }
    }
});

// ==========================================================================
// PURCHASE PAGE (checkout for one item or the whole cart)
// ==========================================================================

let currentPurchaseItems = [];

function openPurchasePage(items) {
    currentPurchaseItems = items;
    renderPurchasePage();
    showPurchasePageContainer();
}

function renderPurchasePage() {
    const container = document.getElementById('purchase-page-content');
    if (!container) return;

    if (!currentPurchaseItems || currentPurchaseItems.length === 0) {
        container.innerHTML = `<p style="padding: 40px; text-align: center; color: #888;">No items selected for purchase.</p>`;
        return;
    }

    const itemsHtml = currentPurchaseItems.map(item => `
        <div class="purchase-item-row">
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-unit-price">₱ ${item.price.toFixed(2)} × ${item.quantity}</span>
            </div>
            <div class="cart-item-right">
                <span class="cart-item-subtotal">₱ ${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    const total = currentPurchaseItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const deliveryFee = 49.00;
    const grandTotal = total + deliveryFee;

    container.innerHTML = `
        <div class="purchase-page-wrapper">
            <div class="purchase-page-header">
                <button class="back-to-store-btn" onclick="showMedicinePage()">&larr; Back to Store</button>
                <h2 class="section-title" style="margin: 0;">Purchase Page</h2>
            </div>

            <div class="purchase-grid">
                <div class="purchase-summary-card">
                    <h3 class="purchase-card-title">Order Summary</h3>
                    <div class="purchase-items-list">
                        ${itemsHtml}
                    </div>
                    <div class="purchase-cost-breakdown">
                        <div class="cost-line"><span>Subtotal</span><span>₱ ${total.toFixed(2)}</span></div>
                        <div class="cost-line"><span>Delivery Fee</span><span>₱ ${deliveryFee.toFixed(2)}</span></div>
                        <div class="cost-line cost-line-total"><span>Total</span><span>₱ ${grandTotal.toFixed(2)}</span></div>
                    </div>
                </div>

                <div class="purchase-details-card">
                    <h3 class="purchase-card-title">Delivery & Payment Details</h3>

                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" id="purchase-name" placeholder="Enter your full name">
                    </div>

                    <div class="form-group">
                        <label>Delivery Address</label>
                        <input type="text" id="purchase-address" placeholder="House no., street, barangay, city">
                    </div>

                    <div class="form-group">
                        <label>Contact Number</label>
                        <input type="text" id="purchase-contact" placeholder="e.g. 09xxxxxxxxx">
                    </div>

                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" id="purchase-email" placeholder="e.g. juan.delacruz@email.com">
                    </div>

                    <div class="form-group">
                        <label>Payment Method</label>
                        <div class="payment-method-options">
                            <label class="payment-option">
                                <input type="radio" name="payment-method" value="Cash on Delivery" checked> Cash on Delivery
                            </label>
                            <label class="payment-option">
                                <input type="radio" name="payment-method" value="GCash"> GCash
                            </label>
                            <label class="payment-option">
                                <input type="radio" name="payment-method" value="Debit/Credit Card"> Debit/Credit Card
                            </label>
                        </div>
                    </div>

                    <div id="purchase-error-message" style="display:none; color:#c62828; font-weight:bold; font-size: 13px; margin-bottom: 12px;"></div>

                    <button class="modal-add-cart-btn" onclick="placeOrder()">
                        Place Order • ₱ ${grandTotal.toFixed(2)}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function placeOrder() {
    const nameField = document.getElementById('purchase-name');
    const addressField = document.getElementById('purchase-address');
    const contactField = document.getElementById('purchase-contact');
    const emailField = document.getElementById('purchase-email');
    const errorBox = document.getElementById('purchase-error-message');

    const name = nameField ? nameField.value.trim() : '';
    const address = addressField ? addressField.value.trim() : '';
    const contact = contactField ? contactField.value.trim() : '';
    const email = emailField ? emailField.value.trim() : '';

    if (!name || !address || !contact || !email) {
        if (errorBox) {
            errorBox.textContent = '⚠ Please fill in your name, delivery address, contact number, and email address.';
            errorBox.style.display = 'block';
        }
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        if (errorBox) {
            errorBox.textContent = '⚠ Please enter a valid email address.';
            errorBox.style.display = 'block';
        }
        return;
    }

    if (errorBox) errorBox.style.display = 'none';

    const paymentRadio = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = paymentRadio ? paymentRadio.value : 'Cash on Delivery';

    const productListText = currentPurchaseItems.map(i => `${i.name} x${i.quantity}`).join(', ');
    const total = currentPurchaseItems.reduce((sum, i) => sum + i.price * i.quantity, 0) + 49.00;
    const itemsSnapshot = currentPurchaseItems.map(i => ({ name: i.name, image: i.image, quantity: i.quantity, price: i.price }));

    // Sync this purchase into the admin dashboard's Latest Orders table,
    // and keep a full snapshot so it can be looked up on the Track Order page.
    const newOrderId = triggerPurchaseFromMainPage(name, productListText, total, contact, email, itemsSnapshot, address);

    // Remove only the purchased items from the persistent cart.
    const purchasedIds = currentPurchaseItems.map(i => i.id);
    cartItems = cartItems.filter(i => !purchasedIds.includes(i.id));
    saveCart();

    alert(`✅ Order placed successfully!\n\nOrder ID: ${newOrderId}\nItems: ${productListText}\nPayment: ${paymentMethod}\nTotal: ₱${total.toFixed(2)}\n\nThank you, ${name}! You can track this order anytime using the location icon and Order ID ${newOrderId}.`);

    currentPurchaseItems = [];
    showMedicinePage();
}

// ==========================================================================
// TRACK ORDER PAGE (opened via the location icon in the nav)
// Step 1: look up an order by Order ID + Email or Phone (verified against
// the real purchase data stored in systemOrders).
// Step 2: show a live-style delivery timeline for that order.
// ==========================================================================

let trackOrderVerifyMode = 'email'; // 'email' | 'phone'
let currentTrackedOrder = null;

function renderTrackOrderLookup() {
    const container = document.getElementById('track-order-content');
    if (!container) return;

    trackOrderVerifyMode = 'email';
    currentTrackedOrder = null;

    container.innerHTML = `
        <div class="track-order-wrapper">
            <div class="track-order-lookup-card">
                <div class="track-order-icon">
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3.2"/>
                    </svg>
                </div>
                <h2 class="track-order-title">Track Your Order</h2>
                <p class="track-order-subtitle">Enter your Order ID and verify with the email or phone number used at checkout.</p>

                <div class="form-group">
                    <label>Order ID</label>
                    <input type="text" id="track-order-id" placeholder="e.g. ORD-1001" autocomplete="off">
                </div>

                <div class="track-mode-toggle">
                    <button type="button" id="track-mode-email-btn" class="track-mode-btn active" onclick="selectTrackVerifyMode('email')">
                        <span class="track-mode-dot"></span> Use Email
                    </button>
                    <button type="button" id="track-mode-phone-btn" class="track-mode-btn" onclick="selectTrackVerifyMode('phone')">
                        <span class="track-mode-dot"></span> Use Phone
                    </button>
                </div>

                <div class="form-group">
                    <label id="track-verify-label">Email Address</label>
                    <input type="text" id="track-verify-input" placeholder="e.g. juan.delacruz@email.com" autocomplete="off">
                </div>

                <div id="track-order-error" style="display:none; color:#c62828; font-weight:bold; font-size: 13px; margin-bottom: 12px;"></div>

                <button class="track-order-submit-btn" onclick="submitTrackOrderLookup()">Track Order</button>

                <p class="track-order-hint">Demo tip: try Order ID <strong>ORD-1001</strong> with email <strong>demo@pharmaclick.com</strong>, or place a real order first — your Order ID is shown in the confirmation.</p>
            </div>
        </div>
    `;
}

function selectTrackVerifyMode(mode) {
    trackOrderVerifyMode = mode;

    const emailBtn = document.getElementById('track-mode-email-btn');
    const phoneBtn = document.getElementById('track-mode-phone-btn');
    const label = document.getElementById('track-verify-label');
    const input = document.getElementById('track-verify-input');

    if (emailBtn) emailBtn.classList.toggle('active', mode === 'email');
    if (phoneBtn) phoneBtn.classList.toggle('active', mode === 'phone');

    if (mode === 'email') {
        if (label) label.textContent = 'Email Address';
        if (input) { input.placeholder = 'e.g. juan.delacruz@email.com'; input.type = 'text'; }
    } else {
        if (label) label.textContent = 'Phone Number';
        if (input) { input.placeholder = 'e.g. 09xxxxxxxxx'; input.type = 'tel'; }
    }
    if (input) input.value = '';
}

function submitTrackOrderLookup() {
    const idField = document.getElementById('track-order-id');
    const verifyField = document.getElementById('track-verify-input');
    const errorBox = document.getElementById('track-order-error');

    const rawId = idField ? idField.value.trim() : '';
    const verifyValue = verifyField ? verifyField.value.trim() : '';

    if (!rawId || !verifyValue) {
        if (errorBox) {
            errorBox.textContent = '⚠ Please enter both your Order ID and the requested contact detail.';
            errorBox.style.display = 'block';
        }
        return;
    }

    // Accept the ID whether typed as "1001" or "ORD-1001"
    let normalizedId = rawId.toUpperCase();
    if (!normalizedId.startsWith('ORD-')) {
        normalizedId = 'ORD-' + normalizedId.replace(/[^0-9]/g, '');
    }

    const order = systemOrders.find(o => o.id.toUpperCase() === normalizedId);

    if (!order) {
        if (errorBox) {
            errorBox.textContent = '❌ We couldn\'t find an order with that Order ID.';
            errorBox.style.display = 'block';
        }
        return;
    }

    let verified = false;
    if (trackOrderVerifyMode === 'email') {
        verified = order.email && order.email.toLowerCase() === verifyValue.toLowerCase();
    } else {
        const digitsIn = verifyValue.replace(/\D/g, '');
        const digitsOn = (order.contact || '').replace(/\D/g, '');
        verified = digitsOn.length > 0 && digitsIn === digitsOn;
    }

    if (!verified) {
        if (errorBox) {
            errorBox.textContent = `❌ That ${trackOrderVerifyMode === 'email' ? 'email' : 'phone number'} doesn't match our records for this order.`;
            errorBox.style.display = 'block';
        }
        return;
    }

    if (errorBox) errorBox.style.display = 'none';
    currentTrackedOrder = order;
    renderTrackOrderResults(order);
}

// Derives a 4-stage delivery timeline from the order's stored status/date,
// so tracking feels alive without needing a real backend.
function buildOrderTimeline(order) {
    const placed = new Date(order.date);
    const fmtDate = (d) => d.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    const addDays = (d, n) => new Date(d.getTime() + n * 86400000);

    const stages = [
        { key: 'prepared', label: 'Parcel Preparation', desc: 'Your parcel has been prepared and ready for pickup.', date: placed },
        { key: 'pickup', label: 'Pickup Confirmation', desc: 'Our delivery rider picked up the parcel from us.', date: addDays(placed, 1) },
        { key: 'warehouse', label: 'At Warehouse', desc: 'The package is now at the warehouse nearest your address.', date: addDays(placed, 2) },
        { key: 'delivered', label: 'Successfully Delivered', desc: 'Your parcel was delivered successfully by the delivery rider.', date: addDays(placed, 3) }
    ];

    let reachedIndex;
    if (order.status === 'Completed') reachedIndex = 3;
    else if (order.status === 'Pending') reachedIndex = 2;
    else reachedIndex = 0; // Failed / cancelled orders only got as far as preparation

    return stages.map((s, i) => ({ ...s, dateLabel: fmtDate(s.date), done: i <= reachedIndex, current: i === reachedIndex }))
        .slice(0, order.status === 'Failed' ? 1 : stages.length)
        .reverse();
}

function renderTrackOrderResults(order) {
    const container = document.getElementById('track-order-content');
    if (!container) return;

    const firstItem = (order.items && order.items[0]) || { name: order.products, image: 'https://cdn-icons-png.flaticon.com/128/2913/2913961.png', quantity: 1, price: order.total };
    const extraCount = (order.items && order.items.length > 1) ? order.items.length - 1 : 0;
    const placedDate = new Date(order.date);
    const daysAgo = Math.max(0, Math.floor((Date.now() - placedDate.getTime()) / 86400000));

    let progressStep; // 0-3, index of furthest reached stage
    let statusLabel;
    if (order.status === 'Completed') { progressStep = 3; statusLabel = 'Parcel Delivered'; }
    else if (order.status === 'Pending') { progressStep = 2; statusLabel = 'Parcel on Delivery'; }
    else { progressStep = 0; statusLabel = 'Order Cancelled'; }

    const stageIcons = [
        `<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/>`, // package
        `<path d="M3 16V6h11v10"/><path d="M14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/>`, // truck
        `<path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-6h6v6"/>`, // warehouse/building
        `<path d="M20 6L9 17l-5-5"/>` // check
    ];

    const stepsHtml = stageIcons.map((iconPath, i) => {
        const state = i < progressStep ? 'done' : (i === progressStep ? (order.status === 'Failed' ? 'failed' : 'done') : 'pending');
        return `
            <div class="track-step ${state}">
                <div class="track-step-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
                </div>
            </div>
            ${i < 3 ? `<div class="track-step-line ${i < progressStep ? 'done' : ''}"></div>` : ''}
        `;
    }).join('');

    const timeline = buildOrderTimeline(order);
    const timelineHtml = timeline.map(stage => `
        <div class="track-timeline-row ${stage.current ? 'current' : ''} ${!stage.done ? 'pending' : ''}">
            <div class="track-timeline-date">${stage.dateLabel}</div>
            <div class="track-timeline-marker">${stage.done ? '&#10003;' : ''}</div>
            <div class="track-timeline-body">
                <strong class="${stage.current ? 'current-label' : ''}">${stage.label}</strong>
                <p>${stage.desc}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="track-order-wrapper">
            <div class="track-order-results-card">
                <div class="track-results-header">
                    <button class="track-back-btn" onclick="renderTrackOrderLookup()">&larr; Track another order</button>
                    <div class="track-search-mini">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" id="track-search-mini-input" placeholder="Search another Order ID..." onkeydown="if(event.key==='Enter'){ renderTrackOrderLookup(); }">
                    </div>
                </div>

                <div class="track-item-summary">
                    <div class="cart-item-img"><img src="${firstItem.image}" alt="${firstItem.name}"></div>
                    <div class="cart-item-info">
                        <span class="cart-item-name">${firstItem.name}${extraCount > 0 ? ` + ${extraCount} more item${extraCount > 1 ? 's' : ''}` : ''}</span>
                        <span class="cart-item-unit-price">Order ${order.id} · ${daysAgo === 0 ? 'Placed today' : daysAgo + ' day' + (daysAgo > 1 ? 's' : '') + ' ago'}</span>
                    </div>
                    <div class="cart-item-right">
                        <span class="cart-item-subtotal">₱ ${order.total.toFixed(2)}</span>
                        <a href="javascript:void(0);" class="track-view-details-link" onclick="viewTrackOrderDetails()">View Details</a>
                    </div>
                </div>

                <div class="track-progress-bar">${stepsHtml}</div>
                <p class="track-status-label ${order.status === 'Failed' ? 'failed' : ''}">${statusLabel}</p>

                <h3 class="track-timeline-title">Order Status Details</h3>
                <div class="track-timeline">${timelineHtml}</div>
            </div>
        </div>
    `;
}

function viewTrackOrderDetails() {
    if (!currentTrackedOrder) return;
    const o = currentTrackedOrder;
    const itemLines = (o.items && o.items.length > 0)
        ? o.items.map(i => `• ${i.name} x${i.quantity} — ₱${(i.price * i.quantity).toFixed(2)}`).join('\n')
        : o.products;

    alert(`Order ${o.id}\n\nItems:\n${itemLines}\n\nDelivery Address: ${o.address || 'N/A'}\nTotal: ₱${o.total.toFixed(2)}\nStatus: ${o.status}`);
}

// ==========================================================================
// SEARCH BAR: live search + search history
// ==========================================================================

let searchHistory = [];
let defaultMedicineHTML = '';
let defaultBrowseTitle = 'Browse Medicine';

function captureDefaultMedicineHTML() {
    const container = document.getElementById('medicine-container');
    if (container) defaultMedicineHTML = container.innerHTML;
}

function loadSearchHistory() {
    try {
        searchHistory = JSON.parse(localStorage.getItem('pharmaclickSearchHistory')) || [];
    } catch (e) {
        searchHistory = [];
    }
}

function saveSearchHistory() {
    localStorage.setItem('pharmaclickSearchHistory', JSON.stringify(searchHistory));
}

function buildSearchIndex() {
    const map = {};
    Object.values(medicineDatabase).forEach(m => { map[m.id] = m; });
    Object.values(categoryMedicines).forEach(list => {
        list.forEach(m => { map[m.id] = m; });
    });
    return Object.values(map);
}

function addSearchHistoryEntry(query) {
    const trimmed = query.trim();
    if (trimmed.length < 2) return;
    searchHistory = searchHistory.filter(q => q.toLowerCase() !== trimmed.toLowerCase());
    searchHistory.unshift(trimmed);
    if (searchHistory.length > 8) searchHistory = searchHistory.slice(0, 8);
    saveSearchHistory();
    renderRecentSearchesBar();
}

function removeSearchHistoryEntry(query, evt) {
    if (evt) evt.stopPropagation();
    searchHistory = searchHistory.filter(q => q !== query);
    saveSearchHistory();
    renderRecentSearchesBar();
    handleSearchFocus();
}

function clearAllSearchHistory() {
    searchHistory = [];
    saveSearchHistory();
    renderRecentSearchesBar();
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

function renderRecentSearchesBar() {
    const section = document.getElementById('recent-searches-section');
    const bar = document.getElementById('recent-searches-bar');
    if (!section || !bar) return;

    if (searchHistory.length === 0) {
        section.style.display = 'none';
        bar.innerHTML = '';
        return;
    }

    section.style.display = 'block';
    bar.innerHTML = searchHistory.map(q => `
        <button class="history-chip" onclick="runHistorySearch('${q.replace(/'/g, "\\'")}')">
            <span>🕘 ${q}</span>
            <span class="history-chip-remove" onclick="removeSearchHistoryEntry('${q.replace(/'/g, "\\'")}', event)">✕</span>
        </button>
    `).join('');
}

function runHistorySearch(query) {
    const input = document.getElementById('main-search-input');
    if (input) input.value = query;
    executeSearch();
}

function handleSearchFocus() {
    const input = document.getElementById('main-search-input');
    if (!input) return;
    if (input.value.trim().length === 0) {
        renderHistoryDropdown();
    } else {
        handleSearchInput(input.value);
    }
}

function renderHistoryDropdown() {
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown) return;

    if (searchHistory.length === 0) {
        dropdown.style.display = 'none';
        return;
    }

    dropdown.innerHTML = `
        <div class="search-dropdown-label">Recent Searches</div>
        ${searchHistory.map(q => `
            <div class="search-suggestion-item" onclick="runHistorySearch('${q.replace(/'/g, "\\'")}')">
                <span>🕘 ${q}</span>
            </div>
        `).join('')}
    `;
    dropdown.style.display = 'block';
}

function handleSearchInput(value) {
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown) return;

    const query = value.trim().toLowerCase();
    if (query.length === 0) {
        renderHistoryDropdown();
        return;
    }

    const matches = buildSearchIndex().filter(m => m.name.toLowerCase().includes(query)).slice(0, 6);

    if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-dropdown-empty">No medicines found for "${value}"</div>`;
        dropdown.style.display = 'block';
        return;
    }

    dropdown.innerHTML = matches.map(m => `
        <div class="search-suggestion-item" onclick="selectSearchSuggestion('${m.id}')">
            <img src="${m.image}" alt="${m.name}">
            <div class="search-suggestion-text">
                <span class="search-suggestion-name">${m.name}</span>
                <span class="search-suggestion-price">₱ ${m.price.toFixed(2)}</span>
            </div>
        </div>
    `).join('');
    dropdown.style.display = 'block';
}

function handleSearchKeydown(evt) {
    if (evt.key === 'Enter') {
        evt.preventDefault();
        executeSearch();
    } else if (evt.key === 'Escape') {
        const dropdown = document.getElementById('search-dropdown');
        if (dropdown) dropdown.style.display = 'none';
    }
}

function selectSearchSuggestion(productId) {
    const product = buildSearchIndex().find(m => m.id === productId);
    if (!product) return;

    const input = document.getElementById('main-search-input');
    if (input) input.value = product.name;

    addSearchHistoryEntry(product.name);

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.style.display = 'none';

    openMedicineModal(productId);
}

function executeSearch() {
    const input = document.getElementById('main-search-input');
    if (!input) return;
    const query = input.value.trim();

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.style.display = 'none';

    if (query.length === 0) {
        clearSearchResults();
        return;
    }

    addSearchHistoryEntry(query);

    const matches = buildSearchIndex().filter(m => m.name.toLowerCase().includes(query.toLowerCase()));
    renderMedicineResults(matches);

    const titleEl = document.getElementById('browse-medicine-title');
    const clearBtn = document.getElementById('clear-search-btn');
    if (titleEl) titleEl.textContent = `Search results for "${query}" (${matches.length})`;
    if (clearBtn) clearBtn.style.display = 'inline-block';

    showMedicinePage();

    const section = document.getElementById('browse-medicine-section');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderMedicineResults(items) {
    const container = document.getElementById('medicine-container');
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `<p style="padding: 20px; color: #888;">No medicines matched your search. Try a different keyword.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="medicine-row medicine-layer-1" id="search-layer-1"></div>
        <div class="medicine-row medicine-layer-2" id="search-layer-2"></div>
    `;

    const layer1 = document.getElementById('search-layer-1');
    const layer2 = document.getElementById('search-layer-2');
    const splitIndex = Math.ceil(items.length / 2);

    items.forEach((med, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('onclick', `openMedicineModal('${med.id}')`);
        card.innerHTML = `
            <div class="product-img-box">
                <img src="${med.image}" alt="${med.name}">
            </div>
            <h3 class="product-name">${med.name}</h3>
            <span class="product-price">₱ ${med.price.toFixed(2)}</span>
            <div class="product-actions" onclick="event.stopPropagation();">
                <button class="wishlist-btn${isWishlisted(med.id) ? ' active' : ''}" data-wishlist-id="${med.id}" aria-label="Add to Wishlist" onclick="toggleWishlist('${med.id}', event)">${isWishlisted(med.id) ? '♥' : '♡'}</button>
                <button class="add-cart-btn" onclick="openMedicineModal('${med.id}')">Add to Cart</button>
            </div>
        `;
        (index < splitIndex ? layer1 : layer2).appendChild(card);
    });
}

function clearSearchResults() {
    const input = document.getElementById('main-search-input');
    if (input) input.value = '';

    const container = document.getElementById('medicine-container');
    if (container && defaultMedicineHTML) container.innerHTML = defaultMedicineHTML;

    const titleEl = document.getElementById('browse-medicine-title');
    const clearBtn = document.getElementById('clear-search-btn');
    if (titleEl) titleEl.textContent = defaultBrowseTitle;
    if (clearBtn) clearBtn.style.display = 'none';

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}
// ==========================================================================
// PRESCRIPTION CHAT (Messenger-style, image-only)
// A single floating chat bubble shown bottom-right on both the customer
// main page and the admin dashboard. Only one contact exists in this demo
// ("Admin" from the customer side, the logged-in customer from the admin
// side) — both sides read/write the same demo thread from localStorage.
// Only images can be attached, and a staged image is only sent when the
// user presses Enter. Clicking a sent image pops it up over the chat box.
// ==========================================================================

const RX_CHAT_STORAGE_KEY = 'pharmaclickPrescriptionChat';
let rxChatRole = null;          // 'user' | 'admin'
let rxChatPendingImage = null;  // staged base64 image, awaiting send

function rxChatLoadMessages() {
    try {
        return JSON.parse(localStorage.getItem(RX_CHAT_STORAGE_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function rxChatSaveMessages(messages) {
    localStorage.setItem(RX_CHAT_STORAGE_KEY, JSON.stringify(messages));
}

function initPrescriptionChat(role) {
    rxChatRole = role;

    if (!document.getElementById('rx-chat-fab')) {
        const fab = document.createElement('button');
        fab.id = 'rx-chat-fab';
        fab.className = 'rx-chat-fab';
        fab.setAttribute('aria-label', 'Prescription Chat');
        fab.onclick = toggleRxChatPanel;
        fab.innerHTML = `
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <line x1="12" y1="6" x2="16" y2="6"/>
                <line x1="12" y1="10" x2="16" y2="10"/>
            </svg>`;
        document.body.appendChild(fab);
    }

    if (!document.getElementById('rx-chat-panel')) {
        const panel = document.createElement('div');
        panel.id = 'rx-chat-panel';
        panel.className = 'rx-chat-panel';
        panel.innerHTML = `
            <div class="rx-chat-header">
                <button id="rx-chat-back-btn" class="rx-chat-back-btn" onclick="rxChatShowList()" style="display:none;" aria-label="Back">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <div class="rx-chat-header-info">
                    <div class="rx-chat-avatar">👤</div>
                    <span id="rx-chat-header-title">Messages</span>
                </div>
                <button class="rx-chat-close-btn" onclick="closeRxChatPanel()" aria-label="Close">&times;</button>
            </div>

            <div id="rx-chat-list-view" class="rx-chat-list-view">
                <div class="rx-chat-contact-row" onclick="rxChatOpenThread()">
                    <div class="rx-chat-avatar">👤</div>
                    <div class="rx-chat-contact-info">
                        <strong id="rx-chat-contact-name">Admin</strong>
                        <span>Send a photo of your prescription</span>
                    </div>
                </div>
            </div>

            <div id="rx-chat-thread-view" class="rx-chat-thread-view" style="display:none;">
                <div id="rx-chat-body" class="rx-chat-body"></div>

                <div class="rx-chat-compose">
                    <input type="file" id="rx-chat-file-input" accept="image/*" style="display:none;" onchange="rxChatFileSelected(event)">
                    <button class="rx-attach-btn" onclick="document.getElementById('rx-chat-file-input').click()" aria-label="Attach image">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                    <div class="rx-chat-input-wrap">
                        <div id="rx-chat-pending-preview" class="rx-chat-pending-preview" style="display:none;">
                            <img id="rx-chat-pending-img" src="" alt="Selected image">
                            <button class="rx-chat-pending-remove" onclick="rxChatClearPending()" aria-label="Remove">&times;</button>
                        </div>
                        <input type="text" id="rx-chat-text-input" class="rx-chat-text-input" placeholder="Type a message..." onkeydown="rxChatHandleKeydown(event)">
                    </div>
                </div>

                <div id="rx-chat-lightbox" class="rx-chat-lightbox" onclick="rxChatCloseLightbox()">
                    <img id="rx-chat-lightbox-img" src="" alt="Prescription photo enlarged">
                </div>
            </div>
        `;
        document.body.appendChild(panel);
    }

    document.getElementById('rx-chat-fab').style.display = 'flex';

    const contactName = document.getElementById('rx-chat-contact-name');
    if (contactName) {
        contactName.textContent = (role === 'admin')
            ? (localStorage.getItem('registeredUsername') || 'Customer')
            : 'Admin';
    }
}

function toggleRxChatPanel() {
    const panel = document.getElementById('rx-chat-panel');
    if (!panel) return;
    const isOpen = panel.style.display === 'flex';
    if (isOpen) {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'flex';
        rxChatShowList();
    }
}

function closeRxChatPanel() {
    const panel = document.getElementById('rx-chat-panel');
    if (panel) panel.style.display = 'none';
}

function hidePrescriptionChat() {
    const fab = document.getElementById('rx-chat-fab');
    const panel = document.getElementById('rx-chat-panel');
    if (fab) fab.style.display = 'none';
    if (panel) panel.style.display = 'none';
    rxChatClearPending();
    rxChatRole = null;
}

function rxChatShowList() {
    const listView = document.getElementById('rx-chat-list-view');
    const threadView = document.getElementById('rx-chat-thread-view');
    const backBtn = document.getElementById('rx-chat-back-btn');
    const headerTitle = document.getElementById('rx-chat-header-title');

    if (listView) listView.style.display = 'block';
    if (threadView) threadView.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';
    if (headerTitle) headerTitle.textContent = 'Messages';

    rxChatClearPending();
    rxChatCloseLightbox();
}

function rxChatOpenThread() {
    const listView = document.getElementById('rx-chat-list-view');
    const threadView = document.getElementById('rx-chat-thread-view');
    const backBtn = document.getElementById('rx-chat-back-btn');
    const headerTitle = document.getElementById('rx-chat-header-title');
    const contactName = document.getElementById('rx-chat-contact-name');

    if (listView) listView.style.display = 'none';
    if (threadView) threadView.style.display = 'flex';
    if (backBtn) backBtn.style.display = 'flex';
    if (headerTitle) headerTitle.textContent = contactName ? contactName.textContent : 'Chat';

    rxChatRenderMessages();
}

function rxChatRenderMessages() {
    const body = document.getElementById('rx-chat-body');
    if (!body) return;
    const messages = rxChatLoadMessages();

    body.innerHTML = messages.map(function (msg) {
        const isMine = msg.from === rxChatRole;
        const hasImage = !!msg.src;
        const hasText = !!msg.text;
        const bubbleClass = 'rx-msg-bubble ' + (isMine ? 'sent' : 'received') + (hasText ? '' : ' image-only');

        let inner = '';
        if (hasImage) {
            inner += '<img class="rx-msg-img" src="' + msg.src + '" alt="Prescription photo" onclick="rxChatOpenLightbox(\'' + msg.id + '\')">';
        }
        if (hasText) {
            inner += '<div class="rx-msg-text">' + rxChatEscapeHtml(msg.text) + '</div>';
        }

        return '<div class="rx-msg-row ' + (isMine ? 'sent' : 'received') + '">' +
            '<div class="' + bubbleClass + '">' + inner + '</div>' +
            '</div>';
    }).join('');

    body.scrollTop = body.scrollHeight;
}

function rxChatEscapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function rxChatFileSelected(event) {
    const file = event.target.files && event.target.files[0];
    event.target.value = '';
    if (!file) return;

    if (!file.type || !file.type.startsWith('image/')) {
        alert('Only images can be attached in this chat.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        rxChatPendingImage = e.target.result;
        const previewWrap = document.getElementById('rx-chat-pending-preview');
        const previewImg = document.getElementById('rx-chat-pending-img');
        const textInput = document.getElementById('rx-chat-text-input');
        if (previewImg) previewImg.src = rxChatPendingImage;
        if (previewWrap) previewWrap.style.display = 'flex';
        if (textInput) textInput.focus();
    };
    reader.readAsDataURL(file);
}

function rxChatClearPending() {
    rxChatPendingImage = null;
    const previewWrap = document.getElementById('rx-chat-pending-preview');
    const previewImg = document.getElementById('rx-chat-pending-img');
    if (previewWrap) previewWrap.style.display = 'none';
    if (previewImg) previewImg.src = '';
}

function rxChatHandleKeydown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        rxChatSendMessage();
    }
}

function rxChatSendMessage() {
    if (!rxChatRole) return;

    const textInput = document.getElementById('rx-chat-text-input');
    const text = textInput ? textInput.value.trim() : '';

    if (!text && !rxChatPendingImage) return;

    const messages = rxChatLoadMessages();
    const newMessage = {
        id: 'm' + Date.now(),
        from: rxChatRole,
        time: new Date().toISOString()
    };
    if (rxChatPendingImage) newMessage.src = rxChatPendingImage;
    if (text) newMessage.text = text;

    messages.push(newMessage);
    rxChatSaveMessages(messages);

    if (textInput) textInput.value = '';
    rxChatClearPending();
    rxChatRenderMessages();
}

function rxChatOpenLightbox(id) {
    const messages = rxChatLoadMessages();
    const msg = messages.find(function (m) { return m.id === id; });
    if (!msg) return;
    const lightbox = document.getElementById('rx-chat-lightbox');
    const lightboxImg = document.getElementById('rx-chat-lightbox-img');
    if (lightboxImg) lightboxImg.src = msg.src;
    if (lightbox) lightbox.style.display = 'flex';
}

function rxChatCloseLightbox() {
    const lightbox = document.getElementById('rx-chat-lightbox');
    if (lightbox) lightbox.style.display = 'none';
}

// ==========================================================================
// MEDICINE DICTIONARY PAGE (opened via the book icon next to the logo)
// ==========================================================================

const medicineDictionaryData = [
    {
        emoji: '🍊',
        title: 'Vitamins & Daily Supplements',
        description: 'Supplements engineered to boost immunity, improve energy levels, treat nutritional deficiencies, and support overall vital organs.',
        items: [
            { name: 'Enervon-C (Multivitamins + Vitamin C)', price: '₱7.50 / tablet', uses: 'Daily multivitamin with Vitamin B-complex and Vitamin C to boost energy and immunity.' },
            { name: 'Conzace (Multivitamins + Minerals)', price: '₱14.00 / softgel', uses: 'High-potency formulation of Zinc, Vitamin A, C, and E for skin health and immune defense.' },
            { name: 'ImmunPro (Sodium Ascorbate + Zinc)', price: '₱8.50 / tablet', uses: 'Non-acidic Vitamin C combined with Zinc using ZincPlus technology for enhanced absorption.' },
            { name: 'Centrum Complete', price: '₱12.00 / tablet', uses: 'Comprehensive multivitamin and mineral supplement supporting overall vital organs and vitality.' },
            { name: 'Ascorbic Acid (Generic 500mg Vitamin C)', price: '₱2.50 / tablet', uses: 'Basic Vitamin C supplement used to treat and prevent Vitamin C deficiency.' },
            { name: 'Neurobion (Vitamin B1 + B6 + B12)', price: '₱19.00 / tablet', uses: 'High-dose B-complex formulation designed to treat nerve damage, numbness, and tingling.' },
            { name: 'Myra E (Vitamin E 400 IU)', price: '₱13.00 / softgel', uses: 'Antioxidant supplement that helps protect cells from damage and promotes healthy skin.' },
            { name: 'Revicon Forte', price: '₱7.00 / tablet', uses: 'Multivitamin containing essential minerals and amino acids to help combat physical fatigue.' },
            { name: 'Caltrate Plus (Calcium + Vitamin D3)', price: '₱10.00 / tablet', uses: 'Calcium supplement fortified with Vitamin D3 to improve bone density and prevent osteoporosis.' },
            { name: 'Propan TLC Syrup', price: '₱180.00 / 120ml bottle', uses: 'Multivitamin syrup for children infused with Lysine and Taurine to stimulate appetite and growth.' }
        ]
    },
    {
        emoji: '🩹',
        title: 'First Aid & Wound Care',
        description: 'Essential medical supplies and antiseptics for immediate wound management, sanitization, and emergency care.',
        items: [
            { name: '70% Isopropyl Alcohol (Rhea / Green Cross)', price: '₱45.00 / 150ml bottle', uses: 'Antiseptic and disinfectant for sanitizing hands and cleansing minor surface wounds.' },
            { name: 'Povidone-Iodine (Betadine 10% Solution)', price: '₱85.00 / 15ml bottle', uses: 'Topical microbicidal solution applied to cuts, grazes, and burns to prevent bacterial infection.' },
            { name: 'Hydrogen Peroxide (Agua Oxigenada 3%)', price: '₱25.00 / 120ml bottle', uses: 'Cleansing agent used to flush out dirt and dead tissue from fresh skin abrasions.' },
            { name: 'Band-Aid Plastic Strips', price: '₱2.50 / strip', uses: 'Sterile adhesive bandage designed to protect small cuts and scrapes from dirt and germs.' },
            { name: 'Gauze Bandage (2 inches x 5 yards)', price: '₱15.00 / roll', uses: 'Non-stick absorbent dressing used to wrap and secure larger wounds or dressings.' },
            { name: 'Micropore Surgical Tape', price: '₱45.00 / roll', uses: 'Hypoallergenic paper tape used to firmly secure gauze pads without irritating skin.' },
            { name: 'Silver Sulfadiazine (Burnshield / Burn Ointment)', price: '₱120.00 / tube', uses: 'Topical cream applied to first and second-degree burns to soothe skin and prevent infection.' },
            { name: 'Petroleum Jelly (Vaseline Original)', price: '₱60.00 / 50g jar', uses: 'Occlusive ointment that protects minor skin scrapes, chafing, and burns by locking in moisture.' },
            { name: 'Sterile Cotton Balls (Sequest Extra)', price: '₱35.00 / pack of 50', uses: 'Absorbent cotton balls used for applying antiseptics or cleaning around wound edges.' },
            { name: 'Surgical Spirit / Ammonia Inhalant', price: '₱20.00 / bottle', uses: 'Respiratory stimulant used to revive individuals suffering from lightheadedness or fainting spells.' }
        ]
    },
    {
        emoji: '🧼',
        title: 'Personal Care & Dermatologicals',
        description: 'Dermatologist-tested skincare, medicated hygiene products, antifungals, and specialty cleansers.',
        items: [
            { name: 'Cetaphil Gentle Skin Cleanser', price: '₱220.00 / 125ml bottle', uses: 'Soap-free, non-comedogenic daily cleanser suitable for sensitive and dry skin types.' },
            { name: 'Lactacyd Feminine Wash', price: '₱80.00 / 150ml bottle', uses: 'Dermatologically tested intimate wash formulated with natural milk extracts to maintain pH balance.' },
            { name: 'Betadine Feminine Wash (Povidone-Iodine 7.5%)', price: '₱140.00 / 100ml bottle', uses: 'Medicated wash used 2-3 times a week to treat red spots, itchiness, and odor in intimate areas.' },
            { name: 'Driclor Antiperspirant Roll-On', price: '₱890.00 / 20ml', uses: 'Clinical-strength antiperspirant solution designed to treat excessive sweating (hyperhidrosis).' },
            { name: 'Clotrimazole (Elysian / Canesten Cream)', price: '₱210.00 / 5g tube', uses: "Topical antifungal cream used to treat ringworm, athlete's foot, and jock itch." },
            { name: 'Listerine Antiseptic Mouthwash', price: '₱110.00 / 250ml bottle', uses: 'Kills up to 99% of oral bacteria that cause bad breath, plaque, and gingivitis.' },
            { name: 'Nizoral Shampoo (Ketoconazole 2%)', price: '₱180.00 / 50ml bottle', uses: 'Medicated anti-dandruff shampoo designed to treat severe flaking and seborrheic dermatitis.' },
            { name: 'Physiogel Daily Moisture Therapy Cream', price: '₱650.00 / 75ml tube', uses: "Deeply hydrating cream that restores the skin's natural moisture barrier for dry, sensitive skin." },
            { name: "Dr. S. Wong's Sulfur Soap", price: '₱42.00 / bar', uses: 'Medicated soap containing sulfur and aloe vera to treat acne, pimples, and minor skin infections.' },
            { name: "Lucas' Papaw Ointment", price: '₱380.00 / 25g tube', uses: 'Multipurpose ointment used as a lip balm, skin moisturizer, and treatment for chapped skin.' }
        ]
    },
    {
        emoji: '🤧',
        title: 'Allergy & Antihistamines',
        description: 'Formulations targeting systemic, topical, ocular, and respiratory allergic reactions.',
        items: [
            { name: 'Cetirizine (Alerta / Generic 10mg)', price: '₱3.00 – ₱12.00 / tablet', uses: 'Second-generation antihistamine for allergic rhinitis, sneezing, watery eyes, and hives.' },
            { name: 'Loratadine (Claritin 10mg)', price: '₱35.00 / tablet', uses: 'Non-drowsy antihistamine that provides 24-hour relief from seasonal allergy symptoms.' },
            { name: 'Iterax (Hydroxyzine 25mg - Rx) 🔒', price: '₱22.00 / tablet', uses: 'Sedating antihistamine used for severe skin itching, urticaria, and anxiety-induced allergies.' },
            { name: 'Virlix (Cetirizine HCl 10mg)', price: '₱36.00 / tablet', uses: 'Brand-name cetirizine known for rapid action against skin allergies and hay fever.' },
            { name: 'Fexofenadine (Telfast 180mg)', price: '₱55.00 / tablet', uses: 'High-strength, non-drowsy antihistamine for persistent chronic idiopathic urticaria.' },
            { name: 'Fluticasone (Flixonase / Avamys - Rx) 🔒', price: '₱780.00 / spray bottle', uses: 'Corticosteroid nasal spray used daily to reduce inflammation from severe nasal allergies.' },
            { name: 'Allercet (Cetirizine 10mg)', price: '₱15.00 / tablet', uses: 'Commonly prescribed local brand for quick relief from allergic rhinitis symptoms.' },
            { name: 'Diphenhydramine (Benadryl 25mg/50mg)', price: '₱10.00 / capsule', uses: 'First-generation antihistamine used for acute allergic reactions and motion sickness.' },
            { name: 'Celestamine (Betamethasone + Dexchlorpheniramine)', price: '₱28.00 / tablet', uses: 'Combination steroid-antihistamine tablet for severe inflammatory allergic conditions.' },
            { name: 'Eye Mo Allergy Drops', price: '₱135.00 / 7.5ml bottle', uses: 'Ophthalmic solution formulated to relieve red, itchy, and irritated eyes caused by airborne allergens.' }
        ]
    },
    {
        emoji: '🩺',
        title: 'Digestive Health & Gastrointestinal Care',
        description: 'Treatments for acidity, indigestion, diarrhea, constipation, nausea, and abdominal cramping.',
        items: [
            { name: 'Kremil-S (Al + Mg Hydroxide + Simeticone)', price: '₱7.50 / tablet', uses: 'Chewing tablet that neutralizes excess stomach acid and relieves heartburn and hyperacidity.' },
            { name: 'Gaviscon Double Action', price: '₱32.00 / sachet (10ml)', uses: 'Forms a protective barrier over stomach contents to prevent acid reflux and heartburn.' },
            { name: 'Diatabs (Loperamide 2mg)', price: '₱7.00 / capsule', uses: 'Anti-motility medication that slows down gut movement to treat acute diarrhea.' },
            { name: 'Erceflora (Bacillus clausii)', price: '₱52.00 / 5ml vial', uses: 'Liquid probiotic vial that restores intestinal bacterial flora balance during diarrhea or antibiotic use.' },
            { name: 'Hydrite (Oral Rehydration Salts - ORS)', price: '₱18.00 / sachet', uses: 'Dissolvable powder packet that replaces essential fluids and electrolytes lost during diarrhea or vomiting.' },
            { name: 'Dulcolax (Bisacodyl 5mg)', price: '₱10.00 / tablet', uses: 'Stimulant laxative providing dependable overnight relief from occasional constipation.' },
            { name: 'Buscopan / Buscopan Venus (Hyoscine)', price: '₱16.00 / tablet', uses: 'Antispasmodic medication that targets abdominal cramps, spasms, and stomach pain.' },
            { name: 'Omeprazole (Generic 20mg/40mg - Rx) 🔒', price: '₱7.00 – ₱20.00 / capsule', uses: 'Proton pump inhibitor (PPI) that decreases stomach acid production to heal ulcers and GERD.' },
            { name: 'Plasil (Metoclopramide 10mg - Rx) 🔒', price: '₱11.00 / tablet', uses: 'Prokinetic agent used to manage severe nausea, vomiting, and delayed gastric emptying.' },
            { name: 'Senokot (Sennosides)', price: '₱9.00 / tablet', uses: 'Natural vegetable laxative that gently stimulates bowel movements to relieve constipation.' }
        ]
    }
];

function renderDictionaryPage() {
    const container = document.getElementById('dictionary-container');
    if (!container) return;

    container.innerHTML = medicineDictionaryData.map(function (category) {
        const rows = category.items.map(function (item) {
            return '<tr>' +
                '<td class="dictionary-col-name">' + item.name + '</td>' +
                '<td class="dictionary-col-price">' + item.price + '</td>' +
                '<td class="dictionary-col-uses">' + item.uses + '</td>' +
                '</tr>';
        }).join('');

        return '<div class="dictionary-category-block">' +
            '<div class="dictionary-category-header">' +
                '<span class="dictionary-category-emoji">' + category.emoji + '</span>' +
                '<div>' +
                    '<h3 class="dictionary-category-title">' + category.title + '</h3>' +
                    '<p class="dictionary-category-desc">' + category.description + '</p>' +
                '</div>' +
            '</div>' +
            '<div class="dictionary-table-wrapper">' +
                '<table class="dictionary-table">' +
                    '<thead><tr><th>Medicine Name</th><th>Approx. Price</th><th>Primary Uses &amp; Key Features</th></tr></thead>' +
                    '<tbody>' + rows + '</tbody>' +
                '</table>' +
            '</div>' +
        '</div>';
    }).join('');
}