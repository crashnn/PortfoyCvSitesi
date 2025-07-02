const translations = {
            tr: {
                brandName: "Arda Tuna Demir",
                navHome: "Anasayfa",
                navAbout: "Hakkımda",
                navProjects: "Projelerim",
                navDetails: "Proje Detayları",
                navContact: "İletişim",
                projectTitle: "Mimari Site Tasarımı",
                projectText: "Bu proje, mimarlık ofislerinin dijital kimliklerini modern, sade ve etkileyici bir şekilde yansıtmak amacıyla geliştirilmiştir.",
                feat1: "HTML5, CSS3 desteği",
                feat2: "Açıklayıcı ve responsive tasarım",
                feat3: "Modern ve bilgilendirici içerik sunumu",
                feat4: "Kullanıcı dostu gezinme ve sade yapı",
                galleryTitle: "Arkline Mimarlık Arayüzleri",
                img1: "Ana Sayfa - Giriş Ekranı",
                img2: "Ana Sayfa",
                img3: "Ana Sayfa",
                descriptionTitle: "Açıklama",
                descriptionText: "Bu mimari site tasarımı, görsel karmaşadan uzak; yalın, sade ve kullanıcıyı yormayan bir yapı sunar. Tasarımda beyaz alan kullanımı ön planda tutularak içeriklerin rahatça okunabilir olması sağlanmıştır. Navigasyon menüsü net ve erişilebilir bir şekilde konumlandırılmış, kullanıcılar ihtiyaç duydukları sayfalara hızlıca ulaşabilecek şekilde yönlendirilmiştir.",
                colorsTitle: "Kullandığım Renkler",
                colorsText: "Siyah ve beyaz renklerle istenilen mesajın verilmesine odaklanıldı.",
                uxTitle: "Kullanıcı Deneyimi",
                uxText: "Görsellerin ön planda olduğu sade bir yapıyla ziyaretçilere hızlı ve şık bir deneyim sunar.",
                whyTitle: "Neden Bu Proje?",
                whyText: "Mimarlık ofislerinin dijital vitrin ihtiyacına yanıt verecek modern ve güven veren bir yapı oluşturmak hedeflenmiştir.",
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
                projectTitle: "Architectural Site Design",
                projectText: "This project was developed to showcase architecture firms’ digital identities in a modern, clean, and impactful way.",
                feat1: "HTML5 & CSS3 support",
                feat2: "Clear and responsive design",
                feat3: "Modern, informative content presentation",
                feat4: "User-friendly navigation and clean layout",
                galleryTitle: "Arkline Architecture Interfaces",
                img1: "Homepage – Login Screen",
                img2: "Homepage",
                img3: "Homepage",
                descriptionTitle: "Description",
                descriptionText: "This architectural site design offers a clutter-free, straightforward, and fatigue-free experience. White space is prioritized for readability, and the navigation menu is positioned for quick access to essential pages.",
                colorsTitle: "Colors Used",
                colorsText: "Focused on conveying the desired message with black and white tones.",
                uxTitle: "User Experience",
                uxText: "A simple structure highlighting visuals provides visitors with a fast and elegant experience.",
                whyTitle: "Why This Project?",
                whyText: "Aimed at creating a modern, trustworthy digital showcase for architecture firms.",
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