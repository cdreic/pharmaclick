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

function showHome() {
    const signupPage = document.getElementById('signup-page');
    const loginPage = document.getElementById('login-page');
    const adminLoginPage = document.getElementById('admin-login-page');
    
    if (signupPage) signupPage.style.setProperty('display', 'none', 'important');
    if (loginPage) loginPage.style.setProperty('display', 'none', 'important');
    if (adminLoginPage) adminLoginPage.style.setProperty('display', 'none', 'important');
    
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.style.setProperty('display', 'flex', 'important');
    
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

function showSignup() {
    const loginPage = document.getElementById('login-page');
    const signupPage = document.getElementById('signup-page');
    const adminLoginPage = document.getElementById('admin-login-page');
    
    if (loginPage) loginPage.style.setProperty('display', 'none', 'important');
    if (adminLoginPage) adminLoginPage.style.setProperty('display', 'none', 'important');
    if (signupPage) signupPage.style.setProperty('display', 'flex', 'important');
}

function closeSignup() {
    const signupPage = document.getElementById('signup-page');
    if (signupPage) signupPage.style.setProperty('display', 'none', 'important');
}

function showLogin() {
    closeSignup();
    closeAdminLogin();
    const loginModal = document.getElementById("login-page");
    if (loginModal) loginModal.style.display = "flex";
}

function closeLogin() {
    const loginModal = document.getElementById("login-page");
    if (loginModal) loginModal.style.display = "none";
}

function showAdminLogin() {
    closeLogin();
    closeSignup();
    const adminModal = document.getElementById("admin-login-page");
    if (adminModal) adminModal.style.display = "flex";
}

function closeAdminLogin() {
    const adminModal = document.getElementById("admin-login-page");
    if (adminModal) adminModal.style.display = "none";
}

function showSignup() {
    closeLogin();
    closeAdminLogin();
    const signupModal = document.getElementById("signup-page");
    if (signupModal) signupModal.style.display = "flex";
}

function closeSignup() {
    const signupModal = document.getElementById("signup-page");
    if (signupModal) signupModal.style.display = "none";
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

        const landingNavbar = document.querySelector('.navbar');
        if (landingNavbar) landingNavbar.style.display = 'none';
        
        closeSignup();
        closeLogin();

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

            <div class="permanent-sidebar-header">
                <div class="permanent-sidebar-logo">
                    <div class="main-medical-logo">
                        <div class="horiz"></div>
                        <div class="vert"></div>
                        <span>+</span>
                    </div>
                </div>
            </div>

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

                    <button class="nav-icon-btn book-btn" aria-label="Catalog">
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

                    <button class="nav-icon-btn location-btn" aria-label="Location">
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
                <div class="banner-slider">
                    <div class="slider-dots">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
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

        document.body.style.background = "#ffffff";
        document.body.style.margin = "0";
    } else {
        if (errorAlertContainer) {
            errorAlertContainer.style.display = "block";
        }
        passField.value = "";
    }
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

        const landingNavbar = document.querySelector('.navbar');
        if (landingNavbar) landingNavbar.style.display = 'none';

        closeAdminLogin();

        // Show Admin Page
        const adminPage = document.getElementById('admin-page');
        if (adminPage) {
            adminPage.style.display = 'flex';
        }
    } else {
        if (errorAlertContainer) {
            errorAlertContainer.style.display = "block";
        }
    }

        adminPage.style.display = "block";
        adminPage.innerHTML = `
            <div style="min-height: 100vh; background: #f4f6f9; font-family: Arial, sans-serif;">
                <nav style="background: #2c3e50; color: white; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div style="font-size: 22px; font-weight: bold; display: flex; align-items: center; gap: 10px;">
                        <span>🛡️</span> PharmaClick Admin Portal
                    </div>
                    <div>
                        <span style="margin-right: 20px; font-weight: bold;">Welcome, cdreic!</span>
                        <button onclick="logoutAdmin()" style="background: #e74c3c; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">Logout</button>
                    </div>
                </nav>

                <div style="max-width: 1200px; margin: 40px auto; padding: 0 20px;">
                    <h2 style="color: #2c3e50; margin-bottom: 25px;">Dashboard Overview</h2>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 40px;">
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #3498db;">
                            <span style="font-size: 14px; color: #7f8c8d; font-weight: bold; text-transform: uppercase;">Total Orders</span>
                            <h3 style="font-size: 32px; color: #2c3e50; margin-top: 10px;">148</h3>
                        </div>
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #2ecc71;">
                            <span style="font-size: 14px; color: #7f8c8d; font-weight: bold; text-transform: uppercase;">Revenue</span>
                            <h3 style="font-size: 32px; color: #2c3e50; margin-top: 10px;">₱ 42,500.00</h3>
                        </div>
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #e67e22;">
                            <span style="font-size: 14px; color: #7f8c8d; font-weight: bold; text-transform: uppercase;">Registered Users</span>
                            <h3 style="font-size: 32px; color: #2c3e50; margin-top: 10px;">89</h3>
                        </div>
                        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 5px solid #9b59b6;">
                            <span style="font-size: 14px; color: #7f8c8d; font-weight: bold; text-transform: uppercase;">Pending Prescriptions</span>
                            <h3 style="font-size: 32px; color: #2c3e50; margin-top: 10px;">12</h3>
                        </div>
                    </div>

                    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                        <h3 style="color: #2c3e50; margin-bottom: 20px;">Recent Orders</h3>
                        <table style="width: 100%; border-collapse: collapse; text-align: left;">
                            <thead>
                                <tr style="border-bottom: 2px solid #ecf0f1; color: #7f8c8d;">
                                    <th style="padding: 12px;">Order ID</th>
                                    <th style="padding: 12px;">Customer</th>
                                    <th style="padding: 12px;">Items</th>
                                    <th style="padding: 12px;">Status</th>
                                    <th style="padding: 12px;">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom: 1px solid #ecf0f1;">
                                    <td style="padding: 12px; font-weight: bold;">#ORD-9081</td>
                                    <td style="padding: 12px;">Juan Dela Cruz</td>
                                    <td style="padding: 12px;">Biogesic (5x)</td>
                                    <td style="padding: 12px;"><span style="background: #e8f8f5; color: #27ae60; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">Delivered</span></td>
                                    <td style="padding: 12px;">₱ 22.50</td>
                                </tr>
                                <tr style="border-bottom: 1px solid #ecf0f1;">
                                    <td style="padding: 12px; font-weight: bold;">#ORD-9082</td>
                                    <td style="padding: 12px;">Maria Santos</td>
                                    <td style="padding: 12px;">Enervon-C (2x)</td>
                                    <td style="padding: 12px;"><span style="background: #fef9e7; color: #f39c12; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">Pending</span></td>
                                    <td style="padding: 12px;">₱ 15.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
}

function logoutAdmin() {
    const adminPage = document.getElementById('admin-page');
    if (adminPage) adminPage.style.display = 'none';

    // Return to main user view
    showHome();
    
    const mainElem = document.querySelector('main');
    if (mainElem) mainElem.style.display = 'block';

    const landingNavbar = document.querySelector('.navbar');
    if (landingNavbar) landingNavbar.style.display = 'flex';

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
    { id: "ORD-1001", customer: "John Doe", products: "Advil x2", total: 18.00, status: "Completed", date: new Date().toISOString() },
    { id: "ORD-1002", customer: "Jane Smith", products: "Biogesic x5", total: 22.50, status: "Pending", date: new Date().toISOString() },
    { id: "ORD-1003", customer: "Michael Brown", products: "Centrum Advance x1", total: 18.00, status: "Failed", date: new Date().toISOString() }
];

// Call this global function when a customer purchases items from the main page
function triggerPurchaseFromMainPage(customerName, productListText, totalAmount) {
    const newOrder = {
        id: "ORD-" + Math.floor(1000 + Math.random() * 9000),
        customer: customerName || "Guest User",
        products: productListText || "Medicine Item",
        total: parseFloat(totalAmount) || 0.00,
        status: "Completed", // Default successful checkout
        date: new Date().toISOString()
    };
    
    systemOrders.unshift(newOrder); // Add to beginning of orders list
    updateDashboardStoreMetrics();
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

    // Refresh orders table
    renderLatestOrdersTable();
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

// Add these functions to script_16.js

function showAdminSales() {
    // Hide main dashboard content
    const dashboardCards = document.querySelectorAll('#admin-page main.admin-content-area > div');
    dashboardCards.forEach(div => {
        if (div.id !== 'admin-sales-page') {
            div.style.display = 'none';
        }
    });

    // Update topbar title if applicable
    const topbarTitle = document.querySelector('.admin-topbar h1');
    if (topbarTitle) topbarTitle.textContent = 'Sales';

    // Show empty Admin Sales page
    const salesPage = document.getElementById('admin-sales-page');
    if (salesPage) salesPage.style.display = 'block';
}

function showAdminDashboard() {
    // Hide sales page
    const salesPage = document.getElementById('admin-sales-page');
    if (salesPage) salesPage.style.display = 'none';

    // Show main dashboard content
    const dashboardCards = document.querySelectorAll('#admin-page main.admin-content-area > div');
    dashboardCards.forEach(div => {
        if (div.id !== 'admin-sales-page') {
            div.style.display = '';
        }
    });

    // Restore topbar title
    const topbarTitle = document.querySelector('.admin-topbar h1');
    if (topbarTitle) topbarTitle.textContent = 'Dashboard';
}

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

function showAdminSales() {
    const dashboardView = document.querySelector('#admin-page main .admin-topbar + div');
    const salesView = document.getElementById('admin-sales-view');
    const topbarTitle = document.querySelector('.admin-topbar h1');

    if (dashboardView) dashboardView.style.display = 'none';
    if (salesView) salesView.style.display = 'block';
    if (topbarTitle) topbarTitle.textContent = 'Sales Overview';
}

function showAdminDashboard() {
    const dashboardView = document.querySelector('#admin-page main .admin-topbar + div');
    const salesView = document.getElementById('admin-sales-view');
    const topbarTitle = document.querySelector('.admin-topbar h1');

    if (dashboardView) dashboardView.style.display = 'block';
    if (salesView) salesView.style.display = 'none';
    if (topbarTitle) topbarTitle.textContent = 'Dashboard';
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
        wishlistPage: document.getElementById('wishlist-page')
    };
}

function hideAllMainPageSections() {
    const sections = getMainPageSections();
    Object.values(sections).forEach(el => { if (el) el.style.display = 'none'; });
    return sections;
}

function showMedicinePage() {
    const sections = hideAllMainPageSections();
    if (sections.market) sections.market.style.display = 'block';
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
    const errorBox = document.getElementById('purchase-error-message');

    const name = nameField ? nameField.value.trim() : '';
    const address = addressField ? addressField.value.trim() : '';
    const contact = contactField ? contactField.value.trim() : '';

    if (!name || !address || !contact) {
        if (errorBox) {
            errorBox.textContent = '⚠ Please fill in your name, delivery address, and contact number.';
            errorBox.style.display = 'block';
        }
        return;
    }

    const paymentRadio = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = paymentRadio ? paymentRadio.value : 'Cash on Delivery';

    const productListText = currentPurchaseItems.map(i => `${i.name} x${i.quantity}`).join(', ');
    const total = currentPurchaseItems.reduce((sum, i) => sum + i.price * i.quantity, 0) + 49.00;

    // Sync this purchase into the admin dashboard's Latest Orders table.
    triggerPurchaseFromMainPage(name, productListText, total);

    // Remove only the purchased items from the persistent cart.
    const purchasedIds = currentPurchaseItems.map(i => i.id);
    cartItems = cartItems.filter(i => !purchasedIds.includes(i.id));
    saveCart();

    alert(`✅ Order placed successfully!\n\nItems: ${productListText}\nPayment: ${paymentMethod}\nTotal: ₱${total.toFixed(2)}\n\nThank you, ${name}! Your medicines are on their way.`);

    currentPurchaseItems = [];
    showMedicinePage();
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