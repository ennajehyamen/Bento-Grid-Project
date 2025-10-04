/* eslint-disable react/prop-types */
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

export default function Card({ title, content, bgColor, className, image, imagePosition = "top" }) {
  const imageElement = image && (
    <img
      src={image}
      alt={title}
      className="max-h-20 object-contain"
    />
  );

  return (
    <div className={`rounded-xl p-4 shadow-md flex ${bgColor} ${className} ${
      imagePosition === "left" || imagePosition === "right" ? "items-center gap-4" : "flex-col"
    }`}>
            {/* Image en haut */}
      {imagePosition === "top" && imageElement}
      {/* Image à gauche */}
      {imagePosition === "left" && imageElement}

      {/* Contenu texte */}
      <div className="flex-1">
        <CardHeader title={title} />
       {imagePosition === "midle" && imageElement}
        <CardContent>{content}</CardContent>
      </div>


      {/* Image en bas */}
      {imagePosition === "bottom" && imageElement}

      {/* Image à droite */}
      {imagePosition === "right" && imageElement}
    </div>
  );
}
