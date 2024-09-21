'use client';
// EstimationComponentRu.tsx
import React, { useState } from 'react';
import styles from './Estimation.module.css';
import emailjs from "@emailjs/browser";

// Определение типов
type Platform = 'WordPress' | 'React' | 'Next.js' | 'WooCommerce' | 'OpenCart' | 'Laravel';
type AppType = 'Корпоративный сайт' | 'Интернет-магазин' | 'Аукцион' | 'Маркетплейс' | 'Сайт-визитка' | 'Прочее';
type AppSize = 'Небольшое' | 'Среднее' | 'Большое';
type Design = 'Уже есть дизайн' | 'Использование шаблонных решений' | 'Разработка уникального дизайна и интерфейса';
type Functionality = 'Админка' | 'Регистрация пользователей' | 'Опция 3' | 'Опция 4' | 'Опция 5';
type Security = 'None' | 'SSL' | 'DDoS protection';

interface Hours {
    platform: Record<Platform, number>;
    appType: Record<AppType, number>;
    appSize: Record<AppSize, number>;
    design: Record<Design, number>;
    functionality: Record<Functionality, number>;
    security: Record<Security, number>;
}

const EstimationComponentRu: React.FC = () => {
    const [rate, setRate] = useState<number>(30);
    const [platform, setPlatform] = useState<Platform>('WordPress');
    const [appType, setAppType] = useState<AppType>('Корпоративный сайт');
    const [appSize, setAppSize] = useState<AppSize>('Небольшое');
    const [design, setDesign] = useState<Design>('Уже есть дизайн');
    const [functionality, setFunctionality] = useState<Functionality[]>([]);
    const [security, setSecurity] = useState<Security[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const hours: Hours = {
        platform: { 'WordPress': 50, 'React': 100, 'Next.js': 120, 'WooCommerce': 70, 'OpenCart': 80, 'Laravel': 110 },
        appType: { 'Корпоративный сайт': 40, 'Интернет-магазин': 80, 'Аукцион': 90, 'Маркетплейс': 120, 'Сайт-визитка': 30, 'Прочее': 60 },
        appSize: { 'Небольшое': 40, 'Среднее': 80, 'Большое': 160 },
        design: { 'Уже есть дизайн': 20, 'Использование шаблонных решений': 40, 'Разработка уникального дизайна и интерфейса': 100 },
        functionality: { 'Админка': 30, 'Регистрация пользователей': 40, 'Опция 3': 50, 'Опция 4': 60, 'Опция 5': 70 },
        security: { 'None': 0, 'SSL': 10, 'DDoS protection': 20 }
    };

    const calculateHours = () => {
        let totalHours = hours.platform[platform] + hours.appType[appType] + hours.appSize[appSize] + hours.design[design];
        totalHours += functionality.reduce((sum, func) => sum + hours.functionality[func], 0);
        totalHours += security.reduce((sum, sec) => sum + hours.security[sec], 0);
        return totalHours;
    };

    const calculateCost = () => {
        return calculateHours() * rate;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

    const templateParams = {
            from_name: name,
            to_name: "WebMachine team",
            message,
            rate,
            platform,
            appType,
            appSize,
            design,
            functionality: functionality.join(', '),
            security: security.join(', '),
            hours: calculateHours(),
            cost: calculateCost(),
            email
        };

        try {
            const response = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );

            if (response.status === 200) {
                setShowModal(true);
                setMessage('Спасибо! Ваш запрос получен. Мы свяжемся с вами в ближайшее время.');
            } else {
                setShowModal(true);
                setMessage('Произошла ошибка при отправке формы.');
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            setShowModal(true);
            setMessage('Произошла ошибка при отправке формы.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.estimationForm}>
            <h2 className='h3ash1'>Оценка стоимости проекта</h2>

            <h3>Ставка ($/час)</h3>
            <p>Предполагаемая ставка на 1 члена команды.</p>
            <input
                type="number"
                value={rate}
                onChange={(e) => setRate(parseInt(e.target.value))}
                placeholder="30"
                className={styles.input}
            />

            <h3>Платформа Веб приложения</h3>
            <div className={styles.options}>
                {['WordPress', 'React', 'Next.js', 'WooCommerce', 'OpenCart', 'Laravel'].map((option) => (
                    <label key={option} className={`${styles.option} ${platform === option ? styles.selected : ''}`}>
                        <input
                            type="radio"
                            name="platform"
                            value={option}
                            checked={platform === option}
                            onChange={() => setPlatform(option as Platform)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            <h3>Тип приложения</h3>
            <div className={styles.options}>
                {['Корпоративный сайт', 'Интернет-магазин', 'Аукцион', 'Маркетплейс', 'Сайт-визитка', 'Прочее'].map((option) => (
                    <label key={option} className={`${styles.option} ${appType === option ? styles.selected : ''}`}>
                        <input
                            type="radio"
                            name="appType"
                            value={option}
                            checked={appType === option}
                            onChange={() => setAppType(option as AppType)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            <h3>Размер приложения</h3>
            <p>Количество уникальных страниц/макетов/интерфейсов.</p>
            <div className={styles.options}>
                {['Небольшое', 'Среднее', 'Большое'].map((option) => (
                    <label key={option} className={`${styles.option} ${appSize === option ? styles.selected : ''}`}>
                        <input
                            type="radio"
                            name="appSize"
                            value={option}
                            checked={appSize === option}
                            onChange={() => setAppSize(option as AppSize)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            <h3>Дизайн</h3>
            <div className={styles.options}>
                {['Уже есть дизайн', 'Использование шаблонных решений', 'Разработка уникального дизайна и интерфейса'].map((option) => (
                    <label key={option} className={`${styles.option} ${design === option ? styles.selected : ''}`}>
                        <input
                            type="radio"
                            name="design"
                            value={option}
                            checked={design === option}
                            onChange={() => setDesign(option as Design)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            <h3>Функционал</h3>
            <div className={styles.options}>
                {['Админка', 'Регистрация пользователей', 'Опция 3', 'Опция 4', 'Опция 5'].map((option) => (
                    <label key={option} className={`${styles.option} ${functionality.includes(option as Functionality) ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="functionality"
                            value={option}
                            checked={functionality.includes(option as Functionality)}
                            onChange={(e) =>
                                setFunctionality((prev) =>
                                    e.target.checked
                                        ? [...prev, option as Functionality]
                                        : prev.filter((item) => item !== option as Functionality)
                                )
                            }
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>

            <h3>Безопасность</h3>
            <div className={styles.options}>
                {['None', 'SSL', 'DDoS protection'].map((option) => (
                    <label key={option} className={`${styles.option} ${security.includes(option as Security) ? styles.selected : ''}`}>
                        <input
                            type="checkbox"
                            name="security"
                            value={option}
                            checked={security.includes(option as Security)}
                            onChange={(e) =>
                                setSecurity((prev) =>
                                    e.target.checked
                                        ? [...prev, option as Security]
                                        : prev.filter((item) => item !== option as Security)
                                )
                            }
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
            <div className={styles.summaryFields}>
                <div className={styles.summaryFieldSum}>
                    <div className={styles.summaryTitle}>Ваш расчет</div>
                    <p>Предварительная оценка часов работы: {calculateHours()} часов</p>
                    <p style={{fontWeight: '700'}}>Предварительная оценка сметы: ${calculateCost()}</p>
                    <div className='space20'></div>
                    <p className='text-xs'>Данная оценка представлена в ознакомительных целях и каждый проект требует полноценной оценки задач и исходных данных.</p>
                        <button onClick={() => setShowModal(true)} className={styles.discussButton}>
                         <span className="discussButton">Получить персональный расчет</span>
                        </button>
                </div>
            </div> 

            {showModal && (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
            <button onClick={() => setShowModal(false)} className={styles.closeButton} style={{ background: 'transparent', margin: '20px 0', position: 'relative', color: '#000', width: '100%', minHeight: '10px !important', textAlign: 'end', padding: '0px', height: '10px', top: '-20px' }}>
                &#x2716;
            </button>
            <h2>Запрос персонального расчета</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ваше имя"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="email"
                    placeholder="Ваш Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />
                <textarea
                    placeholder="Дополнительная информация"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.textarea}
                />
                <button type="submit" className={styles.submitButton}>
                    <span className={styles.buttonText}>Отправить</span>
                </button>
                      </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EstimationComponentRu;
