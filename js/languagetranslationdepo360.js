const translations = {
      tr: {
        brandName: "Arda Tuna Demir",
        navHome: "Anasayfa",
        navAbout: "Hakkımda",
        navProjects: "Projelerim",
        navDetails: "Proje Detayları",
        navContact: "İletişim",
        projectTitle: "Depo360 Stok Projesi",
        projectText: "İşletmeniz için hızlı, basit ve güvenilir stok yönetimi. Depo360 ile stok takibi yapmanız gereken ürünlerinizi kategoriye göre takip edin, stoklarınızı her an kontrol altında tutun.",
        feat1: "HTML5, CSS3, PHP & SQL desteği",
        feat2: "Kategorilere göre stok filtreleme",
        feat3: "Çoklu kullanıcı desteği",
        feat4: "Dinamik ürün ekleme, silme ve düzenleme",
        feat5: "Veritabanı ilişkileri ile tam işlevsellik",
        galleryTitle: "Depo360 Görseller",
        img1: "Ana Sayfa - Giriş Ekranı",
        img2: "Panel",
        img3: "Veri Tabanı",
        descriptionTitle: "Açıklama",
        descriptionText: "Depo360, çeşitli stok ihtiyacı olan işletmelere yönelik geliştirilen, sade ve kullanıcı dostu bir stok takip sistemidir. Proje, dijital kimliği sade ama güçlü bir arayüzle yansıtmayı hedefler. Görsel karmaşadan uzak tasarımı sayesinde, kullanıcılar ihtiyaç duydukları bilgilere hızlıca erişebilir. Giriş ekranından ürün yönetimine kadar her aşama erişilebilirlik ve okunabilirlik önceliğiyle tasarlanmıştır.",
        colorsTitle: "Kullandığım Renkler",
        colorsText: "Mor-pembe gradyan: modernlik ve teknoloji hissiyatı; beyaz: sadelik.",
        uxTitle: "Kullanıcı Deneyimi",
        uxText: "Stok gerektiren işletmeler ürünlerini filtreleyip yönetebilir. Basit ve hızlı arayüz sayesinde teknik bilgi gerekmez.",
        whyTitle: "Neden Bu Proje?",
        whyText: "Stok takibi KOBİ’ler için zaman kaybettirir; minimal ve hızlı çözüm sunmak için geliştirildi.",
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
        projectTitle: "Depo360 Inventory Project",
        projectText: "Fast, simple and reliable stock management for your business. With Depo360, track your items by category and keep your inventory under control at all times.",
        feat1: "Supports HTML5, CSS3, PHP & SQL",
        feat2: "Stock filtering by category",
        feat3: "Multi-user support",
        feat4: "Dynamic add, delete & edit products",
        feat5: "Fully functional with database relations",
        galleryTitle: "Depo360 Screenshots",
        img1: "Homepage – Login Screen",
        img2: "Control Panel",
        img3: "Database",
        descriptionTitle: "Description",
        descriptionText: "Depo360 is a clean, user-friendly stock tracking system developed for businesses with various inventory needs. The project aims to reflect a strong yet simple digital identity. Thanks to its uncluttered design, users can quickly access the information they need. Every step—from the login screen to product management—is designed with accessibility and readability in mind.",
        colorsTitle: "Colors Used",
        colorsText: "Purple-pink gradient for modern, tech feel; white for simplicity.",
        uxTitle: "User Experience",
        uxText: "Businesses can filter and manage products effortlessly. The simple, fast interface requires no technical expertise.",
        whyTitle: "Why This Project?",
        whyText: "Inventory tracking wastes time for SMEs; this project provides a minimal, fast solution.",
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