import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language, currentLangContent } = useLanguage();

  // Google Form URL ve Entry ID - Environment variables'dan alınıyor
  // Bu bilgiler .env dosyasında saklanıyor ve GitHub'a yüklenmiyor
  const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || '';
  const FEEDBACK_FIELD_ID = import.meta.env.VITE_GOOGLE_FORM_ENTRY_ID || '';

  // Modal'ın açılma zamanını kontrol et
  useEffect(() => {
    const checkModalTiming = () => {
      const feedbackModalSeen = localStorage.getItem('feedbackModalSeen');
      const feedbackModalPostponed = localStorage.getItem('feedbackModalPostponed');
      
      // Eğer form gönderildiyse (feedbackModalSeen = 'submitted'), modal'ı açma
      if (feedbackModalSeen === 'submitted') return;

      // Eğer "Belki Daha Sonra" butonuna tıklandıysa veya modal kapatıldıysa
      if (feedbackModalPostponed) {
        const postponedTime = parseInt(feedbackModalPostponed, 10);
        const currentTime = Date.now();
        const timePassed = currentTime - postponedTime;
        const thirtySeconds = 30000; // 30 saniye

        // 30 saniye geçtiyse modal'ı aç
        if (timePassed >= thirtySeconds) {
          setIsOpen(true);
          localStorage.removeItem('feedbackModalPostponed');
        } else {
          // Henüz 30 saniye geçmediyse, kalan süreyi bekle
          const remainingTime = thirtySeconds - timePassed;
          const timer = setTimeout(() => {
            setIsOpen(true);
            localStorage.removeItem('feedbackModalPostponed');
          }, remainingTime);
          return () => clearTimeout(timer);
        }
      } else {
        // İlk kez açılıyorsa, 40 saniye (40000 ms) sonra modal'ı aç
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 40000);
        return () => clearTimeout(timer);
      }
    };

    checkModalTiming();
  }, []);

  // Modal'ı kapat - Her durumda 30 saniye sonra tekrar açılacak
  const handleClose = () => {
    setIsOpen(false);
    // 30 saniye sonra tekrar açılması için timestamp kaydet
    localStorage.setItem('feedbackModalPostponed', Date.now().toString());
    
    // 30 saniye sonra modal'ı tekrar aç
    setTimeout(() => {
      setIsOpen(true);
      localStorage.removeItem('feedbackModalPostponed');
    }, 30000);
  };

  // Form gönderildikten sonra modal'ı kapat - bir daha açılmasın
  const handleCloseAfterSubmit = () => {
    setIsOpen(false);
    // Form gönderildi, bir daha açılmasın
    localStorage.setItem('feedbackModalSeen', 'submitted');
    localStorage.removeItem('feedbackModalPostponed');
  };

  // Form gönderimi
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);

    try {
      // Google Form'a veri gönder - URL encoded format
      const params = new URLSearchParams();
      params.append(FEEDBACK_FIELD_ID, feedback);

      // URL ve Entry ID kontrolü
      if (!GOOGLE_FORM_URL || !FEEDBACK_FIELD_ID) {
        alert('Form yapılandırması eksik. Lütfen .env dosyasını kontrol edin.');
        setIsSubmitting(false);
        return;
      }

      // Google Form'a POST isteği gönder
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // CORS hatası olmaması için
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setIsSubmitted(true);
      setFeedback('');
      
      // 3 saniye sonra modal'ı kapat (form gönderildi, bir daha açılmasın)
      setTimeout(() => {
        handleCloseAfterSubmit();
      }, 3000);
    } catch (error) {
      // Hata olsa bile kullanıcıya başarılı mesajı göster (no-cors nedeniyle)
      setIsSubmitted(true);
      setTimeout(() => {
        handleCloseAfterSubmit();
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const messages = {
    en: {
      title: 'Your Feedback Matters',
      message: 'Feedback is very important to me for developing my career journey. If you would like to leave a note about my CV or projects, you can write it in the field below.',
      placeholder: 'Your feedback...',
      submit: 'Send Feedback',
      cancel: 'Maybe Later',
      thankYou: 'Thank you for your feedback!',
      submitting: 'Sending...',
      received: 'Your feedback has been received.',
      anonymous: 'Your feedback is anonymous and will help me improve.',
      closeModal: 'Close modal',
      feedbackInput: 'Feedback input',
    },
    tr: {
      title: 'Geri Bildiriminiz Önemli',
      message: 'Kariyer yolculuğumu geliştirmek için geri bildirimlerin benim için büyük önem taşıyor. CV veya projelerim hakkında bir not bırakmak istersen, aşağıdaki alana yazabilirsin.',
      placeholder: 'Geri bildiriminiz...',
      submit: 'Gönder',
      cancel: 'Belki Sonra',
      thankYou: 'Geri bildiriminiz için teşekkürler!',
      submitting: 'Gönderiliyor...',
      received: 'Geri bildiriminiz alındı.',
      anonymous: 'Geri bildiriminiz anonimdir ve gelişimime yardımcı olacaktır.',
      closeModal: 'Modalı kapat',
      feedbackInput: 'Geri bildirim girişi',
    },
  };

  const t = messages[language] || messages.en;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white dark:bg-dark-bg1 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 rounded-full p-1 transition-colors"
                aria-label={t.closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {isSubmitted ? (
                // Success Message
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {t.thankYou}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.received}
                  </p>
                </div>
              ) : (
                // Feedback Form
                <>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 pr-8">
                    {t.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {t.message}
                  </p>

                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder={t.placeholder}
                      className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent dark:bg-dark-bg2 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      required
                      aria-label={t.feedbackInput}
                    />

                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="flex-1 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors font-medium"
                      >
                        {t.cancel}
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting || !feedback.trim()}
                        className="flex-1 px-4 py-3 bg-pink text-white rounded-lg hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? t.submitting : t.submit}
                      </button>
                    </div>
                  </form>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                    {t.anonymous}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;

