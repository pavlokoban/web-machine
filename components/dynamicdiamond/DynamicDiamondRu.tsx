import React, { useEffect } from "react";

const PolygonWithDotsRu = () => {
  useEffect(() => {
    const outlines = document.querySelectorAll(".outline-circle") as NodeListOf<HTMLElement>;

    const createPulse = (outline: HTMLElement) => {
      setTimeout(() => {
        outline.classList.add("pulsate");
        setTimeout(() => outline.classList.remove("pulsate"), 1000);
      }, Math.random() * 2000);
    };

    outlines.forEach((outline) => {
      createPulse(outline);
      setInterval(() => createPulse(outline), 3000);
    });
  }, []);

  const points = [
    { cx: 50, cy: 20, label: "Контент", align: "center", textX: 50, textY: 15 }, // Вершина 1
    { cx: 32, cy: 28, label: "Структура, навигация, семантика", align: "left", textX: 27, textY: 28 }, // Вершина 2
    { cx: 20, cy: 45, label: "Стратегический анализ, аудиты", align: "left", textX: 15, textY: 45 }, // Вершина 3
    { cx: 20, cy: 60, label: "Линкбилдинг, PR и репутация", align: "left", textX: 15, textY: 60 }, // Вершина 4
    { cx: 32, cy: 73, label: "Работа с поведенческими факторами", align: "left", textX: 27, textY: 73 }, // Вершина 5
    { cx: 50, cy: 80, label: "Региональное ранжирование", align: "center", textX: 50, textY: 85 }, // Вершина 6
    { cx: 68, cy: 73, label: "Разработка программных рекомендаций", align: "right", textX: 73, textY: 73 }, // Вершина 7
    { cx: 80, cy: 60, label: "Поисковая аналитика, отчетность", align: "right", textX: 85, textY: 60 }, // Вершина 8
    { cx: 80, cy: 45, label: "Технические аспекты", align: "right", textX: 85, textY: 45 }, // Вершина 9
    { cx: 68, cy: 28, label: "Устранение проблем индексации", align: "right", textX: 73, textY: 28 }, // Вершина 10
  ];

  return (
    <svg width="100%" height="100vh" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ background: "#000" }}>
      <defs>
        <pattern id="dotPattern" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
          <circle cx="0.75" cy="0.75" r="0.15" fill="#1af287" />
        </pattern>
      </defs>
      <clipPath id="polygonClip">
        <polygon points="50,20 32,28 20,45 20,60 32,73 50,80 68,73 80,60 80,45 68,28" />
      </clipPath>
      <rect width="100" height="100" fill="url(#dotPattern)" clipPath="url(#polygonClip)" />

      {/* Многоугольник */}
      <polygon points="50,20 32,28 20,45 20,60 32,73 50,80 68,73 80,60 80,45 68,28" fill="none" />

      {/* Черные круги-подложки под вершинами */}
      {points.map((point, index) => (
        <circle key={index} cx={point.cx} cy={point.cy} r="2.5" fill="#000" />
      ))}

      {/* Вершины многоугольника с точками */}
      {points.map((point, index) => (
        <circle key={index} cx={point.cx} cy={point.cy} r="1.2" fill="#1af287" />
      ))}

      {/* Тонкие зеленые контуры вокруг вершин */}
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.cx}
          cy={point.cy}
          r="1.5"
          className="outline-circle"
          stroke="#1af287"
          strokeWidth="0.1"
          fill="none"
        />
      ))}

    {/* Подписи */} 
    {points.map((point, index) => {
    const words = point.label.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
        if (currentLine.length + word.length <= 10) {
        currentLine += `${word} `;
        } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
        }
    });

    lines.push(currentLine.trim());

    // Добавляем отступы в зависимости от направления выравнивания
    const offset = 12;
    let adjustedX = point.textX;
    
    if (point.align === "left") {
        adjustedX -= offset; // Отступ влево
    } else if (point.align === "right") {
        adjustedX += offset; // Отступ вправо
    }

    return (
        <text
        key={index}
        x={adjustedX}
        y={point.textY}
        textAnchor={point.align === "center" ? "middle" : point.align === "right" ? "start" : "end"}
        fill="#1af287"
        fontSize="3"
        className="vertex-label"
        >
        {lines.map((line, i) => (
            <tspan key={i} x={adjustedX} dy={i === 0 ? 0 : "1em"}>
            {line}
            </tspan>
        ))}
        </text>
    );
    })}

      {/* Стрелки */}
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="5" refY="3.5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 3.5, 0 7" fill="#1af287" />
            </marker>
        </defs>

        <line x1="49" y1="22" x2="23" y2="43" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="31" y1="30" x2="22" y2="42" stroke="#1af287" stroke-width="0.2" marker-end="url(#arrowhead)"></line>
        <line x1="20" y1="47" x2="20" y2="57" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="50" y1="22" x2="50" y2="77" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="66" y1="72" x2="22" y2="47" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="57" x2="52" y2="23" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="58" x2="35" y2="30" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="59" x2="23" y2="46" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="60" x2="23" y2="60" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="61" x2="35" y2="72" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="62" x2="53" y2="78" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="78" y1="63" x2="70" y2="71" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="69" y1="30" x2="78" y2="42" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="66" y1="29" x2="23" y2="44.5" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />
        <line x1="51" y1="78" x2="78" y2="47" stroke="#1af287" strokeWidth="0.2" markerEnd="url(#arrowhead)" />


      <style>{`
        .outline-circle {
          transition: stroke-width 0.5s ease;
        }
        .pulsate {
          stroke-width: 1.1;
        }
        .vertex-label {
          text-anchor: middle;
         font-weight: 400;
        }
      `}</style>
    </svg>
  );
};

export default PolygonWithDotsRu;
