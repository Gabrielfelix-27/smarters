import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import pietroImg from '../assets/Pietro.png';
import julianoImg from '../assets/Juliano-Pontes.png';
import denisImg from '../assets/Denis-Shirazi.png';
import eduardoImg from '../assets/Eduardo-Vieira.png';
import smartersLogo from '../assets/smarters-txt.png';
import dengageLogo from '../assets/dengage-logo.png';
import dashLogo from '../assets/20dash-logo.png';
import metaLogo from '../assets/meta-logo.png';
import './SpeakersSection.css';

const SpeakersSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10); // threshold to hide arrow if fully scrolled left
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 10);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const speakers = [
    {
      name: "Pietro Bujaldon",
      title: "CEO e Co-Founder, smarters",
      bio: "Foi o primeiro brasileiro a palestrar no Facebook F8, no Vale do Silício, e desde então participa ativamente de iniciativas globais da Meta, como Meta Conversations e WhatsApp Summits na América Latina. Sua atuação é marcada pela aplicação prática de tecnologia para transformar conversas em crescimento real para empresas.",
      image: pietroImg,
      companyLogo: smartersLogo
    },
    {
      name: "Juliano Pontes",
      title: "Diretor Executivo, D.engage",
      bio: "Profissional com mais de 20 anos de experiência em consultoria estratégica, SaaS e transformação digital, com forte atuação nos ecossistemas de Martech e AdTech. Ao longo da carreira, contribuiu para o posicionamento digital de grandes marcas e para a expansão de unicórnios na América Latina, liderando iniciativas que conectam dados, marketing e mídia para gerar personalização em escala.",
      image: julianoImg,
      companyLogo: dengageLogo
    },
    {
      name: "Denis Shirazi",
      title: "CEO e Co-Founder, 20DASH",
      bio: "Traz uma bagagem de duas décadas de experiência em inovação e empreendedorismo. Shirazi une as principais skills para conectar criatividade, dados e automação para gerar eficiência e personalização em larga escala. Durante sua trajetória, passou por gigantes como a HP e SAP, fundou a INTI - plataforma para fomentar o consumo de entretenimento que, posteriormente, foi adquirida pela Time For Fun (T4F). Transformando códigos em experiências humanas como estratégia de comunicação, emplacou diversos projetos reconhecidos internacionalmente.",
      image: denisImg,
      companyLogo: dashLogo
    },
    {
      name: "Eduardo Vieira",
      title: "Strategic Partner Manager, Meta",
      bio: "Executivo com sólida trajetória em grandes empresas de tecnologia, Eduardo acumula quase 4 anos na Meta liderando parcerias estratégicas em Business Messaging no Brasil. Antes, construiu mais de 6 anos de experiência no Google, passando por áreas de desenvolvimento de agências, dados e soluções mobile. Sua visão é moldada por uma perspectiva verdadeiramente global, vivida em mais de 20 países, e por uma profunda expertise no ecossistema digital e de marketing conversacional.",
      image: eduardoImg,
      companyLogo: metaLogo
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = (containerWidth - 80) / 3 + 40; 
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = (containerWidth - 80) / 3 + 40; 
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="speakers-section animate-fade-up delay-3">
      <div className="speakers-container">
        <div className="speakers-header">
          <h2 className="speakers-title">SPEAKERS</h2>
          <p className="speakers-subtitle">E um painel com a meta e líderes do Mercado,</p>
        </div>
        
        <div className="speakers-carousel-wrapper">
          {showLeftArrow && (
            <button className="slider-btn prev-btn" onClick={scrollLeft} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
          )}
          
          <div className="speakers-grid-viewport" ref={scrollRef} onScroll={handleScroll}>
            <div className="speakers-grid">
              {speakers.map((speaker, index) => (
                <div key={index} className="speaker-card">
                  <div className="speaker-image-container">
                    <img src={speaker.image} alt={speaker.name} className="speaker-image" />
                  </div>
                  <div className="speaker-info">
                    <div className="speaker-info-header">
                      <div className="speaker-name-group">
                        <h3 className="speaker-name">{speaker.name}</h3>
                        <p className="speaker-title">{speaker.title}</p>
                      </div>
                      {speaker.companyLogo && (
                        <div className="speaker-logo-wrapper">
                          <img 
                            src={speaker.companyLogo} 
                            alt="Company logo" 
                            className={`speaker-company-logo ${speaker.companyLogo === metaLogo ? 'filter-purple' : ''}`} 
                          />
                        </div>
                      )}
                    </div>
                    <p className="speaker-bio">{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showRightArrow && (
            <button className="slider-btn next-btn" onClick={scrollRight} aria-label="Próximo">
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
