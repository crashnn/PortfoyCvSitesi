const translations = {
    tr: {
        brandName: "Arda Tuna Demir",
        navHome: "Anasayfa",
        navAbout: "Hakkımda",
        navProjects: "Projelerim",
        navDetails: "Proje Detayları",
        navContact: "İletişim",
        pulseTitle: "PulseFit Fitness Tasarımı",
        pulseText: "PulseFit, kullanıcıya özel fitness planları sunan, yaş aralıklarına göre önerilerde bulunan bir web tabanlı uygulamadır.",
        onay1: "Modern ve responsive tasarım",
        onay2: "HTML5, CSS3 ve JavaScript desteği",
        onay3: "Bilgilendirici ve Açıklayıcı olma",
        onay4: "Yaşa, hedefe ve seviyeye göre filtreleme",
        onay5: "Figma üzerinden tasarım oluşturma",
        pulseunderTitle: "PulseFit Arayüzleri",
        gridphoto1: "Ana Sayfa - Giriş Ekranı",
        gridphoto2: "Ana Sayfa",
        gridphoto3: "Ana Sayfa",
        gridphoto4: "Ana Sayfa",
        gridphoto5: "Planlar",
        gridphoto6: "Blog",
        gridphoto7: "Hakkımızda",
        gridphoto8: "Üye Ol",
        gridphoto9: "Üye Girişi",
        gridphoto10: "Profil Tasarımı",
        gridphoto11: "Kalori Hesaplama Tasarımı",
        gridphoto12: "Canlı Destek Tasarımı",
        descriptionTitle: "Açıklama",
        descriptionText: "PulseFit projesi, kullanıcıların yaşlarına ve hedeflerine göre kişiselleştirilmiş antrenman programları oluşturmasına olanak tanır. Bu sayfada gördüğünüz tasarımlar, giriş ekranından kullanıcı profil ekranlarına, önerilen programlardan detay sayfalarına kadar her adımı kapsamaktadır. Her tasarım, kullanıcı deneyimini sade, anlaşılır ve motive edici şekilde sunmak amacıyla hazırlanmıştır.",
        usedColorTitle: "Kullandığım Renkler",
        usedColorText: "Siyah, beyaz ve yeşil tonlarıyla enerjik bir yapı hedeflendi.",
        userExperienceTitle: "Kullanıcı Deneyimi",
        userExperienceText: "Basit ve anlaşılır arayüzü ile kullanıcılar rahatça hedeflerini belirleyebilir, programları inceleyebilir.",
        whyTitle: "Neden Bu Proje?",
        whyText: "Fitness sektöründe kullanıcıya özel çözümler eksikti. PulseFit bu boşluğu doldurmak üzere tasarlandı.",
        footerText: "Tüm hakları saklıdır",
        footerLink: "Arda Tuna Demir"
    },
    en: {
        brandName: "Arda Tuna Demir",
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navDetails: "Project Details",
        navContact: "Contact",
        pulseTitle: "PulseFit Fitness Design",
        pulseText: "PulseFit is a web-based application offering personalized fitness plans and age-specific recommendations.",
        onay1: "Modern and responsive design",
        onay2: "Support for HTML5, CSS3, and JavaScript",
        onay3: "Informative and explanatory interface",
        onay4: "Filtering by age, goal, and level",
        onay5: "Design created with Figma",
        pulseunderTitle: "PulseFit Interfaces",
        gridphoto1: "Home – Login Screen",
        gridphoto2: "Home",
        gridphoto3: "Home",
        gridphoto4: "Home",
        gridphoto5: "Plans",
        gridphoto6: "Blog",
        gridphoto7: "About Us",
        gridphoto8: "Sign Up",
        gridphoto9: "Member Login",
        gridphoto10: "Profile Design",
        gridphoto11: "Calorie Calculator Design",
        gridphoto12: "Live Support Design",
        descriptionTitle: "Description",
        descriptionText: "The PulseFit project enables users to create personalized workout programs based on their age and goals. The designs shown here cover every step, from the login screen and user profile pages to recommended programs and detail screens. Each layout is crafted to present the experience in a simple, clear, and motivating way.",
        usedColorTitle: "Colors Used",
        usedColorText: "An energetic look achieved through black, white, and green tones.",
        userExperienceTitle: "User Experience",
        userExperienceText: "With its simple and clear interface, users can easily set their goals and explore programs.",
        whyTitle: "Why This Project?",
        whyText: "The fitness industry lacked truly personalized solutions. PulseFit was created to fill that gap.",
        footerText: "All rights reserved",
        footerLink: "Arda Tuna Demir"
    }
};

function setLanguage(lang) {
    for (const key in translations[lang]) {
        const el = document.getElementById(key);
        if (el) el.textContent = translations[lang][key];
    }
}

window.onload = () => setLanguage('tr');
document.getElementById('flagEN').addEventListener('click', () => setLanguage('en'));
document.getElementById('flagTR').addEventListener('click', () => setLanguage('tr'));