 const translations = {
      tr: {
        brandName: "Arda Tuna Demir",
        navHome: "Anasayfa",
        navAbout: "Hakkımda",
        navProjects: "Projelerim",
        navDetails: "Proje Detayları",
        navContact: "İletişim",
        projectTitle: "Viela Diyetisyen Otomasyonu",
        projectText: "VIELA, bireylere özel diyet programlarının kolayca yönetilebildiği, kullanıcı dostu bir otomasyon sistemidir. Visual Studio C# (Windows Forms) ile geliştirilen ve Microsoft Access veri tabanı bağlantısı olan bu proje, grup çalışması olarak hazırlanmıştır.",
        feat1: "C# (Windows Forms) ile geliştirilen masaüstü uygulama",
        feat2: "Access ile veri tabanı bağlantısı",
        feat3: "Diyetisyen odaklı danışan yönetim sistemi",
        feat4: "Kullanıcı adı ve şifreyle güvenli oturum",
        feat5: "Otomatik liste takibi ve öneri sistemi",
        feat6: "Anlaşılır ve sade arayüz tasarım",
        feat7: "Hedefe yönelik planlama ve raporlama kolaylığı",
        galleryTitle: "Viela Otomasyonu Arayüzleri",
        img1: "Giriş Ekranı",
        img2: "Ana Sayfa",
        img3: "Danışan Listesi",
        img4: "Diyet Listesi",
        img5: "Randevu Planla",
        img6: "Kitle İndex",
        img7: "Çıkış Ekranı",
        descriptionTitle: "Açıklama",
        descriptionText: "Bu proje, sağlıklı yaşam hizmeti sunan uzmanların dijital ihtiyaçlarına özel olarak geliştirilmiştir. Sistem; kullanıcı girişi, danışan yönetimi, diyet planlama, öneri sunumu ve raporlama gibi temel işlevleri sade ve anlaşılır bir arayıüzle sunar. Veri tabanı bağlantısı ve arayüz tasarımı, kullanıcıyı yormayan ve hızlı erişim sağlayan yapısıyla dikkat çeker. Menü yapısı net, içerikler ise kolay okunur şekilde sunulmuştur.",
        colorsTitle: "Kullandığım Renkler",
        colorsText: "Turuncu renk, canlılık ve enerji hissi vererek sağlıklı yaşam temasını vurgular. Beyaz arka plan ise okunabilirliği artırır ve dikkat dağıtmadan içerikleri öne çıkarır.",
        uxTitle: "Kullanıcı Deneyimi",
        uxText: "Danışan bilgileri, öneriler ve diyet programları kullanıcı dostu bir yapıda sunulmuştur. Kategoriler, sade menülerle erişilebilir; kullanıcılar sistem içinde kaybolmaz. Görsel yoğunluk, profesyonel görünüm ve kolay kullanım sağlar.",
        whyTitle: "Neden Bu Proje?",
        whyText: "Beslenme ve sağlık uzmanlarının dijital iş yükünü hafifletmek ve kişiye özel programları düzenli tutabilmelerini sağlamak amacıyla geliştirilmiştir. Ayrıca bu grup projesi, yazılım becerilerimizi gerçek bir sistem üzerinden test etmemize olanak tanımıştır.",
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
        projectTitle: "Viela Dietitian Automation",
        projectText: "VIELA is a user-friendly automation system for managing personalized diet plans. Developed in Visual Studio C# (Windows Forms) with Microsoft Access database integration, this group project focuses on dietitians' needs.",
        feat1: "Desktop application developed with C# (Windows Forms)",
        feat2: "Database connection via Access",
        feat3: "Dietitian-focused client management system",
        feat4: "Secure login with username and password",
        feat5: "Automatic list tracking and recommendation system",
        feat6: "Clear and simple interface design",
        feat7: "Goal-oriented planning and easy reporting",
        galleryTitle: "Viela Automation Interfaces",
        img1: "Login Screen",
        img2: "Homepage",
        img3: "Client List",
        img4: "Diet List",
        img5: "Schedule Appointment",
        img6: "Body Mass Index",
        img7: "Logout Screen",
        descriptionTitle: "Description",
        descriptionText: "This project was developed for health professionals to manage digital workflows. The system offers user login, client management, diet planning, recommendations and reporting in a simple, clear interface. The database connection and UI design provide quick access without fatigue. The menu structure is clear and content is presented in a readable format.",
        colorsTitle: "Colors Used",
        colorsText: "Orange conveys vitality and energy to emphasize healthy living; white background enhances readability and focuses attention on content.",
        uxTitle: "User Experience",
        uxText: "Client data, recommendations, and diet programs are presented in a user-friendly structure. Categorized menus keep users oriented, and balanced visuals ensure a professional look and easy use.",
        whyTitle: "Why This Project?",
        whyText: "This automation was developed to reduce the digital workload of nutrition and health experts and help maintain personalized programs regularly. Additionally, this group project tested our development skills in a real-world system.",
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