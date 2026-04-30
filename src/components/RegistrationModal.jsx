import React, { useState } from 'react';
import './RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsapp: '',
    company: '',
    role: '',
    email: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Google Form Action URL
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc2Y_ksbJGTS2OvYqTNU_LPTmp11n57f-jw1gbaw9t2d4empQ/formResponse';
    
    // Create FormData for direct submission
    const formBody = new URLSearchParams();
    
    // Primeiro Nome
    formBody.append('entry.1365000254', formData.firstName);
    // Sobrenome
    formBody.append('entry.1879039280', formData.lastName);
    // Whatsapp
    formBody.append('entry.1584136917', formData.whatsapp);
    // Nome da Empresa
    formBody.append('entry.1401476781', formData.company);
    // Cargo
    formBody.append('entry.884910310', formData.role);
    // Email da empresa
    formBody.append('entry.1271009475', formData.email);
    // Comentário
    formBody.append('entry.62150157', formData.comment);

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });
      
      setIsSuccess(true);
      // Opcional: Fechar automaticamente após sucesso
      // setTimeout(() => onClose(), 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Houve um erro ao enviar seu registro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        {isSuccess ? (
          <div className="success-message">
            <h2>Registro Confirmado!</h2>
            <p>Obrigado por confirmar sua presença. Entraremos em contato em breve com mais informações sobre o evento.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Confirme sua presença no WhatsApp Toolbox</h2>
              <p>Garanta seu lugar. Responder leva menos de um minuto.</p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Primeiro Nome</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input"
                    placeholder="Digite seu primeiro nome"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Sobrenome</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input"
                    placeholder="Digite seu sobrenome"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>WhatsApp</label>
                <div className="whatsapp-input-group">
                  <div className="whatsapp-prefix">
                    🇧🇷 BR +55
                  </div>
                  <input
                    type="text"
                    name="whatsapp"
                    className="whatsapp-input"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Nome da empresa</label>
                  <input
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="Como sua empresa se chama?"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Cargo</label>
                  <input
                    type="text"
                    name="role"
                    className="form-input"
                    placeholder="Qual é o seu cargo?"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email da empresa</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="email@empresa.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Comentário</label>
                <textarea
                  name="comment"
                  className="form-input"
                  placeholder="Deixe uma mensagem (opcional)"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-footer">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
